var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

var passport = require('passport');
var flash = require('connect-flash');

require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
 extended: true
}));

app.set('view engine', 'ejs');

app.use(session({
 secret: 'justasecret',
 resave:true,
 saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



















require('dotenv').config();


  const my_link = process.env.DOMAIN_BFFFFFFFFFF_HHHHHHHHH_DOMAIN_GOD_DOMAIN_AISSA 
  
  const mysql = require('mysql2')

//users
var dbconfig = require('./config/database');
var conn = mysql.createConnection(dbconfig.connection);


conn.query('USE ' + dbconfig.database);










// Imports


const multer = require('multer')
    const path = require('path')
    const storage = multer.diskStorage({
        destination : (req, file, cb) => {
            cb(null, "public/myimages/prr")
        },
        filename : (req, file, cb) => {
            
            return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    })
    const storage1 = multer.diskStorage({
        destination : (req, file, cb) => {
            cb(null, "public/myimages/caty")
        },
        filename : (req, file, cb) => {
            
            return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    })
    const storage2 = multer.diskStorage({
        destination : (req, file, cb) => {
            cb(null, "public/img")
        },
        filename : (req, file, cb) => {
            
            return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    })
const upload = multer({storage:storage})
const upload1 = multer({storage:storage1})
const upload2 = multer({storage:storage2})


//const bodyParser = require('body_parser')








// Static Files
app.use(express.static('public'));
// Specific folder example
 app.use('/css', express.static(__dirname + 'public/css'))
 app.use('/js', express.static(__dirname + 'public/js'))
 app.use('/img', express.static(__dirname + 'public/images'))

 app.use(express.static(__dirname));
 console.log(__dirname + "");
 app.set('views',__dirname + '/views');


// Set View's
app.set('views', './views');

    
// Navigation



const allowedIps = [''] //process.env.ARR8MEEEEE_JJJJJJJJSSSSSSSSRRRRRRRRTTTT;
const ip = require('ip')







//const { sendConfirmationEmail } = require('nodemailer')
    app.get('/', (req, res) => {
        conn.query('SELECT * FROM catygories_chosen_', (err, result) => {
            conn.query("SELECT * FROM smd", (err, smd) => {
                conn.query('SELECT * FROM product_data_prr', (err1, result1)=> {
                    res.render('index', {
                        catyy_g : result,
                        smd_:smd,
                        prrs : result1,
                        ip : req.connection.remoteAddress
                    })
                });
            });
        });


    });
    // category
    app.get('/category/:caty', (req, res) => {
  
        // Retrieve original product from the database
        const originalTags = req.params.caty.split('+');
        
        // Retrieve all products from the database
        conn.query('SELECT * FROM product_data_prr', (error, results) => {
            if (error) {
                res.status(500).send('Error retrieving products');
            } else {
                // Find similar products by comparing the tags
                results.sort(() => Math.random() - 0.5);
                const similarProducts = results.filter(product => {
                    const productTags = product.name_of_pr.split(',');
                    const intersection = originalTags.filter(tag => productTags.includes(tag));
                    return intersection.length / originalTags.length >= 0.5;
                });
    
                conn.query("SELECT * FROM smd", (err, smd) => {
                    conn.query('SELECT * FROM catygories_chosen_', (err, ghgh) => {
                        conn.query('SELECT * FROM product_data_prr', (err, prrs) => {
                            res.render('category', {
                                caty : req.params.caty,
                                smd_:smd,
                                prrs:prrs,
                                catyy_g : ghgh,
                                similarProducts : similarProducts,
                                random:false,
                                no : "1342164273245762473273273273721267147496413aissa"
                            })
                        })
                    })
                })
            }
        });
    })
    // random
    app.get('/seeMore', (req, res) => {
  
        // Retrieve original product from the database
        
        // Retrieve all products from the database
        conn.query('SELECT * FROM product_data_prr', (error, results) => {
            if (error) {
                res.status(500).send('Error retrieving products');
            } else {
                // Find similar products by comparing the tags
                results.sort(() => Math.random() - 0.5);
                const similarProducts = []
    
                conn.query("SELECT * FROM smd", (err, smd) => {
                    conn.query('SELECT * FROM catygories_chosen_', (err, ghgh) => {
                        conn.query('SELECT * FROM product_data_prr', (err, prrs) => {
                            res.render('category', {
                                caty : req.params.caty,
                                smd_:smd,
                                prrs:prrs,
                                catyy_g : ghgh,
                                similarProducts : similarProducts,
                                random:true,
                                no : "1342164273245762473273273273721267147496413aissa"
                            })
                        })
                    })
                })
            }
        });
    })
    // product
    app.get('/product/:aissa', (req, res) => {
        var 
        productId = req.params.aissa
        
        ;
        conn.query("SELECT * FROM product_data_prr", (err, result) => {
            for (let j = 0; j < result.length; j++) {
                if ( result[j].id == productId )
                {
                    conn.query("UPDATE product_data_prr SET view_s = "
                    +parseInt(result[j].view_s+1) +"  WHERE product_data_prr.id = "
                    +productId)
                }
            }
        })
        
  
        ////_____________ lan sinn product files__________
        ////_____________ there's two product files__________

        // Retrieve original product from the database
        conn.query(`SELECT * FROM product_data_prr WHERE id = ${productId}`, (error, results) => {
        if (error) {
            res.status(500).send('Error retrieving product');
        } else {
            if (results[0]){

                const originalProduct = results[0];
                const originalTags = originalProduct.name_of_pr.split(',');
        
                // Retrieve all products from the database
                conn.query('SELECT * FROM product_data_prr', (error, results) => {
                if (error) {
                    res.status(500).send('Error retrieving products');
                } else {
                    // Find similar products by comparing the tags
                    const similarProducts = results.filter(product => {
                    const productTags = product.name_of_pr.split(',');
                    const intersection = originalTags.filter(tag => productTags.includes(tag));
                    return intersection.length / originalTags.length >= 0.5;
                    });
        
                    conn.query("SELECT * FROM smd", (err, smdh) => {
                        conn.query("SELECT * FROM product_data_prr", (err, result) => {
                            res.render('product', {
                                smd_:smdh,
                                prrs : result,
                                id : productId,
                                similarProducts : similarProducts
                            })
                        })
                    })
                }
                });
            }else{
                conn.query("SELECT * FROM product_data_prr", (err, ress) => {
                    conn.query("SELECT * FROM smd", (err, smdh) => {
                        conn.query("SELECT * FROM catygories_chosen_", (err, result) => {
                            res.render('product', {
                                smd_:smdh,
                                prrs : ress,
                                id : productId,
                                similarProducts : [{
                                    image:'aissa'
                                }],
                                cccct : result
                            })
                        })
                    })
                })
            }
        }
        
            
        });

    });
    // product_publisher             
    //           ____login_________
    app.get('/'+ my_link +'/publish', isLoggedIn, (req, res) => {
        conn.query("SELECT * FROM catygories_chosen_", (err, array) => {
            res.render('product_publisher', { tags:array, myylink : my_link })
        })
    })
                
    //           ____login_________
    app.get('/'+ my_link +'/published', isLoggedIn, (req, res) => {

        conn.query("SELECT * FROM product_data_prr", (err, result) => {
            conn.query("SELECT * FROM sold_prr", (err, sales) => {
                res.render('products_published', { fff:result , sales:sales , my_link:my_link, myylink:my_link })
            })
        })
    })
    //           ____login_________
    app.get('/'+ my_link +'/categories', isLoggedIn, (req, res) => {

        conn.query("SELECT * FROM catygories_chosen_", (err, result) => {
            conn.query("SELECT * FROM product_data_prr", (err, frr) => {
                conn.query("SELECT * FROM sold_prr", (err, sss) => {
                    res.render('caty_published', {
                        caty:result,
                        prrs:frr,
                        sales: sss,
                        my_link:my_link,
                        myylink:my_link
                    })
                })
            })
        })
    })
    //           ____login_________
    app.get('/'+ my_link +'/discounts', isLoggedIn, (req, res) => {
        conn.query("SELECT * FROM product_data_prr", (err, sss) => {
            res.render('discounts', { sales: sss , prrs: sss , my_link:my_link, myylink:my_link })
        })
    })



    //           ____login_________
    app.get('/'+ my_link +'/smd', isLoggedIn, (req, res) => {
        conn.query("SELECT * FROM product_data_prr", (err, sss) => {
            conn.query("SELECT * FROM smd", (err, smd) => {
                res.render('smd', {
                    smd_s:smd,
                    sales:sss,
                    prrs:sss,
                    my_link:my_link,
                    myylink:my_link
                })
            })
        })
    })
        //update smd
        app.post('/'+ my_link +'/smd/update', isLoggedIn, (req, res) => {
            
            

            conn.query("UPDATE smd SET link = '"+ req.body.smd1 +"' WHERE smd.id = 1", function (err1, result) {
                if (err1) console.log(err1);
            });
            conn.query("UPDATE smd SET link = '"+ req.body.smd2 +"' WHERE smd.id = 2", function (err1, result) {
                if (err1) console.log(err1);
            });
            conn.query("UPDATE smd SET link = '"+ req.body.smd3 +"' WHERE smd.id = 3", function (err1, result) {
                if (err1) console.log(err1);
            });
            conn.query("UPDATE smd SET link = '"+ req.body.smd4 +"' WHERE smd.id = 4", function (err1, result) {
                if (err1) console.log(err1);
            });
            conn.query("UPDATE smd SET link = '"+ req.body.smd8 +"' WHERE smd.id = 12", function (err1, result) {
                if (err1) console.log(err1);
            });

            res.send(`
            <h1>Success</h1>
            <a href="/${my_link}/smd">back</a>
            `)
        })
        //update smd
        app.post('/'+ my_link +'/smd/update_img1', isLoggedIn, upload2.single('add_img'), (req, res) => {
            conn.connect((err) => {
                if (err) console.log(err);
                var sql = "UPDATE smd SET link = '"+req.file.filename+"' WHERE smd.id = 7"
                conn.query(sql, function (err, result) {
                if (err) console.log(err);
                });
            });
            res.send(
                `
                <h1>
                Success !
                <h1>
                <a href="/${my_link}/smd">back
                
                `
            )
        })
        //update smd
        app.post('/'+ my_link +'/smd/update_img2', isLoggedIn, upload2.single('add_img'), (req, res) => {
            conn.connect((err) => {
                if (err) console.log(err);
                var sql = "UPDATE smd SET link = '"+req.file.filename+"' WHERE smd.id = 10"
                conn.query(sql, function (err, result) {
                if (err) console.log(err);
                });
            });
            res.send(
                `
                <h1>
                Success !
                <h1>
                <a href="/${my_link}/smd">back
                
                `
            )
        })
        //update smd
        app.post('/'+ my_link +'/smd/update_img3', isLoggedIn, upload2.single('add_img'), (req, res) => {
            conn.connect((err) => {
                if (err) console.log(err);
                var sql = "UPDATE smd SET link = '"+req.file.filename+"' WHERE smd.id = 11"
                conn.query(sql, function (err, result) {
                if (err) console.log(err);
                });
            });
            res.send(
                `
                <h1>
                Success !
                <h1>
                <a href="/${my_link}/smd">back
                
                `
            )
        })


        











    //           ____login_________
    app.get('/'+ my_link +'/statistics', isLoggedIn, (req, res) => {
        conn.query("SELECT * FROM sold_prr", (err, sss) => {
            res.render('statistics', {
                sales:sss,
                prrs:sss,
                chhr : 0,
                my_link:my_link,
                myylink:my_link
            })
        })
    })
    app.get('/'+ my_link +'/statistics/:chhr', isLoggedIn, (req, res) => {
        conn.query("SELECT * FROM sold_prr", (err, sss) => {
            res.render('statistics', {
                sales:sss,
                prrs:sss,
                chhr : parseInt(req.params.chhr),
                my_link:my_link,
                myylink:my_link
            })
        })
    })
    /// pbblsh             
    //           ____login_________
    app.post('/'+ my_link +'/published', isLoggedIn, upload.fields(
        [
            {
                name: 'image1'
            },
            {
                name: 'video'
            }
        ]
    ) , (req, res) => {
        conn.connect(function(err) {
            if (err) console.log(err)
            var aissa = "",oth1="video"
            for (let u = 0; u < req.files.image1.length; u++) {
                var aissa1 = req.files.image1[u].path
                aissa += aissa1 + " aissa "
            }
            if ( req.files.video ) {
                for (let u = 0; u < req.files.video.length; u++) {
                    var aissaf1 = req.files.video[u].path
                    aissa1 += aissaf1 + " aissa "
                }
            }
            if ( aissa1 == "" ) {
                oth1 = "otherImg2"
            }
            var sql = "INSERT INTO product_data_prr (image, "+oth1+", title, Mini_title, description, price, discount, online, color_s, size_s, name_of_pr) VALUES ('"
            +aissa+"','"
            +aissa1+"','"
            +req.body.title+"','"
            +req.body.Mini_title+"','"
            +req.body.description+"','"
            +req.body.price+"','"
            +req.body.discount+"','"
            +req.body.online+"','"
            +req.body.colors+"','"
            +req.body.sizes+"','"
            +req.body.what_tags_are_there+"')"
            conn.query(sql, function (err1, result) {
            if (err1) console.log(err1);
            });
        });
        res.send(
            `
            <h1>
            product published successfully !
            <h1>
            <a href="/${my_link}/published">check products
            
            `
        )
    })
    /// ediiii __________pagee_____             
    //           ____login_________
    app.get('/'+ my_link +'/product/edit/:edited_Prr', isLoggedIn, (req, res) => {
        
        conn.query("SELECT * FROM product_data_prr", (err, result) => {
            conn.query("SELECT * FROM catygories_chosen_", (err, array) => {
                res.render('edit_prr', {tags:array, prrs:result, special: req.params.edited_Prr, myylink : my_link })
            })
        })
    })
    /// ediiii tttt             
    //           ____login_________
    app.post('/'+ my_link +'/product/edited/:edited_Prr', isLoggedIn, upload.fields(
        [
            {
                name: 'image1'
            },
            {
                name: 'video'
            }
        ]
    ), (req, res) => {
        conn.connect(function(err) {
            if (err) console.log(err);
            var aissa = ""
            ,oth = 'image'
            ,aissa1 = "", oth1 = 'video'
            ,aissa2 = "", oth2 = 'image'
            ,aissa3 = "", oth3 = 'image'
            ,aissa4 = "", oth4 = 'image'
            if ( req.files.image1 ) {
                for (let u = 0; u < req.files.image1.length; u++) {
                    var aissaf1 = req.files.image1[u].path
                    aissa += aissaf1 + " aissa "
                }
            }
            if ( aissa == "" ) {
                oth = "otherImg1"
            }
            if ( req.files.video ) {
                for (let u = 0; u < req.files.video.length; u++) {
                    var aissaf1 = req.files.video[u].path
                    aissa1 += aissaf1 + " aissa "
                }
            }
            if ( aissa1 == "" ) {
                oth1 = "otherImg2"
            }
            var sql = "UPDATE product_data_prr SET "
            + oth +" = '"+           aissa                      +"',"
            + oth1+" = '"+           aissa1                 +"',"
            +"title = '"+           req.body.title             +"',"
            +"Mini_title = '"+      req.body.Mini_title        +"',"
            +"description = '"+     req.body.description.toString()       +"',"
            +"price = '"+           req.body.price             +"',"
            +"discount = '"+        req.body.discount          +"',"
            +"color_s = '"+         req.body.colors            +"',"
            +"size_s = '"+          req.body.sizes            +"',"
            +"online = '"+          req.body.online            +"',"
            +"name_of_pr = '"+      req.body.what_tags_are_there        +"'"
            +"  WHERE product_data_prr.id = "+req.params.edited_Prr

            


            conn.query(sql, function (err1, result) {
            if (err1) console.log(err1);
            });
        });
        res.send(
            `
            <h1>
            product edited successfully !
            <h1>
            <a href="/${my_link}/published">check products
            
            `
        )
    })
    /// Delete             
    //           ____login_________
    app.get('/'+ my_link +'/published/deletePrr/:prr_Dlted1', isLoggedIn , (req, res) => {
        res.render('deleted', {link:req.params.prr_Dlted1, myylink : my_link })
    })
    /// Deleted             
    //           ____login_________
    app.post('/'+ my_link +'/published/deletePrr/:prr_Dlted', isLoggedIn , (req, res) => {
        conn.connect((err) => {
            ///////     BE CAREFUL     if (err) throw err;
            var sql = "DELETE FROM product_data_prr WHERE product_data_prr.id = "+req.params.prr_Dlted
            conn.query(sql, function (err, result) {
            if (err) throw err;
            });
            
        });
        res.send(
            `
            <h1>
            the product has Been deleted !
            <h1>
            <a href="/${my_link}/published">Go Back</a>
            
            `
        )
    })
    /// dblctt             
    //           ____login_________/
    app.post('/'+ my_link +'/published/dblcatte/:prr_Dbled', isLoggedIn , (req, res) => {
        conn.connect((err) => {
            ///////     BE CAREFUL     if (err) throw err;
            var l3adaddd_ = 0;
            conn.query("SELECT * FROM product_data_prr", (err, prrs_dbled)=>{
            
                for (let uu = 0; uu < prrs_dbled.length; uu++) {
                    if ( parseInt(prrs_dbled[uu].id) == parseInt(req.params.prr_Dbled) ) {
                        l3adaddd_ = uu
                    }
                }
                var sql = "INSERT INTO product_data_prr (image, sold_, video, title, Mini_title, description, price, discount, online, color_s, size_s, name_of_pr) VALUES ('"
                +prrs_dbled[l3adaddd_].image+"',"
                +0+",'"
                +prrs_dbled[l3adaddd_].video+"','"
                +prrs_dbled[l3adaddd_].title+"','"
                +prrs_dbled[l3adaddd_].Mini_title+"','"
                +prrs_dbled[l3adaddd_].description+"','"
                +prrs_dbled[l3adaddd_].price+"','"
                +prrs_dbled[l3adaddd_].discount+"','"
                +prrs_dbled[l3adaddd_].online+"','"
                +prrs_dbled[l3adaddd_].color_s+"','"
                +prrs_dbled[l3adaddd_].size_s+"','"
                +prrs_dbled[l3adaddd_].name_of_pr+"')"
                conn.query(sql, function (err1, result) {
                if (err1) console.log(err1);
                });
            })
        });
        res.send(
            `
            <h1>
            the product has Been dublicated !
            <h1>
            <a href="/${my_link}/published">Go Back</a>
            
            `
        )
    })
    /// Edit             
    //           ____login_________
    app.get('/'+ my_link +'/published/:Edit/edit', isLoggedIn , (req, res) => {
        conn.query("SELECT * FROM product_data_prr", (err, result) => {
            res.render('edit_prr', {prrs:result, link:req.params.edit , myylink : my_link })
        })
    })



    // diskkkkkkkknnnt
        app.post('/'+ my_link +'/discount_edt', isLoggedIn, (req, res) => {
            conn.connect((err) => {
                var sql = "UPDATE product_data_prr SET discount = "+req.body.discount
                conn.query(sql, function (err1, result) {
                    if (err1) console.log(err1);
                });
            });
            res.send(
                `
                <h1>
                discounts edited !
                <h1>
                <h2>
                <a href="/${my_link}/discounts">back</a>
                </h2>
                
                
                `
            )
        })

    
    //pub_caty_now             
    //           ____login_________
    app.post('/'+ my_link +'/pub_caty_now', isLoggedIn, upload1.single('image_caty') , (req, res) => {
        conn.connect((err) => {
            var fff = ""
            if (req.file){
                fff = req.file.filename
            }
            var sql = "INSERT INTO catygories_chosen_ (image, name) VALUES ('"
            +fff+"','"
            +req.body.Nmm+"')"
            conn.query(sql, function (err1, result) {
                if (err1) console.log(err1);
            });
        });
        res.send(
            `
            <h1>
            product published successfully !
            <h1>
            <a href="/${my_link}/categories">check products
            
            `
        )
    })
    /// delete catyy             
    //           ____login_________
    app.post('/'+ my_link +'/published/deleteCaty/:caty_dlted', isLoggedIn, (req, res) => {
        conn.connect((err) => {
            ///////     BE CAREFUL     if (err) throw err;
            var sql = "DELETE FROM catygories_chosen_ WHERE catygories_chosen_.id = "+req.params.caty_dlted
            conn.query(sql, function (err, result) {
            if (err) throw err;
            });
            
        });
        res.send(
            `
            <h1>
            caty deleted !
            <h1>
            <a href="/${my_link}/categories">Go Back</a>
            
            `
        )
    })
    /// editt catyy             
    //           ____login_________
    app.post('/'+ my_link +'/caty_edit/:caty_edit', isLoggedIn, upload1.single('image_caty'), (req, res) => {
        conn.connect((err) => {
            var fff = ""
            if (req.file){
                fff = req.file.filename
            }
            var sql = "UPDATE catygories_chosen_ SET "
            +"image = '"+           fff                      +"',"
            +"name = '"+           req.body.Nmm             +"'"
            +"  WHERE catygories_chosen_.id = "+req.params.caty_edit
            conn.query(sql, function (err1, result) {
            if (err1) console.log(err1);
            });
        });
        res.send(
            `
            <h1>
            caty edited successfully !
            <h1>
            <a href="/${my_link}/categories">check categories
            
            `
        )
    })
    //   edit chosenity           ____login_________
        app.post('/'+ my_link +'/caty/chosen/cancel/:chosed_canceled', isLoggedIn, (req, res) => {
            conn.query("UPDATE catygories_chosen_ SET chosen = '' WHERE catygories_chosen_.id = "+req.params.chosed_canceled);
            res.send(`<a href="/${my_link}/categories">back`)
        })
        app.post('/'+ my_link +'/caty/chosen/activate/:chosed_activated', isLoggedIn, (req, res) => {
            conn.query("UPDATE catygories_chosen_ SET chosen = 'true' WHERE catygories_chosen_.id = "+req.params.chosed_activated);
            res.send(`<a href="/${my_link}/categories">back`)
        })




    /// buy
    app.post('/buy/:buyed', (req, res) => {
        var taggs="";
        conn.connect((err) => {
            if (err) console.log(err)
            var sql = `
            INSERT INTO sold_prr (name, prrid, color, price, size, phone_num, adress, prr_n, seen, date, confirmed_date) VALUES 
            (
            '${ req.body.name }',
             ${ req.params.buyed },
            '${ req.body.type_color }',
            '${ req.body.price_cc }',
            '${ req.body.type_size }',
             ${ req.body.phone_num },
            '${ req.body.adress }',
            '${ req.body.product_quanity_aissa }',
            'false', '${ new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear() + "/" + new Date().getHours() }','ليس بعد')
            `
            conn.query(sql, (err1) => {
                if (err1) console.log(err1)
            })
            conn.query("SELECT * FROM product_data_prr", (err2, HHH) => {
                if (err2) console.log(err2)
                HHH.forEach(H => {
                    if ( H.id == req.params.buyed ) {
                        if ( H.name_of_pr !== "" ) {
                            taggs = ""
                            for (let h = 0; h < H.name_of_pr.split(',').length; h++) {
                                taggs += H.name_of_pr.split(',')[h] + "+"
                            }
                        }
                    }
                });

                
        // Retrieve original product from the database
                conn.query(`SELECT * FROM product_data_prr WHERE id = ${req.params.buyed}`, (error, results) => {
                    if (error) {
                        res.status(500).send('Error retrieving product');
                    } else {
                        const originalTags = results[0].name_of_pr.split(',');
                
                        // Retrieve all products from the database
                        conn.query('SELECT * FROM product_data_prr', (error, results) => {
                        if (error) {
                            res.status(500).send('Error retrieving products');
                        } else {
                            // Find similar products by comparing the tags
                            const similarProducts = results.filter(product => {
                                const productTags = product.name_of_pr.split(',');
                                const intersection = originalTags.filter(tag => productTags.includes(tag));
                                return intersection.length / originalTags.length >= 0.5;
                            });
                
                            
                            conn.query("SELECT * FROM catygories_chosen_", (blaa, hh) => {
                                conn.query("SELECT * FROM smd", (err, smd) => {
                                    conn.query("SELECT * FROM product_data_prr", (blaa, vvvv) => {
                                        res.render('category', {
                                            smd_ : smd,
                                            prrs : vvvv,
                                            caty : taggs,
                                            catyy_g : hh,
                                            similarProducts : similarProducts,
                                            random:false,
                                            no : req.params.buyed
                                        })
                                    })
                                })
                            })
                        }
                        });
                    }
                })
            
            })
        });
        
        
    })

      

    
    // sales           ____login_________
    app.get('/'+ my_link +'/sales', isLoggedIn, (req, res) => {

        conn.query("SELECT * FROM sold_prr", (err, sales) => {
            conn.query("SELECT * FROM product_data_prr", (err, prr) => {
                res.render('sales_that_we_got_hhh', { sales:sales , sold:prr , my_link:my_link, myylink:my_link })
            })
        })
    })
            // confirmed sales
            //           ____login_________
            app.get('/'+ my_link +'/confirmed_slz', isLoggedIn, (req, res) => {

                conn.query("SELECT * FROM sold_prr", (err, sales) => {
                    conn.query("SELECT * FROM product_data_prr", (err, prr) => {
                        res.render('sales_confirmed', { sales:sales , sold:prr , my_link:my_link, myylink:my_link })
                    })
                })
            })


    /// seen sale
    app.get('/'+ my_link +'/check/:sale_link', isLoggedIn, (req, res) => {
        conn.connect((err) => {
            if (err) console.log(err)
            var sql = "UPDATE sold_prr SET seen = 'true' WHERE sold_prr.id = "+req.params.sale_link
            conn.query(sql, function (err1, result) {
                if (err1) console.log(err1);
            });
        });
        conn.query("SELECT * FROM sold_prr", (err, sales) => {
            conn.query("SELECT * FROM product_data_prr", (err, prrs) => {
                res.render('my_sale_data', { sales:sales , sale_link:req.params.sale_link , my_link:my_link, myylink:my_link , sold:prrs })
            })
        })
    })
        /// confirm sale
        app.post('/'+ my_link +'/confirm/:sale_link', isLoggedIn , (req, res) => {

            var t = parseInt(req.body.how_much_sales)
            var add = parseInt(req.body.QmNto)
            conn.connect((err) => {

                var sql1 = "UPDATE product_data_prr SET sold_ = "+ parseInt(t + add) +" WHERE product_data_prr.id = "+req.body.prr_sold_where
                var sql = "UPDATE sold_prr SET confirmed_date = '"
                + new Date().getDate() + "-"
                + (new Date().getMonth() + 1) + "-"
                + new Date().getFullYear()  + "/"
                + new Date().getHours()+"' WHERE sold_prr.id = "+req.params.sale_link
                
                conn.query(sql1, (err1) => {
                    if (err1) console.log(err1);
                });
                conn.query(sql, (err1) => {
                    if (err1) console.log(err1);
                });
                
            });

            conn.query("SELECT * FROM sold_prr", (err, sales) => {
                conn.query("SELECT * FROM product_data_prr", (err, prr) => {
                    res.render('confirmed_slz', { sales:sales , sold:prr , my_link:my_link, myylink:my_link })
                })
            })
            res.send(
            `
            <h1>
            confirmed sale !! 
            <h1>
            <a href="/${my_link}/confirmed_slz">check </a>

            `)
        })
        /// confirm sale



    app.get('/'+my_link+'/login',isnttLoggedIn , function(req, res){
        res.render('login', { link:my_link });
        
    });
            app.get('/'+my_link,isnttLoggedIn , function(req, res){
                res.render('login', { link:my_link });
                
            });
    app.post('/'+my_link+'/login', passport.authenticate('local', {
        successRedirect: '/'+my_link+'/published',
        failureRedirect: '/'+my_link+'/login' }));


    
    app.delete('/'+my_link+'/logout', (req,res)=>{
        req.logout();
        res.redirect('/'+my_link+'/login');
    })
  
    function isLoggedIn(req, res, next){
        if( req.isAuthenticated() )
            return next();
        
        res.redirect('/'+my_link+'/login');
    }
    function isnttLoggedIn(req, res, next){
            if(!req.isAuthenticated())
                return next();
            
            res.redirect('/'+my_link+'/published');
    }
        //cnfrm
        function iscnfrmedd__(req, res, next){
        if( allowedIps.includes(ip.address()) )
            return next();
        
        res.redirect('/');
        }














      

      








      






  app.listen(3000)
