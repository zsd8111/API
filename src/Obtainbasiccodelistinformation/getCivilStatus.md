# 7.2取得公民状态(getCivilStatus)
### 这支取得基本代码服务的API,提供用于使用银行付款的数据列表。调用服务时,versionDate请传空值，一切以正式环境接口为准。

#### Input parameters
| 参数                        |    类型     | 长度   |Y/N |描述|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName|string|50|Y|用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|getCatalog(固定参数值)- Ex:"action":"getCatalog"|
|authentication |string |255.|Y|验证码 - 验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|catalogType |string|50||目录类别 - 选择所需的基础代码类别 - Ex:"catalogType":"getCivilStatus"|
|versionDate |dataTime|||版本日期|


#### Post data
```json
{
    "userName" :  "AppName@skypay",
    "action" :  "getCatalog",
    "authentication" :  "30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "catalogType" :  "getCivilStatus",
    "versionDate" :  ""
}
```

#### Output parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime |DateTime|50|回传时间 - yyyy-MM-dd HH:mm:ss.SSSS（必填）|
|responseCode |int|4|回传代码 - 系统默认回传码,长度为4的数字,标准参考回码定义|
|result |string[]|Key/Value|回传结果 - 回传Key/Value格式字符串数组|
|CivilStatusId|int||公民状态代码|
|CivilStatus|string|255|公民状态|

#### Output data
```json
{
   "responseTime" : "2018-06-18 17:52:10.5211",
    "responseCode" : "1000",
    "result" : [
       { 
       "CivilStatusId": 1,
       "CivilStatus": "sample string"
       }
    ]
}
```