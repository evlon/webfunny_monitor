
const vRequire = require("../config/node_clickhouse");
const vRequire2 = require("../util/utils");

const vRequire3 = require("../util/utils");
const vRequire4 = require("geoip-lite");
const vRequire5 = require("../../../config/log");
const vRequire6 = require("../../../middlreware/loggerUpload");
const vRequire7 = require("../util/commonSql");
const {
  UPLOAD_TYPE
} = require("../config/consts");
const vRequire8 = require("../config/AccountConfig");
const {
  accountInfo
} = vRequire8;
const vRequire9 = require("source-map");
const fs2 = require("fs");
const vRequire10 = require("node-fetch");
const v21 = new vRequire("../schema/buryPointAlarm");
v21.createTable();
class C {
  static async ["create"](p99) {
    return await v21.createWithRes({
      ...p99
    });
  }
  static async detail(p100) {
    const v22 = await v21.findOne({
      where: {
        id: p100
      }
    });
    const [v23, v24, v25, v26] = v22.rule.split(",");
    v22.rule = v23;
    v22.threshold = v24;
    v22.count = v25;
    v22.thresholdType = v26;
    v22.silentTime = v22.silentTime.split(",");
    return v22;
  }
  static async ["deleteByProjectId"](p101) {
    await v21.destroy({
      where: {
        projectId: p101
      }
    });
    return true;
  }
  static async detailById(p102, p103) {
    const v27 = await v21.findOne({
      where: {
        id: p102,
        status: p103
      }
    });
    return v27;
  }
  static async ["getSameName"](p104, p105) {
    const v28 = await v21.findOne({
      where: {
        name: p104,
        projectId: p105
      }
    });
    return v28;
  }
  static async ["delete"](p106) {
    await v21.destroy({
      where: {
        id: p106
      }
    });
    return true;
  }
  static async batchDeletion(p107) {
    const v29 = {
      txJla: function (p108, p109) {
        return p108 - p109;
      }
    };
    const v30 = p107.split(",");
    let v31 = "";
    v30.forEach((p110, p111) => {
      if (p111 === v29.txJla(v30.length, 1)) {
        v31 += "'" + p110 + "'";
      } else {
        v31 += "'" + p110 + "',";
      }
    });
    const v32 = " delete from BuryPointAlarm where id in (" + v31 + ")";
    return await v21.execSql(v32);
  }
  static async ["update"](p112) {
    const {
      id: _0x37109b
    } = p112;
    await v21.update({
      ...p112
    }, {
      where: {
        id: _0x37109b
      },
      fields: Object.keys(p112)
    });
    return true;
  }
  static async ["updateStatus"](p113, p114) {
    const v33 = {
      status: p114
    };
    await v21.update({
      ...v33
    }, {
      where: {
        id: p113
      },
      fields: Object.keys(v33)
    });
    return true;
  }
  static async ["updateProjectId"](p115) {
    await v21.update({
      ...data
    }, {
      where: {
        projectId: p115
      },
      fields: Object.keys(data)
    });
    return true;
  }
  static async getCountByProjectId(p116) {
    let v34 = "select count(1) as count from BuryPointAlarm where projectId  = '" + p116 + "'";
    return await v21.query(v34, {
      type: v21.QueryTypes.SELECT
    });
  }
  static async getList({
    page: _0x1d3aa8,
    pageSize: _0x423e05,
    dateOrderby: _0x555fb4,
    projectId: _0x55b184,
    name: _0x4f32de,
    urgency: _0x11d63f,
    createManId: _0x486e70
  }) {
    const v35 = {
      IFxps: function (p117, p118) {
        return p117 ^ p118;
      },
      KJBkC: function (p119, p120) {
        return p119 + p120;
      },
      TQprj: function (p121, p122) {
        return p121 * p122;
      }
    };
    let v36 = "select id,name,createManId,frequencyUnit,frequency,projectId,description,silentTime,urgency,content,rule,status,createBy,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt from BuryPointAlarm where 1=1 ";
    let v37 = "";
    if (_0x4f32de !== "") {
      v37 = v37 + (" and name like '%" + _0x4f32de + "%'");
    }
    if (_0x55b184 !== "") {
      v37 = v35.KJBkC(v35.KJBkC(v37, " and projectId ='") + _0x55b184, "'");
    }
    if (_0x486e70) {
      v37 = v35.KJBkC(v37, " and createManId ='") + _0x486e70 + "'";
    }
    if (_0x11d63f !== "") {
      v37 = v35.KJBkC(v37 + " and urgency ='" + _0x11d63f, "'");
    }
    const v38 = "select count(id) as count from BuryPointAlarm where 1=1 " + v37;
    const v39 = _0x555fb4 ? " order by createdAt " + _0x555fb4 + " " : "";
    const v40 = v35.TQprj(_0x1d3aa8 - 1, _0x423e05);
    const v41 = " limit " + v40 + "," + _0x423e05 + " ";
    const v42 = v35.KJBkC(v36 + v37 + v39, v41);
    const v43 = (await v21.query(v42, {
      type: v21.QueryTypes.SELECT
    })).map(p123 => {
      return {
        ...p123,
        silentTime: p123?.silentTime?.split(",") || [],
        rule: p123?.rule.split(",")[v35.IFxps(227492, 227492)],
        threshold: p123?.["rule"]["split"](",")[1],
        count: p123?.["rule"]["split"](",")[2],
        thresholdType: p123?.["rule"].split(",")[v35.IFxps(161701, 161702)]
      };
    });
    const v44 = await v21.query(v38, {
      type: v21.QueryTypes.SELECT
    });
    const v45 = v44 ? v44[0].count : 0;
    return {
      list: v43,
      total: v45
    };
  }
  static async getListByProjectId(p124) {
    const v46 = {
      iQQyO: function (p125, p126) {
        return p125 + p126;
      },
      VKiAD: function (p127, p128) {
        return p127 + p128;
      }
    };
    let v47 = "select id,name from BuryPointAlarm where 1=1 and status = 1";
    if (p124 !== "") {
      v47 = v46.iQQyO(v46.VKiAD(v47, " and projectId ='") + p124, "'");
    }
    return await v21.query(v47, {
      type: v21.QueryTypes.SELECT
    });
  }
}
const v48 = new vRequire("../schema/buryPointFailLog");
v48.createTable();
class C2 {
  static async create(p139) {
    return await v48.create({
      ...p139
    });
  }
  static async batchCreate(p140) {
    const v49 = {
      YYlAu: function (p141, p142) {
        return p141 === p142;
      },
      qOyuq: "projectId,pointId,pointName,failType,message,params,createdAt,updatedAt",
      BVGrO: function (p143, p144) {
        return p143 ^ p144;
      },
      hxPGZ: "yyyy-MM-dd hh:mm:ss"
    };
    if (!p140 || v49.YYlAu(p140.length, 0)) {
      return;
    }
    const v50 = v49.qOyuq;
    const v51 = [];
    for (let v52 = v49.BVGrO(365990, 365990); v52 < p140.length; v52++) {
      const v53 = p140[v52];
      const v54 = v53.projectId || "";
      const v55 = v53.pointId || "";
      const v56 = v53.pointName || "";
      const v57 = v53.failType || 0;
      const v58 = (v53.message || "").replace(new RegExp("'", "g"), "''");
      const v59 = (v53.params || "").replace(new RegExp("'", "g"), "''");
      const v60 = v53.createdAt || new Date().Format(v49.hxPGZ);
      const v61 = v53.updatedAt || new Date().Format("yyyy-MM-dd hh:mm:ss");
      v51.push("('" + v54 + "','" + v55 + "','" + v56 + "'," + v57 + ",'" + v58 + "','" + v59 + "','" + v60 + "','" + v61 + "')");
    }
    const v62 = "INSERT INTO BuryPointFailLog (" + v50 + ") VALUES " + v51.join(",");
    try {
      return await v48.execSql(v62, {
        type: v48.QueryTypes.INSERT
      });
    } catch (_0x5e2085) {
      console.error("批量插入失败点位日志异常：", _0x5e2085);
      let v63 = 0;
      for (let v64 = 0; v64 < p140.length; v64++) {
        try {
          await v48.create(p140[v64]);
          v63++;
        } catch (_0x42b576) {
          console.error("单条插入失败点位日志失败[" + v64 + "]：", _0x42b576);
        }
      }
      return {
        successCount: v63,
        total: p140.length
      };
    }
  }
  static async ["getList"]({
    projectId: _0x2acb89,
    pointId: _0x9e2f28,
    currentPage: _0x1de28a,
    currentPageSize: _0xc2573,
    startTime: _0x25e07c,
    endTime: _0x1d383c,
    chooseFailType = -1
  }) {
    const v65 = {
      huWXb: function (p145, p146) {
        return p145 + p146;
      },
      gLUPv: function (p147, p148) {
        return p147 !== p148;
      },
      msFoA: " and pointId ='",
      bmhyq: function (p149, p150) {
        return p149 - p150;
      }
    };
    let v66 = "select id,pointId,pointName,projectId,failType,params,message,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt from BuryPointFailLog where 1=1 ";
    let v67 = " and failType=" + chooseFailType + " ";
    if (_0x2acb89 !== "") {
      v67 = v65.huWXb(v65.huWXb(v67, " and projectId ='"), _0x2acb89) + "'";
    }
    if (v65.gLUPv(_0x9e2f28, "")) {
      v67 = v67 + v65.msFoA + _0x9e2f28 + "'";
    }
    if (_0x25e07c) {
      v67 = v65.huWXb(v67 + " and createdAt >='" + _0x25e07c, "'");
    }
    if (_0x1d383c !== "") {
      v67 = v67 + " and createdAt <='" + _0x1d383c + "'";
    }
    const v68 = "select count(id) as count from BuryPointFailLog where 1=1 " + v67;
    const v69 = " order by createdAt desc ";
    const v70 = v65.bmhyq(_0x1de28a, 1) * _0xc2573;
    const v71 = " limit " + v70 + "," + _0xc2573 + " ";
    const v72 = v65.huWXb(v66 + v67, v69) + v71;
    const v73 = await v48.query(v72, {
      type: v48.QueryTypes.SELECT
    });
    const v74 = await v48.query(v68, {
      type: v48.QueryTypes.SELECT
    });
    const v75 = v74 ? v74[0].count : 1;
    return {
      list: v73,
      total: v75
    };
  }
  static async getFailOverView({
    projectId: _0x24a645,
    pointId: _0x3b2e01,
    startTime: _0x11f48a,
    endTime: _0x1d229b,
    chooseFailType = -1
  }) {
    const v76 = {
      qIrux: function (p151, p152) {
        return p151 + p152;
      },
      DiVWL: function (p153, p154) {
        return p153 + p154;
      },
      EAajw: function (p155, p156) {
        return p155 + p156;
      },
      ESAoh: " and createdAt <='"
    };
    let v77 = "select count(id) as count, DATE_FORMAT(createdAt,'%Y-%m-%d') AS day from BuryPointFailLog where 1=1 ";
    let v78 = " and failType=" + chooseFailType + " ";
    if (_0x24a645 !== "") {
      v78 = v76.qIrux(v76.DiVWL(v78, " and projectId ='") + _0x24a645, "'");
    }
    if (_0x3b2e01 !== "") {
      v78 = v76.EAajw(v78 + " and pointId ='" + _0x3b2e01, "'");
    }
    if (_0x11f48a) {
      v78 = v78 + " and createdAt >='" + _0x11f48a + "'";
    }
    if (_0x1d229b !== "") {
      v78 = v76.EAajw(v78 + v76.ESAoh + _0x1d229b, "'");
    }
    const v79 = v77 + v78 + " group by day";
    return await v48.query(v79, {
      type: v48.QueryTypes.SELECT
    });
  }
}
const v80 = new vRequire("../schema/buryPointCircleSelect");
v80.createTable();
function f23(p157, p158) {
  const v_0x3fb42 = f28();
  f23 = function (p159, p160) {
    p159 = p159 - 0;
    let v81 = v_0x3fb42[p159];
    if (f23.wAPWyA === undefined) {
      function f24(p161) {
        const v82 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let v83 = "";
        let v84 = "";
        for (let v85 = 0, v86, v87, v88 = 0; v87 = p161.charAt(v88++); ~v87 && (v86 = v85 % 4 ? v86 * 64 + v87 : v87, v85++ % 4) ? v83 += String.fromCharCode(v86 >> (v85 * -2 & 6) & 255) : 0) {
          v87 = v82.indexOf(v87);
        }
        for (let v89 = 0, v90 = v83.length; v89 < v90; v89++) {
          v84 += "%" + ("00" + v83.charCodeAt(v89).toString(16)).slice(-2);
        }
        return decodeURIComponent(v84);
      }
      const vF2 = function (p162, p163) {
        let v91 = [];
        let v92 = 0;
        let v93;
        let v94 = "";
        p162 = f24(p162);
        let v95;
        for (v95 = 0; v95 < 256; v95++) {
          v91[v95] = v95;
        }
        for (v95 = 0; v95 < 256; v95++) {
          v92 = (v92 + v91[v95] + p163.charCodeAt(v95 % p163.length)) % 256;
          v93 = v91[v95];
          v91[v95] = v91[v92];
          v91[v92] = v93;
        }
        v95 = 0;
        v92 = 0;
        for (let v96 = 0; v96 < p162.length; v96++) {
          v95 = (v95 + 1) % 256;
          v92 = (v92 + v91[v95]) % 256;
          v93 = v91[v95];
          v91[v95] = v91[v92];
          v91[v92] = v93;
          v94 += String.fromCharCode(p162.charCodeAt(v96) ^ v91[(v91[v95] + v91[v92]) % 256]);
        }
        return v94;
      };
      f23.CAqUnK = vF2;
      p157 = arguments;
      f23.wAPWyA = true;
    }
    const v97 = v_0x3fb42[0];
    const v98 = p159 + v97;
    const v99 = p157[v98];
    if (!v99) {
      if (f23.HlnCle === undefined) {
        f23.HlnCle = true;
      }
      v81 = f23.CAqUnK(v81, p160);
      p157[v98] = v81;
    } else {
      v81 = v99;
    }
    return v81;
  };
  return f23(p157, p158);
}
undefined;
class C3 {
  static async ["create"](p173) {
    return await v80.createWithRes({
      ...p173
    });
  }
  static async delete(p174) {
    await v80.destroy({
      where: {
        id: p174
      }
    });
    return true;
  }
  static async deleteByProjectId(p175) {
    await v80.destroy({
      where: {
        projectId: p175
      }
    });
    return true;
  }
  static async batchDeletion(p176) {
    const v101 = p176.split(",");
    let v102 = "";
    v101.forEach((p177, p178) => {
      if (p178 === v101.length - 1) {
        v102 += "'" + p177 + "'";
      } else {
        v102 += "'" + p177 + "',";
      }
    });
    const v103 = " delete from BuryPointCircleSelect where id in (" + v102 + ")";
    return await v80.execSql(v103);
  }
  static async ["detail"](p179) {
    return await v80.findOne({
      where: {
        id: p179
      }
    });
  }
  static async update(p180, p181) {
    await v80.update({
      ...p181
    }, {
      where: {
        id: p180
      },
      fields: Object.keys(p181)
    });
    return true;
  }
  static async getSameBindUserId(p182, p183) {
    const v104 = await v80.findOne({
      where: {
        bindUserId: p182,
        projectId: p183
      }
    });
    return v104;
  }
  static async getPageList(p184, p185, p186, p187, p188, p189) {
    const v105 = {
      SVKMc: function (p190, p191) {
        return p190 + p191;
      },
      OBJnm: function (p192, p193) {
        return p192 + p193;
      },
      DCgTt: function (p194, p195) {
        return p194 !== p195;
      },
      CknMw: function (p196, p197) {
        return p196 + p197;
      },
      ZxsnI: " order by createdAt desc limit ",
      PpFss: function (p198, p199) {
        return p198 * p199;
      }
    };
    let v106 = "select id,projectId,bindUserId,bindBy,circleSelectionTime,enableFlag,createBy,createUserId,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt,updateBy,updateUserId,DATE_FORMAT(updatedAt,'%Y-%m-%d %H:%i:%s') AS updatedAt, DATE_FORMAT(deadlineValidTime,'%Y-%m-%d %H:%i:%s') AS deadlineValidTime from BuryPointCircleSelect where 1 = 1 ";
    if (p184 !== "") {
      v106 = v105.SVKMc(v106 + " and projectId ='", p184) + "'";
    }
    if (p185 !== -1) {
      v106 = v105.OBJnm(v106 + " and enableFlag ='" + p185, "'");
    }
    if (v105.DCgTt(p186, "")) {
      v106 = v105.OBJnm(v106 + " and updateUserId ='", p186) + "'";
    }
    if (p187 !== "") {
      v106 = v105.SVKMc(v106, " and bindUserId like '%" + p187 + "%' ");
    }
    v106 = v105.CknMw(v106 + v105.ZxsnI + v105.PpFss(p188 - 1, p189) + ",", p189);
    return await v80.query(v106, {
      type: v80.QueryTypes.SELECT
    });
  }
  static async ["getPageCount"](p200) {
    const v107 = {
      nkKAS: "select count(*) as count from BuryPointCircleSelect where 1 = 1 ",
      TmtOv: " and projectId ='"
    };
    let v108 = v107.nkKAS;
    if (p200 !== "") {
      v108 = v108 + v107.TmtOv + p200 + "'";
    }
    return await v80.query(v108, {
      type: v80.QueryTypes.SELECT
    });
  }
  static async getAllBindUserId(p201) {
    const v109 = {
      iNpFQ: function (p202, p203) {
        return p202 + p203;
      },
      DuumA: " and projectId ='"
    };
    let v110 = "select id,projectId, bindUserId, bindBy from BuryPointCircleSelect where 1 = 1 ";
    if (p201 !== "") {
      v110 = v109.iNpFQ(v109.iNpFQ(v109.iNpFQ(v110, v109.DuumA), p201), "'");
    }
    return await v80.query(v110, {
      type: v80.QueryTypes.SELECT
    });
  }
  static async ["getInitDataByProjectId"](p204) {
    const v111 = {
      NNuIx: "select createUserId,bindUserId,bindBy, createBy,projectId from BuryPointCircleSelect where 1 = 1 "
    };
    let v112 = v111.NNuIx;
    if (p204 !== "") {
      v112 = v112 + " and projectId ='" + p204 + "'";
    }
    v112 = v112 + " and enableFlag = 1 ";
    return await v80.query(v112, {
      type: v80.QueryTypes.SELECT
    });
  }
  static async getExpiredList() {
    let v113 = "select id,circleSelectionTime,enableFlag,deadlineValidTime from BuryPointCircleSelect ";
    v113 = v113 + " where enableFlag = 1 and deadlineValidTime < NOW()";
    return await v80.query(v113, {
      type: v80.QueryTypes.SELECT
    });
  }
}
const v114 = new vRequire("../schema/buryPointField");
v114.createTable();
class C4 {
  static async create(p205) {
    return await v114.createWithRes({
      ...p205
    });
  }
  static async delete(p206) {
    await v114.destroy({
      where: {
        id: p206
      }
    });
    return true;
  }
  static async ["deleteByProjectId"](p207) {
    await v114.destroy({
      where: {
        projectId: p207
      }
    });
    return true;
  }
  static async ["detail"](p208) {
    return await v114.findOne({
      where: {
        id: p208
      }
    });
  }
  static async update(p209, p210) {
    await v114.update({
      ...p210
    }, {
      where: {
        id: p209
      },
      fields: Object.keys(p210)
    });
    return true;
  }
  static async checkFieldName(p211, p212, p213, p214) {
    const v115 = {
      OCYuL: function (p215, p216) {
        return p215 + p216;
      },
      iLSYh: function (p217, p218) {
        return p217 + p218;
      },
      qCqwL: function (p219, p220) {
        return p219 !== p220;
      },
      YtRZq: " and projectId='",
      mezus: function (p221, p222) {
        return p221 !== p222;
      },
      UROJj: function (p223, p224) {
        return p223 + p224;
      },
      dwZkn: " and fieldAlias='"
    };
    let v116 = "select count(*) as count from BuryPointField where 1 = 1 ";
    if (p211 !== "") {
      v116 = v115.OCYuL(v115.iLSYh(v116 + " and id !='", p211), "'");
    }
    if (v115.qCqwL(p212, "")) {
      v116 = v116 + v115.YtRZq + p212 + "'";
    }
    if (v115.mezus(p214, "")) {
      v116 = v115.UROJj(v116 + " and fieldName='", p214) + "'";
    }
    if (p213 !== "") {
      v116 = v116 + v115.dwZkn + p213 + "'";
    }
    return await v114.query(v116, {
      type: v114.QueryTypes.SELECT
    });
  }
  static async existSameField(p225, p226) {
    const v117 = {
      DGDpZ: "select id from BuryPointField where 1 = 1 ",
      iDgbb: function (p227, p228) {
        return p227 + p228;
      },
      TrsaY: function (p229, p230) {
        return p229 !== p230;
      }
    };
    let v118 = v117.DGDpZ;
    if (p225 !== "") {
      v118 = v117.iDgbb(v118 + " and projectId='", p225) + "'";
    }
    if (v117.TrsaY(p226, "")) {
      v118 = v117.iDgbb(v117.iDgbb(v118, " and LOWER(fieldName)='") + p226.toString().toLowerCase(), "'");
    }
    return await v114.query(v118, {
      type: v114.QueryTypes.SELECT
    });
  }
  static async ["getFieldAliasByNameAndProjectId"](p231, p232) {
    const v119 = {
      rdeqA: function (p233, p234) {
        return p233 + p234;
      }
    };
    let v120 = "select fieldAlias from BuryPointField where 1 = 1 ";
    if (p231 !== "") {
      v120 = v119.rdeqA(v120 + " and projectId='", p231) + "'";
    }
    if (p232 !== "") {
      v120 = v120 + " and LOWER(fieldName)='" + p232.toString().toLowerCase() + "'";
    }
    return await v114.query(v120, {
      type: v114.QueryTypes.SELECT
    });
  }
  static async ["getListByFieldIds"](p235) {
    const v121 = {
      xtZnQ: function (p236, p237) {
        return p236 + p237;
      }
    };
    const v122 = p235.split(",");
    let v123 = "";
    v122.forEach((p238, p239) => {
      if (p239 === v122.length - 1) {
        v123 += "'" + p238 + "'";
      } else {
        v123 += "'" + p238 + "',";
      }
    });
    let v124 = v121.xtZnQ("select * from BuryPointField where id in (", v123) + ")";
    return await v114.query(v124, {
      type: v114.QueryTypes.SELECT
    });
  }
  static async ["getListByFieldIdsAndWeType"](p240, p241) {
    const v125 = {
      fPQsN: function (p242, p243) {
        return p242 + p243;
      },
      nNJrf: function (p244, p245) {
        return p244 + p245;
      },
      BVLpo: "select * from BuryPointField where id in (",
      ofYNL: function (p246, p247) {
        return p246 !== p247;
      },
      EXroL: function (p248, p249) {
        return p248 + p249;
      },
      MWHwR: " and weType ='"
    };
    const v126 = p240.split(",");
    let v127 = "";
    v126.forEach((p250, p251) => {
      if (p251 === v126.length - 1) {
        v127 += "'" + p250 + "'";
      } else {
        v127 += "'" + p250 + "',";
      }
    });
    let v128 = v125.fPQsN(v125.nNJrf(v125.BVLpo, v127), ")");
    if (v125.ofYNL(p241, "")) {
      v128 = v125.EXroL(v128 + v125.MWHwR + p241, "'");
    }
    return await v114.query(v128, {
      type: v114.QueryTypes.SELECT
    });
  }
  static async ["getPageList"](p252, p253, p254, p255, p256, p257) {
    const v129 = {
      jTEDh: function (p258, p259) {
        return p258 + p259;
      },
      qbwSB: function (p260, p261) {
        return p260 + p261;
      },
      vsNhp: " and projectId ='",
      AnxYp: "INT",
      KmDdo: function (p262, p263) {
        return p262 + p263;
      },
      hQPcD: " and fieldType='",
      ZKtrn: function (p264, p265) {
        return p264 + p265;
      }
    };
    let v130 = "select id,projectId,weType,fieldAlias,fieldName,fieldType,fieldLength,fieldDesc,groupByFlag,createBy,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt from BuryPointField where 1 = 1 ";
    if (p252 !== "") {
      v130 = v129.jTEDh(v129.qbwSB(v130, v129.vsNhp), p252) + "'";
    }
    if (p253 !== "") {
      v130 = v130 + " and weType ='" + p253 + "'";
    }
    if (p254 !== "") {
      if (p254 === v129.AnxYp) {
        v130 = v129.KmDdo(v130, " and fieldType in ('INT','BIGINT')");
      } else {
        v130 = v129.KmDdo(v130, v129.hQPcD) + p254 + "'";
      }
    }
    if (p255 !== "") {
      v130 = v129.ZKtrn(v130, " and fieldAlias like '%" + p255 + "%'");
    }
    v130 = v130 + " order by createdAt desc,id asc limit " + (p256 - 1) * p257 + "," + p257;
    return await v114.query(v130, {
      type: v114.QueryTypes.SELECT
    });
  }
  static async getPageCount(p266, p267, p268, p269) {
    const v131 = {
      heeHP: function (p270, p271) {
        return p270 + p271;
      },
      znuQf: "INT",
      pYWea: " and fieldType='"
    };
    let v132 = "select count(*) as count from BuryPointField where 1 = 1 ";
    if (p266 !== "") {
      v132 = v131.heeHP(v132, " and projectId ='") + p266 + "'";
    }
    if (p267 !== "") {
      v132 = v132 + " and weType ='" + p267 + "'";
    }
    if (p268 !== "") {
      if (p268 === v131.znuQf) {
        v132 = v132 + " and fieldType in ('INT','BIGINT')";
      } else {
        v132 = v132 + v131.pYWea + p268 + "'";
      }
    }
    if (p269 !== "") {
      v132 = v132 + (" and fieldAlias like '%" + p269 + "%'");
    }
    return await v114.query(v132, {
      type: v114.QueryTypes.SELECT
    });
  }
  static async ["getList"](p272, p273, p274, p275) {
    const v133 = {
      tFgpI: function (p276, p277) {
        return p276 !== p277;
      },
      aKrrD: "INT",
      KSOsI: function (p278, p279) {
        return p278 + p279;
      }
    };
    let v134 = "select id,projectId,weType,fieldAlias,fieldName,fieldType,fieldLength,fieldDesc,groupByFlag,createBy,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt from BuryPointField where 1 = 1 ";
    if (v133.tFgpI(p272, "")) {
      v134 = v134 + " and projectId ='" + p272 + "'";
    }
    if (v133.tFgpI(p274, "")) {
      if (p274 === v133.aKrrD) {
        v134 = v133.KSOsI(v134, " and fieldType in ('INT','BIGINT')");
      } else {
        v134 = v133.KSOsI(v134, " and fieldType='") + p274 + "'";
      }
    }
    if (p275 !== "") {
      v134 = v133.KSOsI(v134, " and fieldAlias='") + p275 + "'";
    }
    if (v133.tFgpI(p273, "")) {
      v134 = v133.KSOsI(v134 + " and weType ='" + p273, "'");
    }
    return await v114.query(v134, {
      type: v114.QueryTypes.SELECT
    });
  }
  static async getListByProjectIdAndWeType(p280, p281) {
    const v135 = {
      xuddJ: function (p282, p283) {
        return p282 + p283;
      },
      guqaV: function (p284, p285) {
        return p284 + p285;
      }
    };
    let v136 = "select id,projectId,weType,fieldAlias,fieldName,fieldType,fieldLength,fieldDesc,groupByFlag,createBy,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt from BuryPointField where 1 = 1 ";
    if (p280 !== "") {
      v136 = v136 + " and projectId ='" + p280 + "'";
    }
    if (p281 !== "") {
      v136 = v135.xuddJ(v135.guqaV(v136 + " and weType='", p281), "'");
    }
    let v137 = await v114.query(v136, {
      type: v114.QueryTypes.SELECT
    });
    const v138 = [...new Map(v137.map(p286 => [p286.fieldName, p286])).values()];
    return v138;
  }
  static async ["getSomeListByProjectIdAndWeType"](p287, p288, p289) {
    const v139 = {
      HPaKc: function (p290, p291) {
        return p290 + p291;
      },
      TFOPR: " and id in (",
      SirHJ: function (p292, p293) {
        return p292 !== p293;
      },
      jHrwB: " and weType='"
    };
    let v140 = "select fieldName, fieldAlias,fieldType, fieldLength, weType from BuryPointField where 1 = 1 ";
    if (p287) {
      const v141 = p287.split(",");
      let v142 = "";
      v141.forEach((p294, p295) => {
        if (p295 === v141.length - 1) {
          v142 += "'" + p294 + "'";
        } else {
          v142 += "'" + p294 + "',";
        }
      });
      v140 = v139.HPaKc(v140 + v139.TFOPR, v142) + ")";
    }
    if (p288 !== "") {
      v140 = v140 + " and projectId ='" + p288 + "'";
    }
    if (v139.SirHJ(p289, "")) {
      v140 = v139.HPaKc(v140, v139.jHrwB) + p289 + "'";
    }
    let v143 = await v114.query(v140, {
      type: v114.QueryTypes.SELECT
    });
    return [...new Map(v143.map(p296 => [p296.fieldName, p296])).values()];
  }
  static async ["getIdsByProjectId"](p297) {
    const v144 = {
      caETE: function (p298, p299) {
        return p298 + p299;
      },
      FhjEw: "select id from BuryPointField where projectId ='"
    };
    let v145 = v144.caETE(v144.FhjEw + p297, "'");
    return await v114.query(v145, {
      type: v114.QueryTypes.SELECT
    });
  }
  static async getAllList() {
    let v146 = "select id,projectId,weType,fieldAlias,fieldName,fieldType,fieldLength,fieldDesc,groupByFlag,createBy,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt from BuryPointField";
    return await v114.query(v146, {
      type: v114.QueryTypes.SELECT
    });
  }
  static async getFieldListByKey(p300, p301) {
    let v147 = "select DISTINCT(fieldName) as fieldName, fieldAlias from BuryPointField where projectId = '" + p300 + "' and fieldName in (" + p301 + ") order by createdAt desc,weType asc ";
    return await v114.query(v147, {
      type: v114.QueryTypes.SELECT
    });
  }
  static async ["getFieldTypeByKey"](p302, p303) {
    let v148 = "select DISTINCT(fieldName) as fieldName, fieldType from BuryPointField where projectId = '" + p302 + "' and fieldName='" + p303 + "' order by createdAt desc,weType asc ";
    return await v114.query(v148, {
      type: v114.QueryTypes.SELECT
    });
  }
  static async ["getOldList"]() {
    let v149 = "select id,fieldAlias,fieldName,fieldType,fieldLength,fieldDesc,groupByFlag,createBy from BuryPointField where ";
    v149 = v149 + " projectId is null";
    return await v114.query(v149, {
      type: v114.QueryTypes.SELECT
    });
  }
}
const v150 = new vRequire("../schema/buryPointProject");
v150.createTable();
class C5 {
  static async ["create"](p304) {
    return await v150.createWithRes({
      ...p304
    });
  }
  static async ["delete"](p305) {
    await v150.destroy({
      where: {
        id: p305
      }
    });
    return true;
  }
  static async ["deleteByProjectId"](p306) {
    await v150.destroy({
      where: {
        projectId: p306
      }
    });
    return true;
  }
  static async ["detail"](p307) {
    return await v150.findOne({
      where: {
        id: p307
      }
    });
  }
  static async getDetailByProjectId(p308) {
    return await v150.findOne({
      where: {
        projectId: p308
      }
    });
  }
  static async update(p309, p310) {
    await v150.update({
      ...p310
    }, {
      where: {
        id: p309
      },
      fields: Object.keys(p310)
    });
    return true;
  }
  static async ["isExist"]() {
    let v151 = "select count(*) as count from BuryPointProject where sysType != '1'";
    return await v150.query(v151, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async getCountByNameAndType(p311, p312) {
    const v152 = {
      sMPmq: function (p313, p314) {
        return p313 + p314;
      },
      NxjXM: function (p315, p316) {
        return p315 + p316;
      }
    };
    let v153 = "select count(*) as count from BuryPointProject where 1=1 ";
    if (p311 !== "") {
      v153 = v152.sMPmq(v152.sMPmq(v153 + " and name='", p311), "'");
    }
    if (p312) {
      v153 = v152.sMPmq(v152.NxjXM(v153, " and type=") + p312, "");
    }
    return await v150.query(v153, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async ["getCountByNameAndParentAndType"](p317, p318, p319) {
    const v154 = {
      BfVMs: "select count(*) as count from BuryPointProject where 1=1 ",
      INpQb: function (p320, p321) {
        return p320 !== p321;
      },
      nzdfM: function (p322, p323) {
        return p322 + p323;
      }
    };
    let v155 = v154.BfVMs;
    if (p317 !== "") {
      v155 = v155 + " and name='" + p317 + "'";
    }
    if (v154.INpQb(p318, "")) {
      v155 = v154.nzdfM(v155, " and parentId='") + p318 + "'";
    }
    if (p319) {
      v155 = v155 + " and type=" + p319 + "";
    }
    return await v150.query(v155, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async detailField(p324, p325, p326) {
    return await v150.findOne({
      where: {
        name: p324,
        type: p326,
        projectId: p325
      }
    });
  }
  static async getListByParentId(p327) {
    const v156 = {
      tFHjH: function (p328, p329) {
        return p328 + p329;
      }
    };
    let v157 = "select * from BuryPointProject where 1=1 ";
    if (p327 !== "") {
      v157 = v156.tFHjH(v157 + " and parentId ='", p327) + "'";
    }
    v157 = v156.tFHjH(v157, " order by sort asc ");
    return await v150.query(v157, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async getListByParentIds(p330) {
    const v158 = {
      duKnc: function (p331, p332) {
        return p331 === p332;
      },
      EfZvb: function (p333, p334) {
        return p333 - p334;
      }
    };
    if (!p330 || p330.length === 0) {
      return [];
    }
    let v159 = "";
    p330.forEach((p335, p336) => {
      if (v158.duKnc(p336, v158.EfZvb(p330.length, 1))) {
        v159 += "'" + p335 + "'";
      } else {
        v159 += "'" + p335 + "',";
      }
    });
    let v160 = "select * from BuryPointProject where parentId in(" + v159 + ") order by sort asc";
    return await v150.query(v160, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async getListByParentIdAndSysType(p337, p338) {
    const v161 = {
      qBijB: function (p339, p340) {
        return p339 + p340;
      },
      QOmiK: function (p341, p342) {
        return p341 + p342;
      }
    };
    let v162 = "select * from BuryPointProject where 1=1 ";
    if (p337 !== "") {
      v162 = v161.qBijB(v161.QOmiK(v162 + " and parentId ='", p337), "'");
    }
    if (p338 !== "" && p338 !== null) {
      v162 = v161.qBijB(v162 + " and sysType='", p338) + "'";
    }
    v162 = v162 + " order by sort asc ";
    return await v150.query(v162, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async coutPageByParentId(p343) {
    let v163 = "select count(*) as count from BuryPointProject where 1=1 ";
    if (p343 !== "") {
      v163 = v163 + " and parentId ='" + p343 + "'";
    }
    return await v150.query(v163, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async getProjectByProjectId(p344) {
    const v164 = {
      oyOem: function (p345, p346) {
        return p345 + p346;
      }
    };
    let v165 = "select * from BuryPointProject where 1=1 ";
    if (p344 !== "") {
      v165 = v164.oyOem(v165 + " and projectId ='" + p344, "'");
    }
    return await v150.query(v165, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async getProjectByProjectIdAndType(p347, p348) {
    const v166 = {
      sMjxc: function (p349, p350) {
        return p349 + p350;
      },
      ERsyx: function (p351, p352) {
        return p351 + p352;
      },
      xSxRc: " and projectId ='",
      TGnAB: " order by sort asc "
    };
    let v167 = "select * from BuryPointProject where 1=1 ";
    if (p347 !== "") {
      v167 = v166.sMjxc(v166.sMjxc(v166.ERsyx(v167, v166.xSxRc), p347), "'");
    }
    if (p348) {
      v167 = v167 + " and type=" + p348 + "";
    }
    v167 = v167 + v166.TGnAB;
    return await v150.query(v167, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async ["getNameByProjectIdAndType"](p353, p354) {
    const v168 = {
      dPJAx: "select name from BuryPointProject where 1=1 ",
      IcUbq: function (p355, p356) {
        return p355 + p356;
      },
      YekQb: " and projectId ='"
    };
    let v169 = v168.dPJAx;
    if (p353 !== "") {
      v169 = v168.IcUbq(v169, v168.YekQb) + p353 + "'";
    }
    if (p354) {
      v169 = v169 + " and type=" + p354 + "";
    }
    return await v150.query(v169, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async getList(p357, p358, p359, p360) {
    const v170 = {
      SNDeM: function (p361, p362) {
        return p361 !== p362;
      },
      ifKpU: function (p363, p364) {
        return p363 + p364;
      },
      ehSvL: function (p365, p366) {
        return p365 + p366;
      },
      AfNeu: function (p367, p368) {
        return p367 + p368;
      }
    };
    let v171 = "select * from BuryPointProject where 1=1 ";
    if (v170.SNDeM(p357, "")) {
      v171 = v170.ifKpU(v170.ehSvL(v171 + " and name='", p357), "'");
    }
    if (p358 !== "") {
      v171 = v170.AfNeu(v171 + " and projectId ='", p358) + "'";
    }
    if (p359) {
      v171 = v171 + " and type=" + p359 + "";
    }
    if (p360 !== "") {
      v171 = v171 + " and parentId ='" + p360 + "'";
    }
    return await v150.query(v171, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async ["getPageList"]({
    page: _0x131e40,
    pageSize: _0x44baad,
    companyId: _0x2d6833,
    orderBy: _0xfc4037,
    orderByType: _0x1f491b
  }) {
    const v172 = {
      fNmXw: function (p369, p370) {
        return p369 + p370;
      },
      cILMo: " left join (SELECT projectId, COUNT(id) sdkCount FROM BuryPointSdkRelease GROUP BY projectId )bpsr ON bpsr.projectId =bpp.projectId ",
      Pbqkb: " left join ( SELECT projectId, COUNT(id) fieldCount FROM BuryPointField GROUP BY projectId )bpf ON bpf.projectId =bpp.projectId ",
      CZPQl: " left join ( SELECT projectId,COUNT(id) pointCount FROM BuryPointWarehouse GROUP BY projectId ) bpw  ON bpw.projectId =bpp.projectId ",
      mDFUU: " and type = '1' and sysType != '1'",
      CZNMz: function (p371, p372) {
        return p371 + p372;
      },
      sapqe: " and companyId ='",
      Lshxo: function (p373, p374) {
        return p373 * p374;
      },
      wVRNI: function (p375, p376) {
        return p375 - p376;
      },
      zHwwX: function (p377, p378) {
        return p377 + p378;
      },
      YMTUx: function (p379, p380) {
        return p379 ^ p380;
      }
    };
    let v173 = v172.fNmXw("select bpp.projectId as projectId,bpp.name projectName,bpc.cardCount as cardCount,bpsr.sdkCount sdkReleaseCount,bpt.templateCount as templateCount,bpa.alarmCount as alarmCount,bpf.fieldCount fieldCount,bpw.pointCount pointCount  from BuryPointProject bpp  left join (SELECT projectId,COUNT(id) cardCount FROM BuryPointCard GROUP BY projectId) bpc on bpc.projectId =bpp.projectId ", v172.cILMo) + " left join (SELECT projectId,COUNT(id) templateCount FROM BuryPointTemplate GROUP BY projectId )bpt ON bpt.projectId =bpp.projectId " + v172.Pbqkb + v172.CZPQl + " left join ( SELECT projectId,COUNT(id) alarmCount FROM BuryPointAlarm GROUP BY projectId ) bpa  ON  bpa.projectId =bpp.projectId  where 1=1 ";
    let v174 = v172.mDFUU;
    if (_0x2d6833 !== "") {
      v174 = v172.fNmXw(v172.CZNMz(v174, v172.sapqe), _0x2d6833) + "'";
    }
    const v175 = "select count(id) as count from BuryPointProject where 1=1 " + v174;
    const v176 = " order by " + _0xfc4037 + " " + _0x1f491b + " ";
    const v177 = v172.Lshxo(v172.wVRNI(_0x131e40, 1), _0x44baad);
    const v178 = " limit " + v177 + "," + _0x44baad + " ";
    const v179 = v172.zHwwX(v173, v174) + v176 + v178;
    const v180 = await v150.query(v179, {
      type: v150.QueryTypes.SELECT
    });
    const v181 = await v150.query(v175, {
      type: v150.QueryTypes.SELECT
    });
    const v182 = v181 ? v181[v172.YMTUx(776627, 776627)].count : 0;
    return {
      list: v180,
      total: v182
    };
  }
  static async getAllProjectList(p381) {
    const v183 = {
      aaqJe: "select * from BuryPointProject where parentId = '-1'",
      GmbEq: " or sysType = '1' "
    };
    let v184 = v183.aaqJe;
    if (p381 !== "") {
      v184 = v184 + " and sysType ='" + p381 + "'";
    }
    v184 = v184 + v183.GmbEq;
    return await v150.query(v184, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async ["getAllProjectListByCompanyId"](p382) {
    let v185 = "select * from BuryPointProject where companyId='" + p382 + "' and parentId = '-1'";
    return await v150.query(v185, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async getNoSysProjectListByCompanyId(p383) {
    let v186 = "select * from BuryPointProject where companyId='" + p383 + "' and parentId = '-1' and sysType='0'";
    return await v150.query(v186, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async projectSimpleListByWebmonitorIds(p384) {
    const v187 = {
      EQlvQ: function (p385, p386) {
        return p385 + p386;
      },
      fZPyP: "select id, projectId as webMonitorId, name as projectName, viewers, delStatus, createdAt from BuryPointProject where parentId='-1' "
    };
    const v188 = p384.webMonitorIds.split(",");
    let v189 = "";
    v188.forEach((p387, p388) => {
      if (p388 === v188.length - 1) {
        v189 += "'" + p387 + "'";
      } else {
        v189 += "'" + p387 + "',";
      }
    });
    let v190 = v187.EQlvQ(v187.fZPyP, " and projectId in(") + v189 + ")";
    return await v150.query(v190, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async getMaxProject() {
    const v191 = {
      NmSlo: "select max(projectId) as maxProjectId from BuryPointProject where parentId = '-1'"
    };
    let v192 = v191.NmSlo;
    return await v150.query(v192, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async getMaxId() {
    const v193 = {
      Dmkev: "select max(projectId) as maxId from BuryPointProject"
    };
    let v194 = v193.Dmkev;
    return await v150.query(v194, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async ["getAllList"]() {
    let v195 = "select * from BuryPointProject";
    return await v150.query(v195, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async ["getProjectListByWebMonitorIds"](p389, p390) {
    const v196 = {
      tFEyD: function (p391, p392) {
        return p391 + p392;
      },
      GJxyI: function (p393, p394) {
        return p393 + p394;
      }
    };
    const v197 = p389.split(",");
    let v198 = "";
    v197.forEach((p395, p396) => {
      if (p396 === v197.length - 1) {
        v198 += "'" + p395 + "'";
      } else {
        v198 += "'" + p395 + "',";
      }
    });
    let v199 = v196.tFEyD("select * from BuryPointProject where parentId = '-1' and projectId in(", v198) + ")";
    if (p390 !== "") {
      v199 = v196.GJxyI(v199 + " and sysType ='" + p390, "'");
    }
    return await v150.query(v199, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async ["updateFlowSwitchByField"](p397) {
    const {
      projectId: _0x24310f,
      type: _0x481a0e,
      flowSwitch: _0x58f67c
    } = p397;
    const v200 = {
      flowSwitch: _0x58f67c
    };
    await v150.update({
      ...v200
    }, {
      where: {
        projectId: _0x24310f,
        type: _0x481a0e
      },
      fields: Object.keys(v200)
    });
    return true;
  }
  static async ["updateViewersProjectByField"](p398) {
    const {
      projectId: _0x31fa5,
      parentId: _0x30ed33,
      viewers: _0x53363f
    } = p398;
    const v201 = {
      viewers: _0x53363f
    };
    await v150.update({
      ...v201
    }, {
      where: {
        projectId: _0x31fa5,
        parentId: _0x30ed33
      },
      fields: Object.keys(v201)
    });
    return true;
  }
  static async ["getFlowSwitchWebMonitorIds"](p399) {
    let v202 = "select projectId, flowSwitch from BuryPointProject where type = '1' and projectId in (" + p399 + ")";
    return await v150.query(v202, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async getAllProjectIdByCompanyId(p400) {
    let v203 = "select projectId from BuryPointProject where companyId='" + p400 + "'";
    return await v150.query(v203, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async ["getProjectCount"]() {
    let v204 = "select count(1) as count from BuryPointProject where parentId = '-1' and sysType != '1'";
    return await v150.query(v204, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async createTTLForCreatedAt(p401, p402, p403 = 8) {
    const v205 = {
      UPHuV: "number",
      gAgoA: function (p404, p405) {
        return p404 ^ p405;
      },
      mRqYI: function (p406, p407) {
        return p406 ^ p407;
      },
      IWIDV: function (p408, p409) {
        return p408 < p409;
      }
    };
    if (typeof p403 !== v205.UPHuV || p403 < v205.gAgoA(981516, 981516)) {
      return;
    }
    if (p403 === v205.mRqYI(700476, 700476)) {
      for (let v206 = 0; v205.IWIDV(v206, p402.length); v206++) {
        const v207 = p402[v206];
        const v208 = p401 + "_" + v207;
        const v209 = "ALTER TABLE " + v208 + " REMOVE TTL;";
        v150.execSql(v209);
      }
    } else {
      for (let v210 = 0; v205.IWIDV(v210, p402.length); v210++) {
        const v211 = p402[v210];
        const v212 = p401 + "_" + v211;
        const v213 = "alter table " + v212 + " modify TTL createdAt + INTERVAL " + p403 + " day;";
        v150.execSql(v213);
      }
    }
  }
  static async updateProjectByField(p410) {
    const {
      projectId: _0x167d47,
      type: _0x16b95a
    } = p410;
    delete p410.projectId;
    await v150.update({
      ...p410
    }, {
      where: {
        projectId: _0x167d47,
        type: _0x16b95a
      },
      fields: Object.keys(p410)
    });
    return true;
  }
  static async ["getCountByNoSysType"]() {
    let v214 = "select count(1) as count from BuryPointProject where parentId = '-1' and sysType !='1' ";
    return await v150.query(v214, {
      type: v150.QueryTypes.SELECT
    });
  }
  static async ["getProjectCountByCompanyId"](p411) {
    let v215 = "select count(*) as count from BuryPointProject where parentId = '-1' and sysType !='1' and companyId='" + p411 + "'";
    return await v150.query(v215, {
      type: v150.QueryTypes.SELECT
    });
  }
}
const v216 = new vRequire("../schema/buryPointRelation");
v216.createTable();
class C6 {
  static async ["create"](p412) {
    return await v216.createWithRes({
      ...p412
    });
  }
  static async ["delete"](p413) {
    await v216.destroy({
      where: {
        id: p413
      }
    });
    return true;
  }
  static async deleteByCardId(p414) {
    const v217 = {
      HdSsP: function (p415, p416) {
        return p415 != p416;
      },
      sUaaC: function (p417, p418) {
        return p417 + p418;
      },
      sfPRs: function (p419, p420) {
        return p419 + p420;
      }
    };
    if (v217.HdSsP(p414, "")) {
      let v218 = v217.sUaaC(v217.sfPRs("delete from BuryPointRelation where cardId ='", p414), "'");
      return await v216.execSql(v218);
    } else {
      return true;
    }
  }
  static async ["detail"](p421) {
    return await v216.findOne({
      where: {
        id: p421
      }
    });
  }
  static async update(p422, p423) {
    await v216.update({
      ...p423
    }, {
      where: {
        id: p422
      },
      fields: Object.keys(p423)
    });
    return true;
  }
  static async getListByPointIdAndCardId(p424, p425) {
    const v219 = {
      PhBPP: "select pointId,stepColum,cardId from BuryPointRelation where 1=1 ",
      pglNO: function (p426, p427) {
        return p426 + p427;
      },
      Gcplv: function (p428, p429) {
        return p428 + p429;
      }
    };
    let v220 = v219.PhBPP;
    if (p424 !== "") {
      v220 = v219.pglNO(v220 + " and pointId ='" + p424, "'");
    }
    if (p425 !== "") {
      v220 = v219.Gcplv(v220 + " and cardId ='" + p425, "'");
    }
    v220 = v220 + " order by stepColum asc ";
    return await v216.query(v220, {
      type: v216.QueryTypes.SELECT
    });
  }
  static async getMaxStepColum(p430, p431) {
    const v221 = {
      SQwhl: "select max(stepColum) as maxStepColum from BuryPointRelation where 1=1 ",
      SHUpW: function (p432, p433) {
        return p432 + p433;
      },
      ViNlk: " and pointId ='",
      UTJwY: function (p434, p435) {
        return p434 !== p435;
      },
      hgqBN: " and cardId !='"
    };
    let v222 = v221.SQwhl;
    if (p430 !== "") {
      v222 = v221.SHUpW(v222, v221.ViNlk) + p430 + "'";
    }
    if (v221.UTJwY(p431, "")) {
      v222 = v221.SHUpW(v222 + v221.hgqBN + p431, "'");
    }
    v222 = v222 + " order by stepColum asc ";
    return await v216.query(v222, {
      type: v216.QueryTypes.SELECT
    });
  }
}
const v223 = new vRequire("../schema/buryPointScreenShot");
v223.createTable();
class C7 {
  static async create(p436) {
    return await v223.createWithRes({
      ...p436
    });
  }
  static async delete(p437) {
    await v223.destroy({
      where: {
        id: p437
      }
    });
    return true;
  }
  static async deleteByProjectId(p438) {
    await v223.destroy({
      where: {
        projectId: p438
      }
    });
    return true;
  }
  static async batchDeletion(p439) {
    const v224 = {
      pyebz: function (p440, p441) {
        return p440 === p441;
      }
    };
    const v225 = p439.split(",");
    let v226 = "";
    v225.forEach((p442, p443) => {
      if (v224.pyebz(p443, v225.length - 1)) {
        v226 += "'" + p442 + "'";
      } else {
        v226 += "'" + p442 + "',";
      }
    });
    const v227 = " delete from BuryPointScreenShot where id in (" + v226 + ")";
    return await v223.queexecSqlry(v227);
  }
  static async list(p444, p445, p446) {
    const v228 = {
      vNmyT: function (p447, p448) {
        return p447 ^ p448;
      },
      uVsHN: function (p449, p450) {
        return p449 ^ p450;
      },
      OXwZH: function (p451, p452) {
        return p451 ^ p452;
      }
    };
    let v229 = [];
    let v230 = v228.vNmyT(426744, 426744);
    const v231 = " select * from BuryPointScreenShot where projectId='" + p444 + "' order by createdAt desc limit " + (p445 - v228.uVsHN(701284, 701285)) * p446 + "," + p446;
    const v232 = await v223.query(v231, {
      type: v223.QueryTypes.SELECT
    });
    v229 = v232 ? v232 : [];
    const v233 = "select count(*) as count from BuryPointScreenShot where projectId='" + p444 + "'";
    const v234 = await v223.query(v233, {
      type: v223.QueryTypes.SELECT
    });
    v230 = v234 && v234.length ? v234[v228.uVsHN(849174, 849174)].count * v228.vNmyT(342643, 342642) : v228.OXwZH(922250, 922250);
    return {
      list: v229,
      total: v230
    };
  }
  static async detail(p453) {
    const v235 = "select * from BuryPointScreenShot where id='" + p453 + "'";
    return await v223.query(v235, {
      type: v223.QueryTypes.SELECT
    });
  }
  static async ["update"](p454) {
    const {
      taskId: _0x4e794e
    } = p454;
    await v223.update({
      ...p454
    }, {
      where: {
        id: _0x4e794e
      },
      fields: Object.keys(p454)
    });
    return true;
  }
  static async ["updateStatus"](p455, p456) {
    const v236 = {
      taskStatus: p456
    };
    await v223.update({
      ...v236
    }, {
      where: {
        id: p455
      },
      fields: Object.keys(v236)
    });
    return true;
  }
  static async changeHandleMan(p457, p458, p459) {
    const v237 = {
      handleManId: p458,
      handleManName: p459
    };
    await v223.update({
      ...v237
    }, {
      where: {
        id: p457
      },
      fields: Object.keys(v237)
    });
    return true;
  }
}
const v238 = new vRequire("../schema/buryPointSdkRelease");
v238.createTable();
class C8 {
  static async ["create"](p465) {
    return await v238.createWithRes({
      ...p465
    });
  }
  static async delete(p466) {
    await v238.destroy({
      where: {
        id: p466
      }
    });
    return true;
  }
  static async deleteByProjectId(p467) {
    await v238.destroy({
      where: {
        projectId: p467
      }
    });
    return true;
  }
  static async detail(p468) {
    return await v238.findOne({
      where: {
        id: p468
      }
    });
  }
  static async ["update"](p469, p470) {
    await v238.update({
      ...p470
    }, {
      where: {
        id: p469
      },
      fields: Object.keys(p470)
    });
    return true;
  }
  static async ["getListByPointId"](p471) {
    const v239 = {
      efxHL: function (p472, p473) {
        return p472 + p473;
      },
      lRVLZ: function (p474, p475) {
        return p474 + p475;
      }
    };
    let v240 = v239.efxHL(v239.lRVLZ("select count(1) as count from BuryPointSdkRelease where pointIds in (", p471), ")");
    return await v238.query(v240, {
      type: v238.QueryTypes.SELECT
    });
  }
  static async ["getPageList"](p476, p477, p478, p479, p480, p481) {
    const v241 = {
      QFFlp: function (p482, p483) {
        return p482 !== p483;
      },
      CpZFR: function (p484, p485) {
        return p484 + p485;
      },
      NEEED: function (p486, p487) {
        return p486 + p487;
      },
      xEcTA: " and status='"
    };
    let v242 = "select id,projectId,releaseName,pointIds,status,version,createBy,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt,updateBy,DATE_FORMAT(updatedAt,'%Y-%m-%d %H:%i:%s') AS updatedAt from BuryPointSdkRelease where 1=1 ";
    if (v241.QFFlp(p476, "")) {
      v242 = v242 + (" and releaseName like '%" + p476 + "%'");
    }
    if (p477 !== "") {
      v242 = v241.CpZFR(v242 + " and projectId in ('", p477.split(",")) + "')";
    }
    if (p478 !== "") {
      v242 = v241.CpZFR(v242 + " and projectId ='" + p478, "'");
    }
    if (p479 !== "") {
      v242 = v241.NEEED(v242 + v241.xEcTA + p479, "'");
    }
    v242 = v241.NEEED(v242 + " order by createdAt desc limit " + (p480 - 1) * p481 + ",", p481);
    return await v238.query(v242, {
      type: v238.QueryTypes.SELECT
    });
  }
  static async ["getPageCount"](p488, p489, p490, p491) {
    const v243 = {
      MBQBf: function (p492, p493) {
        return p492 + p493;
      },
      rQmyn: function (p494, p495) {
        return p494 !== p495;
      }
    };
    let v244 = "select count(1) as count from BuryPointSdkRelease where 1=1 ";
    if (p488 !== "") {
      v244 = v243.MBQBf(v244, " and releaseName like '%" + p488 + "%'");
    }
    if (p489 !== "") {
      v244 = v244 + " and projectId in ('" + p489.split(",") + "')";
    }
    if (v243.rQmyn(p490, "")) {
      v244 = v243.MBQBf(v244, " and projectId ='") + p490 + "'";
    }
    if (p491 !== "") {
      v244 = v244 + " and status='" + p491 + "'";
    }
    return await v238.query(v244, {
      type: v238.QueryTypes.SELECT
    });
  }
  static async checkName(p496, p497, p498) {
    const v245 = {
      qFutz: function (p499, p500) {
        return p499 !== p500;
      },
      yrPEF: function (p501, p502) {
        return p501 + p502;
      },
      vpknF: " and id !=",
      ICvGt: function (p503, p504) {
        return p503 + p504;
      },
      odbqj: function (p505, p506) {
        return p505 + p506;
      },
      OXEmj: function (p507, p508) {
        return p507 + p508;
      },
      kmtNJ: " and projectId ='"
    };
    let v246 = "select count(*) as count from BuryPointSdkRelease where 1=1 ";
    if (v245.qFutz(p496, "")) {
      v246 = v245.yrPEF(v246 + v245.vpknF + p496, "");
    }
    if (p497 !== "") {
      v246 = v245.yrPEF(v245.yrPEF(v246, " and releaseName='") + p497, "'");
    }
    if (v245.qFutz(p498, "")) {
      v246 = v245.ICvGt(v245.odbqj(v245.OXEmj(v246, v245.kmtNJ), p498), "'");
    }
    return await v238.query(v246, {
      type: v238.QueryTypes.SELECT
    });
  }
  static async ["checkPointIdByOthers"](p509, p510, p511) {
    const v247 = {
      irJlY: function (p512, p513) {
        return p512 + p513;
      },
      XIBLR: " and projectId ='",
      uxlPj: function (p514, p515) {
        return p514 !== p515;
      }
    };
    let v248 = "select count(*) as count from BuryPointSdkRelease where 1=1 ";
    if (p509 !== "") {
      v248 = v247.irJlY(v248 + v247.XIBLR + p509, "'");
    }
    if (v247.uxlPj(p510, "")) {
      const v249 = p510.split(",");
      let v250 = "";
      v249.forEach((p516, p517) => {
        if (p517 === v249.length - 1) {
          v250 += "'" + p516 + "'";
        } else {
          v250 += "'" + p516 + "',";
        }
      });
      v248 = v247.irJlY(v248 + " and pointIds in (" + v250, ")");
    }
    return await v238.query(v248, {
      type: v238.QueryTypes.SELECT
    });
  }
  static async deleteByProjectId(p518) {
    const v251 = {
      TsybO: function (p519, p520) {
        return p519 != p520;
      }
    };
    if (v251.TsybO(p518, "")) {
      let v252 = "delete from BuryPointSdkRelease where projectId ='" + p518 + "'";
      return await v238.execSql(v252);
    }
    return true;
  }
  static async getList(p521, p522, p523) {
    const v253 = {
      rMPXr: function (p524, p525) {
        return p524 + p525;
      }
    };
    let v254 = "select * from BuryPointSdkRelease where 1=1 ";
    if (p521 !== "") {
      v254 = v254 + " and releaseName='" + p521 + "'";
    }
    if (p522 !== "") {
      v254 = v254 + " and projectId ='" + p522 + "'";
    }
    if (p523 !== "") {
      v254 = v253.rMPXr(v254, " and status='") + p523 + "'";
    }
    return await v238.query(v254, {
      type: v238.QueryTypes.SELECT
    });
  }
  static async getPointIdsByProjectId(p526) {
    const v255 = {
      POPBF: "(SELECT arrayJoin(splitByChar(',', pointIds)) AS point FROM BuryPointSdkRelease"
    };
    let v256 = "SELECT arrayStringConcat(groupUniqArray(point), ',') AS pointIdList FROM " + v255.POPBF;
    if (p526 !== "") {
      v256 = v256 + " where  projectId ='" + p526 + "'";
    }
    v256 = v256 + ")";
    return await v238.query(v256, {
      type: v238.QueryTypes.SELECT
    });
  }
  static async getAllList() {
    let v257 = "select * from BuryPointSdkRelease";
    return await v238.query(v257, {
      type: v238.QueryTypes.SELECT
    });
  }
  static async ["createTable"](p527) {
    return await v238.query(p527, {
      type: v238.QueryTypes.SELECT
    });
  }
  static async ["saveValues"](p528, p529, p530) {
    const v258 = {
      IwsfJ: function (p531, p532) {
        return p531 + p532;
      },
      wSlsR: "INSERT INTO ",
      tlrDg: ") VALUES"
    };
    let v259 = v258.IwsfJ(v258.IwsfJ(v258.wSlsR, p528), " (") + p529 + v258.tlrDg + p530;
    return await v238.execSql(v259, {
      type: v238.QueryTypes.INSERT
    });
  }
  static async getProjectIdAndPointIdList() {
    const v260 = {
      JQHAE: "select projectId,pointIds from SdkRelease"
    };
    let v261 = v260.JQHAE;
    return await v238.query(v261, {
      type: v238.QueryTypes.SELECT
    });
  }
  static async getPointIdsList(p533) {
    const v262 = {
      pTwEq: "select pointIds from BuryPointSdkRelease where 1=1 "
    };
    let v263 = v262.pTwEq;
    if (p533 !== "") {
      v263 = v263 + " and projectId ='" + p533 + "'";
    }
    return await v238.query(v263, {
      type: v238.QueryTypes.SELECT
    });
  }
}
const v264 = new vRequire("../schema/buryPointTask");
v264.createTable();
class C9 {
  static async create(p534) {
    return await v264.createWithRes({
      ...p534
    });
  }
  static async ["delete"](p535) {
    await v264.destroy({
      where: {
        id: p535
      }
    });
    return true;
  }
  static async deleteByProjectId(p536) {
    await v264.destroy({
      where: {
        projectId: p536
      }
    });
    return true;
  }
  static async batchDeletion(p537) {
    const v265 = {
      MHIth: function (p538, p539) {
        return p538 === p539;
      },
      voQXU: function (p540, p541) {
        return p540 + p541;
      },
      AJImz: " delete from BuryPointTask where id in ("
    };
    const v266 = p537.split(",");
    let v267 = "";
    v266.forEach((p542, p543) => {
      if (v265.MHIth(p543, v266.length - 1)) {
        v267 += "'" + p542 + "'";
      } else {
        v267 += "'" + p542 + "',";
      }
    });
    const v268 = v265.voQXU(v265.AJImz, v267) + ")";
    return await v264.queexecSqlry(v268);
  }
  static async list(p544) {
    const v269 = {
      cAGNQ: function (p545, p546) {
        return p545 - p546;
      }
    };
    const {
      taskType = "1",
      myTaskType = "1",
      taskName = "",
      taskStatus = "",
      projectId = "",
      handleManId = "",
      createManId = "",
      page: _0x15a611,
      pageSize: _0x3e00f7,
      dateOrderby: _0x5ad4e0
    } = p544;
    let v270 = "";
    let v271 = "";
    let v272 = "";
    let v273 = "";
    switch (taskType) {
      case "1":
        v270 = " and taskStatus>='20' ";
        v271 = taskStatus ? " and taskStatus='" + taskStatus + "' " : "";
        v272 = handleManId ? " and handleManId='" + handleManId + "' " : "";
        v273 = createManId ? " and createManId='" + createManId + "' " : "";
        break;
      case "2":
        switch (myTaskType) {
          case "1":
            v270 = " and (createManId='" + createManId + "' or handleManId='" + handleManId + "') and taskStatus>='20' ";
            break;
          case "2":
            v270 = " and createManId='" + createManId + "' and taskStatus>='20' ";
            break;
          case "3":
            v270 = " and handleManId='" + handleManId + "' and taskStatus>='20' ";
            break;
          default:
            break;
        }
        v272 = handleManId ? " and handleManId='" + handleManId + "' " : "";
        v273 = createManId ? " and createManId='" + createManId + "' " : "";
        break;
      case "3":
        v270 = " and createManId='" + createManId + "' and taskStatus='10' ";
        break;
      default:
        break;
    }
    const v274 = taskName ? " and taskName like '%" + taskName + "%' " : "";
    const v275 = projectId ? " and projectId='" + projectId + "' " : "";
    const v276 = _0x5ad4e0 ? " order by createdAt " + _0x5ad4e0 + " " : "";
    const v277 = v269.cAGNQ(_0x15a611, 1) * _0x3e00f7;
    const v278 = " limit " + v277 + "," + _0x3e00f7 + " ";
    const v279 = "select id,taskName,taskDes,taskPoint,projectId,taskStatus,handleManId,createManId,handleManName,createManName,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt,DATE_FORMAT(updatedAt,'%Y-%m-%d %H:%i:%s') AS updatedAt from BuryPointTask where 1=1 " + v274 + " " + v270 + " " + v271 + " " + v275 + " " + v272 + " " + v273 + " " + v276 + " " + v278;
    const v280 = "select count(id) as count from BuryPointTask where 1=1 " + v274 + " " + v270 + " " + v271 + " " + v275 + " " + v272 + " " + v273;
    const v281 = await v264.query(v279, {
      type: v264.QueryTypes.SELECT
    });
    const v282 = await v264.query(v280, {
      type: v264.QueryTypes.SELECT
    });
    const v283 = v282 ? v282[0].count : 0;
    return {
      list: v281,
      total: v283
    };
  }
  static async detail(p547) {
    const v284 = "select * from BuryPointTask where id='" + p547 + "'";
    return await v264.query(v284, {
      type: v264.QueryTypes.SELECT
    });
  }
  static async ["update"](p548) {
    const {
      taskId: _0x2e04a7
    } = p548;
    await v264.update({
      ...p548
    }, {
      where: {
        id: _0x2e04a7
      },
      fields: Object.keys(p548)
    });
    return true;
  }
  static async ["updateStatus"](p549, p550) {
    const v285 = {
      taskStatus: p550
    };
    await v264.update({
      ...v285
    }, {
      where: {
        id: p549
      },
      fields: Object.keys(v285)
    });
    return true;
  }
  static async ["changeHandleMan"](p551, p552, p553) {
    const v286 = {
      handleManId: p552,
      handleManName: p553
    };
    await v264.update({
      ...v286
    }, {
      where: {
        id: p551
      },
      fields: Object.keys(v286)
    });
    return true;
  }
}
const v287 = new vRequire("../schema/buryPointTemplate");
v287.createTable();
class C10 {
  static async ["create"](p554) {
    return await v287.createWithRes({
      ...p554
    });
  }
  static async delete(p555) {
    await v287.destroy({
      where: {
        id: p555
      }
    });
    return true;
  }
  static async ["detail"](p556) {
    return await v287.findOne({
      where: {
        id: p556
      }
    });
  }
  static async ["update"](p557, p558) {
    await v287.update({
      ...p558
    }, {
      where: {
        id: p557
      },
      fields: Object.keys(p558)
    });
    return true;
  }
  static async ["updateProjectId"](p559, p560) {
    await v287.update({
      ...p560
    }, {
      where: {
        projectId: p559
      },
      fields: Object.keys(p560)
    });
    return true;
  }
  static async existTempleta(p561, p562, p563) {
    const v288 = {
      BbpMJ: function (p564, p565) {
        return p564 !== p565;
      },
      xRsmq: function (p566, p567) {
        return p566 + p567;
      },
      EeNLs: function (p568, p569) {
        return p568 + p569;
      },
      wbIel: " and userId ='"
    };
    let v289 = "select id from BuryPointTemplate where 1=1 ";
    if (p561 !== "") {
      v289 = v289 + " and projectId ='" + p561 + "'";
    }
    if (v288.BbpMJ(p562, "")) {
      v289 = v288.xRsmq(v289 + " and type='" + p562, "'");
    }
    if (v288.BbpMJ(p563, "")) {
      v289 = v288.EeNLs(v289 + v288.wbIel, p563) + "'";
    }
    return await v287.query(v289, {
      type: v287.QueryTypes.SELECT
    });
  }
  static async getCountByProjectId(p570) {
    const v290 = {
      ANgsl: function (p571, p572) {
        return p571 + p572;
      },
      ZvNmq: "select count(1) as count from BuryPointTemplate where projectId  = '"
    };
    let v291 = v290.ANgsl(v290.ZvNmq + p570, "'");
    return await v287.query(v291, {
      type: v287.QueryTypes.SELECT
    });
  }
  static async existWeTempletaByWekey(p573) {
    const v292 = {
      papic: function (p574, p575) {
        return p574 + p575;
      }
    };
    let v293 = "select id from BuryPointTemplate where 1=1 ";
    if (p573 !== "") {
      v293 = v292.papic(v292.papic(v293, " and weKey ='") + p573, "'");
    }
    return await v287.query(v293, {
      type: v287.QueryTypes.SELECT
    });
  }
  static async getList(p576, p577, p578, p579) {
    const v294 = {
      PIEwb: function (p580, p581) {
        return p580 !== p581;
      },
      FJJfs: function (p582, p583) {
        return p582 + p583;
      },
      dAbwf: " and userId ='"
    };
    let v295 = "select id,templateName,type,userId,projectId,groupCount,pageCount,cardCount,detail,createBy,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt,updateBy,DATE_FORMAT(updatedAt,'%Y-%m-%d %H:%i:%s') AS updatedAt from BuryPointTemplate where 1=1 ";
    if (p576 !== "") {
      v295 = v295 + (" and templateName like '%" + p576 + "%'");
    }
    if (v294.PIEwb(p577, "")) {
      v295 = v295 + " and projectId ='" + p577 + "'";
    }
    if (p578 !== "") {
      v295 = v294.FJJfs(v295, " and type='") + p578 + "'";
    }
    if (p579 !== "") {
      v295 = v295 + v294.dAbwf + p579 + "'";
    }
    return await v287.query(v295, {
      type: v287.QueryTypes.SELECT
    });
  }
  static async getWeKeyByProjectIdAndType(p584, p585) {
    const v296 = {
      IQVON: function (p586, p587) {
        return p586 + p587;
      },
      WdkSo: " and projectId ='",
      sZrOn: function (p588, p589) {
        return p588 + p589;
      }
    };
    let v297 = "select weKey from BuryPointTemplate where 1=1 ";
    if (p584 !== "") {
      v297 = v296.IQVON(v297, v296.WdkSo) + p584 + "'";
    }
    if (p585 !== "") {
      v297 = v296.sZrOn(v297 + " and type='", p585) + "'";
    }
    return await v287.query(v297, {
      type: v287.QueryTypes.SELECT
    });
  }
  static async ["countTemplate"](p590, p591, p592) {
    const v298 = {
      WSHOS: "select count(*) as count from BuryPointTemplate where 1=1 ",
      KBmKb: function (p593, p594) {
        return p593 !== p594;
      },
      GfzeV: function (p595, p596) {
        return p595 + p596;
      },
      IPqfg: function (p597, p598) {
        return p597 !== p598;
      },
      SgGOK: function (p599, p600) {
        return p599 + p600;
      },
      EEUlr: " and userId ='"
    };
    let v299 = v298.WSHOS;
    if (v298.KBmKb(p590, "")) {
      v299 = v299 + " and projectId ='" + p590 + "'";
    }
    if (p591 !== "") {
      v299 = v298.GfzeV(v299, " and type='") + p591 + "'";
    }
    if (v298.IPqfg(p592, "")) {
      v299 = v298.GfzeV(v298.SgGOK(v298.SgGOK(v299, v298.EEUlr), p592), "'");
    }
    return await v287.query(v299, {
      type: v287.QueryTypes.SELECT
    });
  }
  static async ["getPageCount"](p601, p602, p603, p604, p605, p606) {
    const v300 = {
      osViP: function (p607, p608) {
        return p607 !== p608;
      },
      vMEcG: function (p609, p610) {
        return p609 + p610;
      },
      dmSzl: function (p611, p612) {
        return p611 + p612;
      },
      OhNpJ: function (p613, p614) {
        return p613 + p614;
      },
      RZQlS: function (p615, p616) {
        return p615 + p616;
      },
      EXcqQ: " and userId ='"
    };
    let v301 = "select count(*) as count from BuryPointTemplate where 1=1 ";
    if (v300.osViP(p601, "")) {
      v301 = v301 + (" and templateName like '%" + p601 + "%'");
    }
    if (v300.osViP(p602, "")) {
      v301 = v300.vMEcG(v301 + " and projectId ='" + p602, "'");
    }
    if (p605 !== "") {
      v301 = v300.dmSzl(v301 + " and type='" + p605, "'");
    }
    if (p603 !== "") {
      v301 = v300.vMEcG(v300.dmSzl(v301, " and DATE_FORMAT(createdAt,'%Y-%m-%d') >='"), p603) + "'";
    }
    if (v300.osViP(p604, "")) {
      v301 = v301 + " and  DATE_FORMAT(createdAt,'%Y-%m-%d') <='" + p604 + "'";
    }
    if (p606 !== "") {
      v301 = v300.OhNpJ(v300.RZQlS(v301 + v300.EXcqQ, p606), "'");
    }
    return await v287.query(v301, {
      type: v287.QueryTypes.SELECT
    });
  }
  static async getPageList(p617, p618, p619, p620, p621, p622, p623, p624, p625) {
    const v302 = {
      KlWWy: function (p626, p627) {
        return p626 + p627;
      },
      JVRzZ: " and projectId ='",
      zLAKb: " and createdAt >='",
      JBGyV: function (p628, p629) {
        return p628 + p629;
      },
      EiqzC: " and userId ='",
      yIZQE: function (p630, p631) {
        return p630 !== p631;
      }
    };
    let v303 = "select id,templateName,type,userId,projectId,groupCount,pageCount,cardCount,detail,createBy,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt,DATE_FORMAT(updatedAt,'%Y-%m-%d %H:%i:%s') AS updatedAt from BuryPointTemplate where 1=1 ";
    if (p617 !== "") {
      v303 = v302.KlWWy(v303, " and templateName like '%" + p617 + "%'");
    }
    if (p618 !== "") {
      v303 = v303 + v302.JVRzZ + p618 + "'";
    }
    if (p621 !== "") {
      v303 = v302.KlWWy(v302.KlWWy(v303, " and type='"), p621) + "'";
    }
    if (p619 !== "") {
      v303 = v302.KlWWy(v303 + v302.zLAKb, p619) + "'";
    }
    if (p620 !== "") {
      v303 = v302.KlWWy(v302.JBGyV(v303, " and createdAt <'") + p620, "'");
    }
    if (p622 !== "") {
      v303 = v303 + v302.EiqzC + p622 + "'";
    }
    if (v302.yIZQE(p623, "")) {
      v303 = v302.JBGyV(v303 + " order by createdAt " + p623, "");
    }
    v303 = v302.JBGyV(v302.KlWWy(v303 + " limit ", (p624 - 1) * p625), ",") + p625;
    return await v287.query(v303, {
      type: v287.QueryTypes.SELECT
    });
  }
}
const v304 = new vRequire("../schema/buryPointUserBehaviorRelation");
v304.createTable();
class C11 {
  static async create(p632) {
    return await v304.createWithRes({
      ...p632
    });
  }
  static async ["delete"](p633) {
    await v304.destroy({
      where: {
        id: p633
      }
    });
    return true;
  }
  static async deleteByProjectId(p634) {
    await v304.destroy({
      where: {
        projectId: p634
      }
    });
    return true;
  }
  static async ["batchDeletion"](p635) {
    const v305 = p635.split(",");
    let v306 = "";
    v305.forEach((p636, p637) => {
      if (p637 === v305.length - 1) {
        v306 += "'" + p636 + "'";
      } else {
        v306 += "'" + p636 + "',";
      }
    });
    const v307 = " delete from BuryPointUserBehaviorRelation where id in (" + v306 + ")";
    return await v304.execSql(v307);
  }
  static async batchInsert(p638, p639) {
    const v308 = {
      AuVsK: "webfunny_log_sys",
      TNdxq: function (p640, p641) {
        return p640 ^ p641;
      },
      LryQo: function (p642, p643) {
        return p642 < p643;
      }
    };
    let v309 = "INSERT INTO BuryPointUserBehaviorRelation (" + p638 + ") VALUES" + p639;
    if (vRequire6) {
      try {
        vRequire6.log({
          projectId: "webfunny_log_sys",
          message: "埋点批量插入sql - BuryPointUserBehaviorRelation: " + p638,
          content: v309
        });
      } catch (_0x2f1eed) {
        console.error("batchInsert LoggerUpload error");
      }
    }
    try {
      return await v304.execSql(v309, {
        type: v304.QueryTypes.INSERT
      });
    } catch (_0x4b2158) {
      vRequire6.log({
        projectId: v308.AuVsK,
        message: "【批量失败】埋点批量插入sql - BuryPointUserBehaviorRelation: " + p638,
        content: v309
      });
      let v310 = 0;
      let v311 = 0;
      const v312 = [];
      let v313 = [];
      if (Array.isArray(p639)) {
        v313 = p639;
      } else {
        return;
      }
      for (let v314 = v308.TNdxq(594390, 594390); v308.LryQo(v314, v313.length); v314++) {
        const v315 = v313[v314];
        const v316 = "INSERT INTO BuryPointUserBehaviorRelation (" + p638 + ") VALUES " + v315;
        try {
          await v304.execSql(v316, {
            type: v304.QueryTypes.INSERT
          });
          v310++;
        } catch (_0x574b1e) {
          v311++;
          v312.push({
            index: v314,
            value: v315,
            error: _0x574b1e.message || _0x574b1e.toString()
          });
          vRequire6.log({
            projectId: "webfunny_log_sys",
            message: "【单个失败】埋点批量插入sql - BuryPointUserBehaviorRelation: " + p638,
            content: v316
          });
        }
      }
      return {
        successCount: v310,
        failCount: v311,
        errors: v312
      };
    }
  }
  static async detail(p644) {
    return await v304.findOne({
      where: {
        id: p644
      }
    });
  }
  static async update(p645, p646) {
    await v304.update({
      ...p646
    }, {
      where: {
        id: p645
      },
      fields: Object.keys(p646)
    });
    return true;
  }
  static async countSameRelation(p647, p648, p649) {
    const v317 = {
      VPbDa: function (p650, p651) {
        return p650 + p651;
      },
      dIbrC: " and pointId ='",
      mQQJl: function (p652, p653) {
        return p652 !== p653;
      },
      ZgKBn: function (p654, p655) {
        return p654 + p655;
      }
    };
    let v318 = "select count(1) as count from BuryPointUserBehaviorRelation where 1 = 1 ";
    if (p647 !== "") {
      v318 = v318 + " and projectId ='" + p647 + "'";
    }
    if (p648 !== "") {
      v318 = v317.VPbDa(v318, v317.dIbrC) + p648 + "'";
    }
    if (v317.mQQJl(p649, "")) {
      v318 = v317.ZgKBn(v318 + " and weRelationPointId ='" + p649, "'");
    }
    return await v304.query(v318, {
      type: v304.QueryTypes.SELECT
    });
  }
  static async getPointRelationList(p656) {
    const v319 = {
      PMNJT: function (p657, p658) {
        return p657 + p658;
      },
      hLxwX: function (p659, p660) {
        return p659 + p660;
      }
    };
    let v320 = "select pointId, weRelationPointId, weRelationPointCount from BuryPointUserBehaviorRelation where 1 = 1 ";
    if (p656 !== "") {
      v320 = v319.PMNJT(v320, " and pointId ='") + p656 + "'";
    }
    v320 = v319.PMNJT(v320, " and (weRelationPointId like '%~wf" + p656 + "%'  or weRelationPointId like '%" + p656 + "~wf%' or weRelationPointId like '%~wf" + p656 + "~wf%')");
    v320 = v319.hLxwX(v320, " order by weRelationPointCount desc limit 10 ");
    return await v304.query(v320, {
      type: v304.QueryTypes.SELECT
    });
  }
  static async getFirstStepSum(p661, p662, p663, p664) {
    const v321 = {
      SXoqj: function (p665, p666) {
        return p665 + p666;
      },
      znyhp: function (p667, p668) {
        return p667 + p668;
      },
      rJYgL: function (p669, p670) {
        return p669 + p670;
      }
    };
    let v322 = "select weRelationPointCount as count from BuryPointUserBehaviorRelation where 1 = 1 ";
    if (p661 !== "") {
      v322 = v321.SXoqj(v322 + " and projectId ='" + p661, "'");
    }
    if (p662 !== "") {
      v322 = v321.znyhp(v322 + " and pointId ='", p662) + "'";
    }
    if (p663 !== "") {
      v322 = v322 + " and createdAt >='" + p663 + "'";
    }
    if (p664 !== "") {
      v322 = v321.rJYgL(v322, " and createdAt <='") + p664 + "'";
    }
    v322 = v321.rJYgL(v322, " and weRelationPointId =''");
    console.log("第一列sql：" + v322);
    return await v304.query(v322, {
      type: v304.QueryTypes.SELECT
    });
  }
  static async ["getSecondStepData"](p671, p672, p673, p674, p675) {
    const v323 = {
      liwKd: function (p676, p677) {
        return p676 === p677;
      },
      DbWIF: function (p678, p679) {
        return p678 + p679;
      },
      GiwZB: function (p680, p681) {
        return p680 + p681;
      },
      sxgSf: function (p682, p683) {
        return p682 !== p683;
      },
      lUDCj: function (p684, p685) {
        return p684 + p685;
      },
      Tyjlg: " and pointId in(",
      Xmpjf: function (p686, p687) {
        return p686 !== p687;
      }
    };
    let v324 = "select pointId,weRelationPointId,sum(weRelationPointCount) as weRelationPointSum from BuryPointUserBehaviorRelation where 1 = 1 ";
    if (p671 !== "") {
      v324 = v323.DbWIF(v323.GiwZB(v324, " and projectId ='") + p671, "'");
    }
    if (v323.sxgSf(p672, "")) {
      v324 = v323.DbWIF(v324 + " and weRelationPointId ='", p672) + "'";
    }
    if (p673.length > 0) {
      let v325 = "";
      p673.forEach((p688, p689) => {
        if (v323.liwKd(p689, p673.length - 1)) {
          v325 += "" + p688;
        } else {
          v325 += p688 + ",";
        }
      });
      v324 = v323.lUDCj(v324 + v323.Tyjlg + v325, ") ");
    }
    if (v323.Xmpjf(p674, "")) {
      v324 = v323.lUDCj(v324 + " and createdAt >'" + p674, "'");
    }
    if (p675 !== "") {
      v324 = v323.DbWIF(v324, " and createdAt <='") + p675 + "'";
    }
    v324 = v324 + " group by pointId,weRelationPointId ";
    return await v304.query(v324, {
      type: v304.QueryTypes.SELECT
    });
  }
  static async ["getRecursionData"](p690, p691, p692) {
    const v326 = {
      FTtif: "select pointId,weRelationPointId,sum(weRelationPointCount) as weRelationPointSum from BuryPointUserBehaviorRelation where 1 = 1 ",
      cpGkJ: function (p693, p694) {
        return p693 + p694;
      },
      QzCjj: function (p695, p696) {
        return p695 + p696;
      },
      vytFb: function (p697, p698) {
        return p697 + p698;
      }
    };
    let v327 = v326.FTtif;
    if (p690 !== "") {
      v327 = v326.cpGkJ(v327, " and projectId ='") + p690 + "'";
    }
    if (p691 !== "") {
      v327 = v327 + " and createdAt >='" + p691 + "'";
    }
    if (p692 !== "") {
      v327 = v326.QzCjj(v326.vytFb(v327, " and createdAt <='") + p692, "'");
    }
    v327 = v327 + " group by pointId,weRelationPointId ";
    return await v304.query(v327, {
      type: v304.QueryTypes.SELECT
    });
  }
  static async getFieldRecursionData(p699, p700, p701, p702, p703, p704) {
    const v328 = {
      mcAXQ: function (p705, p706) {
        return p705 + p706;
      },
      iUyyN: "select ",
      oRdBd: " as relationFieldValue, weRelationField, ",
      NoRLm: " as weRelationFiledCount from ",
      OGdsa: function (p707, p708) {
        return p707 !== p708;
      },
      ZbfXY: function (p709, p710) {
        return p709 + p710;
      },
      qqOah: ", weRelationField "
    };
    let v329 = v328.mcAXQ(v328.iUyyN, p700) + v328.oRdBd + p702 + v328.NoRLm + p699 + " where 1 = 1 ";
    if (p701 !== "") {
      v329 = v328.mcAXQ(v329, " and ") + p701;
    }
    if (v328.OGdsa(p703, "")) {
      v329 = v329 + " and happenTime >='" + p703 + "'";
    }
    if (p704 !== "") {
      v329 = v328.ZbfXY(v329 + " and happenTime <='" + p704, "'");
    }
    v329 = v328.ZbfXY(v329, " group by ") + p700 + v328.qqOah;
    return await v304.query(v329, {
      type: v304.QueryTypes.SELECT
    });
  }
  static async ["getRelationData"](p711, p712, p713, p714) {
    const v330 = {
      uuLQM: function (p715, p716) {
        return p715 + p716;
      },
      uBYsP: " and pointId = '",
      fQyfZ: "' and weRelationPointId like '%~wf~",
      GwIRs: function (p717, p718) {
        return p717 !== p718;
      },
      zyKrS: function (p719, p720) {
        return p719 + p720;
      },
      UwIBt: " and createdAt <='"
    };
    let v331 = "select weRelationPointId from buryPointUserBehaviorRelation where 1=1 ";
    if (p711 !== "") {
      v331 = v330.uuLQM(v330.uuLQM(v331, v330.uBYsP), p711) + "' ";
    }
    if (p712 !== "") {
      v331 = v331 + v330.fQyfZ + p712 + "'";
    }
    if (v330.GwIRs(p713, "")) {
      v331 = v330.uuLQM(v331 + " and createdAt >='", p713) + "'";
    }
    if (p714 !== "") {
      v331 = v330.uuLQM(v330.zyKrS(v331, v330.UwIBt), p714) + "'";
    }
    return await v304.query(v331, {
      type: v304.QueryTypes.SELECT
    });
  }
}
const v333 = new vRequire("../schema/buryPointVisualTracking");
v333.createTable();
class C12 {
  static async create(p726) {
    return await v333.createWithRes({
      ...p726
    });
  }
  static async delete(p727) {
    await v333.destroy({
      where: {
        id: p727
      }
    });
    return true;
  }
  static async ["deleteByProjectId"](p728) {
    await v333.destroy({
      where: {
        projectId: p728
      }
    });
    return true;
  }
  static async batchDeletion(p729) {
    const v334 = {
      Agojn: function (p730, p731) {
        return p730 - p731;
      },
      JZlsi: function (p732, p733) {
        return p732 ^ p733;
      },
      Ovxtl: function (p734, p735) {
        return p734 + p735;
      }
    };
    const v335 = p729.split(",");
    let v336 = "";
    v335.forEach((p736, p737) => {
      if (p737 === v334.Agojn(v335.length, v334.JZlsi(602035, 602034))) {
        v336 += "'" + p736 + "'";
      } else {
        v336 += "'" + p736 + "',";
      }
    });
    const v337 = v334.Ovxtl(" delete from BuryPointVisualTracking where id in (", v336) + ")";
    return await v333.execSql(v337);
  }
  static async detail(p738) {
    return await v333.findOne({
      where: {
        id: p738
      }
    });
  }
  static async update(p739, p740) {
    const v338 = p739.split(",");
    console.log(v338, 66677);
    await v333.update({
      ...p740
    }, {
      where: {
        id: v338
      },
      fields: Object.keys(p740)
    });
    return true;
  }
  static async ["batchUpdate"](p741, p742) {
    const v339 = {
      hlcXf: function (p743, p744) {
        return p743 - p744;
      },
      vDeaj: function (p745, p746) {
        return p745 ^ p746;
      },
      dgZPI: function (p747, p748) {
        return p747 + p748;
      },
      nyaVx: "', updatedAt = '"
    };
    const v340 = p741.split(",");
    let v341 = "";
    v340.forEach((p749, p750) => {
      if (p750 === v339.hlcXf(v340.length, v339.vDeaj(822417, 822416))) {
        v341 += "'" + p749 + "'";
      } else {
        v341 += "'" + p749 + "',";
      }
    });
    const {
      enableFlag: _0x45bf43,
      operateBy: _0x4d0ac6,
      operateUserId: _0x2ba795,
      updatedAt: _0x49e58d
    } = p742;
    let v342 = v339.dgZPI(v339.dgZPI(v339.dgZPI("ALTER TABLE BuryPointVisualTracking UPDATE  enableFlag = " + _0x45bf43 + ", operateBy = '" + _0x4d0ac6 + "', operateUserId = '", _0x2ba795), v339.nyaVx) + _0x49e58d, "' WHERE id in (") + v341 + ")";
    return await v333.query(v342, {
      type: v333.QueryTypes.SELECT
    });
  }
  static async updateNameById(p751, p752) {
    await v333.update({
      ...p752
    }, {
      where: {
        id: p751
      },
      fields: Object.keys(p752)
    });
    return true;
  }
  static async getSamePoint(p753) {
    const {
      projectId = "",
      bindUserId = "",
      pointName = "",
      eventType = "",
      happenPage = "",
      xPath = ""
    } = p753;
    const v343 = await v333.findOne({
      where: {
        bindUserId: bindUserId,
        projectId: projectId,
        xPath: xPath,
        pointName: pointName,
        eventType: eventType,
        happenPage: happenPage
      }
    });
    return v343;
  }
  static async getPageList(p754) {
    const v344 = {
      JEEsg: function (p755, p756) {
        return p755 ^ p756;
      },
      sfQre: "createdAt",
      emwFR: "select id,projectId,bindUserId, bindBy,eventType,pointId, pointName,happenPage,elementIcon,xPath, ownerName, replacePointIdKey,ownerUserId, title,path,enableFlag,operateBy,operateUserId,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt,DATE_FORMAT(updatedAt,'%Y-%m-%d %H:%i:%s') AS updatedAt from BuryPointVisualTracking where 1 = 1 ",
      OCDTm: function (p757, p758) {
        return p757 + p758;
      },
      kdvra: " and projectId ='",
      MEaUI: function (p759, p760) {
        return p759 + p760;
      },
      RjUqG: function (p761, p762) {
        return p761 + p762;
      },
      DTMtX: function (p763, p764) {
        return p763 !== p764;
      },
      CgAzD: function (p765, p766) {
        return p765 + p766;
      },
      PyFHj: function (p767, p768) {
        return p767 + p768;
      },
      IbFts: " order by ",
      lcAKZ: " limit ",
      cQRAa: function (p769, p770) {
        return p769 - p770;
      }
    };
    const {
      projectId = "",
      page: _0x3f6c86,
      pageSize: _0x3227e7,
      enableFlag = -v344.JEEsg(422871, 422870),
      ownerUserId = "",
      bindUserId = "",
      pointName = "",
      eventType = "",
      orderByField = v344.sfQre,
      orderBy = "desc"
    } = p754;
    let v345 = v344.emwFR;
    if (projectId !== "") {
      v345 = v344.OCDTm(v345 + v344.kdvra + projectId, "'");
    }
    if (enableFlag !== -1) {
      v345 = v344.OCDTm(v345 + " and enableFlag ='", enableFlag) + "'";
    }
    if (ownerUserId !== "") {
      v345 = v344.MEaUI(v344.RjUqG(v345 + " and ownerUserId ='", ownerUserId), "'");
    }
    if (v344.DTMtX(eventType, "")) {
      v345 = v344.RjUqG(v345 + " and eventType ='", eventType) + "'";
    }
    if (v344.DTMtX(bindUserId, "")) {
      v345 = v344.RjUqG(v345 + " and bindUserId ='", bindUserId) + "'";
    }
    if (pointName !== "") {
      v345 = v344.CgAzD(v345, " and pointName like '%" + pointName + "%'");
    }
    v345 = v344.PyFHj(v345 + v344.IbFts + orderByField, " ") + orderBy + v344.lcAKZ + v344.cQRAa(_0x3f6c86, 1) * _0x3227e7 + "," + _0x3227e7;
    return await v333.query(v345, {
      type: v333.QueryTypes.SELECT
    });
  }
  static async getPageCount(p771) {
    const v346 = {
      aeDkd: function (p772, p773) {
        return p772 + p773;
      },
      vKQcL: function (p774, p775) {
        return p774 + p775;
      },
      wNCwp: function (p776, p777) {
        return p776 !== p777;
      },
      WATOb: function (p778, p779) {
        return p778 + p779;
      }
    };
    let v347 = "select count(*) as count from BuryPointVisualTracking where 1 = 1 ";
    const {
      projectId = "",
      enableFlag = -1,
      ownerUserId = "",
      bindUserId = "",
      pointName = "",
      eventType = ""
    } = p771;
    if (projectId !== "") {
      v347 = v346.aeDkd(v347, " and projectId ='") + projectId + "'";
    }
    if (enableFlag !== -1) {
      v347 = v346.aeDkd(v347 + " and enableFlag ='" + enableFlag, "'");
    }
    if (ownerUserId !== "") {
      v347 = v346.vKQcL(v347 + " and ownerUserId ='" + ownerUserId, "'");
    }
    if (eventType !== "") {
      v347 = v347 + " and eventType ='" + eventType + "'";
    }
    if (v346.wNCwp(bindUserId, "")) {
      v347 = v346.vKQcL(v347 + " and bindUserId ='" + bindUserId, "'");
    }
    if (pointName !== "") {
      v347 = v346.WATOb(v347, " and pointName like '%" + pointName + "%'");
    }
    return await v333.query(v347, {
      type: v333.QueryTypes.SELECT
    });
  }
  static async ["getInitDataByProjectId"](p780) {
    const v348 = {
      dTHjD: "select id,projectId,bindUserId,bindBy,eventType,pointName,pointId,happenPage,elementIcon,xPath,ownerName,replacePointIdKey, ownerUserId, title, path,enableFlag,operateBy,operateUserId,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt,DATE_FORMAT(updatedAt,'%Y-%m-%d %H:%i:%s') AS updatedAt from BuryPointVisualTracking where 1 = 1 ",
      GRnjG: function (p781, p782) {
        return p781 !== p782;
      },
      FqrwH: function (p783, p784) {
        return p783 + p784;
      },
      dojWp: " and projectId ='",
      ENnxR: " and enableFlag = 1 "
    };
    let v349 = v348.dTHjD;
    if (v348.GRnjG(p780, "")) {
      v349 = v348.FqrwH(v349 + v348.dojWp, p780) + "'";
    }
    v349 = v349 + v348.ENnxR;
    return await v333.query(v349, {
      type: v333.QueryTypes.SELECT
    });
  }
}
const v350 = new vRequire("../schema/buryPointWarehouse");
v350.createTable();
class C13 {
  static async ["create"](p790) {
    return await v350.createWithRes({
      ...p790
    });
  }
  static async ["delete"](p791) {
    await v350.destroy({
      where: {
        id: p791
      }
    });
    return true;
  }
  static async ["deleteByProjectId"](p792) {
    await v350.destroy({
      where: {
        projectId: p792
      }
    });
    return true;
  }
  static async detail(p793) {
    return await v350.findOne({
      where: {
        id: p793
      }
    });
  }
  static async ["detailByPointId"](p794) {
    const v351 = {
      qRjNS: function (p795, p796) {
        return p795 ^ p796;
      }
    };
    if (p794) {
      const v352 = "SELECT * from BuryPointWarehouse where pointId = " + p794 + "";
      const v353 = await v350.query(v352, {
        type: v350.QueryTypes.SELECT
      });
      if (v353) {
        return v353[v351.qRjNS(329768, 329768)];
      } else {
        return 0;
      }
    }
    return 0;
  }
  static async checkName(p797, p798) {
    const v354 = {
      eRPkF: function (p799, p800) {
        return p799 + p800;
      },
      eQzXJ: " and projectId='"
    };
    let v355 = "select count(*) as count from BuryPointWarehouse where 1=1 ";
    if (p797 !== "") {
      v355 = v354.eRPkF(v354.eRPkF(v355, v354.eQzXJ), p797) + "'";
    }
    if (p798 !== "") {
      v355 = v354.eRPkF(v355 + " and pointName='" + p798, "'");
    }
    return await v350.query(v355, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async checkPointId(p801) {
    const v356 = {
      Gjnxz: "select count(*) as count from BuryPointWarehouse where 1=1 ",
      aBjwk: function (p802, p803) {
        return p802 + p803;
      }
    };
    let v357 = v356.Gjnxz;
    if (p801 !== "") {
      v357 = v356.aBjwk(v357 + " and pointId='" + p801, "'");
    }
    return await v350.query(v357, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async getListByPointIds(p804) {
    const v358 = {
      bRvzE: function (p805, p806) {
        return p805 ^ p806;
      },
      ZZDkb: function (p807, p808) {
        return p807 + p808;
      }
    };
    const v359 = p804.split(",");
    let v360 = "";
    v359.forEach((p809, p810) => {
      if (p810 === v359.length - v358.bRvzE(857665, 857664)) {
        v360 += "" + p809;
      } else {
        v360 += p809 + ",";
      }
    });
    let v361 = v358.ZZDkb("select * from BuryPointWarehouse where pointId in (" + v360, ")");
    return await v350.query(v361, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async ["getNoWebfunnyListByPointIds"](p811) {
    const v362 = {
      fwHkA: function (p812, p813) {
        return p812 === p813;
      },
      knhmX: function (p814, p815) {
        return p814 + p815;
      }
    };
    const v363 = p811.split(",");
    let v364 = "";
    v363.forEach((p816, p817) => {
      if (p816) {
        if (v362.fwHkA(p817, v363.length - 1)) {
          v364 += "" + p816;
        } else {
          v364 += p816 + ",";
        }
      }
    });
    let v365 = v362.knhmX("select pointId from BuryPointWarehouse where weType !=1 and  pointId in (", v364) + ")";
    return await v350.query(v365, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async update(p818, p819) {
    await v350.update({
      ...p819
    }, {
      where: {
        id: p818
      },
      fields: Object.keys(p819)
    });
    return true;
  }
  static async ["getPageList"](p820, p821, p822, p823, p824, p825) {
    const v366 = {
      sDGhs: "select id,pointId,projectId,pointName,fields,pointDesc,weType,replacePointIdKey,createBy,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt from BuryPointWarehouse where 1=1 ",
      TBFPU: function (p826, p827) {
        return p826 !== p827;
      },
      WwWQh: function (p828, p829) {
        return p828 !== p829;
      },
      WYSVd: function (p830, p831) {
        return p830 + p831;
      },
      CTetS: function (p832, p833) {
        return p832 ^ p833;
      }
    };
    let v367 = v366.sDGhs;
    if (v366.TBFPU(p820, "")) {
      v367 = v367 + " and projectId='" + p820 + "'";
    }
    if (v366.TBFPU(p821, "")) {
      v367 = v367 + (" and pointName like '%" + p821 + "%'");
    }
    if (p825 !== "") {
      v367 = v367 + (" and (pointName like '%" + p825 + "%' or toString(pointId) = '" + p825 + "')");
    }
    if (v366.WwWQh(p822, "")) {
      v367 = v367 + " and weType='" + p822 + "'";
    }
    v367 = v366.WYSVd(v367 + " order by createdAt desc,pointId desc limit " + (p823 - v366.CTetS(635925, 635924)) * p824 + ",", p824);
    return await v350.query(v367, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async getPageCount(p834, p835, p836, p837) {
    const v368 = {
      nXMaN: "select count(*) as count from BuryPointWarehouse where 1=1 ",
      HNgBd: function (p838, p839) {
        return p838 + p839;
      },
      yuMjq: function (p840, p841) {
        return p840 !== p841;
      }
    };
    let v369 = v368.nXMaN;
    if (p834 !== "") {
      v369 = v368.HNgBd(v369 + " and projectId='", p834) + "'";
    }
    if (v368.yuMjq(p835, "")) {
      v369 = v369 + (" and pointName like '%" + p835 + "%'");
    }
    if (p837 !== "") {
      v369 = v369 + (" and (pointName like '%" + p837 + "%' or toString(pointId) = '" + p837 + "')");
    }
    if (p836 !== "") {
      v369 = v368.HNgBd(v369 + " and weType='" + p836, "'");
    }
    return await v350.query(v369, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async ["getAllPointList"]() {
    const v370 = {
      bEWcu: "select pointId, projectId, fields, weType, updatedAt from BuryPointWarehouse order by updatedAt desc"
    };
    let v371 = v370.bEWcu;
    return await v350.query(v371, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async ["getRecentlyUpdatedPoints"]() {
    let v372 = "select pointId, projectId, fields, weType, updatedAt from BuryPointWarehouse where updatedAt > DATE_SUB(NOW(), INTERVAL 2 MINUTE) order by updatedAt desc";
    return await v350.query(v372, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async ["getPointsUpdatedAfter"](p842) {
    let v373 = "select pointId, pointName, projectId, fields, weType, updatedAt from BuryPointWarehouse where updatedAt > '" + p842 + "' order by updatedAt desc";
    return await v350.query(v373, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async getPointsUpdatedAfterWithTimezone(p843) {
    const v374 = {
      bdebD: function (p844, p845) {
        return p844 ^ p845;
      }
    };
    const v375 = p843.toISOString().slice(v374.bdebD(472472, 472472), v374.bdebD(745427, 745408)).replace("T", " ");
    let v376 = "select pointId, projectId, fields, weType, updatedAt from BuryPointWarehouse where updatedAt > CONVERT_TZ('" + v375 + "', '+00:00', '+08:00') order by updatedAt desc";
    console.log("查询SQL（时区转换）: " + v376);
    return await v350.query(v376, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async getMaxUpdateTime() {
    let v377 = "select MAX(updatedAt) as maxUpdateTime from BuryPointWarehouse";
    return await v350.query(v377, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async getList(p846, p847, p848) {
    const v378 = {
      Mraks: function (p849, p850) {
        return p849 + p850;
      },
      VUvpi: " and projectId='"
    };
    let v379 = "select id,pointId,projectId,pointName,fields,pointDesc,weType,replacePointIdKey from BuryPointWarehouse where 1=1 ";
    if (p846 !== "") {
      v379 = v378.Mraks(v379, v378.VUvpi) + p846 + "'";
    }
    if (p847 !== "") {
      v379 = v379 + (" and pointName like '%" + p847 + "%'");
    }
    if (p848 !== "") {
      v379 = v379 + " and weType='" + p848 + "'";
    }
    v379 = v379 + " order by weType asc ";
    return await v350.query(v379, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async ["getPointIds"](p851, p852) {
    const v380 = {
      OQFKV: function (p853, p854) {
        return p853 + p854;
      },
      bldvc: " and weType='"
    };
    let v381 = "select pointId as id from BuryPointWarehouse where 1=1 ";
    if (p851 !== "") {
      v381 = v380.OQFKV(v381 + " and projectId='", p851) + "'";
    }
    if (p852 !== "") {
      v381 = v380.OQFKV(v380.OQFKV(v381 + v380.bldvc, p852), "'");
    }
    return await v350.query(v381, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async ["getPointIdsByProjectId"](p855) {
    let v382 = "select pointId from BuryPointWarehouse where projectId='" + p855 + "'";
    return await v350.query(v382, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async getWePointIdsByProjectId(p856) {
    const v383 = {
      WdtgY: function (p857, p858) {
        return p857 + p858;
      }
    };
    let v384 = v383.WdtgY("select pointId,replacePointIdKey,weType, projectId from BuryPointWarehouse where projectId='" + p856, "'");
    return await v350.query(v384, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async getCountByFieldId(p859) {
    const v385 = {
      QOAGe: function (p860, p861) {
        return p860 + p861;
      }
    };
    let v386 = v385.QOAGe("select count(*) as count from BuryPointWarehouse where fields in (", p859) + ")";
    return await v350.query(v386, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async getByProjectIdAndFieldIds(p862, p863) {
    const v387 = {
      SGAuT: function (p864, p865) {
        return p864 + p865;
      },
      YitcH: function (p866, p867) {
        return p866 !== p867;
      }
    };
    let v388 = "select * from BuryPointWarehouse where 1=1 ";
    if (p862 !== "") {
      v388 = v387.SGAuT(v388 + " and projectId='", p862) + "'";
    }
    if (v387.YitcH(p863, "")) {
      v388 = v387.SGAuT(v388 + " and INSTR(fields, '" + p863, "')");
    }
    return await v350.query(v388, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async ["getPointFieldIds"](p868, p869, p870, p871) {
    const v389 = {
      CeYaY: "select * from BuryPointWarehouse where 1=1 ",
      EAVQg: function (p872, p873) {
        return p872 !== p873;
      },
      USAzZ: function (p874, p875) {
        return p874 + p875;
      },
      ErUJC: " and projectId='",
      UITpc: function (p876, p877) {
        return p876 !== p877;
      },
      fwvRp: " and pointName='",
      bHJrR: function (p878, p879) {
        return p878 + p879;
      },
      GMBeB: " and pointDesc='"
    };
    let v390 = v389.CeYaY;
    if (v389.EAVQg(p868, "")) {
      v390 = v389.USAzZ(v390 + v389.ErUJC, p868) + "'";
    }
    if (v389.UITpc(p869, "")) {
      v390 = v390 + " and INSTR(fields, '" + p869 + "')";
    }
    if (p870 !== "") {
      v390 = v389.USAzZ(v390 + v389.fwvRp + p870, "'");
    }
    if (p871 !== "") {
      v390 = v389.bHJrR(v390, v389.GMBeB) + p871 + "'";
    }
    return await v350.query(v390, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async getAllList(p880) {
    const v391 = {
      oALaX: function (p881, p882) {
        return p881 + p882;
      }
    };
    let v392 = "select * from BuryPointWarehouse where 1=1 ";
    if (p880 !== "") {
      v392 = v391.oALaX(v392 + " and projectId='", p880) + "'";
    }
    return await v350.query(v392, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async getReplacePointIdKey(p883, p884) {
    const v393 = {
      dqYxC: function (p885, p886) {
        return p885 + p886;
      },
      iKVFJ: function (p887, p888) {
        return p887 + p888;
      }
    };
    let v394 = "select * from BuryPointWarehouse where 1=1 ";
    if (p883 !== "") {
      v394 = v393.dqYxC(v394 + " and projectId='" + p883, "'");
    }
    if (p884 !== "") {
      v394 = v393.iKVFJ(v394, " and replacePointIdKey='") + p884 + "'";
    }
    return await v350.query(v394, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async ["getAllListByProjectId"](p889) {
    const v395 = {
      dLyHr: "select * from BuryPointWarehouse where 1 = 1 ",
      kpmjS: function (p890, p891) {
        return p890 !== p891;
      },
      OqFks: function (p892, p893) {
        return p892 + p893;
      },
      OxTSq: function (p894, p895) {
        return p894 + p895;
      }
    };
    let v396 = v395.dLyHr;
    v396 = v396 + " and weType = 2";
    if (v395.kpmjS(p889, "")) {
      v396 = v395.OqFks(v395.OxTSq(v396, " or (projectId ='") + p889, "' and weType in (0,1))");
    }
    v396 = v396 + " order by weType asc ";
    return await v350.query(v396, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async ["getProjectAndWeAndTrackListByProjectId"](p896) {
    const v397 = {
      ISorm: function (p897, p898) {
        return p897 + p898;
      },
      pzRch: function (p899, p900) {
        return p899 + p900;
      }
    };
    let v398 = "select * from BuryPointWarehouse where 1 = 1 ";
    if (p896 !== "") {
      v398 = v397.ISorm(v398, " and projectId ='") + p896 + "' and weType in (0,1,3)";
    }
    v398 = v397.pzRch(v398, " order by weType asc ");
    return await v350.query(v398, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async ["getWePointIdsByReplacePointIdKey"](p901, p902) {
    const v399 = {
      oqSiP: function (p903, p904) {
        return p903 + p904;
      }
    };
    let v400 = v399.oqSiP(v399.oqSiP("select pointId from BuryPointWarehouse where projectId='" + p901, "' and replacePointIdKey='") + p902, "'");
    return await v350.query(v400, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async ["getListByProjectIdAndOldType"](p905) {
    const v401 = {
      LeXOw: function (p906, p907) {
        return p906 + p907;
      },
      NqhyF: " and weType = 2"
    };
    let v402 = "select * from BuryPointWarehouse where 1 = 1 ";
    v402 = v401.LeXOw(v402, v401.NqhyF);
    if (p905 !== "") {
      v402 = v402 + " or (projectId ='" + p905 + "' and weType = 0)";
    }
    v402 = v402 + " order by weType asc ";
    return await v350.query(v402, {
      type: v350.QueryTypes.SELECT
    });
  }
  static async getMaxPointId() {
    let v403 = "select max(pointId) as maxId from BuryPointWarehouse";
    return await v350.query(v403, {
      type: v350.QueryTypes.SELECT
    });
  }
}
class C14 {
  static async splicingTopEventAnalysisGroupBySql(p908, p909, p910, p911, p912, p913) {
    const v404 = {
      ilqvw: function (p914, p915) {
        return p914 === p915;
      },
      LcTCC: function (p916, p917) {
        return p916 ^ p917;
      },
      cSwrI: function (p918, p919) {
        return p918 ^ p919;
      },
      IYXYp: "count(distinct weCustomerKey)",
      KrrMY: "weCustomerKey",
      WLqBv: function (p920, p921) {
        return p920 + p921;
      },
      LCEwN: function (p922, p923) {
        return p922 + p923;
      },
      WEIfC: ",weCustomerKey,",
      tpMug: function (p924, p925) {
        return p924 + p925;
      },
      XqlVB: " from ",
      ePZSe: "is null",
      aOYHk: function (p926, p927) {
        return p926 + p927;
      },
      uNvkB: " or ",
      nLjsb: "is not null",
      fvBlG: function (p928, p929) {
        return p928 + p929;
      },
      oFgKf: " and ",
      XNmPY: function (p930, p931) {
        return p930 + p931;
      },
      AnJeL: function (p932, p933) {
        return p932 + p933;
      },
      kWHZy: function (p934, p935) {
        return p934 + p935;
      },
      hJwch: function (p936, p937) {
        return p936 === p937;
      },
      MWDVK: function (p938, p939) {
        return p938 + p939;
      },
      GKDuV: function (p940, p941) {
        return p940 + p941;
      },
      lcrKn: function (p942, p943) {
        return p942 + p943;
      },
      lQLuE: function (p944, p945) {
        return p944 + p945;
      },
      esdrc: function (p946, p947) {
        return p946 + p947;
      },
      JghDX: function (p948, p949) {
        return p948 + p949;
      },
      bJgDu: function (p950, p951) {
        return p950 + p951;
      },
      FfOiV: " limit 30 ",
      PfTLi: " limit 50 ",
      kvZcA: function (p952, p953) {
        return p952 + p953;
      }
    };
    let v405 = " select ";
    let v406 = "";
    if (p913) {
      v405 = v405 + p913 + ",";
    }
    let v407 = "weCustomerKey";
    let v408 = "count";
    if (p908.isRepeat === "2" || p908.isRepeat === 2) {
      v408 = "sum";
    } else if (v404.ilqvw(p908.isRepeat, "3") || p908.isRepeat === v404.LcTCC(791923, 791920)) {
      v408 = "avg";
    } else if (p908.isRepeat === "6" || p908.isRepeat === v404.cSwrI(402174, 402168)) {
      v408 = "max";
    } else if (p908.isRepeat === "7" || p908.isRepeat === 7) {
      v408 = "min";
    } else if (p908.isRepeat === "8" || p908.isRepeat === v404.LcTCC(929186, 929194)) {
      v408 = "sum";
      v406 = v404.IYXYp;
    } else {
      v408 = "count";
    }
    if (p908.fieldName) {
      v407 = p908.fieldName ? p908.fieldName : "weCustomerKey";
    } else {
      v407 = v404.KrrMY;
    }
    let v409 = v408 + "(";
    if (p908.isRepeat === "5" || p908.isRepeat === 5) {
      v409 = v409 + " distinct weCustomerKey";
      v407 = v404.KrrMY;
    } else if (p908.isRepeat === "4" || p908.isRepeat === v404.cSwrI(829438, 829434)) {
      v409 = v409 + v404.KrrMY;
      v407 = "weCustomerKey";
    } else if (p908.isRepeat === "1" || p908.isRepeat === 1) {
      v409 = v404.WLqBv(v409 + " distinct ", v407);
    } else {
      v409 = v404.WLqBv(v409, v407);
    }
    if (v406) {
      v409 = v404.LCEwN(v409 + ") / " + v406, " as count ");
      v405 = v405 + v409;
    } else {
      v409 = v409 + ") as count ";
      v405 = v405 + v409;
    }
    let v410 = 0;
    let v411 = "";
    if (p913) {
      v410 = 1;
      v411 = p913;
    }
    let v412 = "";
    if (v410 === 1 && v411) {
      v412 = v411;
    } else {
      v412 = p908.fieldName;
    }
    v405 = v405 + " from (select ";
    if (p908.isRepeat === "8" || p908.isRepeat === 8) {
      v405 = v404.WLqBv(v405 + v407 + v404.WEIfC, v412);
    } else {
      v405 = v404.WLqBv(v404.WLqBv(v405, v407) + ",", v412);
    }
    v405 = v404.tpMug(v405, v404.XqlVB) + p910;
    if (p909.length > 0) {
      let v413 = p908.andOr;
      if (!p908.andOr || p908.andOr === undefined) {
        v413 = "and";
      } else {
        v413 = vRequire2.convertAndOr(v413);
      }
      var v414 = "";
      var v415 = "";
      for (let v416 = v404.cSwrI(354441, 354441); v416 < p909.length; v416++) {
        let v417 = p909[v416].fieldName;
        let v418 = vRequire2.convertOper(p909[v416].rule);
        let v419 = p909[v416].value;
        if (v418 === v404.ePZSe) {
          v414 = v404.tpMug(v404.aOYHk(" " + v414 + "(" + v417 + " " + v418, v404.uNvkB), v417) + "='') " + v413 + " ";
        } else if (v418 === v404.nLjsb) {
          v414 = v404.LCEwN(v404.fvBlG(" ", v414) + "(" + v417 + " " + v418, v404.oFgKf) + v417 + "!='') " + v413 + " ";
        } else if (v418 === "in") {
          let v420 = v419.split(",");
          let v421 = "";
          for (let v422 = 0; v422 < v420.length; v422++) {
            v421 += v404.XNmPY(v404.AnJeL(v417 + " like '%", v420[v422]), "%' ") + " or ";
          }
          v421 = v421.substring(0, v421.lastIndexOf("or"));
          v414 = v404.kWHZy(v414 + " (" + v421, ")") + " " + v413 + " ";
        } else if (v404.hJwch(v418, "not in")) {
          let v423 = v419.split(",");
          let v424 = "";
          for (let v425 = 0; v425 < v423.length; v425++) {
            v424 += v404.kWHZy(v404.AnJeL(v417, " not like '%") + v423[v425] + "%' ", " and ");
          }
          v424 = v424.substring(v404.cSwrI(344885, 344885), v424.lastIndexOf("and"));
          v414 = v404.fvBlG(v414 + " (" + v424 + ") ", v413) + " ";
        } else if (v418 === "group by") {
          v415 = v404.MWDVK(" ) group by ", p913);
        } else {
          v414 = v404.GKDuV(v404.lcrKn(v404.MWDVK(v404.lQLuE(" " + v414 + v417 + " " + v418, " '"), v419), "'") + " " + v413, " ");
        }
      }
      v414 = v414.substr(0, v414.lastIndexOf(v413));
      if (v414) {
        v405 = " " + v405 + " where 1=1 and (" + v414 + p911 + ") " + v415;
      } else {
        v405 = v404.esdrc(v404.JghDX(" " + v405 + p911, " "), v415);
      }
    } else {
      v405 = v404.aOYHk(v405 + " where 1=1 ", p911);
    }
    if (v404.ilqvw(p908.isRepeat, "4") || p908.isRepeat === 4 || p908.isRepeat === "5" || p908.isRepeat === 5 || p913) {
      v405 = v405 + " ) group by " + p913;
    }
    v405 = v404.bJgDu(v405, " order by count desc");
    if (p912 !== "") {
      if (p912 === 1 || p912 === "1") {
        v405 = v405 + " limit 10 ";
      } else if (p912 === 2 || p912 === "2") {
        v405 = v404.tpMug(v405, v404.FfOiV);
      } else if (v404.ilqvw(p912, 3) || p912 === "3") {
        v405 = v405 + v404.PfTLi;
      }
    } else {
      v405 = v404.kvZcA(v405, " limit 10 ");
    }
    return v405;
  }
  static async calculateWeFieldCount(p954, p955, p956, p957, p958, p959) {
    const v426 = {
      Hwqgc: function (p960, p961) {
        return p960 + p961;
      },
      oBWHJ: function (p962, p963) {
        return p962 + p963;
      },
      lEKjE: "count(distinct weCustomerKey)",
      uBTVh: " sum(stayTime) / count(distinct weCustomerKey)",
      XkewB: function (p964, p965) {
        return p964 + p965;
      },
      DRmtl: function (p966, p967) {
        return p966 ^ p967;
      },
      YvNON: function (p968, p969) {
        return p968 + p969;
      },
      bpbog: function (p970, p971) {
        return p970 + p971;
      },
      gOKAM: function (p972, p973) {
        return p972 > p973;
      },
      IpSht: function (p974, p975) {
        return p974 === p975;
      },
      lJXAX: "and",
      DrDip: "is null",
      rStRP: function (p976, p977) {
        return p976 + p977;
      },
      deEEY: function (p978, p979) {
        return p978 + p979;
      },
      vovln: " or ",
      YeNxb: function (p980, p981) {
        return p980 + p981;
      },
      zkXqR: function (p982, p983) {
        return p982 + p983;
      },
      pEfvr: "!='') ",
      pfAYQ: function (p984, p985) {
        return p984 + p985;
      },
      MffIo: " and ",
      KigpK: function (p986, p987) {
        return p986 + p987;
      },
      fjgzl: function (p988, p989) {
        return p988 + p989;
      },
      bnSsN: function (p990, p991) {
        return p990 + p991;
      },
      NoQCn: function (p992, p993) {
        return p992 + p993;
      },
      xmZJT: function (p994, p995) {
        return p994 === p995;
      },
      gKhhv: function (p996, p997) {
        return p996 === p997;
      },
      PKOIw: function (p998, p999) {
        return p998 === p999;
      },
      hQXHn: function (p1000, p1001) {
        return p1000 === p1001;
      },
      FDFAV: function (p1002, p1003) {
        return p1002 === p1003;
      },
      xvCVS: " limit 10 "
    };
    let v427 = " select ";
    if (p959) {
      v427 = v426.Hwqgc(v426.oBWHJ(v427, p959), ",");
    }
    let v428 = "weCustomerKey";
    let v429 = "";
    let v430 = v429 + "(";
    switch (p954.fieldName) {
      case "allCount":
        v430 = v426.oBWHJ(v430, "count(weCustomerKey)");
        break;
      case "userCount":
        v430 = v430 + v426.lEKjE;
        break;
      case "averageCount":
        v430 = v426.oBWHJ(v430, " count(weCustomerKey) / count(distinct weCustomerKey)");
        break;
      case "averageStayTime":
        v430 = v430 + v426.uBTVh;
        v428 = v428 + ",stayTime ";
        break;
      default:
        break;
    }
    v430 = v426.XkewB(v430, ") as count ");
    v427 = v427 + v430;
    let v431 = v426.DRmtl(171663, 171663);
    let v432 = "";
    if (p959) {
      v431 = 1;
      v432 = p959;
    }
    let v433 = "";
    if (v431 === 1 && v432) {
      v433 = v432;
    } else {
      v433 = p954.fieldName;
    }
    v427 = v426.YvNON(v427 + " from (select " + v428, ",") + v433;
    v427 = v426.bpbog(v426.bpbog(v427, " from "), p956);
    if (v426.gOKAM(p955.length, 0)) {
      let v434 = p954.andOr;
      if (!p954.andOr || v426.IpSht(p954.andOr, undefined)) {
        v434 = v426.lJXAX;
      } else {
        v434 = vRequire2.convertAndOr(v434);
      }
      var v435 = "";
      var v436 = "";
      for (let v437 = 0; v437 < p955.length; v437++) {
        let v438 = p955[v437].fieldName;
        let v439 = vRequire2.convertOper(p955[v437].rule);
        let v440 = p955[v437].value;
        if (v439 === v426.DrDip) {
          v435 = v426.rStRP(v426.deEEY(" " + v435 + "(" + v438 + " ", v439) + v426.vovln + v438, "='') ") + v434 + " ";
        } else if (v439 === "is not null") {
          v435 = v426.deEEY(v426.YeNxb(v426.YvNON(v426.zkXqR(" " + v435 + "(", v438), " "), v439) + " and ", v438) + v426.pEfvr + v434 + " ";
        } else if (v439 === "in") {
          let v441 = v440.split(",");
          let v442 = "";
          for (let v443 = 0; v443 < v441.length; v443++) {
            v442 += v426.pfAYQ(v438 + " like '%" + v441[v443] + "%' ", " or ");
          }
          v442 = v442.substring(0, v442.lastIndexOf("or"));
          v435 = v426.YvNON(v426.bpbog(v426.Hwqgc(v435, " (") + v442, ")") + " ", v434) + " ";
        } else if (v439 === "not in") {
          let v444 = v440.split(",");
          let v445 = "";
          for (let v446 = 0; v446 < v444.length; v446++) {
            v445 += v426.bpbog(v438 + " not like '%", v444[v446]) + "%' " + v426.MffIo;
          }
          v445 = v445.substring(0, v445.lastIndexOf("and"));
          v435 = v426.pfAYQ(v435 + " (" + v445 + ") " + v434, " ");
        } else if (v426.IpSht(v439, "group by")) {
          v436 = " ) group by " + p959;
        } else {
          v435 = v426.pfAYQ(v426.KigpK(v426.fjgzl(" " + v435, v438) + " " + v439, " '") + v440, "'") + " " + v434 + " ";
        }
      }
      v435 = v435.substr(0, v435.lastIndexOf(v434));
      if (v435) {
        v427 = v426.bnSsN(" ", v427) + " where 1=1 and (" + v435 + p957 + ") " + v436;
      } else {
        v427 = v426.YeNxb(v426.NoQCn(" ", v427), p957) + " " + v436;
      }
    } else {
      v427 = v427 + " where 1=1 " + p957;
    }
    if (v426.IpSht(p954.isRepeat, "4") || v426.xmZJT(p954.isRepeat, 4) || p954.isRepeat === "5" || v426.gKhhv(p954.isRepeat, v426.DRmtl(637085, 637080)) || p959) {
      v427 = v426.NoQCn(v427, " ) group by ") + p959;
    }
    v427 = v427 + " order by count desc";
    if (p958 !== "") {
      if (v426.PKOIw(p958, 1) || p958 === "1") {
        v427 = v427 + " limit 10 ";
      } else if (v426.hQXHn(p958, 2) || v426.FDFAV(p958, "2")) {
        v427 = v427 + " limit 30 ";
      } else if (p958 === 3 || p958 === "3") {
        v427 = v426.rStRP(v427, " limit 50 ");
      }
    } else {
      v427 = v427 + v426.xvCVS;
    }
    return v427;
  }
  static async ["calculateAverageCount"](p1004, p1005, p1006, p1007, p1008, p1009) {}
  static async calculateAverageStayTime(p1010, p1011, p1012, p1013, p1014, p1015) {}
}
const v447 = new vRequire("../schema/buryPointAlarmMessage");
v447.createTable();
class C15 {
  static async create(p1016) {
    return await v447.createWithRes({
      ...p1016
    });
  }
  static async detail(p1017) {
    const v448 = await v447.findOne({
      where: {
        id: p1017
      }
    });
    return v448;
  }
  static async delete(p1018) {
    await v447.destroy({
      where: {
        id: p1018
      }
    });
    return true;
  }
  static async getList({
    page: _0x5aa96e,
    pageSize: _0x15797d,
    dateOrderby: _0x1acc1e,
    projectId: _0x535698,
    alarmName: _0x57b54a,
    urgency: _0x3267fc,
    userId: _0x29b456
  }) {
    const v449 = {
      OPjnT: "警报卡片：",
      IocMM: function (p1019, p1020) {
        return p1019 + p1020;
      },
      bGAMC: function (p1021, p1022) {
        return p1021 - p1022;
      },
      jQnJs: function (p1023, p1024) {
        return p1023 ^ p1024;
      }
    };
    let v450 = "select id,alarmName,notifyUsers,message,projectId,pageId,urgency,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt from BuryPointAlarmMessage where 1=1 ";
    let v451 = "";
    if (_0x57b54a !== "") {
      v451 = v449.IocMM(v451, " and alarmName like '%" + _0x57b54a + "%'");
    }
    if (_0x535698 !== "") {
      v451 = v451 + " and projectId ='" + _0x535698 + "'";
    }
    if (_0x3267fc !== "") {
      v451 = v449.IocMM(v451 + " and urgency ='", _0x3267fc) + "'";
    }
    if (_0x29b456 !== "") {
      v451 = v449.IocMM(v451 + " and POSITION(notifyUsers,'" + _0x3267fc, "') >0");
    }
    const v452 = "select count(id) as count from BuryPointAlarmMessage where 1=1 " + v451;
    const v453 = _0x1acc1e ? " order by createdAt " + _0x1acc1e + " " : "";
    const v454 = v449.bGAMC(_0x5aa96e, 1) * _0x15797d;
    const v455 = " limit " + v454 + "," + _0x15797d + " ";
    const v456 = v449.IocMM(v450, v451) + v453 + v455;
    const v457 = (await v447.query(v456, {
      type: v447.QueryTypes.SELECT
    })).map(p1025 => {
      return {
        ...p1025,
        message: p1025?.message.split(v449.OPjnT)[0],
        link: p1025?.message.split("警报卡片：")[1]
      };
    });
    const v458 = await v447.query(v452, {
      type: v447.QueryTypes.SELECT
    });
    const v459 = v458 ? v458[v449.jQnJs(184319, 184319)].count : 0;
    return {
      list: v457,
      total: v459
    };
  }
}
const v460 = new vRequire("../schema/config");
v460.createTable();
class C16 {
  static async createConfig(p1026) {
    return await v460.create(p1026);
  }
  static async getConfigDetail(p1027) {
    return await v460.findOne({
      where: {
        dataId: p1027
      }
    });
  }
  static async ["getConfigByName"](p1028) {
    let v461 = "select * from Config where configName='" + p1028 + "' limit 1";
    return await v460.query(v461, {
      type: v460.QueryTypes.SELECT
    });
  }
  static async updateConfig(p1029, p1030) {
    await v460.update({
      ...p1030
    }, {
      where: {
        dataId: p1029
      },
      fields: Object.keys(p1030)
    });
    return true;
  }
  static async getConfigByConfigName(p1031) {
    const v462 = {
      zKWZq: function (p1032, p1033) {
        return p1032 + p1033;
      }
    };
    let v463 = v462.zKWZq("select * from Config where configName='" + p1031, "'");
    return await v460.query(v463, {
      type: v460.QueryTypes.SELECT
    });
  }
  static async ["getAllConfigList"]() {
    let v464 = "select * from Config";
    return await v460.query(v464, {
      type: v460.QueryTypes.SELECT
    });
  }
}
const v465 = new vRequire("../schema/buryPointCard");
v465.createTable();
class C17 {
  static async create(p1034) {
    return await v465.createWithRes({
      ...p1034
    });
  }
  static async ["delete"](p1035) {
    await v465.destroy({
      where: {
        id: p1035
      }
    });
    return true;
  }
  static async deleteByProjectId(p1036) {
    await v465.destroy({
      where: {
        projectId: p1036
      }
    });
    return true;
  }
  static async detail(p1037) {
    return await v465.findOne({
      where: {
        id: p1037
      }
    });
  }
  static async ["update"](p1038, p1039) {
    await v465.update({
      ...p1039
    }, {
      where: {
        id: p1038
      },
      fields: Object.keys(p1039)
    });
    return true;
  }
  static async ["checkName"](p1040, p1041) {
    const v466 = {
      AiGeo: "select count(*) as count from BuryPointCard where 1=1 ",
      grHfl: function (p1042, p1043) {
        return p1042 + p1043;
      },
      hIZpC: " and name='"
    };
    let v467 = v466.AiGeo;
    if (p1040 !== "") {
      v467 = v466.grHfl(v467 + v466.hIZpC, p1040) + "'";
    }
    if (p1041 !== "") {
      v467 = v466.grHfl(v466.grHfl(v467, " and pageId='"), p1041) + "'";
    }
    return await v465.query(v467, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async getList(p1044, p1045, p1046) {
    const v468 = {
      qFRve: function (p1047, p1048) {
        return p1047 + p1048;
      },
      QkZMp: function (p1049, p1050) {
        return p1049 !== p1050;
      },
      uNRku: " and pageId ='",
      liPBf: " and type='"
    };
    let v469 = "select id,projectId,pageId,name,describe,type,calcRule,sort,dataGrid,conversionCycle,groupByFlag,keepAnalysisRule, groupFields, chartTableShow,togetherList,refreshFrequency,isShowOnlineCount,alarmStatus,createBy,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt,DATE_FORMAT(updatedAt,'%Y-%m-%d %H:%i:%s') AS updatedAt,describe from BuryPointCard where 1=1 ";
    if (p1044 !== "") {
      v469 = v468.qFRve(v468.qFRve(v469, " and name='"), p1044) + "'";
    }
    if (v468.QkZMp(p1045, "")) {
      v469 = v469 + v468.uNRku + p1045 + "'";
    }
    if (p1046 !== "") {
      v469 = v468.qFRve(v469, v468.liPBf) + p1046 + "'";
    }
    v469 = v469 + " order by sort asc ";
    return await v465.query(v469, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async ["getListByIds"](p1051) {
    const v470 = {
      peDco: "select id,projectId,pageId,name,describe,type,calcRule,sort,dataGrid,conversionCycle,groupByFlag,keepAnalysisRule, groupFields, chartTableShow,togetherList,refreshFrequency,isShowOnlineCount,alarmStatus,createBy,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt,describe from BuryPointCard where 1=1 ",
      dzdmQ: function (p1052, p1053) {
        return p1052 + p1053;
      },
      Ivhnx: function (p1054, p1055) {
        return p1054 + p1055;
      },
      XazFu: " and id in(",
      WOaLQ: " order by sort asc "
    };
    let v471 = v470.peDco;
    const v472 = p1051.split(",");
    let v473 = "";
    v472.forEach((p1056, p1057) => {
      if (p1057 === v472.length - 1) {
        v473 += "'" + p1056 + "'";
      } else {
        v473 += "'" + p1056 + "',";
      }
    });
    v471 = v470.dzdmQ(v470.dzdmQ(v470.Ivhnx(v471, v470.XazFu), v473) + ")", v470.WOaLQ);
    return await v465.query(v471, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async ["getFunnelList"](p1058) {
    const v474 = {
      GroKp: "select bpc.id,bpc.pageId,bpc.calcRule,bpc.conversionCycle from BuryPointCard bpc left join BuryPointProject bpp on bpp.id = bpc.pageId  ",
      fYmsb: " where bpp.projectId='",
      qDjbe: function (p1059, p1060) {
        return p1059 + p1060;
      }
    };
    let v475 = v474.GroKp;
    v475 = v475 + v474.fYmsb + p1058 + "'";
    v475 = v474.qDjbe(v475, " and bpc.type='5'");
    v475 = v475 + " and bpp.type=3";
    return await v465.query(v475, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async getIdAndNameList(p1061, p1062, p1063) {
    const v476 = {
      Vzybh: "select id,projectId,pageId,name from BuryPointCard where 1=1 ",
      zEpTn: function (p1064, p1065) {
        return p1064 + p1065;
      },
      BYvwL: function (p1066, p1067) {
        return p1066 + p1067;
      },
      suXpX: " and pageId ='",
      EClek: function (p1068, p1069) {
        return p1068 !== p1069;
      }
    };
    let v477 = v476.Vzybh;
    if (p1061 !== "") {
      v477 = v477 + " and name='" + p1061 + "'";
    }
    if (p1062 !== "") {
      v477 = v476.zEpTn(v476.BYvwL(v477, v476.suXpX) + p1062, "'");
    }
    if (v476.EClek(p1063, "")) {
      v477 = v476.BYvwL(v477 + " and type='" + p1063, "'");
    }
    return await v465.query(v477, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async getByPageId(p1070) {
    const v478 = {
      KJBEb: "select id,projectId,calcRule,type,createBy from BuryPointCard where pageId ='"
    };
    let v479 = v478.KJBEb + p1070 + "'";
    return await v465.query(v479, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async ["countCard"](p1071, p1072, p1073) {
    const v480 = {
      eVyWy: "select count(1) as count from BuryPointCard where 1=1 ",
      UhYTi: function (p1074, p1075) {
        return p1074 + p1075;
      },
      hfpjv: function (p1076, p1077) {
        return p1076 + p1077;
      },
      QIPYx: function (p1078, p1079) {
        return p1078 !== p1079;
      },
      cePwk: function (p1080, p1081) {
        return p1080 + p1081;
      }
    };
    let v481 = v480.eVyWy;
    if (p1071 !== "") {
      v481 = v480.UhYTi(v480.UhYTi(v481, " and name='") + p1071, "'");
    }
    if (p1072 !== "") {
      v481 = v480.hfpjv(v480.UhYTi(v481, " and pageId ='"), p1072) + "'";
    }
    if (v480.QIPYx(p1073, "")) {
      v481 = v480.cePwk(v481 + " and type='", p1073) + "'";
    }
    return await v465.query(v481, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async countCardsByPageIds(p1082) {
    if (!p1082 || p1082.length === 0) {
      return [];
    }
    let v482 = "";
    p1082.forEach((p1083, p1084) => {
      if (p1084 === p1082.length - 1) {
        v482 += "'" + p1083 + "'";
      } else {
        v482 += "'" + p1083 + "',";
      }
    });
    let v483 = "select pageId, count(id) as count from BuryPointCard where pageId in(" + v482 + ") group by pageId";
    return await v465.query(v483, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async getStatiscCards() {
    let v484 = "select * from BuryPointCard where type != '6'";
    return await v465.query(v484, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async getListByPageIdAndNameAndType(p1085, p1086, p1087) {
    const v485 = {
      DgPwu: function (p1088, p1089) {
        return p1088 !== p1089;
      },
      zIPss: " and pageId ='",
      tgyQm: function (p1090, p1091) {
        return p1090 + p1091;
      },
      qUIjA: function (p1092, p1093) {
        return p1092 + p1093;
      }
    };
    let v486 = "select id,projectId,pageId,name,sort,type,DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS createdAt from BuryPointCard where 1 = 1 ";
    if (v485.DgPwu(p1085, "")) {
      v486 = v486 + " and name='" + p1085 + "'";
    }
    if (v485.DgPwu(p1086, "")) {
      v486 = v486 + v485.zIPss + p1086 + "'";
    }
    if (v485.DgPwu(p1087, "")) {
      v486 = v485.tgyQm(v485.qUIjA(v486, " and type='") + p1087, "'");
    }
    v486 = v486 + " order by sort asc ";
    return await v465.query(v486, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async ["getListByPageIdAndSort"](p1094, p1095) {
    const v487 = {
      jyjVS: function (p1096, p1097) {
        return p1096 + p1097;
      },
      rkyVd: function (p1098, p1099) {
        return p1098 !== p1099;
      }
    };
    let v488 = "select * from BuryPointCard where 1=1 ";
    if (p1094 !== "") {
      v488 = v487.jyjVS(v487.jyjVS(v488, " and pageId ='"), p1094) + "'";
    }
    if (v487.rkyVd(p1095, "")) {
      v488 = v487.jyjVS(v487.jyjVS(v488, " and id != '") + p1095, "'");
    }
    v488 = v488 + " order by sort asc ";
    return await v465.query(v488, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async getMaxSort(p1100) {
    const v489 = {
      JWtbv: "select max(sort) as maxSort from BuryPointCard where 1=1 ",
      IiwVs: function (p1101, p1102) {
        return p1101 !== p1102;
      },
      OPmTY: function (p1103, p1104) {
        return p1103 + p1104;
      }
    };
    let v490 = v489.JWtbv;
    if (v489.IiwVs(p1100, "")) {
      v490 = v489.OPmTY(v490 + " and pageId ='" + p1100, "'");
    }
    return await v465.query(v490, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async getCardMaxSort(p1105) {
    const v491 = {
      LNfOM: function (p1106, p1107) {
        return p1106 + p1107;
      },
      DILGT: " and pageId ='",
      OCLmA: function (p1108, p1109) {
        return p1108 + p1109;
      }
    };
    let v492 = "select sort, dataGrid from BuryPointCard where 1=1 ";
    if (p1105 !== "") {
      v492 = v491.LNfOM(v492 + v491.DILGT + p1105, "'");
    }
    v492 = v491.OCLmA(v492, " order by sort desc limit 1");
    return await v465.query(v492, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async ["getCountByNoSysType"]() {
    const v493 = {
      nBRNl: "select count(1) as count from BuryPointCard where pageId not in (select id from BuryPointProject pp where pp.type = 3 and pp.projectId in (select projectId from BuryPointProject where sysType='1' and type = 1)) "
    };
    let v494 = v493.nBRNl;
    return await v465.query(v494, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async getCardCountByProjectId(p1110) {
    const v495 = {
      pZcpC: function (p1111, p1112) {
        return p1111 + p1112;
      }
    };
    let v496 = v495.pZcpC("select count(1) as count from BuryPointCard where projectId  = '" + p1110, "'");
    return await v465.query(v496, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async ["getAllList"]() {
    let v497 = "select * from BuryPointCard";
    return await v465.query(v497, {
      type: v465.QueryTypes.SELECT
    });
  }
  static async ["statisticData"](p1113) {
    try {
      return await v465.query(p1113, {
        type: v465.QueryTypes.SELECT
      });
    } catch (_0x297f8b) {
      vRequire5.error(_0x297f8b);
    }
  }
  static async getAlarmCardList() {
    const v498 = {
      wfbyT: function (p1114, p1115) {
        return p1114 + p1115;
      },
      ScXsC: " and (bpc.calcRule not like '%"
    };
    let v499 = v498.wfbyT(v498.wfbyT(v498.wfbyT(v498.wfbyT("select * from BuryPointCard bpc where bpc.calcRule !='[]' and bpc.noticeWay !='[]' " + v498.ScXsC, "\"isRepeat\":\"4\""), "%' and bpc.calcRule not like '%"), "\"isRepeat\":\"5\""), "%') and bpc.noticeWay !='' and bpc.type not in (5,8,9,12)");
    console.log(v499);
    return await v465.query(v499, {
      type: v465.QueryTypes.SELECT
    });
  }
}
const v500 = new vRequire("../schema/buryPointCardStatistics");
class C18 {
  static async ["createOrUpdate"](p1116, p1117) {
    const v501 = {
      MuJab: function (p1118, p1119) {
        return p1118 + p1119;
      },
      qPRGI: "DEFAULT",
      BKaxJ: "yyyy-MM-dd hh:mm:ss",
      YFeDr: function (p1120, p1121) {
        return p1120 != p1121;
      },
      tcUZF: "', ",
      wKDpQ: "happenDate",
      nbuVn: " AND DATE_FORMAT(happenDate,'%Y-%m-%d') = '",
      QElpl: " select count(1) as count from ",
      aPFPt: " where 1=1 ",
      OmwHc: function (p1122, p1123) {
        return p1122 ^ p1123;
      },
      WHnNv: function (p1124, p1125, p1126) {
        return p1124(p1125, p1126);
      },
      QdNHd: function (p1127, p1128) {
        return p1127 + p1128;
      }
    };
    let v502 = "";
    let v503 = "";
    const v504 = ["pageId", "cardId", "cardName", "calcField", "calcFieldKey", "count", "percentage", "happenDate", "createdAt", "updatedAt", "id"];
    v504.forEach((p1129, p1130) => {
      if (p1130 == v504.length - 1) {
        v502 += v501.MuJab(v501.MuJab("`", p1129), "`");
        let v505 = p1116[p1129];
        if (v505 != undefined) {
          v503 += v501.MuJab("'" + v505, "'");
        } else {
          v503 += v501.qPRGI;
        }
      } else {
        v502 += "`" + p1129 + "`, ";
        let v506 = p1116[p1129];
        switch (p1129) {
          case "id":
            v506 = vRequire2.getUuid();
            break;
          case "createdAt":
            v506 = new Date().Format(v501.BKaxJ);
          case "updatedAt":
            v506 = new Date().Format(v501.BKaxJ);
            break;
          default:
            break;
        }
        if (v501.YFeDr(v506, undefined)) {
          v503 += v501.MuJab("'", v506) + v501.tcUZF;
        } else {
          v503 += "DEFAULT, ";
        }
      }
    });
    const v507 = ["pageId", "cardId", "cardName", "calcField", "calcFieldKey", "happenDate"];
    let v508 = v501.QElpl + p1117;
    let v509 = v501.aPFPt;
    v507.forEach((p1131, p1132) => {
      let v510 = p1116[p1131];
      if (p1131 === v501.wKDpQ) {
        v509 += v501.MuJab(v501.nbuVn + v510, "' ");
      } else if (v510 !== undefined) {
        v509 += "AND " + p1131 + "='" + v510 + "' ";
      }
    });
    v508 += v509;
    let v511 = await v500.query(v508);
    let v512 = v511 && v511.length > v501.OmwHc(168049, 168049) ? v501.WHnNv(parseInt, v511[0].count, 10) : 0;
    if (v512 > 0) {
      let v513 = v501.MuJab(v501.MuJab("ALTER TABLE " + p1117 + " update count = '" + p1116.count, "' "), v509);
      await v500.execSql(v513);
    } else {
      let v514 = v501.QdNHd(v501.QdNHd("insert into ", p1117) + "(" + v502 + ") values(" + v503, ")");
      await v500.execSql(v514);
    }
  }
  static async ["delete"](p1133) {
    await v500.destroy({
      where: {
        id: p1133
      }
    });
    return true;
  }
  static async detail(p1134) {
    return await v500.findOne({
      where: {
        id: p1134
      }
    });
  }
  static async update(p1135, p1136) {
    await v500.update({
      ...p1136
    }, {
      where: {
        id: p1135
      },
      fields: Object.keys(p1136)
    });
    return true;
  }
  static async updateByCard(p1137, p1138) {
    await v500.update({
      ...p1138
    }, {
      where: {
        cardId: p1137
      },
      fields: Object.keys(p1138)
    });
    return true;
  }
  static async ["updateStatisticByCard"](p1139, p1140, p1141) {
    const v515 = {
      eBEUm: function (p1142, p1143) {
        return p1142 + p1143;
      },
      WUxAH: "update "
    };
    let v516 = v515.eBEUm(v515.eBEUm(v515.WUxAH, p1139) + " set pageId = '" + p1141 + "' where cardId= '", p1140) + "'";
    return await v500.query(v516, {
      type: v500.QueryTypes.SELECT
    });
  }
  static async ["getOne"](p1144, p1145, p1146, p1147, p1148, p1149) {
    const v517 = {
      fSLcn: function (p1150, p1151) {
        return p1150 + p1151;
      },
      erVWa: function (p1152, p1153) {
        return p1152 !== p1153;
      },
      JxsBk: function (p1154, p1155) {
        return p1154 + p1155;
      },
      ViJQT: function (p1156, p1157) {
        return p1156 !== p1157;
      },
      PHisE: " and calcFieldKey ='"
    };
    let v518 = v517.fSLcn("select * from " + p1144, " where 1=1 ");
    if (v517.erVWa(p1146, "")) {
      v518 = v518 + " and cardId='" + p1146 + "'";
    }
    if (p1145 !== "") {
      v518 = v517.JxsBk(v517.fSLcn(v518, " and pageId ='"), p1145) + "'";
    }
    if (p1147 !== "") {
      v518 = v518 + " and calcField ='" + p1147 + "'";
    }
    if (v517.ViJQT(p1148, "")) {
      v518 = v518 + v517.PHisE + p1148 + "'";
    }
    if (p1149 !== "") {
      v518 = v517.JxsBk(v518, " and DATE_FORMAT(happenDate,'%Y-%m-%d') ='") + p1149 + "'";
    }
    return await v500.query(v518, {
      type: v500.QueryTypes.SELECT
    });
  }
  static async getList(p1158, p1159, p1160, p1161, p1162, p1163, p1164) {
    const v519 = {
      VWlQT: function (p1165, p1166) {
        return p1165 + p1166;
      },
      pebrN: " where 1=1 ",
      EgqHI: function (p1167, p1168) {
        return p1167 + p1168;
      },
      lBUdD: function (p1169, p1170) {
        return p1169 + p1170;
      },
      maejv: function (p1171, p1172) {
        return p1171 !== p1172;
      },
      czVuy: function (p1173, p1174) {
        return p1173 + p1174;
      },
      PwOxn: function (p1175, p1176) {
        return p1175 !== p1176;
      },
      gdzuG: function (p1177, p1178) {
        return p1177 + p1178;
      },
      jWkPZ: " and happenDate <='",
      Njhfk: " order by updatedAt desc "
    };
    let v520 = v519.VWlQT("select * from ", p1158) + v519.pebrN;
    if (p1160 !== "") {
      v520 = v519.VWlQT(v520 + " and cardId='", p1160) + "'";
    }
    if (p1159 !== "") {
      v520 = v519.EgqHI(v520 + " and pageId ='", p1159) + "'";
    }
    if (p1161 !== "") {
      v520 = v519.lBUdD(v520 + " and calcField ='" + p1161, "'");
    }
    if (v519.maejv(p1162, "")) {
      v520 = v519.czVuy(v519.EgqHI(v520, " and calcFieldKey ='"), p1162) + "'";
    }
    if (v519.PwOxn(p1163, "")) {
      v520 = v519.lBUdD(v520 + " and happenDate >'", p1163) + "'";
    }
    if (p1164 !== "") {
      v520 = v519.gdzuG(v520, v519.jWkPZ) + p1164 + "'";
    }
    v520 = v520 + v519.Njhfk;
    return await v500.query(v520, {
      type: v500.QueryTypes.SELECT
    });
  }
  static async ["getGroupByTopList"](p1179, p1180, p1181, p1182, p1183, p1184) {
    const v521 = {
      eDWwS: function (p1185, p1186) {
        return p1185 + p1186;
      },
      MYgfS: function (p1187, p1188) {
        return p1187 + p1188;
      },
      XWPhd: function (p1189, p1190) {
        return p1189 + p1190;
      },
      bOwRE: " limit 30 ",
      yXRqv: function (p1191, p1192) {
        return p1191 === p1192;
      },
      WyTZV: function (p1193, p1194) {
        return p1193 === p1194;
      }
    };
    let v522 = v521.eDWwS(v521.eDWwS("select calcField,pageId,cardId from ", p1179), " where 1=1 ");
    if (p1180 !== "") {
      v522 = v521.MYgfS(v522 + " and pageId = '", p1180) + "'";
    }
    if (p1181 !== "") {
      v522 = v522 + " and cardId = '" + p1181 + "'";
    }
    if (p1183 !== "") {
      v522 = v522 + " and happenDate >'" + p1183 + "'";
    }
    if (p1184 !== "") {
      v522 = v521.XWPhd(v521.eDWwS(v522, " and happenDate <='"), p1184) + "'";
    }
    v522 = v522 + " GROUP BY calcField,pageId,cardId ORDER BY sum(count) DESC ";
    if (p1182 !== "") {
      if (p1182 === 1 || p1182 === "1") {
        v522 = v521.XWPhd(v522, " limit 10 ");
      } else if (p1182 === 2 || p1182 === "2") {
        v522 = v522 + v521.bOwRE;
      } else if (v521.yXRqv(p1182, 3) || v521.WyTZV(p1182, "3")) {
        v522 = v522 + " limit 50 ";
      }
    }
    return await v500.query(v522, {
      type: v500.QueryTypes.SELECT
    });
  }
  static async ["getGroupByList"](p1195, p1196, p1197, p1198, p1199, p1200) {
    const v523 = {
      ZiwNp: "select * from ",
      HsIuJ: function (p1201, p1202) {
        return p1201 + p1202;
      },
      CBjHN: function (p1203, p1204) {
        return p1203 + p1204;
      },
      sxuOY: " and cardId='",
      iRNgN: function (p1205, p1206) {
        return p1205 + p1206;
      },
      KTRFt: function (p1207, p1208) {
        return p1207 + p1208;
      },
      UpqIN: function (p1209, p1210) {
        return p1209 + p1210;
      },
      ByKZX: " and calcField ='",
      areQt: function (p1211, p1212) {
        return p1211 + p1212;
      },
      EGLZd: function (p1213, p1214) {
        return p1213 !== p1214;
      },
      zPVHZ: function (p1215, p1216) {
        return p1215 + p1216;
      },
      fOYCr: function (p1217, p1218) {
        return p1217 + p1218;
      },
      OjWqd: " and happenDate <='",
      EOjdH: " order by updatedAt desc"
    };
    let v524 = v523.ZiwNp + p1195 + " where 1=1 ";
    if (p1197 !== "") {
      v524 = v523.HsIuJ(v523.CBjHN(v524, v523.sxuOY), p1197) + "'";
    }
    if (p1196 !== "") {
      v524 = v523.iRNgN(v524 + " and pageId ='" + p1196, "'");
    }
    v524 = v523.KTRFt(v523.UpqIN(v524, v523.ByKZX), p1198) + "'";
    if (p1199 !== "") {
      v524 = v523.areQt(v523.CBjHN(v524, " and happenDate >'") + p1199, "'");
    }
    if (v523.EGLZd(p1200, "")) {
      v524 = v523.zPVHZ(v523.fOYCr(v524 + v523.OjWqd, p1200), "'");
    }
    v524 = v524 + v523.EOjdH;
    return await v500.query(v524, {
      type: v500.QueryTypes.SELECT
    });
  }
  static async deleteByCardId(p1219, p1220, p1221) {
    const v525 = {
      xahze: function (p1222, p1223) {
        return p1222 === p1223;
      },
      aCEbq: function (p1224, p1225) {
        return p1224 != p1225;
      },
      JqRPi: function (p1226, p1227) {
        return p1226 + p1227;
      },
      iJpRc: function (p1228, p1229) {
        return p1228 + p1229;
      },
      ByCGX: function (p1230, p1231) {
        return p1230 > p1231;
      },
      Mcftt: function (p1232, p1233) {
        return p1232 ^ p1233;
      }
    };
    if (v525.aCEbq(p1219, "")) {
      let v526 = v525.JqRPi(v525.iJpRc(v525.iJpRc("delete from ", p1220) + " where cardId ='", p1219), "'");
      if (p1221 && v525.ByCGX(p1221.length, v525.Mcftt(840476, 840476))) {
        let v527 = "";
        p1221.forEach((p1234, p1235) => {
          if (v525.xahze(p1235, p1221.length - 1)) {
            v527 += "'" + p1234 + "'";
          } else {
            v527 += "'" + p1234 + "',";
          }
        });
        v526 = v526 + " and calcFieldKey in(" + v527 + ")";
      }
      return await v500.execSql(v526);
    } else {
      return true;
    }
  }
  static async ["deleteStatisticValues"](p1236, p1237, p1238, p1239, p1240) {
    const v528 = {
      SyTEm: "delete from ",
      KmQrJ: function (p1241, p1242) {
        return p1241 !== p1242;
      },
      Bdwpq: " and pageId='",
      CEAUF: function (p1243, p1244) {
        return p1243 + p1244;
      }
    };
    let v529 = v528.SyTEm + p1236 + " where 1=1 ";
    if (v528.KmQrJ(p1237, "")) {
      v529 = v529 + v528.Bdwpq + p1237 + "'";
    }
    if (p1238 !== "") {
      v529 = v528.CEAUF(v529 + " and cardId ='", p1238) + "'";
    }
    if (p1239 !== "") {
      v529 = v528.CEAUF(v529 + " and calcField ='", p1239) + "'";
    }
    if (v528.KmQrJ(p1240, "")) {
      v529 = v529 + " and happenDate ='" + p1240 + "'";
    }
    return await v500.execSql(v529);
  }
}
const v530 = new vRequire("../schema/config");
class C19 {
  static async querySql(p1250) {
    return await v530.query(p1250);
  }
  static calcFlowData(p1251, p1252, p1253 = 0) {
    if (!global.eventInfo.calculateFlowData[p1251]) {
      global.eventInfo.calculateFlowData[p1251] = {};
    }
    if (!global.eventInfo.calculateFlowData[p1251][p1252]) {
      global.eventInfo.calculateFlowData[p1251][p1252] = 1;
    } else {
      global.eventInfo.calculateFlowData[p1251][p1252] += p1253;
    }
  }
  static async getAllTableList(p1254) {
    let v531 = "\n    SELECT \n      table_name as tableName\n    FROM\n      information_schema.tables \n    WHERE table_schema = '" + p1254 + "' \n      AND table_name like 'event%' \n    ";
    return await v530.execSql(v531);
  }
  static async checkTableName(p1255) {
    let v532 = "\n    SELECT \n      count(*) as count\n    FROM\n      information_schema.tables \n    WHERE table_schema = '" + accountInfo.mysqlConfig.write.dataBaseName + "'  \n      AND table_name = \n    '" + p1255 + "'";
    return await v530.execSql(v532);
  }
  static async ["createLogTable"](p1256, p1257) {
    const v533 = {
      QwSGV: function (p1258, p1259) {
        return p1258 + p1259;
      },
      SdmiK: "CREATE TABLE IF NOT EXISTS ",
      PalKU: "(`id` UUID DEFAULT generateUUIDv4(), ",
      TEjMO: function (p1260, p1261) {
        return p1260 ^ p1261;
      },
      oOTWd: function (p1262, p1263) {
        return p1262 < p1263;
      },
      UrAXq: "FLOAT",
      mWgBl: function (p1264, p1265) {
        return p1264 + p1265;
      },
      UhmKL: function (p1266, p1267) {
        return p1266 + p1267;
      },
      WZriN: "Float32,",
      ieYkR: function (p1268, p1269) {
        return p1268 === p1269;
      },
      rfddG: function (p1270, p1271) {
        return p1270 + p1271;
      },
      mobiZ: function (p1272, p1273) {
        return p1272 + p1273;
      },
      KLjmM: "String,",
      tHnpk: function (p1274, p1275) {
        return p1274 === p1275;
      },
      mxrpo: "BIGINT",
      BLCSo: function (p1276, p1277) {
        return p1276 + p1277;
      },
      aURJm: function (p1278, p1279) {
        return p1278 + p1279;
      },
      lPLkD: function (p1280, p1281) {
        return p1280 + p1281;
      },
      VRBmS: "`happenTime` DateTime,"
    };
    let v534 = v533.QwSGV(v533.SdmiK, p1256) + v533.PalKU;
    for (let v535 = v533.TEjMO(605483, 605483); v533.oOTWd(v535, p1257.length); v535++) {
      const v536 = p1257[v535];
      const {
        fieldName: _0x32277c,
        fieldType: _0x5522e0,
        fieldLength: _0x70e191
      } = v536;
      if (_0x5522e0 === v533.UrAXq || _0x5522e0 === "float") {
        v534 = v533.mWgBl(v533.UhmKL(v534, "`"), _0x32277c) + "` " + v533.WZriN;
      } else if (v533.ieYkR(_0x5522e0, "VARCHAR") || v533.ieYkR(_0x5522e0, "varchar")) {
        v534 = v533.rfddG(v533.UhmKL(v533.mobiZ(v533.UhmKL(v534 + "`", _0x32277c), "`"), " "), v533.KLjmM);
      } else if (v533.tHnpk(_0x5522e0, "INT") || _0x5522e0 === "int" || v533.ieYkR(_0x5522e0, v533.mxrpo) || _0x5522e0 === "bigint") {
        if (_0x70e191 <= 1) {
          v534 = v533.QwSGV(v534, "`") + _0x32277c + "` Int(8),";
        } else {
          v534 = v533.BLCSo(v533.aURJm(v533.lPLkD(v533.UhmKL(v534 + "`", _0x32277c), "`"), " "), "Int(32),");
        }
      } else {
        v534 = v533.aURJm(v533.QwSGV(v534 + "`" + _0x32277c + "`", " ") + _0x5522e0, "(") + _0x70e191 + "),";
      }
    }
    v534 = v533.aURJm(v534 + v533.VRBmS + "`createdAt` DateTime)  ENGINE MergeTree()  PARTITION BY toYYYYMMDD(happenTime) ", " ORDER BY (happenTime,weCustomerKey) ");
    return await v530.execSql(v534);
  }
  static async ["createSummingMergeTreeLogTable"](p1282, p1283) {
    const v537 = {
      hZZrg: "CREATE TABLE IF NOT EXISTS ",
      rCHWY: "(`id` UUID DEFAULT generateUUIDv4(), ",
      BEITW: function (p1284, p1285) {
        return p1284 === p1285;
      },
      IaLmm: function (p1286, p1287) {
        return p1286 + p1287;
      },
      qKzQu: function (p1288, p1289) {
        return p1288 + p1289;
      },
      SIdCS: function (p1290, p1291) {
        return p1290 === p1291;
      },
      FrcHm: "String,",
      SZaKT: "INT",
      ESnvo: function (p1292, p1293) {
        return p1292 <= p1293;
      },
      kBEyM: "Int(8),",
      AKImQ: function (p1294, p1295) {
        return p1294 + p1295;
      },
      xSydg: function (p1296, p1297) {
        return p1296 + p1297;
      },
      daUVd: "Int(32),",
      iQJBA: function (p1298, p1299) {
        return p1298 + p1299;
      },
      MRvjb: function (p1300, p1301) {
        return p1300 + p1301;
      }
    };
    let v538 = v537.hZZrg + p1282 + v537.rCHWY;
    for (let v539 = 0; v539 < p1283.length; v539++) {
      const v540 = p1283[v539];
      const {
        fieldName: _0x4f3ca2,
        fieldType: _0x38e35e,
        fieldLength: _0x521a2c
      } = v540;
      if (_0x38e35e === "FLOAT" || v537.BEITW(_0x38e35e, "float")) {
        v538 = v537.IaLmm(v537.qKzQu(v538 + "`", _0x4f3ca2) + "` ", "Float32,");
      } else if (v537.SIdCS(_0x38e35e, "VARCHAR") || _0x38e35e === "varchar") {
        v538 = v538 + "`" + _0x4f3ca2 + "` " + v537.FrcHm;
      } else if (v537.BEITW(_0x38e35e, v537.SZaKT) || v537.SIdCS(_0x38e35e, "int") || _0x38e35e === "BIGINT" || v537.BEITW(_0x38e35e, "bigint")) {
        if (v537.ESnvo(_0x521a2c, 1)) {
          v538 = v537.qKzQu(v538, "`") + _0x4f3ca2 + "` " + v537.kBEyM;
        } else {
          v538 = v537.AKImQ(v537.xSydg(v537.xSydg(v538, "`") + _0x4f3ca2, "`") + " ", v537.daUVd);
        }
      } else {
        v538 = v537.iQJBA(v537.iQJBA(v538, "`") + _0x4f3ca2, "`") + " " + _0x38e35e + "(" + _0x521a2c + "),";
      }
    }
    v538 = v537.MRvjb(v538 + "`happenTime` DateTime,`createdAt` DateTime)  ENGINE SummingMergeTree(stayTime)  PARTITION BY toYYYYMMDD(happenTime) ", " ORDER BY (weCustomerKey) ");
    return await v530.execSql(v538);
  }
  static async ["createStatisticsTable"](p1302) {
    const v541 = {
      LIbIQ: function (p1303, p1304) {
        return p1303 + p1304;
      },
      WqYDf: function (p1305, p1306) {
        return p1305 + p1306;
      },
      eVCnv: function (p1307, p1308) {
        return p1307 + p1308;
      },
      IVWyw: function (p1309, p1310) {
        return p1309 + p1310;
      },
      MYRWP: "`pageId` String,",
      KGdLR: "`cardId` String,",
      PyDxL: "`calcField` String,",
      xceYR: "`count` Decimal(16,2),",
      DXFQk: "`percentage` String,",
      lkOXA: "`happenDate` DateTime,"
    };
    let v542 = v541.LIbIQ(v541.WqYDf("CREATE TABLE IF NOT EXISTS ", p1302), "(`id` UUID DEFAULT generateUUIDv4(),");
    v542 = v541.LIbIQ(v541.WqYDf(v541.WqYDf(v541.WqYDf(v541.eVCnv(v541.LIbIQ(v541.IVWyw(v542 + v541.MYRWP, v541.KGdLR), "`cardName` String,"), v541.PyDxL) + "`calcFieldKey` String," + v541.xceYR, v541.DXFQk), v541.lkOXA) + "`updatedAt` DateTime,`createdAt` DateTime) ", " ENGINE ReplacingMergeTree()  "), " PARTITION BY toYYYYMMDD(happenDate) ") + " ORDER BY (pageId,cardId,cardName,calcField,calcFieldKey,happenDate) ";
    return await v530.execSql(v542);
  }
  static async ["batchInsert"](p1311, p1312, p1313) {
    const v543 = {
      XIFTB: function (p1314, p1315) {
        return p1314 + p1315;
      }
    };
    let v544 = v543.XIFTB("INSERT INTO " + p1311 + " (", p1312) + ") VALUES" + p1313;
    if (vRequire6) {
      try {
        vRequire6.log({
          projectId: "webfunny_log_sys",
          message: "埋点批量插入sql - " + p1311 + ": " + p1312,
          content: v544
        });
      } catch (_0x172588) {
        console.error("batchInsert LoggerUpload error");
      }
    }
    return await v530.execSql(v544, {
      type: v530.QueryTypes.INSERT
    });
  }
  static async checkMysqlConnectErrors() {
    const v545 = {
      cofzv: "select ip, SUM_CONNECT_ERRORS as count from performance_schema.host_cache"
    };
    let v546 = v545.cofzv;
    return await v530.execSql(v546);
  }
  static async checkMysqlConnects() {
    const v547 = {
      tMBXt: "SELECT * from information_schema.GLOBAL_STATUS WHERE VARIABLE_NAME='MAX_USED_CONNECTIONS'"
    };
    let v548 = v547.tMBXt;
    return await v530.execSql(v548);
  }
  static async deleteTableByName(p1316) {
    const v549 = {
      hhYzK: function (p1317, p1318) {
        return p1317 + p1318;
      }
    };
    let v550 = v549.hhYzK("drop table IF EXISTS ", p1316);
    return await v530.execSql(v550);
  }
  static async alterAddColumn(p1319) {
    return await v530.execSql(p1319);
  }
  static async ["criteriaSql"](p1320, p1321, p1322) {
    const v551 = {
      boRbb: function (p1323, p1324) {
        return p1323 > p1324;
      },
      xpVeU: function (p1325, p1326) {
        return p1325 ^ p1326;
      },
      EVaBM: function (p1327, p1328) {
        return p1327 + p1328;
      },
      qEjIN: function (p1329, p1330) {
        return p1329 + p1330;
      },
      wAJXG: " or ",
      nsZjx: "is not null",
      byoLE: function (p1331, p1332) {
        return p1331 + p1332;
      },
      NCpVC: " and ",
      GSbrc: "!='') ",
      yrZnD: function (p1333, p1334) {
        return p1333 + p1334;
      },
      UjOyQ: "%' ",
      RISNw: "not in",
      gqCOH: function (p1335, p1336) {
        return p1335 < p1336;
      },
      zJdJz: function (p1337, p1338) {
        return p1337 === p1338;
      },
      ugUIb: function (p1339, p1340) {
        return p1339 + p1340;
      },
      HSqit: " >=",
      aHTBc: " <=",
      nDGPW: function (p1341, p1342) {
        return p1341 + p1342;
      }
    };
    var v552 = "";
    if (v551.boRbb(p1322.length, v551.xpVeU(731956, 731956))) {
      let v553 = p1321.andOr;
      if (!p1321.andOr || p1321.andOr === undefined) {
        v553 = "and";
      } else {
        v553 = vRequire2.convertAndOr(v553);
      }
      for (let v554 = 0; v554 < p1322.length; v554++) {
        let v555 = v551.EVaBM(p1320 + ".", p1322[v554].fieldName);
        let v556 = vRequire2.convertOper(p1322[v554].rule);
        let v557 = p1322[v554].value;
        if (v556 === "is null") {
          v552 = v551.qEjIN(v551.qEjIN(" ", v552), "(") + v555 + " " + v556 + v551.wAJXG + v555 + "='') " + v553 + " ";
        } else if (v556 === v551.nsZjx) {
          v552 = v551.EVaBM(v551.qEjIN(v551.byoLE(" ", v552) + "(" + v555 + " ", v556) + v551.NCpVC + v555 + v551.GSbrc + v553, " ");
        } else if (v556 === "in") {
          let v558 = v557.split(",");
          let v559 = "";
          for (let v560 = 0; v560 < v558.length; v560++) {
            v559 += v551.EVaBM(v551.yrZnD(v551.EVaBM(v555 + " like '%", v558[v560]), v551.UjOyQ), v551.wAJXG);
          }
          v559 = v559.substring(0, v559.lastIndexOf("or"));
          v552 = v552 + " (" + v559 + ") " + v553 + " ";
        } else if (v556 === v551.RISNw) {
          let v561 = v557.split(",");
          let v562 = "";
          for (let v563 = v551.xpVeU(238208, 238208); v551.gqCOH(v563, v561.length); v563++) {
            v562 += v551.yrZnD(v555 + " not like '%" + v561[v563] + v551.UjOyQ, " and ");
          }
          v562 = v562.substring(v551.xpVeU(846668, 846668), v562.lastIndexOf("and"));
          v552 = v552 + " (" + v562 + ") " + v553 + " ";
        } else if (v551.zJdJz(v556, "区间")) {
          let v564 = v557.split(",");
          let v565 = v551.byoLE(v551.ugUIb(v555 + v551.HSqit + v564[v551.xpVeU(943446, 943446)] + " and ", v555), v551.aHTBc) + v564[1];
          v552 = v551.byoLE(v551.nDGPW(v552 + " (" + v565 + ")", " ") + v553, " ");
        } else {
          v552 = v551.byoLE(" " + v552 + v555, " ") + v556 + " '" + v557 + "' " + v553 + " ";
        }
      }
    } else {
      v552 = " 1=1 and ";
    }
    return v552;
  }
  static async splicingFunnelSql(p1343, p1344, p1345, p1346) {
    const v566 = {
      hCDdG: function (p1347, p1348) {
        return p1347 + p1348;
      },
      PKOiN: ") as count from ",
      eGBwX: function (p1349, p1350) {
        return p1349 + p1350;
      }
    };
    let v567 = v566.hCDdG(" select count(distinct ", p1343) + ".";
    v567 = v567 + p1345;
    v567 = v567 + v566.PKOiN + p1344;
    if (p1346) {
      v567 = " " + v567 + " (" + p1346 + ")";
    } else {
      v567 = v566.eGBwX(" ", v567) + " 1=1 ";
    }
    return v567;
  }
  static async ["splicingFunnelGroupBySql"](p1351, p1352, p1353, p1354) {
    const v568 = {
      sCIRG: function (p1355, p1356) {
        return p1355 + p1356;
      },
      IEpar: ") as count, ",
      UFSEW: " group by DATE_FORMAT(",
      AqwJy: function (p1357, p1358) {
        return p1357 + p1358;
      }
    };
    let v569 = v568.sCIRG(" select count(distinct ", p1351) + ".";
    v569 = v569 + p1353;
    v569 = v568.sCIRG(v569 + v568.IEpar + " DATE_FORMAT(" + p1351, ".") + "happenTime,'%Y-%m-%d') as happenDate from " + p1352;
    if (p1354) {
      v569 = v568.sCIRG(v568.sCIRG(" ", v569) + " (" + p1354, ")");
    } else {
      v569 = v568.sCIRG(" ", v569) + " 1=1 ";
    }
    let v570 = v568.sCIRG(v568.UFSEW + p1351, ".happenTime,'%Y-%m-%d')");
    v569 = v568.AqwJy(v569, v570);
    return v569;
  }
  static async ["splicingSql"](p1359, p1360, p1361) {
    const v571 = {
      YkeRN: "sum",
      JMemH: "avg",
      EhyMz: function (p1362, p1363) {
        return p1362 === p1363;
      },
      pRgSS: function (p1364, p1365) {
        return p1364 === p1365;
      },
      ONwhl: "min",
      jzERQ: function (p1366, p1367) {
        return p1366 === p1367;
      },
      Foozj: function (p1368, p1369) {
        return p1368 ^ p1369;
      },
      iqZmq: "count(distinct weCustomerKey)",
      WbvEC: function (p1370, p1371) {
        return p1370 === p1371;
      },
      dFjol: function (p1372, p1373) {
        return p1372 ^ p1373;
      },
      JWJaY: function (p1374, p1375) {
        return p1374 ^ p1375;
      },
      NdNJO: function (p1376, p1377) {
        return p1376 + p1377;
      },
      KlUbK: "select count(weCustomerKey",
      hJtth: "userCount",
      jfYjB: "averageStayTime",
      myYuP: function (p1378, p1379) {
        return p1378 + p1379;
      },
      nywWc: function (p1380, p1381) {
        return p1380 + p1381;
      },
      SfQVQ: ") as count  ",
      KGOvb: function (p1382, p1383) {
        return p1382 < p1383;
      },
      LoiiT: "is null",
      wMqjD: function (p1384, p1385) {
        return p1384 + p1385;
      },
      HFddC: "='') ",
      FSHEw: function (p1386, p1387) {
        return p1386 === p1387;
      },
      GQfvb: "is not null",
      tGnQm: function (p1388, p1389) {
        return p1388 + p1389;
      },
      Ajkwd: "!='') ",
      wroJf: function (p1390, p1391) {
        return p1390 < p1391;
      },
      QwZzZ: function (p1392, p1393) {
        return p1392 + p1393;
      },
      vziOv: " like '%",
      MhbSx: " or ",
      IuDDf: function (p1394, p1395) {
        return p1394 + p1395;
      },
      biWER: function (p1396, p1397) {
        return p1396 < p1397;
      },
      DYTfg: " and ",
      VMqRs: function (p1398, p1399) {
        return p1398 + p1399;
      },
      WTmXX: function (p1400, p1401) {
        return p1400 + p1401;
      },
      OhguI: function (p1402, p1403) {
        return p1402 ^ p1403;
      },
      ubOGJ: " <=",
      xVyGD: " where 1=1 "
    };
    let v572 = "count";
    let v573 = "";
    if (p1359.isRepeat === "2" || p1359.isRepeat === 2) {
      v572 = v571.YkeRN;
    } else if (p1359.isRepeat === "3" || p1359.isRepeat === 3) {
      v572 = v571.JMemH;
    } else if (v571.EhyMz(p1359.isRepeat, "6") || v571.EhyMz(p1359.isRepeat, 6)) {
      v572 = "max";
    } else if (p1359.isRepeat === "7" || v571.pRgSS(p1359.isRepeat, 7)) {
      v572 = v571.ONwhl;
    } else if (v571.jzERQ(p1359.isRepeat, "8") || p1359.isRepeat === v571.Foozj(756584, 756576)) {
      v572 = "sum";
      v573 = v571.iqZmq;
    } else {
      v572 = "count";
    }
    let v574 = " select " + v572 + "(";
    if (p1359.isRepeat === "1" || v571.WbvEC(p1359.isRepeat, v571.dFjol(195699, 195698)) || v571.jzERQ(p1359.isRepeat, "5") || v571.WbvEC(p1359.isRepeat, v571.JWJaY(614185, 614188))) {
      v574 = v571.NdNJO(v574 + "distinct ", p1359.fieldName);
    } else if (p1359.fieldName === "allCount") {
      v574 = v571.KlUbK;
    } else if (p1359.fieldName === v571.hJtth) {
      v574 = "select count(distinct weCustomerKey";
    } else if (p1359.fieldName === "averageCount") {
      v574 = "select (count(weCustomerKey) / count(distinct weCustomerKey)";
    } else if (p1359.fieldName === v571.jfYjB) {
      v574 = "select (sum(stayTime) / count(distinct weCustomerKey)";
    } else {
      v574 = v574 + p1359.fieldName;
    }
    if (v573) {
      v574 = v571.myYuP(v571.myYuP(v571.nywWc(v574 + ") / ", v573) + " as count ", ", DATE_FORMAT(happenTime,'%Y-%m-%d') as happenDate from "), p1361);
    } else {
      v574 = v571.nywWc(v571.myYuP(v574, v571.SfQVQ), ", DATE_FORMAT(happenTime,'%Y-%m-%d') as happenDate from ") + p1361;
    }
    if (p1360.length > v571.dFjol(116477, 116477)) {
      let v575 = p1359.andOr;
      if (!p1359.andOr || p1359.andOr === undefined) {
        v575 = "and";
      } else {
        v575 = vRequire2.convertAndOr(v575);
      }
      var v576 = "";
      for (let v577 = 0; v571.KGOvb(v577, p1360.length); v577++) {
        let v578 = p1360[v577].fieldName;
        let v579 = vRequire2.convertOper(p1360[v577].rule);
        let v580 = p1360[v577].value;
        if (v579 === v571.LoiiT) {
          v576 = v571.wMqjD(v571.NdNJO(v571.NdNJO(" " + v576, "(") + v578 + " " + v579 + " or " + v578, v571.HFddC) + v575, " ");
        } else if (v571.FSHEw(v579, v571.GQfvb)) {
          v576 = v571.NdNJO(v571.tGnQm(v571.NdNJO(" ", v576) + "(" + v578 + " " + v579 + " and " + v578 + v571.Ajkwd, v575), " ");
        } else if (v571.jzERQ(v579, "in")) {
          let v581 = v580.split(",");
          let v582 = "";
          for (let v583 = 0; v571.wroJf(v583, v581.length); v583++) {
            v582 += v571.QwZzZ(v578, v571.vziOv) + v581[v583] + "%' " + v571.MhbSx;
          }
          v582 = v582.substring(0, v582.lastIndexOf("or"));
          v576 = v571.IuDDf(v571.tGnQm(v576 + " (", v582), ")") + " " + v575 + " ";
        } else if (v579 === "not in") {
          let v584 = v580.split(",");
          let v585 = "";
          for (let v586 = 0; v571.biWER(v586, v584.length); v586++) {
            v585 += v578 + " not like '%" + v584[v586] + "%' " + v571.DYTfg;
          }
          v585 = v585.substring(0, v585.lastIndexOf("and"));
          v576 = v571.IuDDf(v571.VMqRs(v576, " ("), v585) + ") " + v575 + " ";
        } else if (v579 === "区间") {
          let v587 = v580.split(",");
          let v588 = v571.WTmXX(v571.WTmXX(v571.QwZzZ(v571.VMqRs(v578, " >="), v587[v571.OhguI(278002, 278002)]) + v571.DYTfg, v578), v571.ubOGJ) + v587[1];
          v576 = v576 + " (" + v588 + ") " + v575 + " ";
        } else {
          v576 = v571.IuDDf(v571.VMqRs(" ", v576) + v578 + " " + v579 + " '" + v580 + "' ", v575) + " ";
        }
      }
      v576 = v576.substr(v571.JWJaY(657800, 657800), v576.lastIndexOf(v575));
      v574 = v571.nywWc(" " + v574, " where 1=1 and (") + v576 + ")";
    } else {
      v574 = v571.IuDDf(v571.NdNJO(" ", v574), v571.xVyGD);
    }
    return v574;
  }
  static async splicingAlarmSql(p1404, p1405, p1406) {
    const v589 = {
      vWdjw: "sum",
      EHkRb: function (p1407, p1408) {
        return p1407 === p1408;
      },
      wzTeX: function (p1409, p1410) {
        return p1409 === p1410;
      },
      LPuoP: function (p1411, p1412) {
        return p1411 ^ p1412;
      },
      BSbil: "avg",
      ngHAp: function (p1413, p1414) {
        return p1413 === p1414;
      },
      AECpt: "count(distinct weCustomerKey)",
      RpOHG: function (p1415, p1416) {
        return p1415 ^ p1416;
      },
      RvXxZ: function (p1417, p1418) {
        return p1417 === p1418;
      },
      viVOh: "allCount",
      RsMJd: "select count(weCustomerKey",
      wMhKT: "userCount",
      ANzxg: "select count(distinct weCustomerKey",
      DDutn: "averageCount",
      XXbMT: "select (sum(stayTime) / count(distinct weCustomerKey)",
      SjNRX: function (p1419, p1420) {
        return p1419 + p1420;
      },
      XLRnt: " as count  from ",
      QyhsI: function (p1421, p1422) {
        return p1421 + p1422;
      },
      QGsoL: "and",
      bkESk: function (p1423, p1424) {
        return p1423 + p1424;
      },
      NiAXK: "='') ",
      YzVpF: function (p1425, p1426) {
        return p1425 + p1426;
      },
      uLMIZ: function (p1427, p1428) {
        return p1427 + p1428;
      },
      UFfwB: " and ",
      dPxYb: " or ",
      ESZAF: function (p1429, p1430) {
        return p1429 + p1430;
      },
      CDeUj: function (p1431, p1432) {
        return p1431 + p1432;
      },
      RbUyB: "%' ",
      yTTDo: function (p1433, p1434) {
        return p1433 + p1434;
      },
      YjGgP: " <=",
      kLAnL: function (p1435, p1436) {
        return p1435 + p1436;
      },
      qkPkF: function (p1437, p1438) {
        return p1437 + p1438;
      },
      BaBsd: function (p1439, p1440) {
        return p1439 ^ p1440;
      },
      WNELd: function (p1441, p1442) {
        return p1441 + p1442;
      }
    };
    let v590 = "count";
    let v591 = "";
    if (p1404.isRepeat === "2" || p1404.isRepeat === 2) {
      v590 = v589.vWdjw;
    } else if (v589.EHkRb(p1404.isRepeat, "3") || v589.wzTeX(p1404.isRepeat, v589.LPuoP(356638, 356637))) {
      v590 = v589.BSbil;
    } else if (p1404.isRepeat === "6" || v589.ngHAp(p1404.isRepeat, 6)) {
      v590 = "max";
    } else if (p1404.isRepeat === "7" || p1404.isRepeat === 7) {
      v590 = "min";
    } else if (p1404.isRepeat === "8" || p1404.isRepeat === 8) {
      v590 = v589.vWdjw;
      v591 = v589.AECpt;
    } else {
      v590 = "count";
    }
    let v592 = " select " + v590 + "(";
    if (p1404.isRepeat === "1" || p1404.isRepeat === v589.LPuoP(394276, 394277) || v589.wzTeX(p1404.isRepeat, "5") || p1404.isRepeat === v589.RpOHG(497078, 497075)) {
      v592 = v592 + "distinct " + p1404.fieldName;
    } else if (v589.RvXxZ(p1404.fieldName, v589.viVOh)) {
      v592 = v589.RsMJd;
    } else if (p1404.fieldName === v589.wMhKT) {
      v592 = v589.ANzxg;
    } else if (p1404.fieldName === v589.DDutn) {
      v592 = "select (count(weCustomerKey) / count(distinct weCustomerKey)";
    } else if (p1404.fieldName === "averageStayTime") {
      v592 = v589.XXbMT;
    } else {
      v592 = v592 + p1404.fieldName;
    }
    if (v591) {
      v592 = v589.SjNRX(v592 + ") / " + v591, v589.XLRnt) + p1406;
    } else {
      v592 = v589.SjNRX(v589.QyhsI(v592, ") as count from "), p1406);
    }
    if (p1405.length > 0) {
      let v593 = p1404.andOr;
      if (!p1404.andOr || p1404.andOr === undefined) {
        v593 = v589.QGsoL;
      } else {
        v593 = vRequire2.convertAndOr(v593);
      }
      var v594 = "";
      for (let v595 = 0; v595 < p1405.length; v595++) {
        let v596 = p1405[v595].fieldName;
        let v597 = vRequire2.convertOper(p1405[v595].rule);
        let v598 = p1405[v595].value;
        if (v597 === "is null") {
          v594 = v589.SjNRX(v589.bkESk(" " + v594 + "(" + v596, " ") + v597 + " or ", v596) + v589.NiAXK + v593 + " ";
        } else if (v597 === "is not null") {
          v594 = v589.SjNRX(v589.YzVpF(v589.uLMIZ(" " + v594 + "(" + v596, " "), v597), v589.UFfwB) + v596 + "!='') " + v593 + " ";
        } else if (v589.ngHAp(v597, "in")) {
          let v599 = v598.split(",");
          let v600 = "";
          for (let v601 = 0; v601 < v599.length; v601++) {
            v600 += v596 + " like '%" + v599[v601] + "%' " + v589.dPxYb;
          }
          v600 = v600.substring(0, v600.lastIndexOf("or"));
          v594 = v589.ESZAF(v589.CDeUj(v589.YzVpF(v594, " (") + v600, ")") + " " + v593, " ");
        } else if (v589.EHkRb(v597, "not in")) {
          let v602 = v598.split(",");
          let v603 = "";
          for (let v604 = 0; v604 < v602.length; v604++) {
            v603 += v596 + " not like '%" + v602[v604] + v589.RbUyB + " and ";
          }
          v603 = v603.substring(0, v603.lastIndexOf("and"));
          v594 = v589.yTTDo(v589.ESZAF(v594 + " (", v603) + ") ", v593) + " ";
        } else if (v597 === "区间") {
          let v605 = v598.split(",");
          let v606 = v589.bkESk(v596 + " >=" + v605[0] + v589.UFfwB + v596 + v589.YjGgP, v605[1]);
          v594 = v589.kLAnL(v589.yTTDo(v589.qkPkF(v594, " (") + v606 + ") ", v593), " ");
        } else {
          v594 = " " + v594 + v596 + " " + v597 + " '" + v598 + "' " + v593 + " ";
        }
      }
      v594 = v594.substr(v589.BaBsd(610818, 610818), v594.lastIndexOf(v593));
      v592 = v589.WNELd(v589.QyhsI(" ", v592) + " where 1=1 and (" + v594, ")");
    } else {
      v592 = " " + v592 + " where 1=1 ";
    }
    return v592;
  }
  static async ["splicingTotalGroupBySql"](p1443, p1444, p1445, p1446, p1447) {
    const v607 = {
      JXqob: "weCustomerKey",
      zqzwU: function (p1448, p1449) {
        return p1448 ^ p1449;
      },
      pIvua: function (p1450, p1451) {
        return p1450 === p1451;
      },
      gpiCk: "min",
      opOht: function (p1452, p1453) {
        return p1452 === p1453;
      },
      PNzae: " distinct weCustomerKey",
      NOfvZ: function (p1454, p1455) {
        return p1454 === p1455;
      },
      MqXEN: function (p1456, p1457) {
        return p1456 ^ p1457;
      },
      DCbQF: function (p1458, p1459) {
        return p1458 + p1459;
      },
      ducYC: " as count ",
      kLCtm: ") as count ",
      lJmKJ: function (p1460, p1461) {
        return p1460 + p1461;
      },
      GkMiN: function (p1462, p1463) {
        return p1462 === p1463;
      },
      edkSk: function (p1464, p1465) {
        return p1464 + p1465;
      },
      MPhJg: function (p1466, p1467) {
        return p1466 < p1467;
      },
      NJjMR: function (p1468, p1469) {
        return p1468 + p1469;
      },
      sUctL: function (p1470, p1471) {
        return p1470 + p1471;
      },
      NpneL: function (p1472, p1473) {
        return p1472 + p1473;
      },
      ucwJq: "='') ",
      uMNXL: function (p1474, p1475) {
        return p1474 === p1475;
      },
      lUgyb: "is not null",
      wGxTH: function (p1476, p1477) {
        return p1476 + p1477;
      },
      mMVvc: function (p1478, p1479) {
        return p1478 === p1479;
      },
      duFVr: function (p1480, p1481) {
        return p1480 + p1481;
      },
      JLcfD: " like '%",
      aCfVU: " or ",
      KosVy: function (p1482, p1483) {
        return p1482 < p1483;
      },
      oDpJo: function (p1484, p1485) {
        return p1484 + p1485;
      },
      ArZIa: " not like '%",
      UoEhr: "and",
      IZFTt: function (p1486, p1487) {
        return p1486 + p1487;
      },
      UZYkz: function (p1488, p1489) {
        return p1488 + p1489;
      },
      mGoSG: function (p1490, p1491) {
        return p1490 === p1491;
      },
      YfNJz: function (p1492, p1493) {
        return p1492 + p1493;
      },
      pGaVc: " >=",
      hUmts: function (p1494, p1495) {
        return p1494 + p1495;
      },
      RgccV: function (p1496, p1497) {
        return p1496 + p1497;
      },
      LGUZf: function (p1498, p1499) {
        return p1498 + p1499;
      },
      Ppnup: function (p1500, p1501) {
        return p1500 + p1501;
      },
      YENxJ: function (p1502, p1503) {
        return p1502 === p1503;
      },
      noNfO: " ) group by groupByName ",
      UIdub: function (p1504, p1505) {
        return p1504 + p1505;
      },
      lSZyD: " limit 10 ",
      sBHzl: function (p1506, p1507) {
        return p1506 === p1507;
      },
      tPizo: " limit 50 "
    };
    let v608 = " select groupByName,";
    let v609 = v607.JXqob;
    let v610 = "count";
    let v611 = "";
    if (p1443.isRepeat === "2" || p1443.isRepeat === 2) {
      v610 = "sum";
    } else if (p1443.isRepeat === "3" || p1443.isRepeat === v607.zqzwU(527188, 527191)) {
      v610 = "avg";
    } else if (v607.pIvua(p1443.isRepeat, "6") || p1443.isRepeat === 6) {
      v610 = "max";
    } else if (p1443.isRepeat === "7" || p1443.isRepeat === 7) {
      v610 = v607.gpiCk;
    } else if (v607.opOht(p1443.isRepeat, "8") || p1443.isRepeat === 8) {
      v610 = "sum";
      v611 = "count(distinct weCustomerKey)";
    } else {
      v610 = "count";
    }
    let v612 = v610 + "(";
    if (v607.pIvua(p1443.isRepeat, "5") || p1443.isRepeat === 5) {
      v612 = v612 + v607.PNzae;
      v609 = "weCustomerKey";
    } else if (v607.NOfvZ(p1443.isRepeat, "4") || v607.pIvua(p1443.isRepeat, 4)) {
      v612 = v612 + "weCustomerKey";
      v609 = "weCustomerKey";
    } else if (p1443.isRepeat === "1" || p1443.isRepeat === v607.MqXEN(776339, 776338)) {
      v612 = v607.DCbQF(v612 + " distinct ", p1443.fieldName);
      v609 = p1443.fieldName;
    } else {
      v612 = v612 + p1443.fieldName;
      v609 = p1443.fieldName;
    }
    if (v611) {
      v612 = v607.DCbQF(v612, ") / ") + v611 + v607.ducYC;
      v608 = v608 + v612;
    } else {
      v612 = v612 + v607.kLCtm;
      v608 = v608 + v612;
    }
    let v613 = 0;
    let v614 = "";
    for (let v615 = v607.MqXEN(576397, 576397); v615 < p1444.length; v615++) {
      let v616 = p1444[v615].fieldName;
      let v617 = vRequire2.convertOper(p1444[v615].rule);
      if (v607.opOht(v617, "group by")) {
        v613 = 1;
        v614 = v616;
        break;
      }
    }
    let v618 = "";
    if (v613 === 1 && v614) {
      v618 = v614;
    } else {
      v618 = p1443.fieldName;
    }
    v608 = v607.lJmKJ(v608, " from (select ");
    if (p1443.isRepeat === "8" || v607.GkMiN(p1443.isRepeat, v607.MqXEN(126061, 126053))) {
      v608 = v608 + v609 + ",weCustomerKey," + v618 + " as groupByName";
    } else {
      v608 = v607.edkSk(v608, v609) + "," + v618 + " as groupByName";
    }
    v608 = v607.edkSk(v608, " from ") + p1445;
    ;
    if (p1444.length > 0) {
      let v619 = p1443.andOr;
      if (!p1443.andOr || p1443.andOr === undefined) {
        v619 = "and";
      } else {
        v619 = vRequire2.convertAndOr(v619);
      }
      var v620 = "";
      var v621 = "";
      for (let v622 = 0; v607.MPhJg(v622, p1444.length); v622++) {
        let v623 = p1444[v622].fieldName;
        let v624 = vRequire2.convertOper(p1444[v622].rule);
        let v625 = p1444[v622].value;
        if (v624 === "is null") {
          v620 = v607.NJjMR(v607.sUctL(v607.NpneL(v607.DCbQF(" " + v620 + "(" + v623, " "), v624), " or "), v623) + v607.ucwJq + v619 + " ";
        } else if (v607.uMNXL(v624, v607.lUgyb)) {
          v620 = v607.wGxTH(v607.lJmKJ(" " + v620, "(") + v623, " ") + v624 + " and " + v623 + "!='') " + v619 + " ";
        } else if (v607.mMVvc(v624, "in")) {
          let v626 = v625.split(",");
          let v627 = "";
          for (let v628 = 0; v628 < v626.length; v628++) {
            v627 += v607.duFVr(v623, v607.JLcfD) + v626[v628] + "%' " + v607.aCfVU;
          }
          v627 = v627.substring(0, v627.lastIndexOf("or"));
          v620 = v607.lJmKJ(v620, " (") + v627 + ") " + v619 + " ";
        } else if (v624 === "not in") {
          let v629 = v625.split(",");
          let v630 = "";
          for (let v631 = 0; v607.KosVy(v631, v629.length); v631++) {
            v630 += v607.NJjMR(v607.oDpJo(v607.duFVr(v623, v607.ArZIa) + v629[v631], "%' "), " and ");
          }
          v630 = v630.substring(0, v630.lastIndexOf(v607.UoEhr));
          v620 = v607.IZFTt(v620 + " (" + v630, ")") + " " + v619 + " ";
        } else if (v624 === "区间") {
          let v632 = v625.split(",");
          let v633 = v607.UZYkz(v607.NJjMR(v607.UZYkz(v623 + " >=", v632[0]) + " and ", v623), " <=") + v632[1];
          v620 = v607.edkSk(v620 + " (" + v633 + ") " + v619, " ");
        } else if (v607.mGoSG(v624, "group by")) {
          v621 = " ) group by groupByName ";
        } else if (v624 === "区间") {
          let v634 = v625.split(",");
          let v635 = v607.YfNJz(v607.duFVr(v623 + v607.pGaVc + v634[v607.MqXEN(505417, 505417)] + " and ", v623) + " <=", v634[1]);
          v620 = v607.UZYkz(v620 + " (" + v635, ")") + " " + v619 + " ";
        } else {
          v620 = v607.edkSk(v607.YfNJz(v607.hUmts(v607.RgccV(v607.oDpJo(" " + v620 + v623, " "), v624), " '"), v625) + "'", " ") + v619 + " ";
        }
      }
      v620 = v620.substr(0, v620.lastIndexOf(v619));
      if (v620) {
        v608 = v607.LGUZf(v607.edkSk(" ", v608) + " where 1=1 and (" + v620 + p1446, ") ") + v621;
      } else {
        v608 = v607.sUctL(" " + v608, p1446) + " " + v621;
      }
    } else {
      v608 = v607.Ppnup(v607.NpneL(v608, " where 1=1 "), p1446);
    }
    if (p1443.isRepeat === "4" || v607.YENxJ(p1443.isRepeat, v607.MqXEN(220522, 220526)) || p1443.isRepeat === "5" || p1443.isRepeat === 5) {
      v608 = v608 + v607.noNfO;
    }
    v608 = v608 + " order by count desc";
    if (p1447 !== "") {
      if (v607.NOfvZ(p1447, v607.zqzwU(333959, 333958)) || p1447 === "1") {
        v608 = v607.UIdub(v608, v607.lSZyD);
      } else if (p1447 === v607.zqzwU(205347, 205345) || p1447 === "2") {
        v608 = v608 + " limit 30 ";
      } else if (p1447 === 3 || v607.sBHzl(p1447, "3")) {
        v608 = v608 + v607.tPizo;
      }
    } else {
      v608 = v608 + " limit 10 ";
    }
    return v608;
  }
  static async calculateWeFieldCount(p1508, p1509, p1510, p1511, p1512) {
    const v636 = {
      lRqlT: "weCustomerKey",
      jKsyH: "allCount",
      ktnkf: function (p1513, p1514) {
        return p1513 + p1514;
      },
      njXDu: "count(distinct weCustomerKey)",
      ceEsd: ",stayTime ",
      AKnZH: function (p1515, p1516) {
        return p1515 ^ p1516;
      },
      ngVBm: "group by",
      QrQQX: function (p1517, p1518) {
        return p1517 === p1518;
      },
      mBZsr: function (p1519, p1520) {
        return p1519 === p1520;
      },
      lonDY: function (p1521, p1522) {
        return p1521 + p1522;
      },
      twNaX: function (p1523, p1524) {
        return p1523 + p1524;
      },
      TokGV: function (p1525, p1526) {
        return p1525 + p1526;
      },
      UJymz: function (p1527, p1528) {
        return p1527 + p1528;
      },
      Japwl: function (p1529, p1530) {
        return p1529 + p1530;
      },
      zviEr: function (p1531, p1532) {
        return p1531 === p1532;
      },
      vNRwm: " or ",
      yJgkg: function (p1533, p1534) {
        return p1533 + p1534;
      },
      buBQU: function (p1535, p1536) {
        return p1535 === p1536;
      },
      pNJet: "not in",
      CVtwO: function (p1537, p1538) {
        return p1537 + p1538;
      },
      tgeAG: function (p1539, p1540) {
        return p1539 + p1540;
      },
      ESjeJ: " not like '%",
      UjDQR: "%' ",
      MVpPG: function (p1541, p1542) {
        return p1541 === p1542;
      },
      FPsIr: function (p1543, p1544) {
        return p1543 + p1544;
      },
      GakEJ: function (p1545, p1546) {
        return p1545 ^ p1546;
      },
      YJXZI: function (p1547, p1548) {
        return p1547 + p1548;
      },
      CpOxc: " ) group by groupByName ",
      cELZG: function (p1549, p1550) {
        return p1549 + p1550;
      },
      dlxCy: " >=",
      Ytvqt: function (p1551, p1552) {
        return p1551 + p1552;
      },
      kKTyV: function (p1553, p1554) {
        return p1553 + p1554;
      },
      kkZgA: function (p1555, p1556) {
        return p1555 + p1556;
      },
      qSTfV: function (p1557, p1558) {
        return p1557 + p1558;
      },
      cnkAQ: function (p1559, p1560) {
        return p1559 + p1560;
      },
      kLheH: function (p1561, p1562) {
        return p1561 + p1562;
      },
      uJeFC: function (p1563, p1564) {
        return p1563 + p1564;
      },
      ecZzM: " where 1=1 ",
      PrJvb: function (p1565, p1566) {
        return p1565 === p1566;
      },
      bNtos: function (p1567, p1568) {
        return p1567 ^ p1568;
      },
      rRyyo: function (p1569, p1570) {
        return p1569 !== p1570;
      },
      ukiYn: function (p1571, p1572) {
        return p1571 ^ p1572;
      },
      qFxDP: function (p1573, p1574) {
        return p1573 ^ p1574;
      },
      KvYvf: function (p1575, p1576) {
        return p1575 + p1576;
      },
      yCNLH: " limit 30 ",
      zmqkH: function (p1577, p1578) {
        return p1577 + p1578;
      }
    };
    let v637 = " select groupByName,";
    let v638 = v636.lRqlT;
    let v639 = "";
    let v640 = v639 + "(";
    switch (p1508.fieldName) {
      case v636.jKsyH:
        v640 = v636.ktnkf(v640, "count(weCustomerKey)");
        break;
      case "userCount":
        v640 = v640 + v636.njXDu;
        break;
      case "averageCount":
        v640 = v640 + " count(weCustomerKey) / count(distinct weCustomerKey)";
        break;
      case "averageStayTime":
        v640 = v640 + " sum(stayTime) / count(distinct weCustomerKey)";
        v638 = v638 + v636.ceEsd;
        break;
      default:
        break;
    }
    v640 = v640 + ") as count ";
    v637 = v637 + v640;
    let v641 = 0;
    let v642 = "";
    for (let v643 = v636.AKnZH(404650, 404650); v643 < p1509.length; v643++) {
      let v644 = p1509[v643].fieldName;
      let v645 = vRequire2.convertOper(p1509[v643].rule);
      if (v645 === v636.ngVBm) {
        v641 = 1;
        v642 = v644;
        break;
      }
    }
    let v646 = "";
    if (v636.QrQQX(v641, v636.AKnZH(506024, 506025)) && v642) {
      v646 = v642;
    } else {
      v646 = p1508.fieldName;
    }
    v637 = v636.ktnkf(v637 + " from (select " + v638, ",") + v646 + " as groupByName";
    v637 = v637 + " from " + p1510;
    ;
    if (p1509.length > 0) {
      let v647 = p1508.andOr;
      if (!p1508.andOr || v636.mBZsr(p1508.andOr, undefined)) {
        v647 = "and";
      } else {
        v647 = vRequire2.convertAndOr(v647);
      }
      var v648 = "";
      var v649 = "";
      for (let v650 = 0; v650 < p1509.length; v650++) {
        let v651 = p1509[v650].fieldName;
        let v652 = vRequire2.convertOper(p1509[v650].rule);
        let v653 = p1509[v650].value;
        if (v636.QrQQX(v652, "is null")) {
          v648 = v636.lonDY(v636.twNaX(v636.lonDY(v636.TokGV(v636.UJymz(v636.twNaX(" ", v648), "(") + v651, " "), v652) + " or " + v651, "='') "), v647) + " ";
        } else if (v652 === "is not null") {
          v648 = v636.TokGV(v636.twNaX(v636.UJymz(v636.twNaX(v636.Japwl(v636.lonDY(" ", v648), "("), v651), " ") + v652, " and ") + v651, "!='') ") + v647 + " ";
        } else if (v636.zviEr(v652, "in")) {
          let v654 = v653.split(",");
          let v655 = "";
          for (let v656 = v636.AKnZH(742671, 742671); v656 < v654.length; v656++) {
            v655 += v651 + " like '%" + v654[v656] + "%' " + v636.vNRwm;
          }
          v655 = v655.substring(0, v655.lastIndexOf("or"));
          v648 = v636.yJgkg(v648 + " (" + v655 + ")", " ") + v647 + " ";
        } else if (v636.buBQU(v652, v636.pNJet)) {
          let v657 = v653.split(",");
          let v658 = "";
          for (let v659 = v636.AKnZH(537810, 537810); v659 < v657.length; v659++) {
            v658 += v636.CVtwO(v636.tgeAG(v636.ktnkf(v651, v636.ESjeJ), v657[v659]) + v636.UjDQR, " and ");
          }
          v658 = v658.substring(0, v658.lastIndexOf("and"));
          v648 = v636.ktnkf(v648 + " (" + v658 + ") " + v647, " ");
        } else if (v636.MVpPG(v652, "区间")) {
          let v660 = v653.split(",");
          let v661 = v636.Japwl(v636.FPsIr(v651 + " >=" + v660[v636.GakEJ(380862, 380862)] + " and " + v651, " <="), v660[1]);
          v648 = v636.YJXZI(v636.tgeAG(v648 + " (" + v661, ")"), " ") + v647 + " ";
        } else if (v652 === "group by") {
          v649 = v636.CpOxc;
        } else if (v652 === "区间") {
          let v662 = v653.split(",");
          let v663 = v636.cELZG(v651 + v636.dlxCy + v662[0] + " and ", v651) + " <=" + v662[1];
          v648 = v636.CVtwO(v636.CVtwO(v648 + " (" + v663 + ")", " "), v647) + " ";
        } else {
          v648 = v636.Ytvqt(v636.CVtwO(v636.cELZG(v636.kKTyV(v636.kkZgA(" " + v648, v651), " ") + v652 + " '" + v653, "'") + " ", v647), " ");
        }
      }
      v648 = v648.substr(0, v648.lastIndexOf(v647));
      if (v648) {
        v637 = v636.qSTfV(v636.cnkAQ(" ", v637) + " where 1=1 and (" + v648 + p1511 + ") ", v649);
      } else {
        v637 = v636.kLheH(v636.Japwl(v636.uJeFC(v636.kKTyV(" ", v637), p1511), " "), v649);
      }
    } else {
      v637 = v637 + v636.ecZzM + p1511;
    }
    if (p1508.isRepeat === "4" || p1508.isRepeat === 4 || v636.PrJvb(p1508.isRepeat, "5") || p1508.isRepeat === v636.bNtos(707113, 707116)) {
      v637 = v637 + " ) group by groupByName ";
    }
    v637 = v637 + " order by count desc";
    if (v636.rRyyo(p1512, "")) {
      if (v636.PrJvb(p1512, v636.ukiYn(268853, 268852)) || p1512 === "1") {
        v637 = v637 + " limit 10 ";
      } else if (v636.PrJvb(p1512, v636.qFxDP(220991, 220989)) || p1512 === "2") {
        v637 = v636.KvYvf(v637, v636.yCNLH);
      } else if (p1512 === 3 || p1512 === "3") {
        v637 = v636.zmqkH(v637, " limit 50 ");
      }
    } else {
      v637 = v637 + " limit 10 ";
    }
    return v637;
  }
  static async splicingGroupBySql(p1579, p1580, p1581, p1582, p1583) {
    const v664 = {
      bXqVI: function (p1584, p1585) {
        return p1584 ^ p1585;
      },
      pMUTy: function (p1586, p1587) {
        return p1586 === p1587;
      },
      QIvhr: "max",
      UJYNu: "min",
      eFwsc: function (p1588, p1589) {
        return p1588 === p1589;
      },
      uqfMG: "sum",
      FpEZc: function (p1590, p1591) {
        return p1590 + p1591;
      },
      lTUnT: function (p1592, p1593) {
        return p1592 === p1593;
      },
      hLGAp: function (p1594, p1595) {
        return p1594 ^ p1595;
      },
      LMpiu: function (p1596, p1597) {
        return p1596 === p1597;
      },
      rQxuW: function (p1598, p1599) {
        return p1598 ^ p1599;
      },
      JtgsN: function (p1600, p1601) {
        return p1600 + p1601;
      },
      MgHfK: " distinct ",
      uiCtN: function (p1602, p1603) {
        return p1602 + p1603;
      },
      wQPwq: function (p1604, p1605) {
        return p1604 > p1605;
      },
      jdlhw: function (p1606, p1607) {
        return p1606 ^ p1607;
      },
      VycXt: function (p1608, p1609) {
        return p1608 === p1609;
      },
      xghsP: "and",
      WAnnO: function (p1610, p1611) {
        return p1610 + p1611;
      },
      ftxTg: function (p1612, p1613) {
        return p1612 + p1613;
      },
      FLRAD: function (p1614, p1615) {
        return p1614 + p1615;
      },
      FcNnQ: "!='') ",
      moAhB: function (p1616, p1617) {
        return p1616 + p1617;
      },
      SAmNS: function (p1618, p1619) {
        return p1618 + p1619;
      },
      bfyrD: " or ",
      QfWTW: function (p1620, p1621) {
        return p1620 + p1621;
      },
      EgPEB: function (p1622, p1623) {
        return p1622 + p1623;
      },
      GxUcd: function (p1624, p1625) {
        return p1624 + p1625;
      },
      MIVpF: "not in",
      gnIhx: " not like '%",
      bACHK: " and ",
      OkLtR: " >=",
      hhfSl: " <=",
      nuxxp: function (p1626, p1627) {
        return p1626 ^ p1627;
      },
      hTxwC: function (p1628, p1629) {
        return p1628 + p1629;
      },
      PNYYP: "group by",
      zMYpy: function (p1630, p1631) {
        return p1630 + p1631;
      },
      NKiBg: " = '",
      LxmJq: function (p1632, p1633) {
        return p1632 + p1633;
      },
      WROmu: function (p1634, p1635) {
        return p1634 + p1635;
      },
      hhMMz: function (p1636, p1637) {
        return p1636 + p1637;
      },
      pUrVZ: function (p1638, p1639) {
        return p1638 ^ p1639;
      },
      TgbOs: function (p1640, p1641) {
        return p1640 + p1641;
      },
      MlOSp: " where 1=1 ",
      IApUA: function (p1642, p1643) {
        return p1642 === p1643;
      },
      NlfHg: function (p1644, p1645) {
        return p1644 === p1645;
      },
      RGpAt: function (p1646, p1647) {
        return p1646 === p1647;
      },
      ITaqr: function (p1648, p1649) {
        return p1648 + p1649;
      },
      dVjBI: function (p1650, p1651) {
        return p1650 + p1651;
      },
      eGBpZ: function (p1652, p1653) {
        return p1652 + p1653;
      }
    };
    let v665 = " select ";
    let v666 = "count";
    let v667 = "";
    if (p1579.isRepeat === "2" || p1579.isRepeat === v664.bXqVI(351628, 351630)) {
      v666 = "sum";
    } else if (p1579.isRepeat === "3" || v664.pMUTy(p1579.isRepeat, v664.bXqVI(851465, 851466))) {
      v666 = "avg";
    } else if (p1579.isRepeat === "6" || p1579.isRepeat === 6) {
      v666 = v664.QIvhr;
    } else if (p1579.isRepeat === "7" || p1579.isRepeat === 7) {
      v666 = v664.UJYNu;
    } else if (v664.eFwsc(p1579.isRepeat, "8") || p1579.isRepeat === v664.bXqVI(486180, 486188)) {
      v666 = v664.uqfMG;
      v667 = "count(distinct weCustomerKey)";
    } else {
      v666 = "count";
    }
    v665 = v664.FpEZc(v665, v666) + "(";
    if (p1579.isRepeat === "5" || p1579.isRepeat === 5) {
      v665 = v665 + " distinct weCustomerKey";
    } else if (p1579.isRepeat === "4" || v664.lTUnT(p1579.isRepeat, v664.hLGAp(391689, 391693))) {
      v665 = v665 + "weCustomerKey";
    } else if (v664.lTUnT(p1579.isRepeat, "1") || v664.LMpiu(p1579.isRepeat, v664.rQxuW(216096, 216097))) {
      v665 = v664.JtgsN(v665 + v664.MgHfK, p1579.fieldName);
    } else {
      v665 = v665 + p1579.fieldName;
    }
    if (v667) {
      v665 = v664.FpEZc(v664.uiCtN(v665, ") / "), v667) + " as count  from " + p1581;
    } else {
      v665 = v665 + ") as count from " + p1581;
    }
    if (v664.wQPwq(p1580.length, v664.jdlhw(178773, 178773))) {
      let v668 = p1579.andOr;
      if (!p1579.andOr || v664.VycXt(p1579.andOr, undefined)) {
        v668 = v664.xghsP;
      } else {
        v668 = vRequire2.convertAndOr(v668);
      }
      var v669 = "";
      for (let v670 = 0; v670 < p1580.length; v670++) {
        let v671 = p1580[v670].fieldName;
        let v672 = vRequire2.convertOper(p1580[v670].rule);
        let v673 = p1580[v670].value;
        if (v672 === "is null") {
          v669 = v664.WAnnO(v664.ftxTg(v664.FpEZc(" " + v669 + "(" + v671 + " ", v672) + " or " + v671, "='') "), v668) + " ";
        } else if (v672 === "is not null") {
          v669 = v664.uiCtN(v664.FLRAD(" " + v669 + "(" + v671 + " " + v672, " and ") + v671 + v664.FcNnQ + v668, " ");
        } else if (v672 === "in") {
          let v674 = v673.split(",");
          let v675 = "";
          for (let v676 = v664.hLGAp(995012, 995012); v676 < v674.length; v676++) {
            v675 += v664.moAhB(v664.SAmNS(v671, " like '%") + v674[v676] + "%' ", v664.bfyrD);
          }
          v675 = v675.substring(0, v675.lastIndexOf("or"));
          v669 = v664.QfWTW(v664.EgPEB(v664.GxUcd(v669, " (") + v675 + ")", " ") + v668, " ");
        } else if (v672 === v664.MIVpF) {
          let v677 = v673.split(",");
          let v678 = "";
          for (let v679 = v664.rQxuW(718355, 718355); v679 < v677.length; v679++) {
            v678 += v671 + v664.gnIhx + v677[v679] + "%' " + v664.bACHK;
          }
          v678 = v678.substring(0, v678.lastIndexOf("and"));
          v669 = v664.WAnnO(v664.WAnnO(v669 + " (", v678) + ")", " ") + v668 + " ";
        } else if (v664.LMpiu(v672, "区间")) {
          let v680 = v673.split(",");
          let v681 = v664.FpEZc(v671 + v664.OkLtR + v680[0] + " and ", v671) + v664.hhfSl + v680[v664.nuxxp(398895, 398894)];
          v669 = v664.QfWTW(v664.hTxwC(v669 + " (", v681) + ") " + v668, " ");
        } else if (v672 === v664.PNYYP) {
          v669 = v664.zMYpy(" " + v669 + v671 + v664.NKiBg + p1582, "'") + " and ";
        } else {
          v669 = v664.GxUcd(v664.QfWTW(v664.LxmJq(v664.WROmu(v664.hTxwC(v664.hhMMz(" ", v669) + v671, " "), v672) + " '", v673), "'"), " ") + v668 + " ";
        }
      }
      v669 = v669.substr(v664.pUrVZ(202666, 202666), v669.lastIndexOf(v668));
      if (v669) {
        v665 = " " + v665 + " where 1=1 and (" + v669 + p1583 + ") ";
      } else {
        v665 = v664.moAhB(v664.JtgsN(" " + v665, p1583), " ");
      }
    } else {
      v665 = v664.TgbOs(v665 + v664.MlOSp, p1583);
    }
    if (v664.lTUnT(p1579.isRepeat, "4") || v664.IApUA(p1579.isRepeat, 4) || v664.NlfHg(p1579.isRepeat, "5") || v664.RGpAt(p1579.isRepeat, 5)) {
      v665 = v664.ITaqr(v664.dVjBI(v664.eGBpZ(v665, " and "), p1579.fieldName) + " = '" + p1582, "'");
    }
    return v665;
  }
  static async ["splicingFirstStepGroupSql"](p1654, p1655, p1656, p1657, p1658, p1659, p1660) {
    const v682 = {
      UHLXe: function (p1661, p1662) {
        return p1661 + p1662;
      },
      UXXfA: function (p1663, p1664) {
        return p1663 + p1664;
      },
      PPCfP: " as count from ",
      PFIcu: " and happenTime <= '"
    };
    let v683 = v682.UHLXe(v682.UXXfA(" select " + p1654.fieldName + " as relationFieldValue, " + p1657, v682.PPCfP), p1656);
    if (p1655) {
      v683 = " " + v683 + " where 1=1 and " + p1655;
    } else {
      v683 = v682.UHLXe(v683, " where 1=1 ");
    }
    v683 = v683 + " and weRelationField = '" + p1658 + "' and happenTime > '" + p1659 + "'" + v682.PFIcu + p1660 + "'";
    v683 = v682.UHLXe(v683 + " group by ", p1654.fieldName);
    return v683;
  }
  static async splicingCriteriaSql(p1665, p1666) {
    const v684 = {
      jgofc: "and",
      Esmaj: function (p1667, p1668) {
        return p1667 ^ p1668;
      },
      Hpciq: "is null",
      wEyJt: function (p1669, p1670) {
        return p1669 + p1670;
      },
      crHbD: function (p1671, p1672) {
        return p1671 + p1672;
      },
      TedDM: function (p1673, p1674) {
        return p1673 + p1674;
      },
      UEJAP: function (p1675, p1676) {
        return p1675 + p1676;
      },
      mtlaM: function (p1677, p1678) {
        return p1677 + p1678;
      },
      CQrnU: function (p1679, p1680) {
        return p1679 ^ p1680;
      },
      IHpXi: function (p1681, p1682) {
        return p1681 + p1682;
      },
      qSzqW: function (p1683, p1684) {
        return p1683 + p1684;
      },
      PRFUM: function (p1685, p1686) {
        return p1685 + p1686;
      },
      QbhPM: "not in",
      btGAQ: function (p1687, p1688) {
        return p1687 + p1688;
      },
      qfkNS: " not like '%",
      WrBgR: "%' ",
      MDzIV: " <=",
      sfsKR: function (p1689, p1690) {
        return p1689 + p1690;
      }
    };
    let v685 = "";
    if (p1666 && p1666.length > 0) {
      let v686 = p1665.andOr;
      if (!p1665.andOr || p1665.andOr === undefined) {
        v686 = v684.jgofc;
      } else {
        v686 = vRequire2.convertAndOr(v686);
      }
      var v687 = "";
      for (let v688 = v684.Esmaj(858856, 858856); v688 < p1666.length; v688++) {
        let v689 = p1666[v688].fieldName;
        let v690 = vRequire2.convertOper(p1666[v688].rule);
        let v691 = p1666[v688].value;
        if (v690 === v684.Hpciq) {
          v687 = v684.wEyJt(v684.crHbD(v684.TedDM(" ", v687), "("), v689) + " " + v690 + " or " + v689 + "='') " + v686 + " ";
        } else if (v690 === "is not null") {
          v687 = v684.UEJAP(v684.mtlaM(" " + v687 + "(" + v689, " ") + v690 + " and " + v689 + "!='') " + v686, " ");
        } else if (v690 === "in") {
          let v692 = v691.split(",");
          let v693 = "";
          for (let v694 = v684.CQrnU(858899, 858899); v694 < v692.length; v694++) {
            v693 += v684.IHpXi(v689 + " like '%" + v692[v694], "%' ") + " or ";
          }
          v693 = v693.substring(0, v693.lastIndexOf("or"));
          v687 = v684.mtlaM(v684.crHbD(v684.qSzqW(v684.PRFUM(v687 + " (", v693), ")") + " ", v686), " ");
        } else if (v690 === v684.QbhPM) {
          let v695 = v691.split(",");
          let v696 = "";
          for (let v697 = 0; v697 < v695.length; v697++) {
            v696 += v684.btGAQ(v689, v684.qfkNS) + v695[v697] + v684.WrBgR + " and ";
          }
          v696 = v696.substring(0, v696.lastIndexOf("and"));
          v687 = v684.UEJAP(v687, " (") + v696 + ") " + v686 + " ";
        } else if (v690 === "区间") {
          let v698 = v691.split(",");
          let v699 = v689 + " >=" + v698[0] + " and " + v689 + v684.MDzIV + v698[v684.CQrnU(636396, 636397)];
          v687 = v684.sfsKR(v684.btGAQ(v687, " (") + v699, ")") + " " + v686 + " ";
        } else if (v690 === "group by") {} else {
          v687 = v684.wEyJt(v684.sfsKR(v684.PRFUM(v684.crHbD(" ", v687) + v689 + " " + v690, " '") + v691, "'"), " ") + v686 + " ";
        }
      }
      v687 = v687.substr(0, v687.lastIndexOf(v686));
      v685 = "(" + v687 + ") ";
    }
    return v685;
  }
  static async countRealOnline(p1691, p1692, p1693) {
    const v700 = {
      kmLUn: function (p1694, p1695) {
        return p1694 + p1695;
      },
      RKIsq: function (p1696, p1697) {
        return p1696 + p1697;
      },
      iMHcf: " and happenTime <= '"
    };
    let v701 = " select count(distinct weCustomerKey) as count from " + p1691;
    if (p1692 && p1693) {
      v701 = v700.kmLUn(v700.kmLUn(v700.RKIsq(v701 + " where happenTime >= '" + p1692 + "'", v700.iMHcf), p1693), "'");
    }
    return v701;
  }
  static async topGroupBySql(p1698, p1699, p1700, p1701, p1702, p1703) {
    const v702 = {
      MYiTr: "count",
      TbcOe: function (p1704, p1705) {
        return p1704 ^ p1705;
      },
      gWOnO: function (p1706, p1707) {
        return p1706 === p1707;
      },
      alEUj: function (p1708, p1709) {
        return p1708 + p1709;
      },
      mVWiK: function (p1710, p1711) {
        return p1710 === p1711;
      },
      NpeVY: function (p1712, p1713) {
        return p1712 ^ p1713;
      },
      Drjdk: function (p1714, p1715) {
        return p1714 + p1715;
      },
      bukho: function (p1716, p1717) {
        return p1716 < p1717;
      },
      IhyQv: "group by",
      iSmJl: function (p1718, p1719) {
        return p1718 + p1719;
      },
      jotzw: " from (select ",
      RNnIX: function (p1720, p1721) {
        return p1720 + p1721;
      },
      xgjFb: ",weCustomerKey,",
      pxpaw: " as groupByName",
      UKOYR: function (p1722, p1723) {
        return p1722 + p1723;
      },
      pftVa: " ) group by groupByName ",
      FOjHo: " limit 10 ",
      eTrPT: " limit 30 ",
      zJWNw: " limit 50 "
    };
    let v703 = " select groupByName,";
    let v704 = "weCustomerKey";
    let v705 = v702.MYiTr;
    let v706 = "";
    if (p1698.isRepeat === "2" || p1698.isRepeat === 2) {
      v705 = "sum";
    } else if (p1698.isRepeat === "3" || p1698.isRepeat === 3) {
      v705 = "avg";
    } else if (p1698.isRepeat === "6" || p1698.isRepeat === 6) {
      v705 = "max";
    } else if (p1698.isRepeat === "7" || p1698.isRepeat === v702.TbcOe(333451, 333452)) {
      v705 = "min";
    } else if (v702.gWOnO(p1698.isRepeat, "8") || p1698.isRepeat === 8) {
      v705 = "sum";
      v706 = "count(distinct weCustomerKey)";
    } else {
      v705 = "count";
    }
    let v707 = v702.alEUj(v705, "(");
    if (p1698.isRepeat === "5" || v702.mVWiK(p1698.isRepeat, 5)) {
      v707 = v707 + " distinct weCustomerKey";
      v704 = "weCustomerKey";
    } else if (p1698.isRepeat === "4" || p1698.isRepeat === v702.NpeVY(444017, 444021)) {
      v707 = v707 + "weCustomerKey";
      v704 = "weCustomerKey";
    } else if (p1698.isRepeat === "1" || p1698.isRepeat === 1) {
      v707 = v702.alEUj(v707, " distinct ") + p1698.fieldName;
      v704 = p1698.fieldName;
    } else {
      v707 = v707 + p1698.fieldName;
      v704 = p1698.fieldName;
    }
    if (v706) {
      v707 = v702.alEUj(v702.alEUj(v707 + ") / ", v706), " as count ");
      v703 = v702.alEUj(v703, v707);
    } else {
      v707 = v702.Drjdk(v707, ") as count ");
      v703 = v703 + v707;
    }
    let v708 = 0;
    let v709 = "";
    for (let v710 = 0; v702.bukho(v710, p1700.length); v710++) {
      let v711 = p1700[v710].fieldName;
      let v712 = vRequire2.convertOper(p1700[v710].rule);
      if (v702.gWOnO(v712, v702.IhyQv)) {
        v708 = v702.NpeVY(111569, 111568);
        v709 = v711;
        break;
      }
    }
    let v713 = "";
    if (v708 === 1 && v709) {
      v713 = v709;
    } else {
      v713 = p1698.fieldName;
    }
    v703 = v702.iSmJl(v703, v702.jotzw);
    if (v702.gWOnO(p1698.isRepeat, "8") || v702.gWOnO(p1698.isRepeat, 8)) {
      v703 = v702.RNnIX(v703, v704) + v702.xgjFb + v713 + " as groupByName";
    } else {
      v703 = v702.iSmJl(v703 + v704 + "," + v713, v702.pxpaw);
    }
    v703 = v703 + " from " + p1701;
    if (p1698.isRepeat === "4" || p1698.isRepeat === 4 || p1698.isRepeat === "5" || v702.mVWiK(p1698.isRepeat, 5)) {
      v703 = v702.UKOYR(v703, v702.pftVa);
    }
    v703 = v703 + " order by count desc";
    if (p1703 !== "") {
      if (v702.gWOnO(p1703, v702.NpeVY(992622, 992623)) || v702.gWOnO(p1703, "1")) {
        v703 = v703 + v702.FOjHo;
      } else if (v702.gWOnO(p1703, v702.NpeVY(298419, 298417)) || p1703 === "2") {
        v703 = v703 + v702.eTrPT;
      } else if (p1703 === 3 || p1703 === "3") {
        v703 = v702.alEUj(v703, v702.zJWNw);
      }
    } else {
      v703 = v703 + " limit 10 ";
    }
    return v703;
  }
  static async ["topGroupCriteriaSql"](p1724) {
    const v714 = {
      mxNTP: function (p1725, p1726) {
        return p1725 > p1726;
      },
      LnQvB: function (p1727, p1728) {
        return p1727 ^ p1728;
      },
      WxyQr: function (p1729, p1730) {
        return p1729 < p1730;
      },
      uwMmJ: function (p1731, p1732) {
        return p1731 + p1732;
      },
      StEck: function (p1733, p1734) {
        return p1733 + p1734;
      },
      qmqXa: function (p1735, p1736) {
        return p1735 + p1736;
      },
      zgRZL: function (p1737, p1738) {
        return p1737 + p1738;
      },
      CNxEE: function (p1739, p1740) {
        return p1739 + p1740;
      },
      CBbkA: function (p1741, p1742) {
        return p1741 + p1742;
      },
      kDuPU: "%' ",
      CuYfB: " or ",
      vsUhb: function (p1743, p1744) {
        return p1743 === p1744;
      },
      KZiny: function (p1745, p1746) {
        return p1745 + p1746;
      },
      jcYpC: " not like '%",
      waDOF: " >=",
      qmwUN: " and ",
      QONGo: " <=",
      GsyHO: function (p1747, p1748) {
        return p1747 + p1748;
      },
      jGEgM: function (p1749, p1750) {
        return p1749 + p1750;
      },
      RWgPS: function (p1751, p1752) {
        return p1751 + p1752;
      }
    };
    var v715 = "";
    if (v714.mxNTP(p1724.length, v714.LnQvB(815172, 815172))) {
      let v716 = calcField.andOr;
      if (!calcField.andOr || calcField.andOr === undefined) {
        v716 = "and";
      } else {
        v716 = vRequire2.convertAndOr(v716);
      }
      var v717 = "";
      for (let v718 = 0; v714.WxyQr(v718, p1724.length); v718++) {
        let v719 = p1724[v718].fieldName;
        let v720 = vRequire2.convertOper(p1724[v718].rule);
        let v721 = p1724[v718].value;
        if (v720 === "is null") {
          v715 = v714.uwMmJ(v714.StEck(v714.StEck(v714.qmqXa(" ", v715) + "(" + v719, " ") + v720 + " or ", v719) + "='') ", v716) + " ";
        } else if (v720 === "is not null") {
          v715 = v714.qmqXa(v714.zgRZL(v714.uwMmJ(" " + v715 + "(" + v719 + " " + v720 + " and ", v719) + "!='') ", v716), " ");
        } else if (v720 === "in") {
          let v722 = v721.split(",");
          let v723 = "";
          for (let v724 = 0; v714.WxyQr(v724, v722.length); v724++) {
            v723 += v714.CNxEE(v714.CBbkA(v714.CBbkA(v719, " like '%") + v722[v724], v714.kDuPU), v714.CuYfB);
          }
          v723 = v723.substring(0, v723.lastIndexOf("or"));
          v715 = v715 + " (" + v723 + ") " + v716 + " ";
        } else if (v714.vsUhb(v720, "not in")) {
          let v725 = v721.split(",");
          let v726 = "";
          for (let v727 = v714.LnQvB(685193, 685193); v714.WxyQr(v727, v725.length); v727++) {
            v726 += v714.KZiny(v719 + v714.jcYpC, v725[v727]) + v714.kDuPU + " and ";
          }
          v726 = v726.substring(0, v726.lastIndexOf("and"));
          v715 = v714.StEck(v714.qmqXa(v715 + " (" + v726, ")") + " ", v716) + " ";
        } else if (v720 === "区间") {
          let v728 = v721.split(",");
          let v729 = v714.CBbkA(v714.StEck(v714.CNxEE(v714.KZiny(v719 + v714.waDOF, v728[0]), v714.qmwUN) + v719, v714.QONGo), v728[1]);
          v715 = v715 + " (" + v729 + ") " + v716 + " ";
        } else if (v720 === "group by") {
          v717 = " ) group by groupByName ";
        } else if (v720 === "区间") {
          let v730 = v721.split(",");
          let v731 = v719 + v714.waDOF + v730[0] + " and " + v719 + " <=" + v730[v714.LnQvB(115518, 115519)];
          v715 = v714.zgRZL(v715 + " (" + v731 + ")", " ") + v716 + " ";
        } else {
          v715 = v714.qmqXa(v714.uwMmJ(v714.GsyHO(v714.GsyHO(" " + v715, v719), " ") + v720, " '") + v721 + "' " + v716, " ");
        }
      }
      v715 = v715.substr(v714.LnQvB(443953, 443953), v715.lastIndexOf(v716));
      if (v715) {
        querySql = v714.GsyHO(" " + querySql + " where 1=1 and (" + v715 + queryByDaySql + ") ", v717);
      } else {
        querySql = v714.CNxEE(v714.jGEgM(" ", querySql), queryByDaySql) + " " + v717;
      }
    } else {
      querySql = v714.RWgPS(querySql, " where 1=1 ") + queryByDaySql;
    }
  }
}
const v732 = new vRequire("../schema/team");
v732.createTable();
class C20 {
  static async ["createTeam"](p1753) {
    return await v732.create({
      ...p1753
    });
  }
  static async deleteTeam(p1754) {
    await v732.destroy({
      where: {
        dataId: p1754
      }
    });
    return true;
  }
  static async ["getTeamDetail"](p1755) {
    return await v732.findOne({
      where: {
        dataId: p1755
      }
    });
  }
  static async ["getTeamDetailByName"](p1756) {
    return await v732.findOne({
      where: {
        teamName: p1756
      }
    });
  }
  static async updateTeam(p1757, p1758) {
    await v732.update({
      ...p1758
    }, {
      where: {
        dataId: p1757
      },
      fields: Object.keys(p1758)
    });
    return true;
  }
  static async ["getTeamList"](p1759, p1760) {
    const v733 = {
      bqofs: function (p1761, p1762) {
        return p1761 === p1762;
      }
    };
    let v734 = "";
    if (v733.bqofs(p1760, "admin") || p1760 === "superAdmin") {
      v734 = "select * from Team";
    } else {
      v734 = "select * from Team where members like '%" + p1759 + "%'";
    }
    return await v732.query(v734, {
      type: v732.QueryTypes.SELECT
    });
  }
  static async getAllTeamList() {
    let v735 = "select * from Team";
    return await v732.query(v735, {
      type: v732.QueryTypes.SELECT
    });
  }
  static async getTeamMembersByWebMonitorId(p1763) {
    const v736 = {
      RfRAN: function (p1764, p1765) {
        return p1764 - p1765;
      },
      bcvHW: function (p1766, p1767) {
        return p1766 ^ p1767;
      },
      dqDDd: " and webMonitorIds in ("
    };
    let v737 = "select leaderId, members from Team where 1 =1 ";
    const v738 = p1763.split(",");
    let v739 = "";
    v738.forEach((p1768, p1769) => {
      if (p1769 === v736.RfRAN(v738.length, v736.bcvHW(837259, 837258))) {
        v739 += "'" + p1768 + "'";
      } else {
        v739 += "'" + p1768 + "',";
      }
    });
    v737 = v737 + v736.dqDDd + v739 + ")";
    return await v732.query(v737, {
      type: v732.QueryTypes.SELECT
    });
  }
  static async ["findTeamListByTeamId"](p1770) {
    const v740 = {
      yQOSv: function (p1771, p1772) {
        return p1771 + p1772;
      }
    };
    let v741 = v740.yQOSv("select * from Team where dataId='", p1770) + "'";
    return await v732.query(v741, {
      type: v732.QueryTypes.SELECT
    });
  }
  static async ["findTeamListByLeaderId"](p1773) {
    const v742 = {
      WtRji: function (p1774, p1775) {
        return p1774 === p1775;
      },
      ShorH: "select * from Team where 1=1 "
    };
    let v743 = v742.ShorH;
    const v744 = p1773.split(",");
    let v745 = "";
    v744.forEach((p1776, p1777) => {
      if (v742.WtRji(p1777, v744.length - 1)) {
        v745 += "'" + p1776 + "'";
      } else {
        v745 += "'" + p1776 + "',";
      }
    });
    v743 = v743 + " and members in (" + v745 + ")";
    return await v732.query(v743, {
      type: v732.QueryTypes.SELECT
    });
  }
  static async ["checkTeamLeader"](p1778, p1779) {
    let v746 = "select * from Team where dataId='" + p1778 + "' and leaderId='" + p1779 + "'";
    return await v732.query(v746, {
      type: v732.QueryTypes.SELECT
    });
  }
  static async ["checkTeamMember"](p1780, p1781) {
    const v747 = {
      dvAGu: function (p1782, p1783) {
        return p1782 === p1783;
      },
      uHJyL: function (p1784, p1785) {
        return p1784 + p1785;
      }
    };
    let v748 = "select * from Team where dataId='" + p1780 + "' ";
    const v749 = p1781.split(",");
    let v750 = "";
    v749.forEach((p1786, p1787) => {
      if (v747.dvAGu(p1787, v749.length - 1)) {
        v750 += "'" + p1786 + "'";
      } else {
        v750 += "'" + p1786 + "',";
      }
    });
    v748 = v747.uHJyL(v747.uHJyL(v748, " and members in ("), v750) + ")";
    return await v732.query(v748, {
      type: v732.QueryTypes.SELECT
    });
  }
}
const v751 = new vRequire("../schema/message");
v751.createTable();
class C21 {
  static async createMessage(p1788) {
    return await v751.create({
      ...p1788
    });
  }
  static async ["deleteMessage"](p1789) {
    await v751.destroy({
      where: {
        dataId: p1789
      }
    });
    return true;
  }
  static async ["getAllMessage"]() {
    const v752 = {
      wzkew: "select * from Message"
    };
    let v753 = v752.wzkew;
    return await v751.query(v753, {
      type: v751.QueryTypes.SELECT
    });
  }
  static async ["getMessageByType"](p1790) {
    const {
      messageType: _0x8473c3,
      page: _0x14673c,
      pageSize: _0x398c25,
      userId: _0x3a5e92
    } = p1790;
    const v754 = _0x14673c * _0x398c25;
    const v755 = _0x3a5e92 ? " and userId='" + _0x3a5e92 + "' " : "";
    let v756 = "select * from Message where type='" + _0x8473c3 + "' " + v755 + " order by createdAt desc limit " + v754 + "," + _0x398c25;
    return await v751.query(v756, {
      type: v751.QueryTypes.SELECT
    });
  }
  static async getUnReadMessageCountByType(p1791) {
    const {
      userId: _0x234138,
      messageType: _0x3a60ed
    } = p1791;
    let v757 = "select isRead, count(isRead) as count from Message where  type='" + _0x3a60ed + "' and userId='" + _0x234138 + "' GROUP BY isRead";
    return await v751.query(v757, {
      type: v751.QueryTypes.SELECT
    });
  }
  static async readAll(p1792, p1793) {
    const v758 = {
      isRead: 1
    };
    await v751.update({
      ...v758
    }, {
      where: {
        userId: p1792,
        type: p1793
      },
      fields: Object.keys(v758)
    });
    return true;
  }
  static async ["getMessageDetail"](p1794) {
    return await v751.findOne({
      where: {
        dataId: p1794
      }
    });
  }
  static async ["updateMessage"](p1795, p1796) {
    await v751.update({
      ...p1796
    }, {
      where: {
        dataId: p1795
      },
      fields: Object.keys(p1796)
    });
    return true;
  }
}
const v759 = new vRequire("../schema/user");
v759.createTable();
class C22 {
  static async ["createUser"](p1797) {
    return await v759.create({
      ...p1797
    });
  }
  static async updateUser(p1798, p1799) {
    await v759.update({
      ...p1799
    }, {
      where: {
        dataId: p1798
      },
      fields: Object.keys(p1799)
    });
    return true;
  }
  static async resetPwd(p1800, p1801) {
    await v759.update({
      ...p1801
    }, {
      where: {
        emailName: p1800
      },
      fields: Object.keys(p1801)
    });
    return true;
  }
  static async ["getUserList"]() {
    const v760 = {
      oppHG: "select dataId, userId, nickname from User where registerStatus='1'"
    };
    let v761 = v760.oppHG;
    return await v759.query(v761, {
      type: v759.QueryTypes.SELECT
    });
  }
  static async ["getUserForAdmin"]() {
    let v762 = "select * from User where userType='admin' or userType='superAdmin'";
    return await v759.query(v762, {
      type: v759.QueryTypes.SELECT
    });
  }
  static async ["getUserListByAdmin"](p1802) {
    const v763 = {
      Jivnn: function (p1803, p1804) {
        return p1803 + p1804;
      },
      LVhcj: "select dataId, userId, userType, nickname, emailName, avatar, registerStatus, groupId, createdAt, updatedAt from User "
    };
    let v764 = "";
    switch (p1802) {
      case 0:
      case 1:
        v764 = " where registerStatus=" + p1802 + " ";
        break;
      default:
        break;
    }
    let v765 = v763.Jivnn(v763.LVhcj, v764);
    return await v759.query(v765, {
      type: v759.QueryTypes.SELECT
    });
  }
  static async getUserInfo(p1805) {
    let v766 = "select userId, userType, phone, nickname, emailName, avatar from User where userId='" + p1805 + "'";
    return await v759.query(v766, {
      type: v759.QueryTypes.SELECT
    });
  }
  static async ["getUserListByMembers"](p1806) {
    const v767 = {
      hGBhC: function (p1807, p1808) {
        return p1807 - p1808;
      },
      ZOzQq: function (p1809, p1810) {
        return p1809 + p1810;
      },
      byoem: " and userId in ("
    };
    let v768 = "select * from User where 1=1 ";
    const v769 = userId.split(",");
    let v770 = "";
    v769.forEach((p1811, p1812) => {
      if (p1812 === v767.hGBhC(v769.length, 1)) {
        v770 += "'" + p1811 + "'";
      } else {
        v770 += "'" + p1811 + "',";
      }
    });
    v768 = v767.ZOzQq(v768 + v767.byoem + v770, ")");
    return await v759.query(v768, {
      type: v759.QueryTypes.SELECT
    });
  }
  static async getUserListByViewers(p1813) {
    const v771 = {
      dFYih: "select * from User where 1=1"
    };
    let v772 = v771.dFYih;
    const v773 = p1813.split(",");
    let v774 = "";
    v773.forEach((p1814, p1815) => {
      if (p1815 === v773.length - 1) {
        v774 += "'" + p1814 + "'";
      } else {
        v774 += "'" + p1814 + "',";
      }
    });
    v772 = v772 + " and userId in (" + v774 + ")";
    return await v759.query(v772, {
      type: v759.QueryTypes.SELECT
    });
  }
  static async getAllUserInfoForSimple() {
    const v775 = {
      jDHYr: "select dataId, userId, nickname, emailName, avatar from User where registerStatus='1'"
    };
    let v776 = v775.jDHYr;
    return await v759.query(v776, {
      type: v759.QueryTypes.SELECT
    });
  }
  static async getUsersByUserIds(p1816) {
    let v777 = "";
    p1816.forEach((p1817, p1818) => {
      if (p1818 === p1816.length - 1) {
        v777 += "'" + p1817 + "'";
      } else {
        v777 += "'" + p1817 + "',";
      }
    });
    const v778 = v777.length ? " where userId in (" + v777 + ") " : "";
    let v779 = "select userId, nickname, emailName, phone, avatar from User " + v778;
    return await v759.query(v779, {
      type: v759.QueryTypes.SELECT
    });
  }
  static async ["activeRegisterMember"](p1819) {
    const v780 = {
      registerStatus: 1
    };
    await v759.update({
      ...v780
    }, {
      where: {
        userId: p1819
      },
      fields: Object.keys(v780)
    });
    return true;
  }
  static async getUserDetail(p1820) {
    return await v759.findOne({
      where: {
        dataId: p1820
      }
    });
  }
  static async getUserForPwd(p1821) {
    return await v759.findOne({
      where: {
        ...p1821
      }
    });
  }
  static async getAdminByType(p1822) {
    return await v759.findOne({
      where: {
        userType: p1822
      }
    });
  }
  static async checkUserAccount(p1823) {
    return await v759.findOne({
      where: {
        emailName: p1823
      }
    });
  }
  static async isAdminAccount(p1824, p1825) {
    return await v759.findOne({
      where: {
        emailName: p1824,
        userType: p1825
      }
    });
  }
  static async deleteUser(p1826) {
    await v759.destroy({
      where: {
        dataId: p1826
      }
    });
    return true;
  }
  static async checkAdminAccount() {
    let v781 = "select count(dataId) as count from User where userType='superAdmin'";
    return await v759.query(v781, {
      type: v759.QueryTypes.SELECT
    });
  }
  static async ["deleteUserByUserId"](p1827) {
    await v759.destroy({
      where: {
        userId: p1827
      }
    });
    return true;
  }
  static async setAdmin(p1828, p1829) {
    const v782 = {
      nSQFm: "admin"
    };
    let v783 = {
      userType: v782.nSQFm
    };
    if (p1829 === "a") {
      v783 = {
        userType: v782.nSQFm
      };
    } else if (p1829 === "c") {
      v783 = {
        userType: "customer"
      };
    }
    await v759.update({
      ...v783
    }, {
      where: {
        userId: p1828
      },
      fields: Object.keys(v783)
    });
    return true;
  }
  static async ["resetSuperAdmin"](p1830, p1831) {
    const v784 = {
      agjfa: "superAdmin",
      mLduY: "customer"
    };
    const v785 = {
      userType: v784.agjfa
    };
    await v759.update({
      ...v785
    }, {
      where: {
        userId: p1831
      },
      fields: Object.keys(v785)
    });
    const v786 = {
      userType: v784.mLduY
    };
    await v759.update({
      ...v786
    }, {
      where: {
        userId: p1830
      },
      fields: Object.keys(v786)
    });
    return true;
  }
}
module.exports = {
  BuryPointAlarmModel: C,
  BuryPointCardModel: C17,
  BuryPointAlarmMessageModel: C15,
  BuryPointCardStatisticsModel: C18,
  BuryPointFailLogModel: C2,
  BuryPointCircleSelectModel: C3,
  BuryPointFieldModel: C4,
  BuryPointProjectModel: C5,
  BuryPointRelationModel: C6,
  BuryPointScreenShotModel: C7,
  SdkReleaseModel: C8,
  BuryPointTaskModel: C9,
  BuryPointTemplateModel: C10,
  BuryPointUserBehaviorRelationModel: C11,
  BuryPointVisualTrackingModel: C12,
  BuryPointWarehouseModel: C13,
  CardStatisticModel: C14,
  ConfigModel: C16,
  MessageModel: C21,
  CommonModel: C19,
  UserModel: C22,
  TeamModel: C20
};
function f32(p1832) {
  const v787 = {
    bRhwl: "string",
    VwFNN: function (p1833, p1834) {
      return p1833 !== p1834;
    },
    WbdEs: function (p1835, p1836) {
      return p1835 / p1836;
    },
    nczLi: function (p1837, p1838) {
      return p1837 + p1838;
    },
    wRPEE: "gger",
    JYeEo: function (p1839, p1840) {
      return p1839(p1840);
    }
  };
  function f35(p1851) {
    function f38(p1862, p1863, p1864, p1865, p1866) {
      return f23(p1865 - -617, p1864);
    }
    function f39(p1867, p1868, p1869, p1870, p1871) {
      return f23(p1871 - -263, p1867);
    }
    function f43(p1887, p1888, p1889, p1890, p1891) {
      return f16(p1891 - 132, p1887);
    }
    if (typeof p1851 === v787.bRhwl) {
      return function (p1892) {}.constructor("while (true) {}").apply("counter");
    } else if (v787.VwFNN(("" + v787.WbdEs(p1851, p1851))["length"], 1) || p1851 % 20 === 0) {
      (function () {
        return true;
      }).constructor(v787.nczLi("debu", v787.wRPEE)).call("action");
    } else {
      (function () {
        return false;
      }).constructor("debu" + "gger").apply("stateObject");
    }
    v787.JYeEo(f35, ++p1851);
  }
  try {
    if (p1832) {
      return f35;
    } else {
      v787.JYeEo(f35, 0);
    }
  } catch (_0xa6a0a7) {}
}