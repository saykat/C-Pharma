const express = require('express');
const router = express.Router();
var userController = require('../controllers/user.controller');
var complaintController = require('../controllers/complaint.controller');
var adviceController = require('../controllers/advice.controller');
var investigationController = require('../controllers/investigation.controller');
var diagnosisController = require('../controllers/diagnosis.controller');
var medicineController = require('../controllers/medicine.controller');
var procedureController = require('../controllers/procedure.controller');
var prescriptionController = require('../controllers/prescription.controller');
var patientController = require('../controllers/patient.controller');
var medicineGroupController = require('../controllers/medicineGroupController');
var companyController = require('../controllers/company.controller');
var addProductController = require('../controllers/addProduct.controller');
var saleController = require('../controllers/sale.controller');
var purchaseController = require('../controllers/purchase.controller');
var dashboardController = require('../controllers/dashboard.controller');


const passport = require('passport');


router.post('/user/register', userController.register);
router.post('/user/authenticate', userController.authenticate);
router.get('/user/profile', passport.authenticate('jwt', {session:false}), userController.getProfile);

router.post('/complaint/save', passport.authenticate('jwt', {session:false}), complaintController.save);
router.get('/complaint/view', passport.authenticate('jwt', {session:false}), complaintController.view);

router.post('/advice/save', adviceController.save);
router.get('/advice/view', adviceController.view);

router.post('/diagnosis/save', passport.authenticate('jwt', {session:false}), diagnosisController.save);
router.get('/diagnosis/view', passport.authenticate('jwt', {session:false}), diagnosisController.view);

router.post('/investigation/save', passport.authenticate('jwt', {session:false}), investigationController.save);
router.get('/investigation/view', passport.authenticate('jwt', {session:false}), investigationController.view);

router.post('/procedure/save', passport.authenticate('jwt', {session:false}), procedureController.save);
router.get('/procedure/view', passport.authenticate('jwt', {session:false}), procedureController.view );

router.post('/medicine/save', medicineController.save);
router.get('/medicine/view', medicineController.view);
router.post('/medicine/view', medicineController.viewGrid);

router.post('/prescription/save', passport.authenticate('jwt', {session:false}), prescriptionController.save);
router.get('/prescription/view', passport.authenticate('jwt', {session:false}), prescriptionController.view);

router.post('/patient/save', passport.authenticate('jwt', {session:false}), patientController.save);
router.get('/patient/view', passport.authenticate('jwt', {session:false}), patientController.view);
router.get('/patient/search', passport.authenticate('jwt', {session:false}), patientController.search);

router.post('/medicine-group/save', medicineGroupController.save);
router.get('/medicine-group/view', medicineGroupController.view);
router.post('/medicine-group/view', medicineGroupController.viewGrid);


// Api Route For Pharmacy
router.post('/company/save', companyController.save);
router.get('/company/view', companyController.view);
router.post('/company/view', companyController.viewGrid);

router.post('/addproduct/save', addProductController.save);
router.get('/addproduct/view', addProductController.view);

router.post('/sale/save', saleController.save);
router.post('/sale/modify', saleController.modify);
router.get('/sale/view', saleController.view);
router.post('/sale/view', saleController.viewGrid);

router.post('/purchase/save', purchaseController.save);
router.post('/purchase/modify', purchaseController.modify);
router.get('/purchase/view', purchaseController.view);
router.post('/purchase/view', purchaseController.viewGrid);


router.post('/dashboard/area-chart-data', dashboardController.getAreaChartData);

router.get('/dashboard/sales/totalValue', dashboardController.getTotalSalesValue);
router.get('/dashboard/sales/totalItem', dashboardController.getTotalSalesItems);
router.get('/dashboard/purchase/totalValue', dashboardController.getTotalPurchaseValue);
router.get('/dashboard/purchase/totalItem', dashboardController.getTotalPurchaseItem);



module.exports = router;
