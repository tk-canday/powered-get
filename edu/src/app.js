const express = require(express);
import config form './config';
const app = express();

app.use()

app.set('views',config.viewPath);;
app.set('view engine','ejs');

app.get('/',(res,req)=> {
   res.render('index');
})

app.listen(3000,'127.0.0.1',()=>{
  console.log('Server is running at port :3000');
})
