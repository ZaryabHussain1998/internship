
const express = require('express');
const reqFilter = require('../middleware.js');
const router = express.Router();
const teaController = require('../controllers/tea');
const app = express();
app.use(express.json());



router.get('/', teaController.getApi);
router.post('/', teaController.postApi);
router.put('/:user_id', teaController.putApi);
router.delete('/:user_id', teaController.deleteApi);


router.get('/',reqFilter, teaController.homeIn);
router.get('/users',reqFilter, teaController.userIn);
router.get('/about',reqFilter, teaController.aboutIn);
router.get('/contact',reqFilter, teaController.contactIn);


router.get('/tea',reqFilter, teaController.getAllTea);
router.post('/tea',reqFilter, teaController.newTea);
router.delete('/tea',reqFilter, teaController.deleteAllTea);

router.get('/tea/:name',reqFilter, teaController.getOneTea);
router.post('/tea/:name',reqFilter, teaController.newComment);
router.delete('/tea/:name',reqFilter, teaController.deleteOneTea);




module.exports = router;