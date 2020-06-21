import React, { ReactElement, useState, useEffect } from 'react'

import Search from '../../react-types-ui/search/Search'
import Nothing from '../../components/nothing/Nothing'
import SearchList from './components/SearchList'

interface State {
  list: object[],
  popList: object[]
}
interface Props {

}

let popList = [
  {
    name: 'xiangcai',
    text: '湘菜',
    id: 0
  },
  {
    name: 'yuecai',
    text: '粤菜',
    id: 1
  },
  {
    name: 'lucai',
    text: '鲁菜',
    id: 2
  },
  {
    name: 'chuancai',
    text: '川菜',
    id: 3
  },
  {
    name: 'sucai',
    text: '苏菜',
    id: 4
  },
  {
    name: 'zhecai',
    text: '浙菜',
    id: 5
  },
  {
    name: 'huicai',
    text: '徽菜',
    id: 6
  },
  {
    name: 'mincai',
    text: '闽菜',
    id: 7
  }
]

const listArr = [
  {
    src: "ms_01",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
  {
    src: "ms_02",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
  {
    src: "ms_03",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
  {
    src: "ms_04",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
  {
    src: "ms_05",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
  {
    src: "ms_06",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
  {
    src: "ms_07",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
  {
    src: "ms_08",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
]

export default function Sort({ }: Props, state: State): ReactElement {
  let [list, setList] = useState([{}])
  let [text, setText] = useState('')
  const handleTabText = (text: string) => {
    setText(text = text)
  }

  useEffect(() => {
    setTimeout(() => {
      setList(list = listArr)
    }, 1000)
    return () => {

    }
  }, [])

  return (
    <div className="search-sort">
      <div className="search-top">
        <Search btnText="搜索" clear={true} defaultText={text}></Search>
        <div className="search-list">
          <span>热门搜索：</span>
          <div className="pop-list">
            <ul>
              {
                popList.map((item: any, index) => {
                  return <li key={index} onClick={() => { handleTabText(item.text) }}>{item.text}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="search-con">
        {
          list.length > 0 ? <SearchList searchList={listArr}></SearchList> : <Nothing img={'kulian'} errText="抱歉哦，没有搜索到相关内容！"></Nothing>
        }
      </div>
    </div>
  )
}
