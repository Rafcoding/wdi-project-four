const router = require('express').Router();
const products = require('../controllers/products');
const purchases = require('../controllers/purchases');
const reviews = require('../controllers/reviews');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const adminRoute = require('../lib/adminRoute');

router.route('/')
  .get(products.index)
  .post(products.create);

router.route('/product/:productId')
  .get(products.show)
  .put(products.update)
  // .put(adminRoute, products.update)
  // .delete(adminRoute, products.delete);
  .delete(products.delete);

// router.post('/product/:productId/reviews', secureRoute, reviews.create);
// router.post('/product/:productId/reviews', reviews.create);
// router.delete('/product/:productId/reviews/:reviewId', reviews.delete);
// router.delete('/product/:productId/reviews/:reviewId', secureRoute, reviews.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

// router.route('/users/:userId')
//   .put(secureRoute, users.edit)
//   .get(adminRoute, users.show);

// router.post('/checkout', secureRoute, purchases.create);
// router.get('/purchases', secureRoute, purchases.userIndex);

module.exports = router;
