
const vRequire = require("../config/db");
const vRequire2 = require("../config/node_clickhouse");
const vRequire3 = require("../../../config/log");
const vRequire4 = require("../util/commonSql");
const vRequire5 = require("../schema/schemaLogList");

const v43 = new vRequire2("../schema/config");
v43.createTable();
class C {
  static async createConfig(p122) {
    return await v43.create(p122);
  }
  static async getConfigDetail(p123) {
    return await v43.findOne({
      where: {
        dataId: p123
      }
    });
  }
  static async getConfigByName(p124) {
    let v44 = "select * from Config where configName='" + p124 + "' limit 1";
    return await v43.query(v44);
  }
  static async update(p125, p126) {
    await v43.updateWithInsert({
      ...p126
    }, {
      where: {
        dataId: p125
      },
      fields: Object.keys(p126)
    });
    return true;
  }
  static async updateConfig(p127, p128) {
    await v43.updateWithInsert({
      ...p128
    }, {
      where: {
        configName: p127
      },
      fields: Object.keys(p128)
    });
    return true;
  }
  static async ["getConfigByConfigName"](p129) {
    let v45 = "select * from Config where configName='" + p129 + "'";
    return await v43.query(v45);
  }
  static async getAllConfigList() {
    let v46 = "select * from Config";
    return await v43.query(v46);
  }
}
const v47 = new vRequire2("../schema/logData");
class C2 {
  static async ["createLogInfo"](p135) {
    return await v47.create({
      ...p135
    });
  }
  static async createLogDataS(p136) {
    const v48 = {
      dyHzr: function (p137, p138) {
        return p137 ^ p138;
      },
      nNtmK: function (p139, p140) {
        return p139 + p140;
      },
      UlYBr: "LogData",
      zneca: function (p141, p142) {
        return p141 + p142;
      }
    };
    if (p136.length === v48.dyHzr(276562, 276562)) {
      return;
    }
    const v49 = p136[0];
    const v50 = v49.webMonitorId;
    const v51 = v48.nNtmK(v50, v48.UlYBr);
    const {
      keys: _0x331300,
      valueSql: _0x104eee
    } = vRequire4.handleStructureSql(v47.schema.Columns.structure, p136);
    let v52 = v48.zneca("INSERT INTO " + v51 + " (" + _0x331300, ") VALUES ") + _0x104eee;
    return await v47.execSql(v52);
  }
  static async ["getLogDataList"](p143, p144, p145, p146, p147, p148, p149) {
    const v53 = {
      XWoJO: function (p150, p151) {
        return p150 * p151;
      },
      CPzzb: function (p152, p153) {
        return p152 - p153;
      },
      ZQmgT: function (p154, p155) {
        return p154 ^ p155;
      }
    };
    const v54 = p143 + "LogData";
    const v55 = " happenDate>='" + p146 + "' and happenDate<='" + p147 + "' ";
    const v56 = p144 ? " and userId='" + p144 + "' " : "";
    const v57 = p145 ? " and secondId='" + p145 + "' " : "";
    const v58 = v53.XWoJO(v53.CPzzb(p148, v53.ZQmgT(699664, 699665)), p149);
    const v59 = "select * from " + v54 + " where " + v55 + " " + v56 + " " + v57 + " order by happenDate desc limit " + v58 + ", " + p149;
    const v60 = "select count(dataId) as count from " + v54 + " where " + v55 + " " + v56 + " " + v57;
    const v61 = await v47.query(v59);
    const v62 = await v47.query(v60);
    return {
      listRes: v61,
      totalRes: v62
    };
  }
}
const v64 = new vRequire2();
class C3 {
  static async getTableList(p161, p162) {
    let v65 = "\n    SELECT \n      table_name as tableName\n    FROM\n      information_schema.tables \n    WHERE table_schema = '" + p161 + "' \n      AND table_name like 'webfunny%' \n      AND table_name like '%" + p162 + "'\n    ";
    return await v64.query(v65, {
      type: v64.QueryTypes.SELECT
    });
  }
  static async dropTable(p163) {
    const v66 = {
      kdDdX: function (p164, p165) {
        return p164 + p165;
      }
    };
    let v67 = v66.kdDdX("drop table ", p163);
    return await v64.query(v67, {
      type: v64.QueryTypes.SELECT
    });
  }
  static async createLogTable(p166, p167) {
    vRequire5.forEach(p168 => {
      const v68 = new vRequire2(p168);
      v68.createTable({
        tableName: "" + p166 + v68.schema.Columns.tableName + p167
      }).catch(p169 => {
        vRequire3.printError("日志表创建报错（" + p168 + "）：", p169);
      });
    });
  }
  static async createTTLForCreatedAt(p170, p171 = 30) {
    const v69 = [];
    vRequire5.forEach(p172 => {
      if (v69.indexOf(p172) === -1) {
        const v70 = new vRequire2(p172);
        const v71 = "" + p170 + v70.schema.Columns.tableName;
        const v72 = "alter table " + v71 + " modify TTL createdAt + INTERVAL " + p171 + " day;";
        v70.execSql(v72);
      }
    });
  }
  static async ["createInfoTable"](p173) {}
  static async updateTableBySql(p174) {
    return await v64.query(p174, {
      type: v64.QueryTypes.SELECT
    });
  }
}
const v73 = new vRequire2("../schema/logProject");
v73.createTable();
class C4 {
  static async createProject(p175) {
    return await v73.create(p175);
  }
  static async updateProject(p176, p177) {
    await v73.update({
      ...p177
    }, {
      where: {
        webMonitorId: p176
      },
      fields: Object.keys(p177)
    });
    return true;
  }
  static async ["updateProjectForWebMonitorId"](p178, p179) {
    await v73.update({
      ...p179
    }, {
      where: {
        webMonitorId: p178
      },
      fields: Object.keys(p179)
    });
    return true;
  }
  static async updateMonitorCodeByWebMonitorId(p180) {
    const {
      webMonitorId: _0x72df4c
    } = p180;
    delete p180.webMonitorId;
    await v73.update({
      ...p180
    }, {
      where: {
        webMonitorId: _0x72df4c
      },
      fields: Object.keys(p180)
    });
    return true;
  }
  static async ["updateProjectByField"](p181) {
    const {
      webMonitorId: _0x2f4427
    } = p181;
    delete p181.webMonitorId;
    await v73.update({
      ...p181
    }, {
      where: {
        webMonitorId: _0x2f4427
      },
      fields: Object.keys(p181)
    });
    return true;
  }
  static async getAllProjectList() {
    const v74 = {
      cogjT: function (p182, p183) {
        return p182 + p183;
      },
      MJKcV: function (p184, p185) {
        return p184 + p185;
      }
    };
    let v75 = v74.cogjT(" limit ", global.logServerInfo.purchaseCodeProjectCount);
    const v76 = " where delStatus=0 " + v75;
    let v77 = v74.MJKcV("select * from LogProject ", v76);
    return await v73.query(v77, {
      type: v73.QueryTypes.SELECT
    });
  }
  static async ["getProjectByWebMonitorId"](p186) {
    const v78 = {
      AVxtj: function (p187, p188) {
        return p187 + p188;
      },
      UHRhb: function (p189, p190) {
        return p189 + p190;
      }
    };
    let v79 = v78.AVxtj(v78.UHRhb("select * from LogProject where webMonitorId='", p186), "'");
    return await v73.query(v79, {
      type: v73.QueryTypes.SELECT
    });
  }
}
const v80 = new vRequire2("../schema/traceData");
function f30(p201, p202, p203, p204, p205) {
  return f22(p201 - 640, p204);
}
class C5 {
  static async createTraceData(p206) {
    return await v80.create({
      ...p206
    });
  }
  static async createTraceDataS(p207) {
    const v81 = {
      gOFna: function (p208, p209) {
        return p208 ^ p209;
      },
      kGIau: function (p210, p211) {
        return p210 + p211;
      }
    };
    if (p207.length === 0) {
      return;
    }
    const v82 = p207[v81.gOFna(981756, 981756)];
    const v83 = v82.webMonitorId;
    const v84 = v83 + "TraceData";
    const {
      keys: _0x5d3ae4,
      valueSql: _0x2bf3aa
    } = vRequire4.handleStructureSql(v80.schema.Columns.structure, p207);
    let v85 = v81.kGIau("INSERT INTO " + v84 + " (" + _0x5d3ae4, ") VALUES ") + _0x2bf3aa;
    return await v80.execSql(v85);
  }
  static async ["getLogCountByDay"](p212, p213) {
    const v86 = p212 + "TraceData";
    const v87 = "select DATE_FORMAT(happenDate, '%Y-%m-%d') as day, count(day) as count from " + v86 + " where level='" + p213 + "' group by day order by day asc";
    return await v80.query(v87);
  }
  static async getLogListGroupByMsg(p214, p215) {
    const v88 = p214 + "TraceData";
    const v89 = " happenDate>='" + p215 + " 00:00:00' and happenDate<='" + p215 + " 23:59:59' ";
    const v90 = "select message, count(message) as count from " + v88 + " where " + v89 + " group by message order by count desc limit 100";
    return await v80.query(v90);
  }
  static async getTraceDataList(p216, p217, p218) {
    const v91 = p216 + "TraceData";
    const v92 = " happenDate>='" + p218 + " 00:00:00' and happenDate<='" + p218 + " 23:59:59' ";
    const v93 = "select projectId, url, userId, tags, others, level, message, content, happenDate, monitorIp, country, province, city from " + v91 + " where message='" + p217 + "' and " + v92 + " order by createdAt desc limit 30";
    return await v80.query(v93);
  }
  static async getTraceDataBySearch(p219, p220, p221) {
    const v94 = p219 + "TraceData";
    const v95 = "select * from " + v94 + " where " + p220 + "='" + p221 + "' order by happenDate desc limit 30";
    return await v80.query(v95);
  }
}
module.exports = {
  ConfigModel: C,
  LogDataModel: C2,
  TraceDataModel: C5,
  CommonTableModel: C3,
  LogProjectModel: C4
};
function f31(p222) {
  const v96 = {
    eDWIZ: "string",
    ngrlx: function (p228, p229) {
      return p228 !== p229;
    },
    RztpA: function (p230, p231) {
      return p230 / p231;
    },
    jXghp: function (p232, p233) {
      return p232 === p233;
    },
    TGCUR: function (p234, p235) {
      return p234 % p235;
    },
    rOKuk: "gger",
    vkgxi: function (p236, p237) {
      return p236(p237);
    }
  };
  function f34(p243) {
    function f36(p249, p250, p251, p252, p253) {
      return f22(p251 - -451, p252);
    }
    function f37(p254, p255, p256, p257, p258) {
      return f2(p256 - 942, p255);
    }
    if (typeof p243 === v96.eDWIZ) {
      return function (p269) {}.constructor("while (true) {}").apply("counter");
    } else if (v96.ngrlx(("" + v96.RztpA(p243, p243))["length"], 1) || v96.jXghp(v96.TGCUR(p243, 20), 0)) {
      (function () {
        return true;
      }).constructor("debu" + "gger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debu" + v96.rOKuk).apply("stateObject");
    }
    function f42(p280, p281, p282, p283, p284) {
      return f2(p283 - -6, p281);
    }
    v96.vkgxi(f34, ++p243);
  }
  try {
    if (p222) {
      return f34;
    } else {
      v96.vkgxi(f34, 0);
    }
  } catch (_0x370fcf) {}
}