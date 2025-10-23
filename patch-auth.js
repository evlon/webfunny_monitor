let log = console.log;

!(function () {
  // patch-auth.js
  const paths = [
    "./servers/center/util/utils",
    "./servers/event/util/utils",
    "./servers/logger/util/utils",
    "./servers/monitor/util/utils",
  ];

  // 遍历所有路径，重写 overrite_handleFetchData 方法
  paths.forEach((path) => {
    // 在 patch-auth.js 文件中添加以下代码

    // 假设原始的 handleFetchData 方法存在于某个模块中，例如 utils 模块
    const originalUtils = require(path);

    // 保存原始的 handleFetchData 方法
    const originalHandleFetchData = originalUtils.handleFetchData;

    // 重写 handleFetchData 方法
    originalUtils.handleFetchData = async function (url, options, callback) {
      // 检查域名是否为 *.webfunny.cn
      if (url.includes(".webfunny.cn")) {
        if (url.includes("config/isBlacklist")) {
          return { code: 200, msg: "success", data: false };
        } else if (url.includes("config/memberActiveDeploy")) {
          return { code: 200, msg: "success", data: {} };
        }

        // 调用原始方法获取返回结果
        const result = await originalHandleFetchData.call(
          this,
          url,
          options,
          callback
        );

        // 记录返回结果
        log(`[Patch] 拦截请求: ${url}
[Patch] 请求参数:, ${JSON.stringify(options)}
[Patch] 返回结果:, ${JSON.stringify(result)}`);

        // 返回结果
        return result;
      }

      // 其他请求走原始逻辑
        log(`[${path}] 请求: ${url}`);
      return originalHandleFetchData.call(this, url, options, callback);
    };

    log("[Patch] handleFetchData 已重写，请求记录功能已启用");
  });
})();

// // patch-auth.js
!function () {
  const {CommonUtil} = require("./servers/monitor/controllers/controllers.js");

  const originalDecryptPurchaseCode = CommonUtil.decryptPurchaseCode;
  // 重写 decryptPurchaseCode
  CommonUtil.decryptPurchaseCode = async function (p314, p315) {
    // const result = await originalDecryptPurchaseCode.call(this, p314, p315);
    // log(result);
    log("[Patch] 绕过 decryptPurchaseCode 验证");

    global.monitorInfo.purchaseCodeEndDate = "2099-12-31";
    global.monitorInfo.purchaseCodeValid = true;
    global.monitorInfo.purchaseCodeType = 1;
    global.monitorInfo.purchaseCodeProjectCount = 9999;

    return {
      iv: true,
      pt: 1,
      pc: 9999,
      ft: 1,
      mc: {
        iv: true,
        limitType: "X",
        limitValue: 99999,
      },
      pl: [
        "项目类型：企业版",
        "项目个数：9999",
        "到期时间：2099-11-18",
        "流量上限：无上限",
      ],
    }

  };
  console.log("[Patch] decryptPurchaseCode 已重写， monitor 授权验证已绕过");
}()

// 

!function () {
  // patch-auth.js
  const {CommonUtil} = require("./servers/event/controllers/controllers.js");

  // 重写 decryptPurchaseCode
  CommonUtil.decryptPurchaseCode = async function (p314, p315) {
    console.log("[Patch] 绕过 decryptPurchaseCode 验证");
    global.eventInfo.purchaseCodeEndDate = "2099-12-31";
    global.eventInfo.purchaseCodeValid = true;
    global.eventInfo.purchaseCodeType = "81";
    global.eventInfo.purchaseCodeCardCount = 9999;
    return {
      isValid: true,
      productType: 1, // 企业版
      cardCount: 9999,
      performanceType: 1,
      mc: { iv: true }, // 机器验证通过
      pl: [ 
        "项目类型：企业版",
        "项目个数：9999",
        "到期时间：2099-11-18",
        "流量上限：无上限"
      ]
    };

  };

  log("[Patch] decryptPurchaseCode 已重写， event 授权验证已绕过");
}()

// // patch-auth.js
// const {CommonUtil: CommonUtilLogger} = require("./servers/logger/controllers/controllers.js");

