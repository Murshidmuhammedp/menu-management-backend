import prisma from "../models/prismaClient.js";

export const newMenuItem = async (req, res) => {

    try {

        const menuId = req.params.id;
        const { name, description, price } = req.body;

        const newItem = await prisma.menuItem.create({
            data: {
                name,
                description,
                price,
                menuId,
            },
        });
        return res.status(201).json({ message: "Item saved successfully", data: newItem });

    } catch (error) {

        console.error(error);
        return res.status(500).json({ error: "Failed to create menu item" });
    }
}

export const viewItems = async (req, res) => {
    try {
        const menuId = req.params.id;

        const items = await prisma.menuItem.findMany({
            where: {
                menuId,
            },
        });
        return res.status(200).json({ message: "Data fetched successfully", data: items });

    } catch (error) {

        console.error(error);
        return res.status(500).json({ error: "Failed to fetch menu items" });
    }
}
