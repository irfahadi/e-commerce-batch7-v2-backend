import 'dotenv/config'
import cors from "cors";
import express from "express";
import models, { sequelize } from './models';
import routes from './routes';
// import routes from './routes';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// midleware
app.use(async (req, res, next) => {
  req.context = {models};  
  next();
});

// Routes 
// app.use('/api/cart',routes.cart);
app.use('/api/status', routes.status),
app.use('/api/productImages', routes.productImages),
app.use('/api/productVariant', routes.productVariant),
app.use('/api/product', routes.product),
app.use('/api/category', routes.category),
app.use('/api/categoryImages', routes.categoryImg),
app.use('/api/brand', routes.brand),
app.use('/api/conditions', routes.conditions),
app.use('/api/province',routes.province),
app.use('/api/city',routes.city),
app.use('/api/kecamatan',routes.kecamatan),
app.use('/api/kodepos',routes.kodepos),
app.use('/api/address',routes.address),
app.use('/api/users',routes.users),
app.use('/api/account',routes.account)



// Start
const dropDatabaseSync = false;

sequelize.sync({ force: dropDatabaseSync }).then(async () => {
  if (dropDatabaseSync) {
    console.log("Do Nothing")
  }
  app.listen(process.env.PORT, () =>
    console.log(`Server is listening on port ${process.env.PORT}!`),
  );
});