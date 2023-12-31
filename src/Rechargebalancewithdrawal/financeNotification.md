# 5.1通知接口-充值、结算、提现（financeNotification）

### 这支API是由合作伙伴提供,透过下列时机由SKYPAY发动请求，对合作伙伴发送「充值、结算、提现」之入帐通知。
- 充值、结算、提现
    - (1)打款帐户充值-当人工充值并由SKYPAY财务确认入帐系统时
    - (2)收款结算转充值–当收款结算后，将收款帐户资金转充值打款帐户(人工或配置自动)
    - (3)帐户馀额互转–当不同公司帐户打款馀额进行互转时，将同时通知2个帐户
    - (4)收款交易结算-当系统自动结算收款交易，并入帐时
    - (5)收款帐户提现-当收款结算后进行提现(后台功能)，SKYPAY财务确认完成打款时
    - (6)打款帐户提现–由合作伙伴申请从打款帐户提现，SKYPAY财务确认完成打款时
### 充值、结算、提现通知流程
![](../public/充值、结算、提现.png "Shiprock")

### <font color = red>回调接口只做通知使用，无论收到任何状态，只可以返回responseCode 1000，代表成功收到通知。</font>
#### Input parameters

| 参数                        |    类型     | 长度   |Y/N |描述|
| :-------------------------: | :-----------: |:-----:|:---:|--------------------------------|   
|userName|string|50|Y|用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|payoutInquiry(固定参数值) - Ex:"action":"payoutInquiry"|
|authentication  |string |255|Y|验证码  - 验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|transctionDate |DateTime|50| |通知日期 -  ex:2023-06-18 17:52:10|
|companyPrefix |string|5|  |公司编码 -  ex:SKY98|
|companyName |string|200.|  |公司名称 - ex:Skybridge Payment Inc.|
|accountNo |string|5|   |帐户 - ex:SKY98|
|sourceAccountNo |string|20|   | 资金来源帐号 - (实际银行帐号，只在提现时提供)|
|beneficiaryAccountNo |string|20|   |资金目的帐号 - (实际银行帐号，只在充值及提现时提供)|
|statementType|string|1||通知类型:<br>1:打款帐户充值<br>2:收款结算转充值<br>3:帐户馀额互转<br>4:收款交易结算<br>5:收款帐户提现<br>6:打款帐户提现|
|signType  |string|10|  |资金增减类型 :<br> recharge:增项 <br> reduce:减项|
|Amount |int||     |金額 - Ex:1200000|
|Currency |string|3|    | 固定币别 - PHP|
|referenceNumber|string|15|  |交易编号(唯一) - 此编号可于后台查询。- S–开头编号为结算功能(後台)中生成的交易。 - D–开头编号为充值功能(後台)中生成的交易- {callerName}–开头编号为系统自动结算的交易。-ex:S-20231204-001D-20231204-001,skypay-20231204|
#### Post data

```json
{
    "userName":"AppName@skypay" , 
    "action":"financeNotification",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "transctionDate":"2023-06-18 17:52:10",
    "companyPrefix":"SKY98",
    "companyName":"SKYPAY",
    "accountNo":"091234567899",
    "sourceAccountNo":"",
    "beneficiaryAccountNo":"001234567899",
    "statementType":"1",
    "signType":"recharge",
    "amount":12000000,
    "currency":"PHP",
    "referenceNumber":"D-20231204-001"
}
```

#### Output parameters

| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|回传时间 - yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|回传代码 -1000|
|responseDescription |string|255|回传内容描述 - 响应信息|


#### Output data：
```json
{
    "responseTime":"2018-06-18 17:52:10.5211",
    "responseCode":"1000",
    "responseDescription":"Success"
}
```

### Return code
| 状态代码                        |   状态描述    | 
| :-------------------------: | :-----------: |
|1000 |Success|







