const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts)  //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //establecemos la ruta
router.route('/producto/:id').get(getProductById) //Ruta para comprobar el id //Con los dos puntos se le dice que ese id tambien es parte del parametro 
router.route('/producto/:id').put(updateProduct);//Creación de la ruta de actualización 
router.route('/producto/:id').delete(deleteProduct); //Creación de la ruta de eliminación por Id

module.exports=router;