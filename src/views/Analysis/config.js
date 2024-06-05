export const amountList = [
  {
    label: '总销售额',
    amount: 12989,
    icon:'#icon-zhifufangshi',
    backg:"#ff0067"
  },
  {
    label: '本月销售',
    amount: 1103,
    icon:'#icon-gupiao2',
    backg:"#098afb"
  },
  {
    label: '总用户人数',
    amount: 857,
    icon:'#icon-yonghu-xianxing',
    backg:"##000901"
  },
  {
    label: '会员卡人数',
    amount: 1529,
    icon:'#icon-yonghutianjia',
    backg:"##f90cff"
  }
];

export const storeIncomeOption = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '店铺总收入', '充值办卡(不包含退卡)', '外卖业绩','实收业绩'],
      ['6.1', 423, 865, 933, 943],
      ['6.2', 833, 773, 515, 943],
      ['6.3', 836, 645, 822, 193],
      ['6.4', 772, 553, 389, 903],
      ['6.5', 762, 573, 389, 993],
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
};
export const incomeTrendOption = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['1月', 623],
      ['2月', 423],
      ['3月', 123],
      ['4月', 323],
      ['5月', 823],
      ['6月', 123],
      ['7月', 223],
      ['8月', 423],
      ['9月', 623],
      ['10月', 323],
      ['11月', 223],
      ['12月', 623],
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{ type: 'bar' }]
};
