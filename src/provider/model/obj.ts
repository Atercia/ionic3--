/* import { Naireobj,Questionobj,Optionobj,Nairelist } from
*/
export class minLabelAnswer{
    public label:string;
    public answer:string;
    constructor(label,answer){
        this.label = label;
        this.answer = answer;
    }
}
//方格对象
export class Tile{
    //{time:"8-9",name: '空', tel:'',email:'',purpose:'',cols: 1, rows: 1, color: 'lightblue'},
    public naireTile:string = '';
    public cols:number =1;
    public rows:number=1;
    public color:string = 'lightblue' ;   // 0 breakfast 1lunch 2 night  3 junk
    public arr_minLabelAnswer:minLabelAnswer[] = [];
    addLA(l:string,a:string)
    {this.arr_minLabelAnswer.push(new minLabelAnswer(l,a))
    }
  }

//用户名和密码
export class Userobj{
    public userId:string;
    public userName:string;
    public userTel:string='noset';
    public userSex:string='noset';
    public userPassword:string;
    public position:string='noset';
    public PDtype:string='noset';
    constructor(id,name,password,userTel?,userSex?,position?,PDtype?){
        this.userId = String(id);
        this.userName = name;
        this.userPassword = String(password);
        this.userTel = userTel;
        this.userSex = userSex;
        this.position = position;
        this.PDtype = PDtype;
    }
    outall(mima:number){
        let arr;
        if(mima = 123){
            return [this.userId,this.userName,this.userPassword]
        }
        else{
            return "密码错误！"
        }
    }
}

/* 答卷对象 */
export class Answersheet{
}

//问卷清单
export class Nairelist{
    public naireobjes:Naireobj[] = [];
    addobj(obj:Naireobj){
        this.naireobjes.push(obj);
    }
}

//问卷对象
export class Naireobj{
    public id:number;
    public userId:number;
    public username:string = "未设置";
    public answerUserId:string = 'null'
    public answerUserName:string = "null";
    public title:string ;
    public questiones:Questionobj[]=[];//题目对象集合//数据库设置的最多15个题目
    public answernum:number = 0;
    constructor(id:number,userId:number,title:string){this.id=id;this.userId=userId;this.title=title;}
    //添加现有题目对象并存入数组
    addquestion(te:Questionobj){this.questiones.push(te)}
    //新建个题目对象并存入数组
    createquestion(id: number,
        naireId:number,
        type: string,
        label:string)
        {
            this.questiones.push(new Questionobj(id,naireId,type,label));
        }
    //返回所有题目的标题
    outlabel(){
        let arr:string[]=[];
        for (let i =0;i<this.questiones.length;i++)
        {
            arr[i] = this.questiones[i].label;
        }//数据库设置的最多15个题目
        return arr;
    }
    //返回所有题目的答案数组
    outanswer(){
        let arr:string[]=[];
        for (let i =0;i<this.questiones.length;i++)
        {
            arr[i] = this.questiones[i].answer;
        }//数据库设置的最多15个题目
        return arr;
    }
}

//选项对象
export class Optionobj{
constructor(public key:string,public value:string ){}
}

//题目对象id 问卷id，题目类型，标题label，题目选项数组
export class Questionobj {
    public id: number;
    public naireId:number;
    public type: string;  //textbox input  dropdown select
    public label:string;  // 0 breakfast 1lunch 2 night  3 junk
    public option:Optionobj[] = [];// option:[{key: 'solid',  value: 'Solid'},{key: 'great',  value: 'Great'}]
    public answer:string;
    constructor(
      id: number,
      naireId:number,
      type: string,
      label:string  // 0 breakfast 1lunch 2 night  3 junk
    ) {this.id = id;
        this.naireId = naireId;
        this.label=label;
        this.type=type;}
        
        //添加一个选项
        public addoption(str:string){
        this.option.push(new Optionobj(str,str));
        //console.log("push :"+ this.option[length].key)
        }
        //添加题目的回答
        public addanswer(an:string){this.answer=an;}
        //返回一个数组，包含所有选项的值
        public outoption():string[]{
            let arr = [];
            for (let i =0;i<this.option.length;i++)
            {
                arr[i] = this.option[i].key;
            }
            return arr;
        }
        //返回一个数组，包含所有选项，且格式为[{key：，value：}]
        public outspecioptionarr()
        {
            let arr = [];
            for (let i =0;i<this.option.length;i++)
            {
                let keyindex = "option" + i; //考虑到value可能是中文，不能用作key
                arr[i] = {key:keyindex,value:this.option[i].value};
            }
            return arr;
        }
  }

/*   export class Toolsclass{
      static copyarr
  } */