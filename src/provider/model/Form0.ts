//固定表单的数据类
export class Form0 {

    constructor(
      public name: string,
      public date: string,
      public time:string,   // 0 breakfast 1lunch 2 night  3 junk
      public foodName: string,
      public foodComp: string,
      public num: string,    
      public unit: string,
      public size: string,
      public address?: string
    ) {  }
  }

//基础的问卷问题基类。
  export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
   
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
    }
  }