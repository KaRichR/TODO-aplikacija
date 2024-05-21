import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    try {
        res.status(200).json({ message: 'worked' });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
})

export default router