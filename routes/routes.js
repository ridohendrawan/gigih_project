const express = require('express');
const router = express.Router();
module.exports = router;
const Video = require('../models/videos');

//Get All Video Endpoint
router.get('/video', async (req, res) => {
    try {
        const videos = await Video.find({}, { url_image: 1 });
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).send(error);
    }

})

//Get Product By Video ID Endpoint
router.get('/video/:id/products', async (req, res) => {
    try {
        const product = await Video.find({ _id: req.params.id }, { url_video:1,products: 1 });
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).send(error);
    }
})

//Get Comment By Video ID Endpoint
router.get('/video/:id/comments', async (req, res) => {
    try {
        const comment = await Video.find({ _id: req.params.id }, { comments: 1 });
        res.status(200).send(comment);
    }
    catch (error)
    {
        res.status(500).send(error);
    }
})

//Submit Comment Endpoint
router.post('/comment', async (req, res) => {
    const comment = {
        username: req.body.username,
        comment: req.body.comment,
        timestamp: Date.now()
    }
    try {
        await Video.findByIdAndUpdate(req.body.video_id, {
            $push: { comments: comment }
        });
        res.status(200).send('Sucess');
    }
    catch (error) {
        res.status(500).send('Failed');
    }

})
