-- ===========================
-- INIT DATABASE FLORILEGE
-- ===========================

-- 1. Product categories & types
SOURCE product/category.sql;
SOURCE product/product_type.sql;
SOURCE product/season.sql;
SOURCE product/size.sql;

-- 2. Articles
SOURCE product/article.sql;

-- 3. Article Sizes (stock & price par taille)
SOURCE product/article_size.sql;

-- 4. Users
SOURCE users/status.sql;
SOURCE users/adress.sql;
SOURCE users/user.sql;

-- 5. Orders & Invoices
SOURCE order/order.sql;
SOURCE order/order_detail.sql;
SOURCE order/invoice.sql;
