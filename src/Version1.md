# 版本  -    当前版本 ： 1.37
_________________
### 本文档包含Skypay专有的信息，未经本公司明确书面许可，不得复制、披露或全部或部分使用。
_________________
 
| <img width=30/>版本     | 出版日 |说明 |出版人|
| ------ | :-----------: | -------------------------------------------|-----     |   
| 1.37     |   2024/1/31     |添加 4.8 余额互转（balanceTransfer）|Wayne.Wang|
| 1.36     |   2023/12/15    |添加 5.充值、提现、查询接口。<br>添加 5.1通知接口-充值结算提现financeNotification。<br>添加 5.2查詢接口充值结算提现(notificationInquiry)。<br>删除EGcsh<br>删除LBC Express|Wayne.Wang|
| 1.35     |   2023/5/11     |添加 4.6 getReportPayout/(Collection)。|Wayne.Wang|
| 1.33     |   2021/01/26    |添加 Withdraw Channel:LBC,EGcash。|Abel|
| 1.32     |   2020/11/19    |添加 WithdrawChannel E-wallet:Paymaya,GrabPay,OmniPay。|Abel|
| 1.31     |   2020/09/29    |添加 3.1推送线上支付交易(payoutQueue)修改后只允许电子电子和银行交易。<br>添加 3.4 payoutQueueV2。<br>添加 3.4.1 Generate QRCode。<br>添加 3.5 amendTransactionV2。<br>添加3.2 payoutQueuePayout添加 ml referenceNumber。|Denny Pujo|
| 1.30     |   2020/08/28    |删除 3.4 payoutQueueV2。<br>删除 3.4.1 Generate QRCode。<br>删除 3.5 amendTransactionV2。|Denny Pujo|
| 1.29     |   2020/02/24    |添加 4.3.1 Generate QR Code。|Denny Pujo|
| 1.27     |   2019/10/21    |添加 7-11 Generate Barcode。|Denny Pujo|
| 1.24     |   2019/08/25    |添加 更改字段的数据类型和长度描述符。|Vinson Huang|
| 1.23     |   2019/08/14    |添加 变更可用渠道。|Vinson Huang|
| 1.22     |   2019/08/05    |添加 将发行日期和到期日期更改为3.1版银行付款队列中的可选日期。|Denny Pujo|
| 1.21     |   2019/07/08    |添加 1.新增中文说明。<br>添加2.增加的支付渠道。|Vinson Huang|
| 1.20     |   2019/06/18    |添加 ed related ProvinceId in Town City。|Denny Pujo|
| 1.19     |   2019/05/06    |添加 3.1 Payout–payoutQueue For Bank 。<br>添加 7	Get Catalog。|Denny Pujo|
| 1.18     |   2019/04/29    |添加 4.5支付状态查询（payoutQueryStatus）。|Wayne.Wang|
| 1.17     |   2019/03/24    |添加 9.withdrawChannel已修改了所有章节以添加所需的列。<br>添加 4.3收款数据验证（CollectionInquiry）Modified parameter to fit MLhuillier bills payment API interface。|Wayne.Wang|
| 1.16     |   2019/02/18    |添加 3.1推送线上支付交易(payoutQueue)MLhuillier&Palawan Pawnshop going to stop using and the stop date will annoce at future.。 <br> 添加  4.1线下支付数据验证（PayoutInquiry）Final the api sepc.。<br>4.2支付成功通知（PayoutPayout）Final the api spec。<br>添加 4.3收款数据验证（CollectionInquiry）添加输出参数。<br> 删除 8.withdrawChannel。|Wayne.Wang|
| 1.15     |   2019/01/31    |添加 3.1推送线上支付交易(payoutQueue)删除 Bank,Paymaya channel添加新的返回代码。<br>添加 7.Return Code更新返回代码列表。<br>添加 8.withdrawChannel更新可用的渠道。|Wayne.Wang|
| 1.14     |   2018/12/07    |添加 3.1 推送线上支付交易(payoutQueue)添加输入参数–accountNo,bankNo,bankProvince,bankCity添加输出参数–referenceNo。<br>添加 7.Return Code添加新的返回代码。 <br>添加 8.withdrawChannel 。|Wayne.Wang|
| 1.13     |   2018/11/28    |添加3.2 回传支付确认讯息（payoutQueuePayout）添加输入参数–action<br> 添加 4.2支付成功通知（PayoutPayout）添加输出参数–withdrawChannel。<br>添加 4.2支付成功通知（PayoutPayout）添加输入参数–payChannel。<br>添加 4.4收款成功通知（collectionCollect）更新输入参数–4:ECPay。<br>添加 4.2支付成功通知（PayoutPayout）添加输入参数–companyName。|Wayne.Wang|
| 1.12     |   2018/09/19    |添加 4.4收款成功通知（collectionCollect）添加输入参数–collectedTime。|Wayne.Wang|
| 1.11     |   2018/09/11    |添加 6。测试工具|Wayne.Wang|
| 1.10     |   2018/09/06    |添加 在每一章中添加期望返回代码。|Wayne.Wang|
| 1.9      |   2018/08/31    |添加 3.1推送线上支付交易(payoutQueue) 更新输入参数–Phone is 10 digits <br>添加 4.1线下支付数据验证（PayoutInquiry）更新响应参数–Phone is 10 digits|Wayne.Wang|
| 1.8      |   2018/08/22    |添加 3.Payout process(non realtime transaction)更新流程图。 |Wayne.Wang|
| 1.7      |   2018/08/21    |添加 4.4收款成功通知（collectionCollect）添加输入参数–receiptNumber。|Wayne.Wang|
| 1.6      |   2018/08/21    |添加 3.3取消支付交易（cancelPayout）更新输入参数–contractNumbers[]。 |Wayne.Wang|
| 1.5|2018/08/16|4.3收款数据验证（CollectionInquiry） 。<br>添加 4.4收款成功通知（collectionCollect）更新输入参数of sample(typo contractNumber) <br>添加 3.1推送线上支付交易(payoutQueue)-更新输入参数–withdrawChannel description。|Wayne.Wang|
| 1.4      |   2018/08/10    |添加 3.3取消支付交易（cancelPayout）更新所有的输入参数。|Wayne.Wang|
| 1.3      |   2018/08/07    | 添加  3.2回传支付确认讯息（payoutQueuePayout）更新输入参数–sername(typo userName)。 |Wayne.Wang|
| 1.2      |   2018/08/07    |添加 3.2回传支付确认讯息（payoutQueuePayout）添加输入参数–userName&authentication。 |Wayne.Wang|
| 1.1      |   2018/08/03    |添加   3.1推送线上支付交易(payoutQueue)     添加输入参数–withdrawChannel。  |Wayne.Wang|
| 1.0      |   2018/06/21    |添加 基准1.0 |Wayne.Wang|



# (提醒)：
#### 1.修改后的文件验证之后将进行有效的修改。
#### 2.本封面应附在修改后的或新的发布文档中。