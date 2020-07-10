export default () => {
  const model = [{
      prop: "name",
      icon: 'me/name.png',
      label: '姓名',
      value: '',
      type: 'text',
      placeholder: '请输入姓名',
    },
    {
      prop: "phone",
      icon: 'me/name.png',
      label: '手机号',
      value: '',
      type: 'text',
      placeholder: '请输入手机号',
    },
    {
      prop: "sex",
      icon: 'me/name.png',
      label: '性别',
      value: 1,
      type: 'radio',
      range: [{
          label: '男',
          value: "1",
          current:1
        },
        {
          label: '女',
          value: "2",
          current:2
        },
      ]
    },
    {
      prop: "jobs",
      icon: 'me/name.png',
      label: '职位',
      value: '',
      type: 'text',
      placeholder: '请输入职位',
    },
    {
      prop: "remark",
      icon: 'me/name.png',
      label: '备注',
      value: '',
      type: 'text',
      placeholder: '请输入备注',
    },
    {
      prop: "mealType",
      type: 'picker',
      mode:'selector',
      value:0,
      label: '餐型',
      rangeKey: 'label',
      range:[
        {label:'早餐',value:0},
        {label:'午餐',value:1},
        {label:'晚餐',value:2},
      ],
    },
    {
      prop:'date',
      type:'picker',
      mode:'date',
      label: '预约时间',
      value:new Date().toISOString().slice(0, 10),
    },
  ]
  return model;
}
