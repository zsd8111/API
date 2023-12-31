# 4.4 收款成功通知（collectionCollect）
##### 这支服务是由合作伙伴提供,它将由线下店出纳触发以确认报销。

#### Input parameters
| 参数                        |    类型     | 长度   |Y/N |描述|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName|string|50|Y|用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|generate711Barcode(固定参数值) - Ex:"action":"generate711Barcode"|
|authentication|string |255|Y|验证码 - 验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|contractNumber |string|13|Y|收款码 - 前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|
|amount|decimal|10.20|Y|必须是用户实际收款金额,小数点最高二位数 -  ex:"amount":3400.00|
|phone|string|50|Y|09开头的11位数字 - Ex:"phone":"09270348095"|
|receiptNumber  |string|50|Y|  收据编号|
|collectedTime|DateTime| |Y|(yyyy-MM-dd HH:mm:ss) -  - 收款时间,日期格式yyyy-MM-dd HH:mm:ss|
|payChannel|int||Y|收款管道 - 详细说明请参考第10章[渠道code值](/src/Paymentpipeline/Paymentpipeline1.md)|

#### Post data

```json
{
    "userName":"AppName@skypay",
    "action":"collectionCollect",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "controlNumber":"SKY0XXXXXXXXXX",
    "amount":"3900.00",
    "phone":"6392210083333",
    "receiptNumber":"B6C13B76E4BF",
    "collectedTime":"2018-06-18 17:52:10",
    "payChannel":"1"
}
```

#### Output parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime|DateTime|50|回传时间 - yyyy-MM-dd HH:mm:ss.SSSS(必填)|
|responseCode |int|4|回传代码 - 系统默认回传码,长度为4的数字,标准参考回码定义,系统默认回传码不足时,使用者可自定义代码,请以数字2开头,长度为4的数字,并明确在回传内容描述说明|
|responseDescription |string|255.|回传内容描述 - 响应信息（必填）|

#### Output data：

```json
{
  "responseTime":"2018-06-18 17:52:10.5211",
  "responseCode":"1000",
  "responseDescription":"Success"
}
```

### Return code:

| 状态代码                        |   状态描述    | 
| :-------------------------: | :----------- |
|1000 |Success|
|-1001|Verification  failed|
|-1009|An Unpredictable exception occurs|
|-1015|The transaction has been collected|
|-1026|Transactions has been paid|








