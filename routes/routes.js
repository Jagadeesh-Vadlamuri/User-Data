var express = require('express');
var router = express.Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/userdetails');

router.route('/getUsers').get(getUsers);
router.route('/getUser/:id').get(getUser);
router.route('/createUser').post(createUser);
router.route('/updateUser/:id').put(updateUser);
router.route('/deleteUser/:id').delete(deleteUser);

module.exports = router;
