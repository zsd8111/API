import { defineConfig } from "vitepress";

// import { sidebar } from "./sidebar.mjs";

export default defineConfig({
  aside: true,
  lang: "zh-CN",
  title: "SKYPAY",
  description: "A VitePress Site",
  locales: {
    // root:{
    //   label: '中文',
    //   lang: 'zh-CN',
    // },
    // en: {
    //   label: 'English',
    //   lang: 'en'
    // },
    root: {
      lang: "zh-CN",
      label: "简体中文",
      description:
        "A powerful & simple & fast theme for Hexo. 一个对可爱自以为是的 Hexo 主题。",
      selectText: "简体中文",
    },
    en: {
      lang: "en-US",
      label: "English",
      description: "A powerful & simple & fast theme for Hexo.",
      selectText: "English",
    },
  },

  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  // 源码目录
  srcDir: "./src",
  // 打包后的代码目录
  outDir: "./dist",

  // text: "Version",
  link: "/",
  lastUpdated: true,

  themeConfig: {
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // i18nRouting: false,
    logo: "/logo.svg",

    siteTitle: false,
    search: {
      provider: "local",
    },
    // logo:'/logo.png',
    nav: [{ text: "Home", link: "/Version1" }],
    // sidebar,
    sidebar: [
      {
        text: "introduction",
        items: [
          { text: "Version", link: "/Version1" },
          { text: "API 目录", link: "/api-examples" },
          { text: "前言", link: "/preface" },
          { text: "文档说明", link: "/APIdocumentationdescription" },
        ],
      },

      {
        text: "3.线上请求线上支付流程",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "3.1推送线上支付交易(payoutQueue)",
                link: "/onlinepayment/payoutQueue",
              },
              {
                text: "3.2回传支付确认讯息（payoutQueuePayout）",
                link: "/onlinepayment/payoutQueuePayout",
              },
            ],
          },
        ],
      },
      {
        text: "3.5.1线上请求线下支付流程",
        collapsed: true,
        items: [
          {
            text: "3.3取消支付交易（cancelPayout）",
            link: "/onlinepayment/cancelPayout",
          },
          {
            text: "3.4 ML/Cebuana实时放款（payoutQueueV2）",
            link: "/onlinepayment/payoutQueueV2",
          },
          {
            text: "3.5修改支付交易（amendTransactionV2）",
            link: "/onlinepayment/amendTransactionV2",
          },
        ],
      },

      {
        text: "4.线下支付处理流程",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "支付处理流程-实时交易说明",
                link: "/Offlinepayment/Realtimetransactioninstructions",
              },
              {
                text: "4.1 线下支付数据验证（PayoutInquiry）",
                link: "/Offlinepayment/PayoutInquiry",
              },
              {
                text: "4.2 支付成功通知（PayoutPayout）",
                link: "/Offlinepayment/PayoutPayout",
              },
              {
                text: "4.3 收款数据验证（CollectionInquiry）",
                link: "/Offlinepayment/CollectionInquiry",
                items: [
                  {
                    text: "4.3.1产生7-11收款条形码（Generate711Barcode）",
                    link: "/Offlinepayment/Generate711Barcode",
                  },
                ],
              },
              {
                text: "4.4 收款成功通知（collectionCollect）",
                link: "/Offlinepayment/collectionCollect",
              },
              {
                text: "4.5 支付状态查询（payoutQueryStatus）",
                link: "/Offlinepayment/payoutQueryStatus",
              },
              {
                text: "4.6 交易结果查询（getReportPayout(Collection)）",
                link: "/Offlinepayment/getReportPayout",
              },
              {
                text: "4.7余额查询（balanceQuery）",
                link: "/Offlinepayment/balanceQuery",
              },
            ],
          },
        ],
      },
      {
        text: "5. 充值、结算、提现",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "5.1通知接口-充值、结算、提现（financeNotification）",
                link: "/Rechargebalancewithdrawal/financeNotification",
              },
              {
                text: "5.2查詢接口-充值、结算、提现（notificationInquiry）",
                link: "/Rechargebalancewithdrawal/notificationInquiry",
              },
            ],
          },
        ],
      },
      {
        text: "6. 测试工具",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "6.1 支付测试工具",
                link: "/testtools/Collectionverificationtool",
              },
              {
                text: "6.2 收款验证工具",
                link: "/testtools/Paymenttestingtools",
              },
            ],
          },
        ],
      },
      {
        text: "7.取得基本代码列表信息",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "7.1取得国别定义(getNationality)",
                link: "/Obtainbasiccodelistinformation/getNationality",
              },
              {
                text: "7.2取得公民状态(getCivilStatus)",
                link: "/Obtainbasiccodelistinformation/getCivilStatus",
              },
              {
                text: "7.3取得身份验证类别(getIdentificationType)",
                link: "/Obtainbasiccodelistinformation/getIdentificationType",
              },
              {
                text: "7.4取得城巿代码(getTownCity)",
                link: "/Obtainbasiccodelistinformation/getTownCity",
              },
              {
                text: "7.5取得省份代码(getProvince)",
                link: "/Obtainbasiccodelistinformation/getProvince",
              },
              {
                text: "7.6取得银行代码(getBankCode)",
                link: "/Obtainbasiccodelistinformation/getBankCode",
              },
            ],
          },
        ],
      },
      {
        text: "8.回传讯息定义",
        collapsed: true,
        items: [
          {
            text: "回传code",
            link: "/Backpropagationmessagedefinition/Backpropagationmessagedefinition",
          },
        ],
      },
      {
        text: "9.支付管道（渠道代码）",
        collapsed: true,
        items: [
          {
            text: "支付管道",
            link: "/Paymentpipeline/Paymentpipeline",
          },
        ],
      },
      {
        text: "10.收款管道（渠道代码）",
        collapsed: true,
        items: [
          {
            text: "收款管道",
            link: "/Paymentpipeline/Paymentpipeline1",
          },
        ],
      },
      {
        text: "11.更改密钥流程",
        collapsed: true,
        items: [
          {
            text: "更改密钥流程",
            link: "/Changekeyprocess/Changekeyprocess",
          },
        ],
      },
    ],
    '/en/': [
      {
        text: "introduction",
        items: [
          { text: "Version", link: "/src/en/Version1" },
          { text: "API", link: "/src/en/api-examples" },
          { text: "前言", link: "/src/en/preface" },
          { text: "文档说明", link: "/src/en/APIdocumentationdescription" },
        ],
      },
    ],
  },
});
