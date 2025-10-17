
const vRequire = require("../config/db");
const v8 = vRequire.sequelize;
const vRequire2 = require("../util/utils");
const vRequire3 = require("../util/utils");
const vRequire4 = require("../util/commonSql");
const vRequire5 = require("../config/node_clickhouse");
const vRequire6 = require("geoip-lite");
const vRequire7 = require("../../../config/log");
const {
  UPLOAD_TYPE,
  FLOW_TYPE,
  START_YEAR
} = require("../config/consts");
const vRequire8 = require("../config/AccountConfig");
const {
  accountInfo
} = vRequire8;
const vRequire9 = require("../schema/infoSchemaListByDay");
const vRequire10 = require("../schema/infoSchemaListByYear");
const fs2 = require("fs");
const vRequire11 = require("node-fetch");
const v9 = v8.import("../schema/userToken");
v9.sync({
  force: false
});
class C {
  static async ["createUserToken"](p97) {
    return await v9.create({
      ...p97
    });
  }
  static async ["getUserTokenDetail"](p98) {
    return await v9.findOne({
      where: {
        userId: p98
      }
    });
  }
  static async getUserTokenDetailByToken(p99) {
    return await v9.findOne({
      where: {
        accessToken: p99
      }
    });
  }
  static async ["updateUserToken"](p100, p101) {
    await v9.update({
      ...p101
    }, {
      where: {
        userId: p100
      },
      fields: Object.keys(p101)
    });
    return true;
  }
  static async deleteUserToken(p102) {
    await v9.destroy({
      where: {
        userId: p102
      }
    });
    return true;
  }
  static async getAllTokens() {
    let v10 = "select userId, accessToken from UserToken";
    return await v8.query(v10, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["checkTokenExist"](p103, p104) {
    return await v9.findOne({
      where: {
        userId: p103,
        accessToken: p104
      }
    });
  }
}
const v11 = v8.import("../schema/alarmItem");
v11.sync({
  force: false
});
class C2 {
  static async createAlarmItem(p105) {
    return await v11.create({
      ...p105
    });
  }
  static async ["deleteAlarmItem"](p106, p107) {
    await v11.destroy({
      where: {
        applicationId: p106,
        ruleId: p107
      }
    });
    return true;
  }
  static async getAlarmItemById(p108) {
    return await v11.findOne({
      where: {
        id: p108
      }
    });
  }
  static async ["getAlarmItem"]() {
    const v12 = "SELECT id, applicationId, companyId, alarmStatus, ruleId, latestHappen from AlarmItems";
    return await v8.query(v12, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getAlarmItemDetails(p109, p110, p111, p112, p113) {
    let v13 = p110 ? " and rules.alarmLevel='" + p110 + "' " : "";
    let v14 = p111 ? " and keyword like '%" + p111 + "%' " : "";
    const v15 = "\n      select\n      item.id as id,\n      item.ruleId as ruleId,\n      rules.alarmContent as content,\n      item.applicationId as applicationId,\n      rules.alarmLevel as level,\n      item.alarmStatus as status,\n      rules.status as ruleStatus,\n      rules.ruleName as ruleName,\n      rules.relatedNoticeId as noticeId,\n      notice.templateName as noticeName,\n      item.latestHappen as happenTime,\n      notice.lastModified as lastModified,\n      rules.suggestion as suggestion,\n      rules.processorId as processorId,\n      rules.companyId as companyId,\n      item.createdAt as createdAt\n      from\n      AlarmItems as item,\n      AlarmRules as rules,\n      NoticeTemplates as notice\n      where\n      rules.companyId='" + p109 + "'\n      " + v13 + "\n      " + v14 + "\n      and item.ruleId = rules.ruleId and rules.relatedNoticeId = notice.noticeTemplateId\n      order by item.latestHappen desc\n      limit " + (p112 - 1) * p113 + "," + p113 + "\n    ";
    return await v8.query(v15, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getRuleIds"](p114) {
    return await v11.findAll({
      where: {
        applicationId: p114
      }
    });
  }
  static async ["updateAlarmItem"](p115, p116) {
    await v11.update({
      ...p116
    }, {
      where: {
        id: p115
      },
      fields: Object.keys(p116)
    });
  }
  static async ["countAlarmItem"](p117 = "1") {
    const v16 = "SELECT count(id) as count from AlarmItems where companyId='" + p117 + "'";
    return await v8.query(v16, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getAlarmItemByRuleId"](p118) {
    return await v11.findAll({
      where: {
        ruleId: p118
      }
    });
  }
}
function f18(p119, p120, p121, p122, p123) {
  return f37(p122 - 255, p123);
}
const v17 = v8.import("../schema/alarmRule");
v17.sync({
  force: false
});
class C3 {
  static async createAlarmRule(p124) {
    return await v17.create({
      ...p124
    });
  }
  static async getAlarmRuleById(p125) {
    return await v17.findOne({
      where: {
        id: p125
      }
    });
  }
  static async ["getAlarmRuleByRuleId"](p126) {
    return await v17.findOne({
      where: {
        ruleId: p126
      }
    });
  }
  static async pageAlarmRule(p127, p128, p129 = "1") {
    const v18 = "SELECT ruleName, ruleDesc, visibleRange, alarmLevel, lastModified, id , processorId, status, ruleId, relatedNoticeId, suggestion, alarmContent from AlarmRules where companyId='" + p129 + "' limit " + p127 + "," + p128;
    return await v8.query(v18, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async countAlarmRule(p130 = "1") {
    const v19 = "SELECT count(id) as count from AlarmRules where companyId='" + p130 + "'";
    return await v8.query(v19, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async updateAlarmRule(p131, p132) {
    await v17.update({
      ...p132
    }, {
      where: {
        id: p131
      },
      fields: Object.keys(p132)
    });
  }
  static async deleteAlarmRule(p133) {
    await v17.destroy({
      where: {
        ruleId: p133
      }
    });
    return true;
  }
  static async getAlarmRuleByRuleName(p134) {
    const v20 = "SELECT ruleName from AlarmRules where ruleName='" + p134 + "'";
    return await v8.query(v20, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getAlarmRuleByRelatedNoticeId"](p135) {
    const v21 = "SELECT * from AlarmRules where relatedNoticeId='" + p135 + "'";
    return await v8.query(v21, {
      type: v8.QueryTypes.SELECT
    });
  }
}
class C4 {
  static async ["dropTable"](p136) {
    let v22 = "\n    DROP TABLE \n    " + p136 + " \n    ";
    return await v8.query(v22, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["createInfoTable"](p137) {
    vRequire9.forEach(p138 => {
      const v23 = v8.define(p138.name + p137, p138.fields, p138.index);
      v23.sync({
        force: false
      });
    });
  }
  static async createInfoTableByYear(p139) {
    vRequire10.forEach(p140 => {
      const v24 = v8.define(p140.name + p139, p140.fields, p140.index);
      v24.sync({
        force: false
      });
    });
  }
}
const v25 = new vRequire5("../schema/alarmTrigger");
v25.createTable();
class C5 {
  static async createAlarmTrigger(p146) {
    return await v25.create({
      ...p146
    });
  }
  static async pageAlarmTrigger(p147, p148, p149, p150) {
    let v26;
    if (p150 && p150.length === 1) {
      v26 = "SELECT alarmContent, pushStatus, triggerTime, seriousLevel from AlarmTrigger where alarmItemId = '" + p149 + "' and pushStatus = " + p150[0] + " order by triggerTime desc limit " + p147 + ", " + p148 + " ";
    } else {
      v26 = "SELECT alarmContent, pushStatus, triggerTime, seriousLevel from AlarmTrigger where alarmItemId = '" + p149 + "' order by triggerTime desc limit " + p147 + ", " + p148 + " ";
    }
    return await v25.query(v26, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async pageAlarmTriggerWithCurDate(p151, p152, p153, p154) {
    const v27 = "SELECT alarmContent, pushStatus, triggerTime, seriousLevel from AlarmTrigger where alarmItemId = '" + p153 + "' and triggerTime between '" + p154 + " 00:00:00' and '" + p154 + " 23:59:59'  limit " + p151 + ", " + p152;
    return await v25.query(v27, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async countAlarmTrigger(p155, p156) {
    let v28;
    if (p156 && p156.length === 1) {
      v28 = "SELECT * from AlarmTrigger where alarmItemId = '" + p155 + "' and pushStatus = " + p156[0];
    } else {
      v28 = "SELECT * from AlarmTrigger where alarmItemId = '" + p155 + "'";
    }
    return await v25.query(v28, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async ["updateAlarmTrigger"](p157, p158) {
    await v25.update({
      ...p158
    }, {
      where: {
        dataId: p157
      },
      fields: Object.keys(p158)
    });
  }
  static async getLatest10AlarmTrigger(p159 = "1") {
    const v29 = "SELECT alarmContent, pushStatus, triggerTime, application, ruleLevel from AlarmTrigger where companyId='" + p159 + "' order by triggerTime desc limit 0, 10";
    return await v25.query(v29, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async ["getAlarmTriggerRuleAndApplication"](p160 = "1") {
    const v30 = "SELECT application, ruleLevel from AlarmTrigger where companyId='" + p160 + "'";
    return await v25.query(v30, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async ["getTotalHighCount"](p161 = "1") {
    const v31 = "SELECT count(*) from AlarmTrigger where companyId='" + p161 + "' and ruleLevel = 3";
    return await v25.query(v31, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async ["getTotalMediumCount"](p162 = "1") {
    const v32 = "SELECT count(*) from AlarmTrigger where companyId='" + p162 + "' and ruleLevel = 2";
    return await v25.query(v32, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async getTotalLowCount(p163 = "1") {
    const v33 = "SELECT count(*) from AlarmTrigger where companyId='" + p163 + "' and ruleLevel = 1";
    return await v25.query(v33, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async getAlarmTrend(p164) {
    const v34 = "SELECT ruleLevel from AlarmTrigger where triggerTime between '" + p164 + " 00:00:00' and '" + p164 + " 23:59:59'";
    return await v25.query(v34, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async ["getAlarmTrendByDay"](p165, p166, p167 = "1") {
    const v35 = "SELECT DATE_FORMAT(triggerTime,'%Y-%m-%d') as day, ruleLevel, count(dataId) as count from AlarmTrigger where companyId='" + p167 + "' and triggerTime between '" + p165 + " 00:00:00' and '" + p166 + " 23:59:59' group by day,ruleLevel";
    return await v25.query(v35, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async ["getAlarmItemTrendForMinutes"](p168, p169) {
    const v36 = {
      mTzbK: function (p170, p171) {
        return p170 * p171;
      },
      FAmwb: function (p172, p173) {
        return p172 ^ p173;
      }
    };
    const v37 = "AlarmTrigger";
    const v38 = new Date().getTime();
    const v39 = new Date(v38 - v36.mTzbK(p168, 60) * v36.FAmwb(120741, 119885)).Format("yyyy-MM-dd hh:mm:ss");
    const v40 = new Date(v38).Format("yyyy-MM-dd hh:mm:ss");
    let v41 = "select DATE_FORMAT(triggerTime,'%Y-%m-%d %H:%i') as minutes, count(dataId) as count from " + v37 + " where alarmItemId='" + p169 + "' and triggerTime between '" + v39 + "' and '" + v40 + "' group by minutes";
    return await v25.query(v41, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async ["getAlarmItemTrend"](p174, p175) {
    const v42 = "Select count(*) from AlarmTrigger where triggerTime between '" + p174 + " 00:00:00' and '" + p174 + " 23:59:59' and alarmItemId = '" + p175 + "'";
    return await v25.query(v42, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async getAlarmItemTrendByDay(p176, p177, p178) {
    const v43 = "Select DATE_FORMAT(triggerTime,'%Y-%m-%d') as day, count(dataId) as count from AlarmTrigger where triggerTime between '" + p176 + " 00:00:00' and '" + p177 + " 23:59:59' and alarmItemId = '" + p178 + "' group by day";
    return await v25.query(v43, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async getAlarmItemTrendByHours(p179, p180, p181, p182) {
    const v44 = "Select count(*) from AlarmTrigger where triggerTime between '" + p181 + " " + p179 + "' and '" + p181 + " " + p180 + "' and alarmItemId = '" + p182 + "'";
    return await v25.query(v44, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async ["getNewestAlarmItem"](p183, p184) {
    const v45 = "Select * from AlarmTrigger where applicationId='" + p183 + "' and ruleId='" + p184 + "' order by triggerTime desc limit 1";
    return await v25.query(v45, {
      type: v25.QueryTypes.SELECT
    });
  }
  static async getAlarmTriggerListBySize(p185, p186) {
    const v46 = "Select * from AlarmTrigger where applicationId='" + p185 + "' order by triggerTime desc limit " + p186;
    return await v25.query(v46, {
      type: v25.QueryTypes.SELECT
    });
  }
}
const v47 = v8.import("../schema/company");
v47.sync({
  force: false
});
class C6 {
  static async createCompany(p192) {
    return await v47.create({
      ...p192
    });
  }
  static async getCompanyDetailByOwnerId(p193) {
    return await v47.findOne({
      where: {
        ownerId: p193
      }
    });
  }
  static async ["getCompanyInfo"](p194) {
    return await v47.findOne({
      where: {
        companyId: p194
      }
    });
  }
  static async getCompanyList() {
    const v48 = "SELECT c.companyId as companyId, c.companyName as companyName, u.nickname as ownerName from Company as c, User as u where c.ownerId = u.userId";
    return await v8.query(v48, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getAllCompanyList() {
    const v49 = "SELECT * from Company";
    return await v8.query(v49, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getAllActiveCompanyList() {
    const v50 = {
      ozBZu: "select c.companyId as companyId, c.companyName as companyName from Company c , Product p WHERE c.companyId = p.companyId and p.isValid = '1'"
    };
    const v51 = v50.ozBZu;
    return await v8.query(v51, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async updateCompany(p195, p196) {
    await v47.update({
      ...p196
    }, {
      where: {
        companyId: p195
      },
      fields: Object.keys(p196)
    });
    return true;
  }
  static async getFirstCompany() {
    const v52 = "select * from Company limit 1";
    return await v8.query(v52, {
      type: v8.QueryTypes.SELECT
    });
  }
}
class C7 {
  static async ["createFlowDataInfoByDay"](p197) {
    const v53 = {
      pXgqc: function (p198, p199) {
        return p198 + p199;
      },
      bmhlS: function (p200, p201) {
        return p200 != p201;
      },
      NvXCb: function (p202, p203) {
        return p202 + p203;
      },
      tZggr: "`, ",
      wOyQy: "updatedAt",
      ENRgU: "', ",
      AwkOE: "dayName",
      FtSzc: "yyyy",
      ZAIgl: ") VALUES ("
    };
    let v54 = "";
    let v55 = "";
    const v56 = ["id", "createdAt", "updatedAt", "companyId", "projectId", "projectName", "productType", "flowOrigin", "flowType", "monthName", v53.AwkOE, "flowCount"];
    v56.forEach((p204, p205) => {
      if (p205 == v56.length - 1) {
        v54 += v53.pXgqc("`" + p204, "`");
        let v57 = p197[p204];
        if (v53.bmhlS(v57, undefined)) {
          v55 += "'" + v57 + "'";
        } else {
          v55 += "DEFAULT";
        }
      } else {
        v54 += v53.NvXCb("`", p204) + v53.tZggr;
        let v58 = p197[p204];
        switch (p204) {
          case "createdAt":
          case v53.wOyQy:
            v58 = new Date().Format("yyyy-MM-dd hh:mm:ss");
            break;
          default:
            break;
        }
        if (v58 != undefined) {
          v55 += "'" + v58 + v53.ENRgU;
        } else {
          v55 += "DEFAULT, ";
        }
      }
    });
    const v59 = new Date().Format(v53.FtSzc);
    const v60 = "FlowDataInfoByDay" + v59;
    let v61 = "INSERT INTO " + v60 + " (" + v54 + v53.ZAIgl + v55 + ")";
    return await v8.query(v61, {
      type: v8.QueryTypes.INSERT
    });
  }
  static async findByProjectIdAndDayName(p206, p207, p208) {
    const v62 = new Date().getFullYear();
    const v63 = "FlowDataInfoByDay" + v62;
    const v64 = "SELECT id FROM " + v63 + " where projectId = '" + p206 + "' and dayName = '" + p207 + "' and flowType='" + p208 + "'";
    return await v8.query(v64, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["update"](p209, p210, p211) {
    const v65 = {
      ZBwLb: function (p212, p213) {
        return p212 ^ p213;
      },
      kEUMz: "FlowDataInfoByDay"
    };
    let v66 = " set ";
    for (let v67 in p210) {
      v66 += " " + v67 + "='" + p210[v67] + "'";
    }
    const v68 = p211.substring(0, v65.ZBwLb(768369, 768373));
    const v69 = v65.kEUMz + v68;
    const v70 = "UPDATE " + v69 + " " + v66 + " where id = '" + p209 + "'";
    return await v8.query(v70, {
      type: v8.QueryTypes.UPDATE
    });
  }
  static async ["updateFlowCount"](p214, p215, p216) {
    const v71 = {
      Qjwes: " set ",
      ZnGfU: function (p217, p218) {
        return p217 ^ p218;
      },
      wOZaR: "FlowDataInfoByDay"
    };
    let v72 = v71.Qjwes;
    for (let v73 in p215) {
      v72 += " " + v73 + "=" + p215[v73];
    }
    const v74 = p216.substring(v71.ZnGfU(572998, 572998), 4);
    const v75 = v71.wOZaR + v74;
    const v76 = "UPDATE " + v75 + " " + v72 + " where id = '" + p214 + "'";
    return await v8.query(v76, {
      type: v8.QueryTypes.UPDATE
    });
  }
  static async ["createFlowDataInfosByDay"](p219, p220, p221) {
    const v77 = {
      GSllp: function (p222, p223) {
        return p222 === p223;
      },
      miCiX: function (p224, p225) {
        return p224 ^ p225;
      },
      smIeO: function (p226, p227) {
        return p226 ^ p227;
      },
      kmBWc: function (p228, p229) {
        return p228 - p229;
      },
      ydsDV: function (p230, p231) {
        return p230 ^ p231;
      },
      ZLkEO: function (p232, p233) {
        return p232 + p233;
      }
    };
    let v78 = "";
    for (let v79 = 0; v79 < p219.length; v79++) {
      const {
        flowCount: _0x1e9434
      } = p219[v79];
      if (v77.GSllp(_0x1e9434, v77.miCiX(576329, 576329))) {
        continue;
      }
      v78 += C7.handleFlowArray(p219[v79], p220, p221);
    }
    v78 = v78.substring(v77.smIeO(781354, 781354), v77.kmBWc(v78.length, 1));
    const v80 = p220.substring(v77.ydsDV(778757, 778757), 4);
    const v81 = v77.ZLkEO("FlowDataInfoByDay", v80);
    let v82 = "";
    if (v78) {
      v82 = "INSERT INTO " + v81 + " (companyId, projectId, flowOrigin, flowType, monthName, dayName, flowCount, createdAt, updatedAt) \n      VALUES\n      " + v78 + "\n      ";
    }
    if (v82) {
      return await v8.query(v82, {
        type: v8.QueryTypes.INSERT
      });
    }
    return await Promise.resolve("无数据");
  }
  static ["handleFlowArray"](p234, p235, p236) {
    const v83 = new Date().Format("yyyy-MM-dd hh:mm:ss");
    function f22(p242, p243, p244, p245, p246) {
      return f37(p243 - -800, p245);
    }
    const vV83 = v83;
    const {
      companyId: _0x286961,
      projectId: _0x1b391e,
      flowType: _0x2955e2,
      flowCount: _0x2da333
    } = p234;
    const vF21 = "subscribe";
    function f27(p267, p268, p269, p270, p271) {
      return f37(p267 - -949, p270);
    }
    function f28(p272, p273, p274, p275, p276) {
      return f34(p274 - -546, p276);
    }
    let v84 = "('" + _0x286961 + "', '" + _0x1b391e + "', '" + vF21 + "', '" + _0x2955e2 + "', '" + p236 + "', '" + p235 + "', " + _0x2da333 + ", '" + v83 + "', '" + vV83 + "'),";
    return v84;
  }
  static async getMonthFlowDataForCompanyId(p287) {
    const v85 = {
      ylKJs: "yyyy-MM",
      vTsMg: function (p288, p289) {
        return p288 + p289;
      }
    };
    const v86 = new Date().Format(v85.ylKJs);
    const v87 = new Date().getFullYear();
    const v88 = v85.vTsMg("FlowDataInfoByDay", v87);
    let v89 = "SELECT flowOrigin, sum(flowCount) as count, monthName FROM " + v88 + " where companyId = '" + p287 + "' and flowType = 'total_flow_count' and monthName='" + v86 + "' group by flowOrigin";
    return await v8.query(v89, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getTotalFlowDataForCompanyId(p290) {
    const v90 = new Date().getFullYear();
    let v91 = "";
    for (let vSTART_YEAR = START_YEAR; vSTART_YEAR <= v90; vSTART_YEAR++) {
      const v92 = "FlowDataInfoByDay" + vSTART_YEAR;
      v91 += "SELECT sum(flowCount) as count, min(dayName) as minDay  FROM " + v92 + " where companyId = '" + p290 + "' and flowType = 'total_flow_count'";
      if (vSTART_YEAR < v90) {
        v91 += "\n          UNION\n        ";
      }
    }
    return await v8.query(v91, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getFlowCountForCompanyIdByDayName(p291, p292) {
    const v93 = new Date().getFullYear();
    const v94 = "FlowDataInfoByDay" + v93;
    const v95 = "SELECT dayName, sum(flowCount) as count FROM " + v94 + " where companyId = '" + p291 + "' and dayName='" + p292 + "'";
    return await v8.query(v95, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getFlowTrendDataForCompanyIdByDate(p293, p294 = "", p295 = "") {
    const v96 = {
      iwJNK: function (p296, p297) {
        return p296 ^ p297;
      },
      jdYmG: function (p298, p299) {
        return p298 < p299;
      }
    };
    const v97 = new Date().getFullYear();
    const v98 = p294 ? parseInt(p294.substring(0, 4)) : v97;
    const v99 = p295 ? parseInt(p295.substring(v96.iwJNK(588201, 588201), 4)) : v97;
    let v100 = "";
    for (let vV98 = v98; vV98 <= v99; vV98++) {
      const v101 = "FlowDataInfoByDay" + vV98;
      if (p294 && p295) {
        v100 += "SELECT dayName, sum(flowCount) as count FROM " + v101 + " where companyId = '" + p293 + "' and dayName between '" + p294 + "' and '" + p295 + "' group by dayName";
      } else {
        v100 += "SELECT dayName, sum(flowCount) as count FROM " + v101 + " where companyId = '" + p293 + "' group by dayName";
      }
      if (v96.jdYmG(vV98, v97)) {
        v100 += "\n          UNION\n        ";
      }
    }
    return await v8.query(v100, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getFlowDistributeDataForCompanyIdByDate(p300, p301 = "", p302 = "") {
    const v102 = {
      DpnaX: function (p303, p304) {
        return p303 ^ p304;
      },
      cumGW: function (p305, p306) {
        return p305 <= p306;
      }
    };
    const v103 = new Date().getFullYear();
    const v104 = p301 ? parseInt(p301.substring(v102.DpnaX(421275, 421275), 4)) : v103;
    const v105 = p302 ? parseInt(p302.substring(0, 4)) : v103;
    let v106 = "";
    for (let vV104 = v104; v102.cumGW(vV104, v105); vV104++) {
      const v107 = "FlowDataInfoByDay" + vV104;
      if (p301 && p302) {
        v106 += "SELECT productType, sum(flowCount) as count FROM " + v107 + " where companyId = '" + p300 + "' and dayName between '" + p301 + "' and '" + p302 + "' group by productType";
      } else {
        v106 += "SELECT productType, sum(flowCount) as count FROM " + v107 + " where companyId = '" + p300 + "' group by productType";
      }
      if (vV104 < v103) {
        v106 += "\n          UNION\n        ";
      }
    }
    return await v8.query(v106, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getFlowTableListDataForCompanyId({
    companyId: _0x529497,
    productType: _0x10c730,
    page: _0x1978d9,
    pageSize: _0x1cb54b,
    projectName: _0x46795e
  }) {
    const v108 = {
      NASRr: function (p307, p308) {
        return p307 * p308;
      },
      oeKgP: function (p309, p310) {
        return p309 - p310;
      }
    };
    const v109 = v108.NASRr(v108.oeKgP(_0x1978d9, 1), _0x1cb54b);
    const v110 = new Date().getFullYear();
    let v111 = "";
    let v112 = _0x46795e ? "and projectName like '%" + _0x46795e + "%'" : "";
    for (let vSTART_YEAR2 = START_YEAR; vSTART_YEAR2 <= v110; vSTART_YEAR2++) {
      const v113 = "FlowDataInfoByDay" + vSTART_YEAR2;
      v111 += "SELECT sum(if(flowType='total_flow_count', flowCount, 0)) as totalCount, \n              sum(if(flowType='pv_flow_count', flowCount, 0)) as pvCount,  \n              sum(if(flowType='http_flow_count', flowCount, 0)) as httpCount, \n              sum(if(flowType='behavior_flow_count', flowCount, 0)) as behaviorCount,  \n              sum(if(flowType='error_flow_count', flowCount, 0)) as errorCount, \n              sum(if(flowType='perf_flow_count', flowCount, 0)) as perfCount, \n              sum(if(flowType='other_flow_count', flowCount, 0)) as otherCount, \n              sum(if(flowType='flow_package_count', flowCount, 0)) as flowCount, \n              projectId, companyId, productType, projectName\n              FROM " + v113 + " where companyId = '" + _0x529497 + "' and productType = '" + _0x10c730 + "' " + v112 + " group by projectId, projectName LIMIT " + Number(v109) + "," + Number(_0x1cb54b) + " ";
      if (vSTART_YEAR2 < v110) {
        v111 += "\n          UNION\n        ";
      }
    }
    return await v8.query(v111, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getFlowTotalCountForCompanyId"](p311, p312 = "monitor", p313 = "") {
    const v114 = new Date().getFullYear();
    let v115 = "";
    let v116 = p313 ? "and projectName like '%" + p313 + "%'" : "";
    for (let vSTART_YEAR3 = START_YEAR; vSTART_YEAR3 <= v114; vSTART_YEAR3++) {
      const v117 = "FlowDataInfoByDay" + vSTART_YEAR3;
      v115 += "SELECT COUNT(DISTINCT projectId) as count FROM " + v117 + " where companyId = '" + p311 + "' and productType = '" + p312 + "' " + v116 + " group by projectId";
      if (vSTART_YEAR3 < v114) {
        v115 += "\n          UNION\n        ";
      }
    }
    return await v8.query(v115, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getFlowListByCompanyIdAndProjectIds"](p314, p315 = "", p316 = "", p317 = "", p318) {
    const v118 = {
      dXlVw: function (p319, p320) {
        return p319 ^ p320;
      },
      xzsno: function (p321, p322) {
        return p321 === p322;
      },
      XkXCu: "event"
    };
    const v119 = new Date().getFullYear();
    const v120 = p316 ? parseInt(p316.substring(0, 4)) : v119;
    const v121 = p317 ? parseInt(p317.substring(0, v118.dXlVw(551464, 551468))) : v119;
    let v122 = "";
    const v123 = p315.split(",").map(p323 => "'" + p323 + "'").join(",");
    for (let vV120 = v120; vV120 <= v121; vV120++) {
      const v124 = "FlowDataInfoByDay" + vV120;
      if (p318 === "monitor") {
        if (p316 && p317) {
          v122 += "SELECT\n                sum(if(flowType='pvCount', flowCount, 0)) as pvCount,  \n                sum(if(flowType='httpCount', flowCount, 0)) as httpCount, \n                sum(if(flowType='behaviorCount', flowCount, 0)) as behaviorCount,  \n                sum(if(flowType='errorCount', flowCount, 0)) as errorCount, \n                sum(if(flowType='perfCount', flowCount, 0)) as perfCount, \n                sum(if(flowType='otherCount', flowCount, 0)) as otherCount, \n                projectId, companyId\n                FROM " + v124 + " where companyId = '" + p314 + "' and projectId in (" + v123 + ") and dayName between '" + p316 + "' and '" + p317 + "' group by projectId  order by field(projectId, " + v123 + ")";
        } else {
          v122 += "SELECT\n              sum(if(flowType='pvCount', flowCount, 0)) as pvCount,  \n              sum(if(flowType='httpCount', flowCount, 0)) as httpCount, \n              sum(if(flowType='behaviorCount', flowCount, 0)) as behaviorCount,  \n              sum(if(flowType='errorCount', flowCount, 0)) as errorCount, \n              sum(if(flowType='perfCount', flowCount, 0)) as perfCount, \n              sum(if(flowType='otherCount', flowCount, 0)) as otherCount, \n          projectId, companyId\n          FROM " + v124 + " where companyId = '" + p314 + "' and projectId in (" + v123 + ") group by projectId  order by field(projectId, " + v123 + ")";
        }
      } else if (v118.xzsno(p318, v118.XkXCu)) {
        v122 = " select sum(flowCount) as totalCount, projectId, companyId from " + v124 + " where companyId = '" + p314 + "' and projectId in (" + v123 + ") and dayName between '" + p316 + "' and '" + p317 + "' group by projectId";
      }
      if (vV120 < v119) {
        v122 += "\n          UNION\n        ";
      }
    }
    return await v8.query(v122, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getTotalFlowCountByCompany"](p324) {
    const v125 = {
      EQgMo: "FlowDataInfoByDay"
    };
    const v126 = new Date().getFullYear();
    const v127 = v125.EQgMo + v126;
    let v128 = "SELECT sum(flowCount) as count FROM " + v127 + " where companyId = '" + p324 + "'";
    return await v8.query(v128, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getTotalFlowCountByCompanyForDay(p325, p326) {
    const v129 = new Date().getFullYear();
    const v130 = "FlowDataInfoByDay" + v129;
    let v131 = "SELECT sum(flowCount) as count FROM " + v130 + " where companyId = '" + p325 + "' and dayName='" + p326 + "'";
    return await v8.query(v131, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getLimitCompanyIdForCloud"]() {
    const v132 = {
      kBacR: "yyyy-MM-dd"
    };
    const v133 = new Date().Format(v132.kBacR);
    const v134 = new Date().getFullYear();
    const v135 = "FlowDataInfoByDay" + v134;
    let v136 = "SELECT c.companyId as companyId , c.total as total, p.maxFlowCount as maxFlowCount from (SELECT companyId, SUM(flowCount) as total  from " + v135 + " where dayName='" + v133 + "' group by companyId) as c, Product as p where c.companyId=p.companyId and p.isValid=1 and c.total>=p.maxFlowCount";
    return await v8.query(v136, {
      type: v8.QueryTypes.SELECT
    });
  }
}
const v137 = v8.import("../schema/menuPermissions");
v137.sync({
  force: false
});
class C8 {
  static async createMenuPermissions(p327) {
    return await v137.create({
      ...p327
    });
  }
  static async ["deleteMenuPermissions"](p328) {
    await v137.destroy({
      where: {
        id: p328
      }
    });
    return true;
  }
  static async getMenuPermissionsDetail(p329) {
    return await v137.findOne({
      where: {
        id: p329
      }
    });
  }
  static async ["getMenuPermissionsFromTeam"](p330, p331) {
    return await v137.findOne({
      where: {
        teamId: p330,
        userId: p331
      }
    });
  }
  static async updateMenuPermissions(p332, p333) {
    await v137.update({
      ...p333
    }, {
      where: {
        id: p332
      },
      fields: Object.keys(p333)
    });
    return true;
  }
}
const v138 = v8.import("../schema/message");
v138.sync({
  force: false
});
class C9 {
  static async createMessage(p334) {
    return await v138.create({
      ...p334
    });
  }
  static async deleteMessage(p335) {
    await v138.destroy({
      where: {
        id: p335
      }
    });
    return true;
  }
  static async getAllMessage() {
    let v139 = "select * from Message";
    return await v8.query(v139, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getMessageByType(p336) {
    const v140 = {
      voJUl: function (p337, p338) {
        return p337 * p338;
      }
    };
    const {
      messageType: _0x4a5bdf,
      page: _0x4a87b5,
      pageSize: _0x314d05,
      userId: _0x2fb02b
    } = p336;
    const v141 = v140.voJUl(_0x4a87b5, _0x314d05);
    const v142 = _0x2fb02b ? " and userId='" + _0x2fb02b + "' " : "";
    let v143 = "select * from Message where type='" + _0x4a5bdf + "' " + v142 + " order by createdAt desc limit " + v141 + "," + _0x314d05;
    return await v8.query(v143, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getUnReadMessageCountByType"](p339) {
    const {
      userId: _0x14a281,
      messageType: _0x31ade1
    } = p339;
    let v144 = "select isRead, count(isRead) as count from Message where  type='" + _0x31ade1 + "' and userId='" + _0x14a281 + "' GROUP BY isRead";
    return await v8.query(v144, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["readAll"](p340, p341) {
    const v145 = {
      isRead: 1
    };
    await v138.update({
      ...v145
    }, {
      where: {
        userId: p340,
        type: p341
      },
      fields: Object.keys(v145)
    });
    return true;
  }
  static async ["getMessageDetail"](p342) {
    return await v138.findOne({
      where: {
        id: p342
      }
    });
  }
  static async ["updateMessage"](p343, p344) {
    await v138.update({
      ...p344
    }, {
      where: {
        id: p343
      },
      fields: Object.keys(p344)
    });
    return true;
  }
}
const v146 = v8.import("../schema/noticeTemplate");
v146.sync({
  force: false
});
class C10 {
  static async createNoticeTemplate(p345) {
    return await v146.create({
      ...p345
    });
  }
  static async countNoticeTemplate() {
    return await v146.count();
  }
  static async getNoticeTemplateById(p346) {
    const v147 = "SELECT noticeTemplateId,templateName, noticeType, lastModified, modifyPeopleId, id from NoticeTemplates where noticeTemplateId = '" + p346 + "'";
    return await v8.query(v147, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async pageNoticeTemplate(p347, p348, p349 = "1") {
    const v148 = "SELECT noticeTemplateId,templateName, noticeType, lastModified, modifyPeopleId, id from NoticeTemplates where companyId='" + p349 + "' limit " + p347 + "," + p348;
    return await v8.query(v148, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getAllNoticeTemplate() {
    const v149 = {
      zrsQd: "SELECT noticeTemplateId,templateName from NoticeTemplates"
    };
    const v150 = v149.zrsQd;
    return await v8.query(v150, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["updateNoticeTemplate"](p350, p351) {
    await v146.update({
      ...p351
    }, {
      where: {
        id: p350
      },
      fields: Object.keys(p351)
    });
  }
  static async deleteNoticeTemplate(p352) {
    await v146.destroy({
      where: {
        noticeTemplateId: p352
      }
    });
    return true;
  }
}
const v151 = v8.import("../schema/noticeSetting");
v151.sync({
  force: false
});
class C11 {
  static async createNoticeSetting(p358) {
    return await v151.create({
      ...p358
    });
  }
  static async getNoticeSettingById(p359) {
    return await v151.findOne({
      where: {
        id: p359
      }
    });
  }
  static async ["getNoticeSettingsById"](p360) {
    const v152 = "SELECT id, noticePeopleId,noticeTeamId, channel, cycle, slienceTime from NoticeSettings where noticeTemplateId = '" + p360 + "'";
    return await v8.query(v152, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async pageNoticeSetting(p361, p362) {
    const v153 = {
      jjGvx: function (p363, p364) {
        return p363 + p364;
      }
    };
    const v154 = v153.jjGvx("SELECT * from AlarmRule limit " + p361 + ",", p362);
    return await v8.query(v154, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["updateNoticeSetting"](p365, p366) {
    await v151.update({
      ...p366
    }, {
      where: {
        id: p365
      },
      fields: Object.keys(p366)
    });
  }
  static async ["deleteNoticeSetting"](p367) {
    await v151.destroy({
      where: {
        noticeTemplateId: p367
      }
    });
    return true;
  }
}
const v155 = v8.import("../schema/orderInfo");
v155.sync({
  force: false
});
class C12 {
  static async createOrderInfo(p368) {
    return await v155.create({
      ...p368
    });
  }
  static async updateByOrderId(p369, p370) {
    await v155.update({
      ...p370
    }, {
      where: {
        orderId: p369
      },
      fields: Object.keys(p370)
    });
    return true;
  }
  static async getOrderDetail(p371) {
    return await v155.findOne({
      where: {
        orderId: p371
      }
    });
  }
  static async ["getOrderInfoListByCompanyId"](p372) {
    let v156 = "select * from OrderInfo where companyId='" + p372 + "'";
    return await v8.query(v156, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getOrderInfoListByUserId"](p373) {
    let v157 = "select * from OrderInfo where userId='" + p373 + "' order by createdAt desc";
    return await v8.query(v157, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async checkSameOrder(p374, p375, p376, p377) {
    let v158 = "select * from OrderInfo where userId='" + p374 + "' and productType=" + p375 + " and maxFlowCount=" + p376 + " and price=" + p377 + " and isPay=0";
    return await v8.query(v158, {
      type: v8.QueryTypes.SELECT
    });
  }
}
const v159 = v8.import("../schema/product");
v159.sync({
  force: false
});
class C13 {
  static async createProduct(p378) {
    return await v159.create({
      ...p378
    });
  }
  static async getProductDetail(p379) {
    return await v159.findOne({
      where: {
        id: p379
      }
    });
  }
  static async getProductDetailByCompanyId(p380) {
    return await v159.findOne({
      where: {
        companyId: p380,
        isValid: 1
      }
    });
  }
  static async ["updateProductByCompanyId"](p381, p382) {
    await v159.update({
      ...p382
    }, {
      where: {
        companyId: p381
      },
      fields: Object.keys(p382)
    });
    return true;
  }
  static async ["updateProduct"](p383, p384, p385) {
    await v159.update({
      ...p385
    }, {
      where: {
        companyId: p383,
        month: p384
      },
      fields: Object.keys(p385)
    });
    return true;
  }
  static async ["deleteProduct"](p386) {
    await v159.destroy({
      where: {
        id: p386
      }
    });
    return true;
  }
  static async getProjectByCompanyIdForMonth(p387, p388) {
    let v160 = "select * from Product where companyId='" + p387 + "' and month='" + p388 + "' and isValid=1";
    return await v8.query(v160, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getProjectPackageByCompanyId"](p389) {
    let v161 = "select * from Product where companyId='" + p389 + "' and productType between 70 and 79 and isValid=1";
    return await v8.query(v161, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async batchQueryProductByOrderId(p390) {
    const v162 = {
      sgSIo: "orderId",
      CaYse: "month",
      HscWP: "companyId"
    };
    return v159.findAll({
      where: {
        orderId: p390
      },
      attributes: [v162.sgSIo, v162.CaYse, "usedFlowCount", "maxFlowCount", v162.HscWP, "productType"]
    });
  }
  static async ["batchCreateProduct"](p391) {
    return await v159.bulkCreate(p391);
  }
  static async batchUpdateProductByOrderId(p392, p393) {
    return await v159.update({
      ...p393
    }, {
      where: {
        orderId: p392
      },
      fields: Object.keys(p393)
    });
  }
  static async getValidProduct(p394) {
    let v163 = "select * from Product where companyId='" + p394 + "' and isValid=1";
    return await v8.query(v163, {
      type: v8.QueryTypes.SELECT
    });
  }
}
const v164 = v8.import("../schema/config");
v164.sync({
  force: false
});
class C14 {
  static async createConfig(p405) {
    return await v164.create({
      ...p405
    });
  }
  static async getConfigDetail(p406) {
    return await v164.findOne({
      where: {
        id: p406
      }
    });
  }
  static async ["getConfigByName"](p407) {
    return await v164.findOne({
      where: {
        configName: p407
      }
    });
  }
  static async updateConfig(p408, p409) {
    await v164.update({
      ...p409
    }, {
      where: {
        configName: p408
      },
      fields: Object.keys(p409)
    });
    return true;
  }
  static async ["getConfigByConfigName"](p410) {
    const v165 = {
      CQESG: function (p411, p412) {
        return p411 + p412;
      },
      kuvaF: "select * from Config where configName='"
    };
    let v166 = v165.CQESG(v165.kuvaF + p410, "'");
    return await v8.query(v166, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getAllConfigList() {
    const v167 = {
      roMVw: "select * from Config"
    };
    let v168 = v167.roMVw;
    return await v8.query(v168, {
      type: v8.QueryTypes.SELECT
    });
  }
}
function f34(p413, p414) {
  const v_0x8c4a = f40();
  f34 = function (p415, p416) {
    p415 = p415 - 0;
    let v169 = v_0x8c4a[p415];
    if (f34.JvHOpi === undefined) {
      function f35(p417) {
        const v170 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let v171 = "";
        let v172 = "";
        for (let v173 = 0, v174, v175, v176 = 0; v175 = p417.charAt(v176++); ~v175 && (v174 = v173 % 4 ? v174 * 64 + v175 : v175, v173++ % 4) ? v171 += String.fromCharCode(v174 >> (v173 * -2 & 6) & 255) : 0) {
          v175 = v170.indexOf(v175);
        }
        for (let v177 = 0, v178 = v171.length; v177 < v178; v177++) {
          v172 += "%" + ("00" + v171.charCodeAt(v177).toString(16)).slice(-2);
        }
        return decodeURIComponent(v172);
      }
      const vF2 = function (p418, p419) {
        let v179 = [];
        let v180 = 0;
        let v181;
        let v182 = "";
        p418 = f35(p418);
        let v183;
        for (v183 = 0; v183 < 256; v183++) {
          v179[v183] = v183;
        }
        for (v183 = 0; v183 < 256; v183++) {
          v180 = (v180 + v179[v183] + p419.charCodeAt(v183 % p419.length)) % 256;
          v181 = v179[v183];
          v179[v183] = v179[v180];
          v179[v180] = v181;
        }
        v183 = 0;
        v180 = 0;
        for (let v184 = 0; v184 < p418.length; v184++) {
          v183 = (v183 + 1) % 256;
          v180 = (v180 + v179[v183]) % 256;
          v181 = v179[v183];
          v179[v183] = v179[v180];
          v179[v180] = v181;
          v182 += String.fromCharCode(p418.charCodeAt(v184) ^ v179[(v179[v183] + v179[v180]) % 256]);
        }
        return v182;
      };
      f34.biBpFd = vF2;
      p413 = arguments;
      f34.JvHOpi = true;
    }
    const v185 = v_0x8c4a[0];
    const v186 = p415 + v185;
    const v187 = p413[v186];
    if (!v187) {
      if (f34.RURSha === undefined) {
        f34.RURSha = true;
      }
      v169 = f34.biBpFd(v169, p416);
      p413[v186] = v169;
    } else {
      v169 = v187;
    }
    return v169;
  };
  return f34(p413, p414);
}
undefined;
const v189 = v8.import("../schema/applicationConfig");
function f37(p424, p425) {
  const v_0x8c4a2 = f40();
  f37 = function (p426, p427) {
    p426 = p426 - 0;
    let v190 = v_0x8c4a2[p426];
    if (f37.proWgq === undefined) {
      function f38(p428) {
        const v191 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let v192 = "";
        let v193 = "";
        for (let v194 = 0, v195, v196, v197 = 0; v196 = p428.charAt(v197++); ~v196 && (v195 = v194 % 4 ? v195 * 64 + v196 : v196, v194++ % 4) ? v192 += String.fromCharCode(v195 >> (v194 * -2 & 6) & 255) : 0) {
          v196 = v191.indexOf(v196);
        }
        for (let v198 = 0, v199 = v192.length; v198 < v199; v198++) {
          v193 += "%" + ("00" + v192.charCodeAt(v198).toString(16)).slice(-2);
        }
        return decodeURIComponent(v193);
      }
      f37.gbzYnB = f38;
      p424 = arguments;
      f37.proWgq = true;
    }
    const v200 = v_0x8c4a2[0];
    const v201 = p426 + v200;
    const v202 = p424[v201];
    if (!v202) {
      v190 = f37.gbzYnB(v190);
      p424[v201] = v190;
    } else {
      v190 = v202;
    }
    return v190;
  };
  return f37(p424, p425);
}
undefined;
v189.sync({
  force: false
});
class C15 {
  static async ["createApplicationConfig"](p433) {
    return await v189.create({
      ...p433
    });
  }
  static async getApplicationConfigDetail(p434) {
    return await v189.findOne({
      where: {
        id: p434
      }
    });
  }
  static async ["updateApplicationConfig"](p435, p436) {
    await v189.update({
      ...p436
    }, {
      where: {
        systemName: p435
      },
      fields: Object.keys(p436)
    });
    return true;
  }
  static async getApplicationConfigByConfigName(p437) {
    const v205 = {
      IVXku: "select * from ApplicationConfig where systemName='"
    };
    let v206 = v205.IVXku + p437 + "'";
    return await v8.query(v206, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getAllApplicationConfig() {
    let v207 = "select systemName, configValue from ApplicationConfig";
    return await v8.query(v207, {
      type: v8.QueryTypes.SELECT
    });
  }
}
class C16 {
  static async createFlowDataInfoByHour(p438) {
    const v208 = {
      QCMyf: function (p439, p440) {
        return p439 - p440;
      },
      XfdNW: function (p441, p442) {
        return p441 ^ p442;
      },
      tIZiy: "DEFAULT",
      MUcjR: function (p443, p444) {
        return p443 + p444;
      },
      liTTc: "DEFAULT, "
    };
    let v209 = "";
    let v210 = "";
    const v211 = ["id", "createdAt", "updatedAt", "companyId", "projectId", "flowOrigin", "flowType", "hourName", "flowCount"];
    v211.forEach((p445, p446) => {
      if (p446 == v208.QCMyf(v211.length, v208.XfdNW(818756, 818757))) {
        v209 += "`" + p445 + "`";
        let v212 = p438[p445];
        if (v212 != undefined) {
          v210 += "'" + v212 + "'";
        } else {
          v210 += v208.tIZiy;
        }
      } else {
        v209 += "`" + p445 + "`, ";
        let v213 = p438[p445];
        switch (p445) {
          case "id":
            v213 = new Date().getTime() + vRequire2.getUuid();
            break;
          case "createdAt":
          case "updatedAt":
            v213 = new Date().Format("yyyy-MM-dd hh:mm:ss");
            break;
          default:
            break;
        }
        if (v213 != undefined) {
          v210 += v208.MUcjR("'", v213) + "', ";
        } else {
          v210 += v208.liTTc;
        }
      }
    });
    const v214 = new Date().Format("yyyyMMdd");
    const v215 = "FlowDataInfoByHour" + v214;
    let v216 = "INSERT INTO " + v215 + " (" + v209 + ") VALUES (" + v210 + ")";
    return await v8.query(v216, {
      type: v8.QueryTypes.INSERT
    });
  }
  static async createFlowDataInfosByHour(p447) {
    return await v8.query(p447, {
      type: v8.QueryTypes.INSERT
    });
  }
  static async calculateFlowCountByDay(p448) {
    const v217 = {
      qOswt: "FlowDataInfoByHour"
    };
    const v218 = vRequire4.setTableName(v217.qOswt, p448, "");
    let v219 = " select companyId, projectId, projectName, flowType, productType, sum(flowCount) as flowCount from " + v218 + " group by companyId, projectId, projectName, flowType, productType ";
    return await v8.query(v219, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["calculateTotalFlowCountByDay"](p449) {
    const v220 = {
      NfvfF: "FlowDataInfoByHour"
    };
    const v221 = vRequire4.setTableName(v220.NfvfF, p449, "");
    let v222 = " select companyId, sum(flowCount) as flowCount from " + v221 + " where flowType='" + FLOW_TYPE.TOTAL_FLOW_COUNT + "' group by companyId";
    return await v8.query(v222, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getHourFlowTrendDataForCompanyId(p450, p451, p452) {
    const v223 = {
      NgVne: "FlowDataInfoByHour"
    };
    const v224 = new Date().Format("yyyyMMdd");
    const v225 = v223.NgVne + v224;
    const v226 = p452.split(",").map(p453 => "'" + p453 + "'").join(",");
    let v227 = "SELECT projectId, productType, sum(flowCount) as count, hourName FROM " + v225 + " where companyId = '" + p450 + "' and flowType='total_flow_count' and productType='" + p451 + "' and projectId in (" + v226 + ") group by hourName, projectId order by field(projectId, " + v226 + ")";
    return await v8.query(v227, {
      type: v8.QueryTypes.SELECT
    });
  }
}
const v228 = v8.import("../schema/team");
v228.sync({
  force: false
});
class C17 {
  static async ["createTeam"](p454) {
    return await v228.create({
      ...p454
    });
  }
  static async ["deleteTeam"](p455) {
    await v228.destroy({
      where: {
        id: p455
      }
    });
    return true;
  }
  static async getTeamDetail(p456) {
    return await v228.findOne({
      where: {
        id: p456
      }
    });
  }
  static async getTeamDetailByName(p457) {
    return await v228.findOne({
      where: {
        teamName: p457
      }
    });
  }
  static async ["updateTeam"](p458, p459) {
    await v228.update({
      ...p459
    }, {
      where: {
        id: p458
      },
      fields: Object.keys(p459)
    });
    return true;
  }
  static async ["getTeamList"](p460, p461, p462) {
    let v229 = "";
    if (p461 === "admin" || p461 === "superAdmin") {
      v229 = "select * from Team where companyId='" + p462 + "'";
    } else {
      v229 = "select * from Team where companyId='" + p462 + "' and members like '%" + p460 + "%'";
    }
    return await v8.query(v229, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getTeamListWithTeamId(p463, p464, p465, p466) {
    let v230 = "";
    if (p464 === "admin" || p464 === "superAdmin") {
      v230 = "select * from Team where companyId='" + p465 + "' and id='" + p466 + "'";
    } else {
      v230 = "select * from Team where companyId='" + p465 + "' and members like '%" + p463 + "%' and id='" + p466 + "'";
    }
    return await v8.query(v230, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getAllTeamList() {
    const v231 = {
      SIEgJ: "select * from Team"
    };
    let v232 = v231.SIEgJ;
    return await v8.query(v232, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getTeamCount() {
    let v233 = "select count(*) as count from Team";
    return await v8.query(v233, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getTeamMembersByWebMonitorId(p467) {
    let v234 = "select leaderId, members from Team where FIND_IN_SET('" + p467 + "', webMonitorIds)";
    return await v8.query(v234, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async findTeamListByLeaderId(p468) {
    const v235 = {
      AWPIW: "select * from Team where FIND_IN_SET('"
    };
    let v236 = v235.AWPIW + p468 + "', members)";
    return await v8.query(v236, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async checkTeamLeader(p469, p470) {
    let v237 = "select * from Team where id='" + p469 + "' and leaderId='" + p470 + "'";
    return await v8.query(v237, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async checkTeamMember(p471, p472) {
    let v238 = "select * from Team where id='" + p471 + "' and  FIND_IN_SET('" + p472 + "', members)";
    return await v8.query(v238, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getTeamMemberIds(p473) {
    return await v228.findOne({
      where: {
        companyId: p473
      }
    });
  }
  static async getTeamByProjectId(p474) {
    let v239 = "select * from Team where FIND_IN_SET('" + p474 + "', webMonitorIds)";
    return await v8.query(v239, {
      type: v8.QueryTypes.SELECT
    });
  }
}
const v240 = v8.import("../schema/user");
v240.sync({
  force: false
});
class C18 {
  static async createUser(p475) {
    return await v240.create({
      ...p475
    });
  }
  static async updateUser(p476, p477) {
    await v240.update({
      ...p477
    }, {
      where: {
        id: p476
      },
      fields: Object.keys(p477)
    });
    return true;
  }
  static async updateUserByUserId(p478, p479) {
    await v240.update({
      ...p479
    }, {
      where: {
        userId: p478
      },
      fields: Object.keys(p479)
    });
    return true;
  }
  static async resetPwd(p480, p481) {
    await v240.update({
      ...p481
    }, {
      where: {
        emailName: p480
      },
      fields: Object.keys(p481)
    });
    return true;
  }
  static async ["getUserByOpenid"](p482) {
    let v241 = "select * from User where openid='" + p482 + "'";
    return await v8.query(v241, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getUserList() {
    let v242 = "select id, userId, nickname from User where registerStatus='1'";
    return await v8.query(v242, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getUserByPhone"](p483) {
    let v243 = "select id from User where phone='" + p483 + "'";
    return await v8.query(v243, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getUserForAdmin(p484) {
    const v244 = {
      CznVg: "select id, companyId, userId, userType, phone, nickname, emailName, avatar, groupId, registerStatus, createdAt, updatedAt from User where userType='admin' or userType='superAdmin' "
    };
    const v245 = p484 ? " and companyId='" + p484 + "' " : "";
    let v246 = v244.CznVg + v245;
    return await v8.query(v246, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getUserListByAdmin"](p485, p486) {
    const v247 = {
      KgPwY: function (p487, p488) {
        return p487 ^ p488;
      }
    };
    let v248 = " where companyId='" + p486 + "'";
    let v249 = "";
    switch (p485) {
      case 0:
      case v247.KgPwY(632425, 632424):
        v249 = " and registerStatus=" + p485 + " ";
        break;
      default:
        break;
    }
    let v250 = "select id, userId, userType, nickname, emailName, avatar, registerStatus, groupId, createdAt, updatedAt from User " + v248 + v249;
    return await v8.query(v250, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getUserInfo"](p489) {
    let v251 = "select companyId, userId, userType, phone, nickname, emailName, avatar, openid from User where userId='" + p489 + "'";
    return await v8.query(v251, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getUserListByMembers(p490) {
    const v252 = {
      wFGoB: function (p491, p492) {
        return p491 + p492;
      }
    };
    let v253 = v252.wFGoB("select id, companyId, userId, userType, phone, nickname, emailName, avatar, groupId, registerStatus, createdAt, updatedAt  from User where FIND_IN_SET(userId, '", p490) + "')";
    return await v8.query(v253, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getUserListByViewers"](p493) {
    const v254 = {
      XvnBG: function (p494, p495) {
        return p494 + p495;
      }
    };
    let v255 = v254.XvnBG("select id, companyId, userId, userType, phone, nickname, emailName, avatar, groupId, registerStatus, createdAt, updatedAt from User where FIND_IN_SET(userId, '" + p493, "')");
    return await v8.query(v255, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getAllUserInfoForSimple(p496 = "") {
    let v256 = "select id, userId, nickname, emailName, avatar from User where registerStatus='1' and companyId='" + p496 + "'";
    return await v8.query(v256, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async getUsersByUserIds(p497) {
    let v257 = "";
    p497.forEach((p498, p499) => {
      if (p499 === p497.length - 1) {
        v257 += "'" + p498 + "'";
      } else {
        v257 += "'" + p498 + "',";
      }
    });
    const v258 = v257.length ? " where userId in (" + v257 + ") " : "";
    let v259 = "select userId, nickname, emailName, phone, avatar from User " + v258;
    return await v8.query(v259, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["activeRegisterMember"](p500) {
    const v260 = {
      registerStatus: 1
    };
    await v240.update({
      ...v260
    }, {
      where: {
        userId: p500
      },
      fields: Object.keys(v260)
    });
    return true;
  }
  static async getUserDetail(p501) {
    return await v240.findOne({
      where: {
        id: p501
      }
    });
  }
  static async getUserDetailByEmail(p502) {
    return await v240.findOne({
      where: {
        emailName: p502
      }
    });
  }
  static async ["getUserForPwd"](p503) {
    return await v240.findOne({
      where: {
        ...p503
      }
    });
  }
  static async ["getAdminByType"](p504) {
    return await v240.findOne({
      where: {
        userType: p504
      }
    });
  }
  static async checkUserAccount(p505) {
    return await v240.findOne({
      where: {
        emailName: p505
      }
    });
  }
  static async checkUserByPhoneOrEmail(p506, p507) {
    const v261 = {
      Ytleu: function (p508, p509) {
        return p508 && p509;
      }
    };
    let v262 = "";
    if (v261.Ytleu(p506, p507)) {
      v262 = "phone='" + p506 + "' or emailName='" + p507 + "'";
    } else if (p506) {
      v262 = "phone='" + p506 + "'";
    } else if (p507) {
      v262 = "emailName='" + p507 + "'";
    }
    let v263 = "select id, companyId, userId, userType, phone, nickname, emailName, avatar, groupId, registerStatus, createdAt, updatedAt from User where " + v262;
    return await v8.query(v263, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async isAdminAccount(p510, p511) {
    return await v240.findOne({
      where: {
        emailName: p510,
        userType: p511
      }
    });
  }
  static async deleteUser(p512) {
    await v240.destroy({
      where: {
        id: p512
      }
    });
    return true;
  }
  static async ["checkAdminAccount"]() {
    let v264 = "select count(id) as count from User where userType='superAdmin'";
    return await v8.query(v264, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["getUserCount"]() {
    let v265 = "select count(id) as count from User";
    return await v8.query(v265, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async deleteUserByUserId(p513) {
    await v240.destroy({
      where: {
        userId: p513
      }
    });
    return true;
  }
  static async setAdmin(p514, p515) {
    const v266 = {
      gzOpV: function (p516, p517) {
        return p516 === p517;
      }
    };
    let v267 = {
      userType: "admin"
    };
    if (v266.gzOpV(p515, "a")) {
      v267 = {
        userType: "admin"
      };
    } else if (p515 === "c") {
      v267 = {
        userType: "customer"
      };
    }
    await v240.update({
      ...v267
    }, {
      where: {
        userId: p514
      },
      fields: Object.keys(v267)
    });
    return true;
  }
  static async resetSuperAdmin(p518, p519) {
    const v268 = {
      ujkbB: "superAdmin"
    };
    const v269 = {
      userType: v268.ujkbB
    };
    await v240.update({
      ...v269
    }, {
      where: {
        userId: p519
      },
      fields: Object.keys(v269)
    });
    const v270 = {
      userType: "customer"
    };
    await v240.update({
      ...v270
    }, {
      where: {
        userId: p518
      },
      fields: Object.keys(v270)
    });
    return true;
  }
}
const v271 = v8.import("../schema/triggerCondition");
v271.sync({
  force: false
});
class C19 {
  static async ["createTriggerCondition"](p525) {
    return await v271.create({
      ...p525
    });
  }
  static async getTriggerConditionsById(p526) {
    const v272 = "SELECT id,alarmIndex,statCycle,ruleId,calculateType,conditionSymbol,seriousData,warningData,infoData,commonData,duration,timeInterval,conditionMeetWay from TriggerConditions where ruleId = '" + p526 + "'";
    return await v8.query(v272, {
      type: v8.QueryTypes.SELECT
    });
  }
  static async ["updateTriggerCondition"](p527, p528) {
    await v271.update({
      ...p528
    }, {
      where: {
        id: p527
      },
      fields: Object.keys(p528)
    });
  }
  static async deleteTriggerCondition(p529) {
    await v271.destroy({
      where: {
        ruleId: p529
      }
    });
    return true;
  }
}
module.exports = {
  UserTokenModel: C,
  AlarmItemModel: C2,
  AlarmRuleModel: C3,
  ApplicationConfigModel: C15,
  CommonTableModel: C4,
  AlarmTriggerModel: C5,
  CompanyModel: C6,
  ConfigModel: C14,
  FlowDataInfoByDayModel: C7,
  FlowDataInfoByHourModel: C16,
  MenuPermissionsModel: C8,
  MessageModel: C9,
  NoticeTemplateModel: C10,
  NoticeSettingModel: C11,
  OrderInfoModel: C12,
  ProductModel: C13,
  TeamModel: C17,
  TriggerConditionModel: C19,
  UserModel: C18
};
function f42(p530) {
  const v273 = {
    qfnMY: function (p531, p532) {
      return p531 !== p532;
    },
    xKeif: function (p533, p534) {
      return p533 / p534;
    },
    IejVh: "length",
    bSnru: function (p535, p536) {
      return p535 === p536;
    },
    hxlCJ: function (p537, p538) {
      return p537 + p538;
    }
  };
  function f43(p539) {
    function f44(p540, p541, p542, p543, p544) {
      return f37(p543 - 525, p541);
    }
    function f46(p550, p551, p552, p553, p554) {
      return f34(p552 - -217, p551);
    }
    function f51(p575, p576, p577, p578, p579) {
      return f37(p578 - -907, p576);
    }
    if (typeof p539 === "string") {
      return function (p580) {}.constructor("while (true) {}").apply("counter");
    } else if (v273.qfnMY(("" + v273.xKeif(p539, p539))[v273.IejVh], 1) || v273.bSnru(p539 % 20, 0)) {
      (function () {
        return true;
      }).constructor("debu" + "gger").call("action");
    } else {
      (function () {
        return false;
      }).constructor(v273.hxlCJ("debu", "gger")).apply("stateObject");
    }
    function f52(p581, p582, p583, p584, p585) {
      return f34(p581 - 875, p584);
    }
    f43(++p539);
  }
  try {
    if (p530) {
      return f43;
    } else {
      f43(0);
    }
  } catch (_0x309c36) {}
}