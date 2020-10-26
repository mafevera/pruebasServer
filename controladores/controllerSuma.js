function suma (req,res){
    a=1;
    b=2;
    c=a+b;
    return res.status(200).json({
        status: 200,
        mensaje: 'Todo bien',
        body: {
            c
        }
    });
}

module.exports= suma;