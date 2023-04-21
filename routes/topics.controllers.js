import Post from '../models/post.js';
import { auth } from "../lib/firebase.js";

export const getTopics = async (req, res) => {
    try {
        const posts = await Post.find({userId:auth.currentUser.uid});
        return res.json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createTopics = async (req, res) => {
    try {
        const { topic, rango, language } = req.body;
        const newPost = new Post({ topic, rango, language, userId: auth.currentUser.uid });
        await newPost.save();
        return res.json(newPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getTopic = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);
        if (!post) return res.sendStatus(404);
        return res.json(post);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateTopics = async(req, res) =>{
    try{
        const { id } = req.params;
        const updatePost= await Post.findByIdAndUpdate(
            id,
            {$set:req.body},
            {
                new: true,
            }
            );
            return res.json(updatePost);
    }
    catch(error){
        return res.status(500).json({ message: error.message });
    }
};



export const deleteTopics = async(req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndDelete(id);
        if (!post) return res.sendStatus(404);
        res.json(post);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

};




