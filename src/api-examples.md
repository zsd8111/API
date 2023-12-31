

# API 目录
###   SkyPay第三支付API规范	
_________________
- [版本](./markdown-examples.md).
- 目录
- [前言](./preface.md).
- [API文档说明](./APIdocumentationdescription.md)
    - 1.数据加密说明
    - 2.加密程序说明
- 3. 线上支付说明
    - [3.1推送线上支付交易(payoutQueue)](./onlinepayment/payoutQueue.md)
    - [3.2回传支付确认讯息（payoutQueuePayout）)](./onlinepayment/payoutQueuePayout.md).
    - [3.3取消支付交易（cancelPayout）](./onlinepayment/cancelPayout.md).
    - [3.4 ML/LBCExpress非实时放款（payoutQueueV2）](./onlinepayment/payoutQueueV2.md).
    - [3.5修改支付交易（amendTransactionV2）](./onlinepayment/amendTransactionV2.md).
- 4. 支付处理流程-实时交易说明
    - [4.支付处理流程-实时交易说明（Realtimetransactioninstructions）](./Offlinepayment/Realtimetransactioninstructions.md).
    - [4.1 线下支付数据验证（PayoutInquiry）](./Offlinepayment/PayoutInquiry.md).
	- [4.2 支付成功通知（PayoutPayout）](./Offlinepayment/PayoutPayout.md).
    - [4.3 收款数据验证（CollectionInquiry）](./Offlinepayment/CollectionInquiry.md).
        - [4.3.1产生7-11收款条形码（Generate711Barcode）](./Offlinepayment/Generate711Barcode.md).
    - [4.4 收款成功通知（collectionCollect）](./Offlinepayment/collectionCollect.md).
    - [4.5 支付状态查询（payoutQueryStatus）](./Offlinepayment/payoutQueryStatus.md).
    - [4.6 交易结果查询（getReportPayout(Collection)）](./Offlinepayment/getReportPayout.md).
    - [4.7余额查询（balanceQuery）](./Offlinepayment/balanceQuery.md).
- 5. 充值、结算、提现
    - [5.1通知接口-充值、结算、提现（financeNotification）](./Rechargebalancewithdrawal/financeNotification.md).
    - [5.2查詢接口-充值、结算、提现（notificationInquiry）](./Rechargebalancewithdrawal/notificationInquiry.md).
- 6. 测试工具
    - [6.1 支付测试工具](./testtools/Collectionverificationtool.md).
    - [6.2 收款验证工具](./testtools/Paymenttestingtools.md).
- 7. 取得基本代码列表信息
    - [7.1取得国别定义(getNationality)](./Obtainbasiccodelistinformation/getNationality.md).
    - [7.2取得公民状态(getCivilStatus)](./Obtainbasiccodelistinformation/getCivilStatus.md).
    - [7.3取得身份验证类别(getIdentificationType)](./Obtainbasiccodelistinformation/getIdentificationType.md).
    - [7.4取得城巿代码(getTownCity)](./Obtainbasiccodelistinformation/getTownCity.md).
    - [7.5取得省份代码(getProvince)](./Obtainbasiccodelistinformation/getProvince.md).
    - [7.6取得银行代码(getBankCode)](./Obtainbasiccodelistinformation/getBankCode.md).
- 8. [回传code](./Backpropagationmessagedefinition/Backpropagationmessagedefinition.md).
- 9. [支付管道（渠道代码即code值）](./Paymentpipeline/Paymentpipeline.md).
- 10. [收款管道（渠道代码即code值）](./Paymentpipeline/Paymentpipeline1.md).