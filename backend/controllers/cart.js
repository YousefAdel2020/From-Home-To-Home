const User = require("../models/users");
const Dish = require("../models/dishs");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const getCart = async (req, res) => {
  const user = await User.findById(req.user.userId);
  const cart = user.cart;
  res.status(StatusCodes.OK).json({ cart });
};

const addToCart = async (req, res) => {
  // const { dishId } = req.params; req.body=>{dish_id,quantity}
  const { dishId } = req.body;
  const { userId } = req.user;
  const dish = await Dish.findById(dishId);
  if (!dish) {
    throw new NotFoundError(`there is no Dish with this Id : ${dishId}`);
  }
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError(`there is no user with this Id : ${userId}`);
  }
  console.log(user.firstName);
  let dishInfo = { dish, quantity: 1 };
  user.cart.push(dishInfo);
  await user.save();

  res.status(StatusCodes.OK).json("the item is added successfully");
};

//quatity
// addquantity req.body=>{dish_id,quantity}
//[{id1}.quantity,{id2},{id3}]

const updateQuantity = async (req, res) => {
  const {dishId}=req.params;
  const {  quantity } = req.body;
  const { userId } = req.user;
  const dish = await Dish.findById(dishId);
  if (!dish) {
    throw new NotFoundError(`there is no Dish with this Id : ${dishId}`);
  }
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError(`there is no user with this Id : ${userId}`);
  }

  const cartItemIndex = user.cart.findIndex((item) => item.dish._id == dishId);
  if (cartItemIndex === -1) {
    throw new NotFoundError(`There is no dish with ID ${dishId} in the cart`);
  }

  user.cart[cartItemIndex].quantity = quantity;
  await user.markModified("cart"); // Mark 'cart' field as modified
  await user.save();

  res.status(StatusCodes.OK).json("the quantity is updated successfully");
};

const removeFromCart = async (req, res) => {
  const { dishId } = req.params;
  const { userId } = req.user;
  const dish = await Dish.findById(dishId);
  if (!dish) {
    throw new NotFoundError(`there is no Dish with this Id : ${dishId}`);
  }
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError(`there is no user with this Id : ${userId}`);
  }
  user.cart = user.cart.filter((item) => item.dish._id!= dishId);

  await user.save();

  res.status(StatusCodes.OK).json("the item is removed successfully");
};

const clearCart = async (req, res) => {
  const { userId } = req.user;
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError(`there is no user with this Id : ${userId}`);
  }
  user.cart = [];

  await user.save();

  res.status(StatusCodes.OK).json("the cart is cleared successfully");
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
};
