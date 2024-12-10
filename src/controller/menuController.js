import prisma from "../models/prismaClient.js";

export const createMenu = async (req, res) => {

    try {
        const { name, description } = req.body;

        if (!name || !description) {
            return res.status(400).json({ error: "Name and description are required" });
        }

        const newMenu = await prisma.menu.create({
            data: {
                name,
                description,
            },
        });

        return res.status(201).json({ message: "Data saved successfully", data: newMenu });

    } catch (error) {
        console.error("Error in createMenu:", error.message);
        return res.status(500).json({ error: "Failed to create menu" });
    }
};


export const viewMenu = async (req, res) => {

    try {

        const menus = await prisma.menu.findMany({
            include: {
                items: true, 
            },
        });

        return res.status(202).json({ message: "Data fetched Successfully789654", data: menus });
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch menus" });
    }
};
