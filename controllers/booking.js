
const Form = require('../models/booking')


exports.getAddBooking=(req,res,next) =>{
    res.render('index',{
        pageTitle:'Add-User',
        path:'/admin/add-user',
        editing:false,
    });
}


exports.postAddBooking=(req,res,next) =>{
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    console.log(name,email,number);
    const form = new Form(null,name,number,email);
    
    form.save()
    .then(result=>{
        res.redirect('/');
    })
    .catch(err=>{
        console.log(err)
    });
}

exports.getEditBooking=(req,res,next) =>{
    const editMode = req.query.edit;
    if(!editMode)
    {
        return res.redirect('/');
    }
    const id = req.params.bookingId;
    Form.findById(id,form=>{
        if(!form){
            res.redirect('/');
        }
        res.render('index',{
            pageTitle:'Edit-User',
            path:'/admin/edit-user',
            editing:editMode,
            form:form,
        });
    });   
}

exports.getBookings=(req,res,next) =>{
    Form.fetchAll()
    .then(([rows,fieldData])=>{
        res.render('index',{
            form:rows,
            pageTitle:'booking page',
            path:'/',
        });
    })
    .catch(err=>{
        console.log(err)
    });
}

exports.postDeleteBooking= (req,res,next)=>{
    const id = req.params.bookingId;
    Form.findById(id)
    .then(([b])=>{
        res.render('index',{
            form:b[0],
            path:'/'
        })
    })
    .catch(err=>{console.log(err)});
}