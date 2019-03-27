var expr=require('express');
var app =expr();
app.use(expr.static(__dirname+'/public'));
app.use(expr.static(__dirname+'/private'));
app.get('/',(req,res)=>{
	
	var obj={
		'name':'hello',
		'section':'D1619'
	}
	res.send(obj.name);
});
app.get('/cources',(req,res)=>{
	res.send('<h1>hello</h1>');
	
});
app.get('/bad',(req,res)=>{
	res.send('<h1>error</h1>');
	
});
app.listen(420);