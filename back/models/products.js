const db = require('../database/db');

module.exports = class Product{

    constructor(p_id,p_name, p_descrip, p_qty, p_price, p_img, p_color, p_brand_id){
        this.p_id = p_id;
        this.p_name = p_name;
        this.p_descrip = p_descrip;
        this.p_qty = p_qty;
        this.p_price = p_price;
        this.p_img = p_img;
        this.p_color = p_color;
        this.p_brand_id = p_brand_id;
    }

    static findAll(){
        return db.execute("SELECT products.p_id, products.p_name, products.p_descrip, products.p_qty, products.p_price, products.p_img, products.p_color, products.p_brand_id, brand.brand_name FROM products INNER JOIN brand ON products.p_brand_id = brand.brand_id");
    }

    save(){
        if(this.p_id){
            return db.execute(
                'update products set p_name=?, p_descrip=?, p_qty=?,  p_price=?, p_img=? ,p_color=? , p_brand_id=? where p_id = ?',
                [this.p_name, this.p_descrip , this.p_qty, this.p_price , this.p_img , this.p_color , this.p_brand_id , this.p_id]
            );
        }else{
            return db.execute(
                'insert into products(p_name, p_descrip , p_qty, p_price , p_img, p_color, p_brand_id ) values(?,?,?,?,?,?,?)',
                [this.p_name, this.p_descrip , this.p_qty, this.p_price , this.p_img , this.p_color , this.p_brand_id]
            );
        }
    }
    //'select * from products where p_id = ?',
    static findById(p_id){
        return db.execute(
            'select products.p_id, products.p_name, products.p_descrip, products.p_qty, products.p_price, products.p_img, products.p_color, products.p_brand_id, brand.brand_name from products INNER join brand on products.p_brand_id = brand.brand_id where p_id = ?',
            [p_id]
        );
    }

    static findByIdBrand(p_brand_id){
        return db.execute(
            'select * from products where p_brand_id = ?',
            [p_brand_id]
        )
    }

    static delById(p_id){
        return db.execute(
            'delete from products where p_id = ?',
            [p_id]
        );
    }

    static getBrands() {
        return db.execute(
            'SELECT * FROM `brand`'
        );
    }
}