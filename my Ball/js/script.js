/*شی گرایی
1-متد کانستراکتور که متغیرها رو درون اون مقداردهی میکنیم(مرکز شعاع سرعت رنگ).کانستراکتور در بدو  شروع ابجکت با کلاس صدا زده می شود
2-(بگین پس. کشیدن توپ))متد دراو.ابجکت رو میکشه
3-متد اپدیت:منطق ابجکت است.اصل کار در این متد است.منطق :توپ هر موقع به لبه خورد برگرده.*/

let canvas = document.querySelector('canvas');


canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

class Ball{
   constructor(x,y){/*x,yمکان ابتدایی توپ*/
    this.baseR = 10/*برای اینکه به یک مقداری که رسید دیگه بزرگتر نشه*/ 
    this.r =  this.baseR
    this.x =  x || randomIntFromInterval(0+this.r ,window.innerWidth-this.r)
    this.y =  y ||  randomIntFromInterval(0+this.r ,window.innerHeight-this.r)
    this.vx = (Math.random() - 0.5) * 4
    this.vy = (Math.random() - 0.5) * 4
    this.draw()
   }

   draw(){
    c.beginPath()
    c.arc(this.x,this.y,this.r,0,2* Math.PI)
    c.fillStyle ='red'
    c.fill()
   }

   update(){
    if(this.x + this.r > window.innerWidth || this.x-this.r<0){
        this.vx= -this.vx
    }
    if(this.y+this.r>window.innerHeight || this.y-this.r<0){
        this.vy= -this.vy
    }
    this.x += this.vx
    this.y += this.vy
    this.draw()/*وقتی مقادیر رو آپدیت کردی بیا و دراو صدا بزن*/
   }

}

/*let ball = new Ball();یک توپ ایجاد کردم*/
let balls =[]/*می خوام تعدادی توپ ایجاد کنم.پس ارایه ای از توپها ایجاد می کنم*/
for(i = 0;i < 100;i++){
  balls.push(new Ball())/*هر بار یک توپ می سازم ودرون ارایه ی بالز پوش می کنم*/
  

}

function animate(){
    c.clearRect(0,0,canvas.width,canvas.height)
    balls.forEach(ball=>{/*باید آرایه رو پیمایش کنیم*/
        ball.update()
    })
    requestAnimationFrame(animate);/*یک حلقه بینهایت از ساخت انیمیشن توپ ایجاد میکنه*/
}

window.addEventListener("click",function(e){
    balls.push(new Ball(e.clientX,e.clientY))/*مکان ابتدایی توپ -مکانی هست که کلیک می شود.*/
})

window.addEventListener('mousemove',function(e){
    balls.forEach(ball=>{
        let distance = Math.sqrt(Math.pow(e.clientX - ball.x,2) + Math.pow(e.clientY - ball.y,2))
        if(distance < 100 && ball.r < ball.baseR * 4){
             ball.r += 1
        }else if( ball.r > ball.baseR ){/*اگر شعاع بیشتر از ده بود کوچیکش کن.ولی اگر ده بود ریگه کوچیکش نکن*/
           ball.r -= 1
        }
    })
})

window.addEventListener("resize",function(){
    c.canvas.width = window.innerWidth
    c.canvas.height = window.innerHeight
})
 
animate()/*ابتدا انیمیت صدا زده می شود.کنوس پاک می شه2-اپدیت صدا زده میشه و توپ کشیده می شه*/

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}