// // 重写 decryptPurchaseCode
// CommonUtilLogger.decryptPurchaseCode = async function (p314, p315) {
//   console.log("[Patch] 绕过 decryptPurchaseCode 验证");
//   global.logServerInfo = {
//     ...global.logServerInfo,
//     purchaseCodeProjectCount: 20, // 增加项目数量限制到20个
//     purchaseCodeValid: true, // 设置购买码为有效状态
//     purchaseCodeType: "enterprise", // 设置为企业版类型
//     purchaseCodeEndDate: "2099-12-31", // 设置许可证到期日期
//     productType: "webfunny_monitor", // 设置产品类型
//   }
// };

// log("[Patch] decryptPurchaseCode 已重写， logger 授权验证已绕过");

/*

evlon@niukl-PC:~/repos/webfunny_monitor$ node -r ./patch-auth.js webfunny_cluster.js
Debugger attached.
[Patch] handleFetchData 已重写，请求记录功能已启用
[Patch] handleFetchData 已重写，请求记录功能已启用
[Patch] handleFetchData 已重写，请求记录功能已启用
[Patch] handleFetchData 已重写，请求记录功能已启用
(node:1802672) Warning: Accessing non-existent property 'CommonUtil' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
项目类型：试用版
项目个数：9999
到期时间：2025-11-18
流量上限：无上限
产品类型：试用版
项目个数：3
到期时间：2025-11-18
流量上限：无上限
[Patch] 拦截请求: http://www.webfunny.cn/config/isBlacklist
[Patch] 请求参数:, {"method":"POST","body":"{\"cdkey\":\"NGOPRQRBERESMTUEVXWB\",\"secretCdKey\":\"\",\"webfunnyVersion\":\"0.2.73\"}","headers":{"Content-Type":"application/json;charset=utf-8"}}
[Patch] 返回结果:, {"code":200,"msg":"success","data":false}
[Patch] 拦截请求: http://www.webfunny.cn/config/isBlacklist
[Patch] 请求参数:, {"method":"POST","body":"{\"cdkey\":\"NGOPRQRBERESMTUEVXWB\",\"secretCdKey\":\"\",\"webfunnyVersion\":\"0.3.82\"}","headers":{"Content-Type":"application/json;charset=utf-8"}}
[Patch] 返回结果:, {"code":200,"msg":"success","data":false}
[Patch] 拦截请求: http://www.webfunny.cn/config/isBlacklist
[Patch] 请求参数:, {"method":"POST","body":"{\"cdkey\":\"NGOPRQRBERESMTUEVXWB\",\"secretCdKey\":\"\",\"webfunnyVersion\":\"0.0.77\"}","headers":{"Content-Type":"application/json;charset=utf-8"}}
[Patch] 返回结果:, {"code":200,"msg":"success","data":false}
[Patch] 拦截请求: http://www.webfunny.cn/config/memberActiveDeploy
[Patch] 请求参数:, {"method":"POST","body":"{\"cdkey\":\"NGOPRQRBERESMTUEVXWB\",\"ip\":\"192.168.5.63\",\"webfunnyVersion\":\"0.2.73\",\"happenTime\":1761147998442}","headers":{"Content-Type":"application/json;charset=utf-8"}}
[Patch] 返回结果:, {"code":200,"msg":"success","data":{}}
[Patch] 拦截请求: http://www.webfunny.cn/config/memberActiveDeploy
[Patch] 请求参数:, {"method":"POST","body":"{\"cdkey\":\"NGOPRQRBERESMTUEVXWB\",\"ip\":\"192.168.5.63\",\"webfunnyVersion\":\"0.0.77\",\"happenTime\":1761147998460}","headers":{"Content-Type":"application/json;charset=utf-8"}}
[Patch] 返回结果:, {"code":200,"msg":"success","data":{}}
[Patch] 拦截请求: http://www.webfunny.cn/config/memberActiveDeploy
[Patch] 请求参数:, {"method":"POST","body":"{\"cdkey\":\"NGOPRQRBERESMTUEVXWB\",\"ip\":\"192.168.5.63\",\"webfunnyVersion\":\"0.3.82\",\"happenTime\":1761147998456}","headers":{"Content-Type":"application/json;charset=utf-8"}}
[Patch] 返回结果:, {"code":200,"msg":"success","data":{}}


*/
