

/*let canvas = document.querySelector('canvas');


canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

let r = 50
let x = randomIntFromInterval(0+r ,window.innerWidth-r)
let y =  randomIntFromInterval(0+r ,window.innerHeight-r)
let vx = (Math.random() - 0.5) * 20
let vy = (Math.random() - 0.5) * 20

function animate(){
    c.clearRect(0,0,canvas.width,canvas.height)
    c.beginPath()
    c.arc(x,y,r,0,2* Math.PI)
    c.fillStyle ='red'
    c.fill()
    if(x+r>window.innerWidth || x-r<0){
        vx= -vx
    }
    if(y+r>window.innerHeight || y-r<0){
        vy= -vy
    }
    x += vx
    y += vy
    requestAnimationFrame(animate)

}
animate()

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}*/



/*
let ball = document.querySelector("#ball")//ایندفعه توپ را به جای کنوس با بال ایجاد کردم
let offset = 10;//در ابتدا توپ از سمت چپ 10پیکسل فاصله دارد

/*از دو روش می تونم توپ حرکت بدم1)ست اینتروال2)رکواست انیمیشن فریم
ست اینتروال-یک کار تکراری رو درفصله زمانی مشخص مثلا دو ثانیه یکبار تکرار می کنه

/*setInterval(() => {/*هر ده ثانیه یک بار کار زیر رو انجام بده
   /*ball.style.left = offset + "px"/*ابتدا لفت توپ 10پیکسل است
  /*offset += 1 /*هر بار یک واحد به افست اضافه می شه
},10)

/*function animate(){
    console.log("animate")
    requestAnimationFrame(animate)/*برای انیمیت نباید پرانتز بذاری خودش هر وقت شرایط فراهم بشه انیمیت رو اجرا می کنه
/*ری کواست اوردم داخل تابع تست بی نهایت بار انیمیت چاپ می کن
}
animate()

function animate(){//نسبت به ست اینتروال بهینه تر یعنی انیمیشن تمیز تری دارم-2)اگر به تب دیگه ای برم انیمیشن متوقف می شه و وقتی بر گردم دوباره از همون جای قبلی حرکت ادامه پیدا می کنه
    ball.style.left = offset + "px";
    offset += 1
    requestAnimationFrame(animate)
}

animate()*/



/*دایره
for(let i = 0;i < 50 ; i++){
    x = Math.random() *window.innerWidth
    y = Math.random() *window.innerHeight 
    /*beginpath رو حذف کردم
    c.arc(x,y,50,0,2* Math.PI)
    c.fillStyle ='red'
    c.fill()
    
   

}


/*beginpathرسم جدید رو شروع می کنه واگر نباشه رسم قبلی رو با خط به بعدی وصل میکنه


/*c.fillStyle ="white"
c.fillRect(0,0,100,100)
c.clearRect(0,0,canvas.width,canvas.height)
c.fillRect(10,10,100,100)
c.clearRect(0,0,canvas.width,canvas.height)
c.fillRect(20,20,102,102)
c.clearRect(0,0,canvas.width,canvas.height)
c.fillRect(20,20,103,103)


/*رسم خط
c.beginPath()
c.lineTo(100,200)
c.lineTo(80,80)
c.lineTo(300,300)
c.closePath()
c.strokeStyle ="white"
c.stroke()


/*رسم دایره
c.clearRect(0,0,canvas.width,canvas.height)
c.beginPath()
c.arc(100,100,50,0,2*Math.PI)
c.fillStyle ='white'
c.fill()




//رسم مستطیل
/*c.translate(100,100)/*مبدا رو به نقطه 100و100 منتقل میکنه.

c.fillStyle ="white"
c.fillRect(0,0,100,100)
c.fillRect(200,100,100,100)
c.fillRect(400,0,100,100)*/

