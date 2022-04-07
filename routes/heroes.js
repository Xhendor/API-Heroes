const express=require('express');
const router= express.Router();
const heroes=require('../services/heroes');

router.get('/',async function(req,res,next){

    try{
        res.json(await heroes.getMultiple(req.query.page));
    }catch(err){
        console.error(`Error al obtener los lenguajes`,err.message);
        next(err);
    }
});
router.get('/:id',async function(req,res,next){

    try{
        res.json(await heroes.getByID(req.params.id));
    }catch(err){
        console.error(`Error al obtener el Heroe`,err.message);
        next(err);
    }
});
router.post('/',async function(req,res,next){
    try{
        console.error(req.body);
        res.json(await heroes.create(req.body));
    }catch(err){
        console.error(`Error mientras se creaba el registro`,
        err.message);
        next(err);
    }
});
router.put('/:id',async function(req,res,next){
    try {
        res.json(await heroes.update(
            req.params.id,req.body))
    } catch (error) {
        console.error(`Error mientras se creaba el registro`,
        err.message);
        next(err);
    }
});
router.delete('/:id',async function(req,res,next){
    try {
        res.json(await heroes.remove(
            req.params.id));
    } catch (error) {
        console.error(`Error while deleting programming language`, err.message);
        next(err);    
    }
});
module.exports=router;