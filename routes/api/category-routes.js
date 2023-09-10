const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [
          {
              model: Product,
              attributes: ["product_name", "price", "stock", "category_id"],
          },
      ],
  })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
          {
              model: Product,
              attributes: ["product_name", "price", "stock", "category_id"],
          },
      ],
  })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});


  // create a new category
  router.post('/', async (req, res) => {
    try {
      const categoryData = await Category.create(req.body);
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', (req, res) => {
  // update a category by its `id` value
Category.update(req.body,{
  where: {
    id:req.params.id
  }
})
// ,then does the same as async await.
.then((category) => res.status(200).json(category))
.catch((err) => res.status(400).json(err))
});

  // delete a category by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
      const categoryData = await Category.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


module.exports = router;
