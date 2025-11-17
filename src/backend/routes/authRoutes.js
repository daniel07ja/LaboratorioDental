import express from "express";
import { authControllers } from "../controllers/authControllers.js";
import passport from "passport";
import { authenticate } from "../middlewares/authMiddlewares.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    BearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 */

/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    summary: Registrar nuevo usuario
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: margarita@gmail.com
 *              name:
 *                type: string
 *                example: Margarita
 *              password:
 *                type: string
 *                example: patito123
 *    responses:
 *      201:
 *        description: Usuario registrado exitosamente
 *      400:
 *        description: Datos enviados incorrectos
 *      500:
 *        description: Error interno del servidor
 */
router.post("/register", authControllers.register);

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: Iniciar sesion del usuario
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: luzclarita@gmail.com
 *              password:
 *                type: string
 *                example: 123
 *    responses:
 *      200:
 *        description: Inicio de sesion exitoso
 *      401:
 *        description: Credenciales invalidas
 *      500:
 *        description: Error interno del servidor
 */
router.post("/login", authControllers.login);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login-error",
  }),
  authControllers.googleCallBack
);


/**
 * @swagger
 * /api/auth/me:
 *  get:
 *    summary: Obtener datos del usuario autenticado
 *    tags: [Auth]
 *    security:
 *      - BearerAuth: []
 *    responses:
 *      200:
 *        description: Datos del usuario obtenidos exitosamente
 *      401:
 *        description: Token no proporcionado o inválido
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Error interno del servidor
 */
router.get('/me', authenticate, async (req, res) => {
  try {
    console.log('Usuario desde token:', req.user); // Para debug
    
    // Buscar usuario en la base de datos usando Prisma
    const user = await prisma.user.findUnique({
      where: { 
        id: req.user.id 
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        // NO seleccionar password
      }
    });
    
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: 'Usuario no encontrado' 
      });
    }

    res.json({ 
      success: true,
      user
    });
  } catch (error) {
    console.error('Error en /me:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error del servidor',
      error: error.message
    });
  }
});

export default router;
