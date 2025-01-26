import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "10d", // Token expiry
    });

    res.cookie("jwt", token, {
        maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days in milliseconds
        httpOnly: true, // Prevent XSS
        sameSite: "strict", // Prevent CSRF
        secure: process.env.NODE_ENV !== "development", // HTTPS in dev
    });
};
