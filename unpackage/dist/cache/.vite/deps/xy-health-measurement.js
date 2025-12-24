import {
  __commonJS
} from "./chunk-25V3TAZK.js";

// ../../../../project/mianjia_jiangkan/node_modules/xy-health-measurement/lib/index.js
var require_lib = __commonJS({
  "../../../../project/mianjia_jiangkan/node_modules/xy-health-measurement/lib/index.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports === "object")
        exports["tools"] = factory();
      else
        root["tools"] = factory();
    })(self, () => {
      return (
        /******/
        (() => {
          var __webpack_modules__ = [
            ,
            /* 1 */
            /***/
            (__unused_webpack_module2, exports2, __webpack_require__2) => {
              var jspb2 = __webpack_require__2(2);
              var goog2 = jspb2;
              var global = (function() {
                if (this) {
                  return this;
                }
                if (typeof window !== "undefined") {
                  return window;
                }
                if (typeof global !== "undefined") {
                  return global;
                }
                if (typeof self !== "undefined") {
                  return self;
                }
                return Function("return this")();
              }).call(null);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.BpData", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.BpExplanation", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.BpReport", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.EssentialData", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.EssentialExplanation", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.EssentialReport", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.Gender", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.HrData", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.HrExplanation", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.HrReport", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.Report", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.ReportIndexExplanation", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.ReportIndexText", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.RiskData", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.RiskExplanation", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.RiskReport", null, global);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.SingleValueReport", null, global);
              proto.Xiaoyang.Measurement.Report = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.Report, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.Report.displayName = "proto.Xiaoyang.Measurement.Report";
              }
              proto.Xiaoyang.Measurement.SingleValueReport = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.SingleValueReport, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.SingleValueReport.displayName = "proto.Xiaoyang.Measurement.SingleValueReport";
              }
              proto.Xiaoyang.Measurement.HrReport = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.HrReport, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.HrReport.displayName = "proto.Xiaoyang.Measurement.HrReport";
              }
              proto.Xiaoyang.Measurement.BpReport = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.BpReport, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.BpReport.displayName = "proto.Xiaoyang.Measurement.BpReport";
              }
              proto.Xiaoyang.Measurement.RiskReport = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.RiskReport, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.RiskReport.displayName = "proto.Xiaoyang.Measurement.RiskReport";
              }
              proto.Xiaoyang.Measurement.EssentialReport = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.EssentialReport, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.EssentialReport.displayName = "proto.Xiaoyang.Measurement.EssentialReport";
              }
              proto.Xiaoyang.Measurement.HrData = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.HrData, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.HrData.displayName = "proto.Xiaoyang.Measurement.HrData";
              }
              proto.Xiaoyang.Measurement.HrExplanation = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.HrExplanation, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.HrExplanation.displayName = "proto.Xiaoyang.Measurement.HrExplanation";
              }
              proto.Xiaoyang.Measurement.BpData = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.BpData, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.BpData.displayName = "proto.Xiaoyang.Measurement.BpData";
              }
              proto.Xiaoyang.Measurement.BpExplanation = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.BpExplanation, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.BpExplanation.displayName = "proto.Xiaoyang.Measurement.BpExplanation";
              }
              proto.Xiaoyang.Measurement.RiskData = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.RiskData, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.RiskData.displayName = "proto.Xiaoyang.Measurement.RiskData";
              }
              proto.Xiaoyang.Measurement.RiskExplanation = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.RiskExplanation, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.RiskExplanation.displayName = "proto.Xiaoyang.Measurement.RiskExplanation";
              }
              proto.Xiaoyang.Measurement.EssentialData = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.EssentialData, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.EssentialData.displayName = "proto.Xiaoyang.Measurement.EssentialData";
              }
              proto.Xiaoyang.Measurement.EssentialExplanation = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.EssentialExplanation, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.EssentialExplanation.displayName = "proto.Xiaoyang.Measurement.EssentialExplanation";
              }
              proto.Xiaoyang.Measurement.ReportIndexExplanation = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, proto.Xiaoyang.Measurement.ReportIndexExplanation.repeatedFields_, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.ReportIndexExplanation, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.ReportIndexExplanation.displayName = "proto.Xiaoyang.Measurement.ReportIndexExplanation";
              }
              proto.Xiaoyang.Measurement.ReportIndexText = function(opt_data) {
                jspb2.Message.initialize(this, opt_data, 0, -1, proto.Xiaoyang.Measurement.ReportIndexText.repeatedFields_, null);
              };
              goog2.inherits(proto.Xiaoyang.Measurement.ReportIndexText, jspb2.Message);
              if (goog2.DEBUG && !COMPILED) {
                proto.Xiaoyang.Measurement.ReportIndexText.displayName = "proto.Xiaoyang.Measurement.ReportIndexText";
              }
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.Report.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.Report.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.Report.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    hrreport: (f2 = msg.getHrreport()) && proto.Xiaoyang.Measurement.HrReport.toObject(includeInstance, f2),
                    afreport: (f2 = msg.getAfreport()) && proto.Xiaoyang.Measurement.SingleValueReport.toObject(includeInstance, f2),
                    bpreport: (f2 = msg.getBpreport()) && proto.Xiaoyang.Measurement.BpReport.toObject(includeInstance, f2),
                    spo2hreport: (f2 = msg.getSpo2hreport()) && proto.Xiaoyang.Measurement.SingleValueReport.toObject(includeInstance, f2),
                    riskreport: (f2 = msg.getRiskreport()) && proto.Xiaoyang.Measurement.RiskReport.toObject(includeInstance, f2),
                    essentialreport: (f2 = msg.getEssentialreport()) && proto.Xiaoyang.Measurement.EssentialReport.toObject(includeInstance, f2),
                    physiologyscorereport: (f2 = msg.getPhysiologyscorereport()) && proto.Xiaoyang.Measurement.SingleValueReport.toObject(includeInstance, f2),
                    aggressivityreport: (f2 = msg.getAggressivityreport()) && proto.Xiaoyang.Measurement.SingleValueReport.toObject(includeInstance, f2),
                    anxietyreport: (f2 = msg.getAnxietyreport()) && proto.Xiaoyang.Measurement.SingleValueReport.toObject(includeInstance, f2),
                    depressionreport: (f2 = msg.getDepressionreport()) && proto.Xiaoyang.Measurement.SingleValueReport.toObject(includeInstance, f2),
                    vitalityreport: (f2 = msg.getVitalityreport()) && proto.Xiaoyang.Measurement.SingleValueReport.toObject(includeInstance, f2),
                    positivityreport: (f2 = msg.getPositivityreport()) && proto.Xiaoyang.Measurement.SingleValueReport.toObject(includeInstance, f2),
                    suppressionreport: (f2 = msg.getSuppressionreport()) && proto.Xiaoyang.Measurement.SingleValueReport.toObject(includeInstance, f2),
                    fatiguereport: (f2 = msg.getFatiguereport()) && proto.Xiaoyang.Measurement.SingleValueReport.toObject(includeInstance, f2),
                    msireport: (f2 = msg.getMsireport()) && proto.Xiaoyang.Measurement.SingleValueReport.toObject(includeInstance, f2),
                    emotionscorereport: (f2 = msg.getEmotionscorereport()) && proto.Xiaoyang.Measurement.SingleValueReport.toObject(includeInstance, f2)
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.Report.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.Report();
                return proto.Xiaoyang.Measurement.Report.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.Report.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = new proto.Xiaoyang.Measurement.HrReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.HrReport.deserializeBinaryFromReader);
                      msg.setHrreport(value);
                      break;
                    case 2:
                      var value = new proto.Xiaoyang.Measurement.SingleValueReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinaryFromReader);
                      msg.setAfreport(value);
                      break;
                    case 3:
                      var value = new proto.Xiaoyang.Measurement.BpReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.BpReport.deserializeBinaryFromReader);
                      msg.setBpreport(value);
                      break;
                    case 4:
                      var value = new proto.Xiaoyang.Measurement.SingleValueReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinaryFromReader);
                      msg.setSpo2hreport(value);
                      break;
                    case 5:
                      var value = new proto.Xiaoyang.Measurement.RiskReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.RiskReport.deserializeBinaryFromReader);
                      msg.setRiskreport(value);
                      break;
                    case 6:
                      var value = new proto.Xiaoyang.Measurement.EssentialReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.EssentialReport.deserializeBinaryFromReader);
                      msg.setEssentialreport(value);
                      break;
                    case 7:
                      var value = new proto.Xiaoyang.Measurement.SingleValueReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinaryFromReader);
                      msg.setPhysiologyscorereport(value);
                      break;
                    case 8:
                      var value = new proto.Xiaoyang.Measurement.SingleValueReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinaryFromReader);
                      msg.setAggressivityreport(value);
                      break;
                    case 9:
                      var value = new proto.Xiaoyang.Measurement.SingleValueReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinaryFromReader);
                      msg.setAnxietyreport(value);
                      break;
                    case 10:
                      var value = new proto.Xiaoyang.Measurement.SingleValueReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinaryFromReader);
                      msg.setDepressionreport(value);
                      break;
                    case 11:
                      var value = new proto.Xiaoyang.Measurement.SingleValueReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinaryFromReader);
                      msg.setVitalityreport(value);
                      break;
                    case 12:
                      var value = new proto.Xiaoyang.Measurement.SingleValueReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinaryFromReader);
                      msg.setPositivityreport(value);
                      break;
                    case 13:
                      var value = new proto.Xiaoyang.Measurement.SingleValueReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinaryFromReader);
                      msg.setSuppressionreport(value);
                      break;
                    case 14:
                      var value = new proto.Xiaoyang.Measurement.SingleValueReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinaryFromReader);
                      msg.setFatiguereport(value);
                      break;
                    case 15:
                      var value = new proto.Xiaoyang.Measurement.SingleValueReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinaryFromReader);
                      msg.setMsireport(value);
                      break;
                    case 16:
                      var value = new proto.Xiaoyang.Measurement.SingleValueReport();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinaryFromReader);
                      msg.setEmotionscorereport(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.Report.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.Report.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.Report.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getHrreport();
                if (f2 != null) {
                  writer.writeMessage(
                    1,
                    f2,
                    proto.Xiaoyang.Measurement.HrReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getAfreport();
                if (f2 != null) {
                  writer.writeMessage(
                    2,
                    f2,
                    proto.Xiaoyang.Measurement.SingleValueReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getBpreport();
                if (f2 != null) {
                  writer.writeMessage(
                    3,
                    f2,
                    proto.Xiaoyang.Measurement.BpReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getSpo2hreport();
                if (f2 != null) {
                  writer.writeMessage(
                    4,
                    f2,
                    proto.Xiaoyang.Measurement.SingleValueReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getRiskreport();
                if (f2 != null) {
                  writer.writeMessage(
                    5,
                    f2,
                    proto.Xiaoyang.Measurement.RiskReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getEssentialreport();
                if (f2 != null) {
                  writer.writeMessage(
                    6,
                    f2,
                    proto.Xiaoyang.Measurement.EssentialReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getPhysiologyscorereport();
                if (f2 != null) {
                  writer.writeMessage(
                    7,
                    f2,
                    proto.Xiaoyang.Measurement.SingleValueReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getAggressivityreport();
                if (f2 != null) {
                  writer.writeMessage(
                    8,
                    f2,
                    proto.Xiaoyang.Measurement.SingleValueReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getAnxietyreport();
                if (f2 != null) {
                  writer.writeMessage(
                    9,
                    f2,
                    proto.Xiaoyang.Measurement.SingleValueReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getDepressionreport();
                if (f2 != null) {
                  writer.writeMessage(
                    10,
                    f2,
                    proto.Xiaoyang.Measurement.SingleValueReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getVitalityreport();
                if (f2 != null) {
                  writer.writeMessage(
                    11,
                    f2,
                    proto.Xiaoyang.Measurement.SingleValueReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getPositivityreport();
                if (f2 != null) {
                  writer.writeMessage(
                    12,
                    f2,
                    proto.Xiaoyang.Measurement.SingleValueReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getSuppressionreport();
                if (f2 != null) {
                  writer.writeMessage(
                    13,
                    f2,
                    proto.Xiaoyang.Measurement.SingleValueReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getFatiguereport();
                if (f2 != null) {
                  writer.writeMessage(
                    14,
                    f2,
                    proto.Xiaoyang.Measurement.SingleValueReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getMsireport();
                if (f2 != null) {
                  writer.writeMessage(
                    15,
                    f2,
                    proto.Xiaoyang.Measurement.SingleValueReport.serializeBinaryToWriter
                  );
                }
                f2 = message.getEmotionscorereport();
                if (f2 != null) {
                  writer.writeMessage(
                    16,
                    f2,
                    proto.Xiaoyang.Measurement.SingleValueReport.serializeBinaryToWriter
                  );
                }
              };
              proto.Xiaoyang.Measurement.Report.prototype.getHrreport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.HrReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.HrReport, 1)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setHrreport = function(value) {
                return jspb2.Message.setWrapperField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearHrreport = function() {
                return this.setHrreport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasHrreport = function() {
                return jspb2.Message.getField(this, 1) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getAfreport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.SingleValueReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.SingleValueReport, 2)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setAfreport = function(value) {
                return jspb2.Message.setWrapperField(this, 2, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearAfreport = function() {
                return this.setAfreport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasAfreport = function() {
                return jspb2.Message.getField(this, 2) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getBpreport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.BpReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.BpReport, 3)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setBpreport = function(value) {
                return jspb2.Message.setWrapperField(this, 3, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearBpreport = function() {
                return this.setBpreport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasBpreport = function() {
                return jspb2.Message.getField(this, 3) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getSpo2hreport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.SingleValueReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.SingleValueReport, 4)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setSpo2hreport = function(value) {
                return jspb2.Message.setWrapperField(this, 4, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearSpo2hreport = function() {
                return this.setSpo2hreport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasSpo2hreport = function() {
                return jspb2.Message.getField(this, 4) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getRiskreport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.RiskReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.RiskReport, 5)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setRiskreport = function(value) {
                return jspb2.Message.setWrapperField(this, 5, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearRiskreport = function() {
                return this.setRiskreport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasRiskreport = function() {
                return jspb2.Message.getField(this, 5) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getEssentialreport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.EssentialReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.EssentialReport, 6)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setEssentialreport = function(value) {
                return jspb2.Message.setWrapperField(this, 6, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearEssentialreport = function() {
                return this.setEssentialreport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasEssentialreport = function() {
                return jspb2.Message.getField(this, 6) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getPhysiologyscorereport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.SingleValueReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.SingleValueReport, 7)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setPhysiologyscorereport = function(value) {
                return jspb2.Message.setWrapperField(this, 7, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearPhysiologyscorereport = function() {
                return this.setPhysiologyscorereport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasPhysiologyscorereport = function() {
                return jspb2.Message.getField(this, 7) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getAggressivityreport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.SingleValueReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.SingleValueReport, 8)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setAggressivityreport = function(value) {
                return jspb2.Message.setWrapperField(this, 8, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearAggressivityreport = function() {
                return this.setAggressivityreport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasAggressivityreport = function() {
                return jspb2.Message.getField(this, 8) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getAnxietyreport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.SingleValueReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.SingleValueReport, 9)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setAnxietyreport = function(value) {
                return jspb2.Message.setWrapperField(this, 9, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearAnxietyreport = function() {
                return this.setAnxietyreport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasAnxietyreport = function() {
                return jspb2.Message.getField(this, 9) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getDepressionreport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.SingleValueReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.SingleValueReport, 10)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setDepressionreport = function(value) {
                return jspb2.Message.setWrapperField(this, 10, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearDepressionreport = function() {
                return this.setDepressionreport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasDepressionreport = function() {
                return jspb2.Message.getField(this, 10) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getVitalityreport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.SingleValueReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.SingleValueReport, 11)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setVitalityreport = function(value) {
                return jspb2.Message.setWrapperField(this, 11, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearVitalityreport = function() {
                return this.setVitalityreport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasVitalityreport = function() {
                return jspb2.Message.getField(this, 11) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getPositivityreport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.SingleValueReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.SingleValueReport, 12)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setPositivityreport = function(value) {
                return jspb2.Message.setWrapperField(this, 12, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearPositivityreport = function() {
                return this.setPositivityreport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasPositivityreport = function() {
                return jspb2.Message.getField(this, 12) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getSuppressionreport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.SingleValueReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.SingleValueReport, 13)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setSuppressionreport = function(value) {
                return jspb2.Message.setWrapperField(this, 13, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearSuppressionreport = function() {
                return this.setSuppressionreport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasSuppressionreport = function() {
                return jspb2.Message.getField(this, 13) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getFatiguereport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.SingleValueReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.SingleValueReport, 14)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setFatiguereport = function(value) {
                return jspb2.Message.setWrapperField(this, 14, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearFatiguereport = function() {
                return this.setFatiguereport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasFatiguereport = function() {
                return jspb2.Message.getField(this, 14) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getMsireport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.SingleValueReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.SingleValueReport, 15)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setMsireport = function(value) {
                return jspb2.Message.setWrapperField(this, 15, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearMsireport = function() {
                return this.setMsireport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasMsireport = function() {
                return jspb2.Message.getField(this, 15) != null;
              };
              proto.Xiaoyang.Measurement.Report.prototype.getEmotionscorereport = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.SingleValueReport} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.SingleValueReport, 16)
                );
              };
              proto.Xiaoyang.Measurement.Report.prototype.setEmotionscorereport = function(value) {
                return jspb2.Message.setWrapperField(this, 16, value);
              };
              proto.Xiaoyang.Measurement.Report.prototype.clearEmotionscorereport = function() {
                return this.setEmotionscorereport(void 0);
              };
              proto.Xiaoyang.Measurement.Report.prototype.hasEmotionscorereport = function() {
                return jspb2.Message.getField(this, 16) != null;
              };
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.SingleValueReport.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.SingleValueReport.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.SingleValueReport.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    code: jspb2.Message.getFieldWithDefault(msg, 1, 0),
                    msg: jspb2.Message.getFieldWithDefault(msg, 2, ""),
                    data: jspb2.Message.getFloatingPointFieldWithDefault(msg, 3, 0),
                    explanation: (f2 = msg.getExplanation()) && proto.Xiaoyang.Measurement.ReportIndexExplanation.toObject(includeInstance, f2)
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.SingleValueReport();
                return proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.SingleValueReport.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = (
                        /** @type {number} */
                        reader.readInt32()
                      );
                      msg.setCode(value);
                      break;
                    case 2:
                      var value = (
                        /** @type {string} */
                        reader.readString()
                      );
                      msg.setMsg(value);
                      break;
                    case 3:
                      var value = (
                        /** @type {number} */
                        reader.readDouble()
                      );
                      msg.setData(value);
                      break;
                    case 4:
                      var value = new proto.Xiaoyang.Measurement.ReportIndexExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinaryFromReader);
                      msg.setExplanation(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.SingleValueReport.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.SingleValueReport.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.SingleValueReport.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getCode();
                if (f2 !== 0) {
                  writer.writeInt32(
                    1,
                    f2
                  );
                }
                f2 = message.getMsg();
                if (f2.length > 0) {
                  writer.writeString(
                    2,
                    f2
                  );
                }
                f2 = message.getData();
                if (f2 !== 0) {
                  writer.writeDouble(
                    3,
                    f2
                  );
                }
                f2 = message.getExplanation();
                if (f2 != null) {
                  writer.writeMessage(
                    4,
                    f2,
                    proto.Xiaoyang.Measurement.ReportIndexExplanation.serializeBinaryToWriter
                  );
                }
              };
              proto.Xiaoyang.Measurement.SingleValueReport.prototype.getCode = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFieldWithDefault(this, 1, 0)
                );
              };
              proto.Xiaoyang.Measurement.SingleValueReport.prototype.setCode = function(value) {
                return jspb2.Message.setProto3IntField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.SingleValueReport.prototype.getMsg = function() {
                return (
                  /** @type {string} */
                  jspb2.Message.getFieldWithDefault(this, 2, "")
                );
              };
              proto.Xiaoyang.Measurement.SingleValueReport.prototype.setMsg = function(value) {
                return jspb2.Message.setProto3StringField(this, 2, value);
              };
              proto.Xiaoyang.Measurement.SingleValueReport.prototype.getData = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFloatingPointFieldWithDefault(this, 3, 0)
                );
              };
              proto.Xiaoyang.Measurement.SingleValueReport.prototype.setData = function(value) {
                return jspb2.Message.setProto3FloatField(this, 3, value);
              };
              proto.Xiaoyang.Measurement.SingleValueReport.prototype.getExplanation = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.ReportIndexExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.ReportIndexExplanation, 4)
                );
              };
              proto.Xiaoyang.Measurement.SingleValueReport.prototype.setExplanation = function(value) {
                return jspb2.Message.setWrapperField(this, 4, value);
              };
              proto.Xiaoyang.Measurement.SingleValueReport.prototype.clearExplanation = function() {
                return this.setExplanation(void 0);
              };
              proto.Xiaoyang.Measurement.SingleValueReport.prototype.hasExplanation = function() {
                return jspb2.Message.getField(this, 4) != null;
              };
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.HrReport.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.HrReport.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.HrReport.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    code: jspb2.Message.getFieldWithDefault(msg, 1, 0),
                    msg: jspb2.Message.getFieldWithDefault(msg, 2, ""),
                    data: (f2 = msg.getData()) && proto.Xiaoyang.Measurement.HrData.toObject(includeInstance, f2),
                    explanation: (f2 = msg.getExplanation()) && proto.Xiaoyang.Measurement.HrExplanation.toObject(includeInstance, f2)
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.HrReport.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.HrReport();
                return proto.Xiaoyang.Measurement.HrReport.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.HrReport.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = (
                        /** @type {number} */
                        reader.readInt32()
                      );
                      msg.setCode(value);
                      break;
                    case 2:
                      var value = (
                        /** @type {string} */
                        reader.readString()
                      );
                      msg.setMsg(value);
                      break;
                    case 3:
                      var value = new proto.Xiaoyang.Measurement.HrData();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.HrData.deserializeBinaryFromReader);
                      msg.setData(value);
                      break;
                    case 4:
                      var value = new proto.Xiaoyang.Measurement.HrExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.HrExplanation.deserializeBinaryFromReader);
                      msg.setExplanation(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.HrReport.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.HrReport.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.HrReport.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getCode();
                if (f2 !== 0) {
                  writer.writeInt32(
                    1,
                    f2
                  );
                }
                f2 = message.getMsg();
                if (f2.length > 0) {
                  writer.writeString(
                    2,
                    f2
                  );
                }
                f2 = message.getData();
                if (f2 != null) {
                  writer.writeMessage(
                    3,
                    f2,
                    proto.Xiaoyang.Measurement.HrData.serializeBinaryToWriter
                  );
                }
                f2 = message.getExplanation();
                if (f2 != null) {
                  writer.writeMessage(
                    4,
                    f2,
                    proto.Xiaoyang.Measurement.HrExplanation.serializeBinaryToWriter
                  );
                }
              };
              proto.Xiaoyang.Measurement.HrReport.prototype.getCode = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFieldWithDefault(this, 1, 0)
                );
              };
              proto.Xiaoyang.Measurement.HrReport.prototype.setCode = function(value) {
                return jspb2.Message.setProto3IntField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.HrReport.prototype.getMsg = function() {
                return (
                  /** @type {string} */
                  jspb2.Message.getFieldWithDefault(this, 2, "")
                );
              };
              proto.Xiaoyang.Measurement.HrReport.prototype.setMsg = function(value) {
                return jspb2.Message.setProto3StringField(this, 2, value);
              };
              proto.Xiaoyang.Measurement.HrReport.prototype.getData = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.HrData} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.HrData, 3)
                );
              };
              proto.Xiaoyang.Measurement.HrReport.prototype.setData = function(value) {
                return jspb2.Message.setWrapperField(this, 3, value);
              };
              proto.Xiaoyang.Measurement.HrReport.prototype.clearData = function() {
                return this.setData(void 0);
              };
              proto.Xiaoyang.Measurement.HrReport.prototype.hasData = function() {
                return jspb2.Message.getField(this, 3) != null;
              };
              proto.Xiaoyang.Measurement.HrReport.prototype.getExplanation = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.HrExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.HrExplanation, 4)
                );
              };
              proto.Xiaoyang.Measurement.HrReport.prototype.setExplanation = function(value) {
                return jspb2.Message.setWrapperField(this, 4, value);
              };
              proto.Xiaoyang.Measurement.HrReport.prototype.clearExplanation = function() {
                return this.setExplanation(void 0);
              };
              proto.Xiaoyang.Measurement.HrReport.prototype.hasExplanation = function() {
                return jspb2.Message.getField(this, 4) != null;
              };
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.BpReport.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.BpReport.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.BpReport.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    code: jspb2.Message.getFieldWithDefault(msg, 1, 0),
                    msg: jspb2.Message.getFieldWithDefault(msg, 2, ""),
                    data: (f2 = msg.getData()) && proto.Xiaoyang.Measurement.BpData.toObject(includeInstance, f2),
                    explanation: (f2 = msg.getExplanation()) && proto.Xiaoyang.Measurement.BpExplanation.toObject(includeInstance, f2)
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.BpReport.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.BpReport();
                return proto.Xiaoyang.Measurement.BpReport.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.BpReport.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = (
                        /** @type {number} */
                        reader.readInt32()
                      );
                      msg.setCode(value);
                      break;
                    case 2:
                      var value = (
                        /** @type {string} */
                        reader.readString()
                      );
                      msg.setMsg(value);
                      break;
                    case 3:
                      var value = new proto.Xiaoyang.Measurement.BpData();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.BpData.deserializeBinaryFromReader);
                      msg.setData(value);
                      break;
                    case 4:
                      var value = new proto.Xiaoyang.Measurement.BpExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.BpExplanation.deserializeBinaryFromReader);
                      msg.setExplanation(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.BpReport.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.BpReport.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.BpReport.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getCode();
                if (f2 !== 0) {
                  writer.writeInt32(
                    1,
                    f2
                  );
                }
                f2 = message.getMsg();
                if (f2.length > 0) {
                  writer.writeString(
                    2,
                    f2
                  );
                }
                f2 = message.getData();
                if (f2 != null) {
                  writer.writeMessage(
                    3,
                    f2,
                    proto.Xiaoyang.Measurement.BpData.serializeBinaryToWriter
                  );
                }
                f2 = message.getExplanation();
                if (f2 != null) {
                  writer.writeMessage(
                    4,
                    f2,
                    proto.Xiaoyang.Measurement.BpExplanation.serializeBinaryToWriter
                  );
                }
              };
              proto.Xiaoyang.Measurement.BpReport.prototype.getCode = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFieldWithDefault(this, 1, 0)
                );
              };
              proto.Xiaoyang.Measurement.BpReport.prototype.setCode = function(value) {
                return jspb2.Message.setProto3IntField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.BpReport.prototype.getMsg = function() {
                return (
                  /** @type {string} */
                  jspb2.Message.getFieldWithDefault(this, 2, "")
                );
              };
              proto.Xiaoyang.Measurement.BpReport.prototype.setMsg = function(value) {
                return jspb2.Message.setProto3StringField(this, 2, value);
              };
              proto.Xiaoyang.Measurement.BpReport.prototype.getData = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.BpData} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.BpData, 3)
                );
              };
              proto.Xiaoyang.Measurement.BpReport.prototype.setData = function(value) {
                return jspb2.Message.setWrapperField(this, 3, value);
              };
              proto.Xiaoyang.Measurement.BpReport.prototype.clearData = function() {
                return this.setData(void 0);
              };
              proto.Xiaoyang.Measurement.BpReport.prototype.hasData = function() {
                return jspb2.Message.getField(this, 3) != null;
              };
              proto.Xiaoyang.Measurement.BpReport.prototype.getExplanation = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.BpExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.BpExplanation, 4)
                );
              };
              proto.Xiaoyang.Measurement.BpReport.prototype.setExplanation = function(value) {
                return jspb2.Message.setWrapperField(this, 4, value);
              };
              proto.Xiaoyang.Measurement.BpReport.prototype.clearExplanation = function() {
                return this.setExplanation(void 0);
              };
              proto.Xiaoyang.Measurement.BpReport.prototype.hasExplanation = function() {
                return jspb2.Message.getField(this, 4) != null;
              };
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.RiskReport.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.RiskReport.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.RiskReport.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    code: jspb2.Message.getFieldWithDefault(msg, 1, 0),
                    msg: jspb2.Message.getFieldWithDefault(msg, 2, ""),
                    data: (f2 = msg.getData()) && proto.Xiaoyang.Measurement.RiskData.toObject(includeInstance, f2),
                    explanation: (f2 = msg.getExplanation()) && proto.Xiaoyang.Measurement.RiskExplanation.toObject(includeInstance, f2)
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.RiskReport.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.RiskReport();
                return proto.Xiaoyang.Measurement.RiskReport.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.RiskReport.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = (
                        /** @type {number} */
                        reader.readInt32()
                      );
                      msg.setCode(value);
                      break;
                    case 2:
                      var value = (
                        /** @type {string} */
                        reader.readString()
                      );
                      msg.setMsg(value);
                      break;
                    case 3:
                      var value = new proto.Xiaoyang.Measurement.RiskData();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.RiskData.deserializeBinaryFromReader);
                      msg.setData(value);
                      break;
                    case 4:
                      var value = new proto.Xiaoyang.Measurement.RiskExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.RiskExplanation.deserializeBinaryFromReader);
                      msg.setExplanation(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.RiskReport.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.RiskReport.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.RiskReport.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getCode();
                if (f2 !== 0) {
                  writer.writeInt32(
                    1,
                    f2
                  );
                }
                f2 = message.getMsg();
                if (f2.length > 0) {
                  writer.writeString(
                    2,
                    f2
                  );
                }
                f2 = message.getData();
                if (f2 != null) {
                  writer.writeMessage(
                    3,
                    f2,
                    proto.Xiaoyang.Measurement.RiskData.serializeBinaryToWriter
                  );
                }
                f2 = message.getExplanation();
                if (f2 != null) {
                  writer.writeMessage(
                    4,
                    f2,
                    proto.Xiaoyang.Measurement.RiskExplanation.serializeBinaryToWriter
                  );
                }
              };
              proto.Xiaoyang.Measurement.RiskReport.prototype.getCode = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFieldWithDefault(this, 1, 0)
                );
              };
              proto.Xiaoyang.Measurement.RiskReport.prototype.setCode = function(value) {
                return jspb2.Message.setProto3IntField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.RiskReport.prototype.getMsg = function() {
                return (
                  /** @type {string} */
                  jspb2.Message.getFieldWithDefault(this, 2, "")
                );
              };
              proto.Xiaoyang.Measurement.RiskReport.prototype.setMsg = function(value) {
                return jspb2.Message.setProto3StringField(this, 2, value);
              };
              proto.Xiaoyang.Measurement.RiskReport.prototype.getData = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.RiskData} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.RiskData, 3)
                );
              };
              proto.Xiaoyang.Measurement.RiskReport.prototype.setData = function(value) {
                return jspb2.Message.setWrapperField(this, 3, value);
              };
              proto.Xiaoyang.Measurement.RiskReport.prototype.clearData = function() {
                return this.setData(void 0);
              };
              proto.Xiaoyang.Measurement.RiskReport.prototype.hasData = function() {
                return jspb2.Message.getField(this, 3) != null;
              };
              proto.Xiaoyang.Measurement.RiskReport.prototype.getExplanation = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.RiskExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.RiskExplanation, 4)
                );
              };
              proto.Xiaoyang.Measurement.RiskReport.prototype.setExplanation = function(value) {
                return jspb2.Message.setWrapperField(this, 4, value);
              };
              proto.Xiaoyang.Measurement.RiskReport.prototype.clearExplanation = function() {
                return this.setExplanation(void 0);
              };
              proto.Xiaoyang.Measurement.RiskReport.prototype.hasExplanation = function() {
                return jspb2.Message.getField(this, 4) != null;
              };
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.EssentialReport.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.EssentialReport.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.EssentialReport.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    code: jspb2.Message.getFieldWithDefault(msg, 1, 0),
                    msg: jspb2.Message.getFieldWithDefault(msg, 2, ""),
                    data: (f2 = msg.getData()) && proto.Xiaoyang.Measurement.EssentialData.toObject(includeInstance, f2),
                    explanation: (f2 = msg.getExplanation()) && proto.Xiaoyang.Measurement.EssentialExplanation.toObject(includeInstance, f2)
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.EssentialReport.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.EssentialReport();
                return proto.Xiaoyang.Measurement.EssentialReport.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.EssentialReport.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = (
                        /** @type {number} */
                        reader.readInt32()
                      );
                      msg.setCode(value);
                      break;
                    case 2:
                      var value = (
                        /** @type {string} */
                        reader.readString()
                      );
                      msg.setMsg(value);
                      break;
                    case 3:
                      var value = new proto.Xiaoyang.Measurement.EssentialData();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.EssentialData.deserializeBinaryFromReader);
                      msg.setData(value);
                      break;
                    case 4:
                      var value = new proto.Xiaoyang.Measurement.EssentialExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.EssentialExplanation.deserializeBinaryFromReader);
                      msg.setExplanation(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.EssentialReport.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.EssentialReport.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.EssentialReport.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getCode();
                if (f2 !== 0) {
                  writer.writeInt32(
                    1,
                    f2
                  );
                }
                f2 = message.getMsg();
                if (f2.length > 0) {
                  writer.writeString(
                    2,
                    f2
                  );
                }
                f2 = message.getData();
                if (f2 != null) {
                  writer.writeMessage(
                    3,
                    f2,
                    proto.Xiaoyang.Measurement.EssentialData.serializeBinaryToWriter
                  );
                }
                f2 = message.getExplanation();
                if (f2 != null) {
                  writer.writeMessage(
                    4,
                    f2,
                    proto.Xiaoyang.Measurement.EssentialExplanation.serializeBinaryToWriter
                  );
                }
              };
              proto.Xiaoyang.Measurement.EssentialReport.prototype.getCode = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFieldWithDefault(this, 1, 0)
                );
              };
              proto.Xiaoyang.Measurement.EssentialReport.prototype.setCode = function(value) {
                return jspb2.Message.setProto3IntField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.EssentialReport.prototype.getMsg = function() {
                return (
                  /** @type {string} */
                  jspb2.Message.getFieldWithDefault(this, 2, "")
                );
              };
              proto.Xiaoyang.Measurement.EssentialReport.prototype.setMsg = function(value) {
                return jspb2.Message.setProto3StringField(this, 2, value);
              };
              proto.Xiaoyang.Measurement.EssentialReport.prototype.getData = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.EssentialData} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.EssentialData, 3)
                );
              };
              proto.Xiaoyang.Measurement.EssentialReport.prototype.setData = function(value) {
                return jspb2.Message.setWrapperField(this, 3, value);
              };
              proto.Xiaoyang.Measurement.EssentialReport.prototype.clearData = function() {
                return this.setData(void 0);
              };
              proto.Xiaoyang.Measurement.EssentialReport.prototype.hasData = function() {
                return jspb2.Message.getField(this, 3) != null;
              };
              proto.Xiaoyang.Measurement.EssentialReport.prototype.getExplanation = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.EssentialExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.EssentialExplanation, 4)
                );
              };
              proto.Xiaoyang.Measurement.EssentialReport.prototype.setExplanation = function(value) {
                return jspb2.Message.setWrapperField(this, 4, value);
              };
              proto.Xiaoyang.Measurement.EssentialReport.prototype.clearExplanation = function() {
                return this.setExplanation(void 0);
              };
              proto.Xiaoyang.Measurement.EssentialReport.prototype.hasExplanation = function() {
                return jspb2.Message.getField(this, 4) != null;
              };
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.HrData.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.HrData.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.HrData.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    hrbpm: jspb2.Message.getFloatingPointFieldWithDefault(msg, 1, 0),
                    hrv: jspb2.Message.getFloatingPointFieldWithDefault(msg, 2, 0),
                    hrconf: jspb2.Message.getFloatingPointFieldWithDefault(msg, 3, 0)
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.HrData.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.HrData();
                return proto.Xiaoyang.Measurement.HrData.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.HrData.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = (
                        /** @type {number} */
                        reader.readDouble()
                      );
                      msg.setHrbpm(value);
                      break;
                    case 2:
                      var value = (
                        /** @type {number} */
                        reader.readDouble()
                      );
                      msg.setHrv(value);
                      break;
                    case 3:
                      var value = (
                        /** @type {number} */
                        reader.readDouble()
                      );
                      msg.setHrconf(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.HrData.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.HrData.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.HrData.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getHrbpm();
                if (f2 !== 0) {
                  writer.writeDouble(
                    1,
                    f2
                  );
                }
                f2 = message.getHrv();
                if (f2 !== 0) {
                  writer.writeDouble(
                    2,
                    f2
                  );
                }
                f2 = message.getHrconf();
                if (f2 !== 0) {
                  writer.writeDouble(
                    3,
                    f2
                  );
                }
              };
              proto.Xiaoyang.Measurement.HrData.prototype.getHrbpm = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFloatingPointFieldWithDefault(this, 1, 0)
                );
              };
              proto.Xiaoyang.Measurement.HrData.prototype.setHrbpm = function(value) {
                return jspb2.Message.setProto3FloatField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.HrData.prototype.getHrv = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFloatingPointFieldWithDefault(this, 2, 0)
                );
              };
              proto.Xiaoyang.Measurement.HrData.prototype.setHrv = function(value) {
                return jspb2.Message.setProto3FloatField(this, 2, value);
              };
              proto.Xiaoyang.Measurement.HrData.prototype.getHrconf = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFloatingPointFieldWithDefault(this, 3, 0)
                );
              };
              proto.Xiaoyang.Measurement.HrData.prototype.setHrconf = function(value) {
                return jspb2.Message.setProto3FloatField(this, 3, value);
              };
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.HrExplanation.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.HrExplanation.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.HrExplanation.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    hrbpm: (f2 = msg.getHrbpm()) && proto.Xiaoyang.Measurement.ReportIndexExplanation.toObject(includeInstance, f2),
                    hrv: (f2 = msg.getHrv()) && proto.Xiaoyang.Measurement.ReportIndexExplanation.toObject(includeInstance, f2)
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.HrExplanation.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.HrExplanation();
                return proto.Xiaoyang.Measurement.HrExplanation.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.HrExplanation.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = new proto.Xiaoyang.Measurement.ReportIndexExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinaryFromReader);
                      msg.setHrbpm(value);
                      break;
                    case 2:
                      var value = new proto.Xiaoyang.Measurement.ReportIndexExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinaryFromReader);
                      msg.setHrv(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.HrExplanation.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.HrExplanation.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.HrExplanation.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getHrbpm();
                if (f2 != null) {
                  writer.writeMessage(
                    1,
                    f2,
                    proto.Xiaoyang.Measurement.ReportIndexExplanation.serializeBinaryToWriter
                  );
                }
                f2 = message.getHrv();
                if (f2 != null) {
                  writer.writeMessage(
                    2,
                    f2,
                    proto.Xiaoyang.Measurement.ReportIndexExplanation.serializeBinaryToWriter
                  );
                }
              };
              proto.Xiaoyang.Measurement.HrExplanation.prototype.getHrbpm = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.ReportIndexExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.ReportIndexExplanation, 1)
                );
              };
              proto.Xiaoyang.Measurement.HrExplanation.prototype.setHrbpm = function(value) {
                return jspb2.Message.setWrapperField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.HrExplanation.prototype.clearHrbpm = function() {
                return this.setHrbpm(void 0);
              };
              proto.Xiaoyang.Measurement.HrExplanation.prototype.hasHrbpm = function() {
                return jspb2.Message.getField(this, 1) != null;
              };
              proto.Xiaoyang.Measurement.HrExplanation.prototype.getHrv = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.ReportIndexExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.ReportIndexExplanation, 2)
                );
              };
              proto.Xiaoyang.Measurement.HrExplanation.prototype.setHrv = function(value) {
                return jspb2.Message.setWrapperField(this, 2, value);
              };
              proto.Xiaoyang.Measurement.HrExplanation.prototype.clearHrv = function() {
                return this.setHrv(void 0);
              };
              proto.Xiaoyang.Measurement.HrExplanation.prototype.hasHrv = function() {
                return jspb2.Message.getField(this, 2) != null;
              };
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.BpData.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.BpData.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.BpData.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    bpdiastolic: jspb2.Message.getFloatingPointFieldWithDefault(msg, 1, 0),
                    bpsystolic: jspb2.Message.getFloatingPointFieldWithDefault(msg, 2, 0)
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.BpData.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.BpData();
                return proto.Xiaoyang.Measurement.BpData.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.BpData.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = (
                        /** @type {number} */
                        reader.readDouble()
                      );
                      msg.setBpdiastolic(value);
                      break;
                    case 2:
                      var value = (
                        /** @type {number} */
                        reader.readDouble()
                      );
                      msg.setBpsystolic(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.BpData.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.BpData.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.BpData.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getBpdiastolic();
                if (f2 !== 0) {
                  writer.writeDouble(
                    1,
                    f2
                  );
                }
                f2 = message.getBpsystolic();
                if (f2 !== 0) {
                  writer.writeDouble(
                    2,
                    f2
                  );
                }
              };
              proto.Xiaoyang.Measurement.BpData.prototype.getBpdiastolic = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFloatingPointFieldWithDefault(this, 1, 0)
                );
              };
              proto.Xiaoyang.Measurement.BpData.prototype.setBpdiastolic = function(value) {
                return jspb2.Message.setProto3FloatField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.BpData.prototype.getBpsystolic = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFloatingPointFieldWithDefault(this, 2, 0)
                );
              };
              proto.Xiaoyang.Measurement.BpData.prototype.setBpsystolic = function(value) {
                return jspb2.Message.setProto3FloatField(this, 2, value);
              };
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.BpExplanation.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.BpExplanation.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.BpExplanation.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    bpdiastolic: (f2 = msg.getBpdiastolic()) && proto.Xiaoyang.Measurement.ReportIndexExplanation.toObject(includeInstance, f2),
                    bpsystolic: (f2 = msg.getBpsystolic()) && proto.Xiaoyang.Measurement.ReportIndexExplanation.toObject(includeInstance, f2)
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.BpExplanation.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.BpExplanation();
                return proto.Xiaoyang.Measurement.BpExplanation.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.BpExplanation.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = new proto.Xiaoyang.Measurement.ReportIndexExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinaryFromReader);
                      msg.setBpdiastolic(value);
                      break;
                    case 2:
                      var value = new proto.Xiaoyang.Measurement.ReportIndexExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinaryFromReader);
                      msg.setBpsystolic(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.BpExplanation.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.BpExplanation.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.BpExplanation.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getBpdiastolic();
                if (f2 != null) {
                  writer.writeMessage(
                    1,
                    f2,
                    proto.Xiaoyang.Measurement.ReportIndexExplanation.serializeBinaryToWriter
                  );
                }
                f2 = message.getBpsystolic();
                if (f2 != null) {
                  writer.writeMessage(
                    2,
                    f2,
                    proto.Xiaoyang.Measurement.ReportIndexExplanation.serializeBinaryToWriter
                  );
                }
              };
              proto.Xiaoyang.Measurement.BpExplanation.prototype.getBpdiastolic = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.ReportIndexExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.ReportIndexExplanation, 1)
                );
              };
              proto.Xiaoyang.Measurement.BpExplanation.prototype.setBpdiastolic = function(value) {
                return jspb2.Message.setWrapperField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.BpExplanation.prototype.clearBpdiastolic = function() {
                return this.setBpdiastolic(void 0);
              };
              proto.Xiaoyang.Measurement.BpExplanation.prototype.hasBpdiastolic = function() {
                return jspb2.Message.getField(this, 1) != null;
              };
              proto.Xiaoyang.Measurement.BpExplanation.prototype.getBpsystolic = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.ReportIndexExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.ReportIndexExplanation, 2)
                );
              };
              proto.Xiaoyang.Measurement.BpExplanation.prototype.setBpsystolic = function(value) {
                return jspb2.Message.setWrapperField(this, 2, value);
              };
              proto.Xiaoyang.Measurement.BpExplanation.prototype.clearBpsystolic = function() {
                return this.setBpsystolic(void 0);
              };
              proto.Xiaoyang.Measurement.BpExplanation.prototype.hasBpsystolic = function() {
                return jspb2.Message.getField(this, 2) != null;
              };
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.RiskData.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.RiskData.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.RiskData.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    bpheartattack: jspb2.Message.getFloatingPointFieldWithDefault(msg, 1, 0),
                    bpstroke: jspb2.Message.getFloatingPointFieldWithDefault(msg, 2, 0),
                    bpcvd: jspb2.Message.getFloatingPointFieldWithDefault(msg, 3, 0),
                    bppp: jspb2.Message.getFloatingPointFieldWithDefault(msg, 4, 0),
                    bptau: jspb2.Message.getFloatingPointFieldWithDefault(msg, 5, 0)
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.RiskData.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.RiskData();
                return proto.Xiaoyang.Measurement.RiskData.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.RiskData.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = (
                        /** @type {number} */
                        reader.readDouble()
                      );
                      msg.setBpheartattack(value);
                      break;
                    case 2:
                      var value = (
                        /** @type {number} */
                        reader.readDouble()
                      );
                      msg.setBpstroke(value);
                      break;
                    case 3:
                      var value = (
                        /** @type {number} */
                        reader.readDouble()
                      );
                      msg.setBpcvd(value);
                      break;
                    case 4:
                      var value = (
                        /** @type {number} */
                        reader.readDouble()
                      );
                      msg.setBppp(value);
                      break;
                    case 5:
                      var value = (
                        /** @type {number} */
                        reader.readDouble()
                      );
                      msg.setBptau(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.RiskData.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.RiskData.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.RiskData.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getBpheartattack();
                if (f2 !== 0) {
                  writer.writeDouble(
                    1,
                    f2
                  );
                }
                f2 = message.getBpstroke();
                if (f2 !== 0) {
                  writer.writeDouble(
                    2,
                    f2
                  );
                }
                f2 = message.getBpcvd();
                if (f2 !== 0) {
                  writer.writeDouble(
                    3,
                    f2
                  );
                }
                f2 = message.getBppp();
                if (f2 !== 0) {
                  writer.writeDouble(
                    4,
                    f2
                  );
                }
                f2 = message.getBptau();
                if (f2 !== 0) {
                  writer.writeDouble(
                    5,
                    f2
                  );
                }
              };
              proto.Xiaoyang.Measurement.RiskData.prototype.getBpheartattack = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFloatingPointFieldWithDefault(this, 1, 0)
                );
              };
              proto.Xiaoyang.Measurement.RiskData.prototype.setBpheartattack = function(value) {
                return jspb2.Message.setProto3FloatField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.RiskData.prototype.getBpstroke = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFloatingPointFieldWithDefault(this, 2, 0)
                );
              };
              proto.Xiaoyang.Measurement.RiskData.prototype.setBpstroke = function(value) {
                return jspb2.Message.setProto3FloatField(this, 2, value);
              };
              proto.Xiaoyang.Measurement.RiskData.prototype.getBpcvd = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFloatingPointFieldWithDefault(this, 3, 0)
                );
              };
              proto.Xiaoyang.Measurement.RiskData.prototype.setBpcvd = function(value) {
                return jspb2.Message.setProto3FloatField(this, 3, value);
              };
              proto.Xiaoyang.Measurement.RiskData.prototype.getBppp = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFloatingPointFieldWithDefault(this, 4, 0)
                );
              };
              proto.Xiaoyang.Measurement.RiskData.prototype.setBppp = function(value) {
                return jspb2.Message.setProto3FloatField(this, 4, value);
              };
              proto.Xiaoyang.Measurement.RiskData.prototype.getBptau = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFloatingPointFieldWithDefault(this, 5, 0)
                );
              };
              proto.Xiaoyang.Measurement.RiskData.prototype.setBptau = function(value) {
                return jspb2.Message.setProto3FloatField(this, 5, value);
              };
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.RiskExplanation.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.RiskExplanation.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.RiskExplanation.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    bpheartattack: (f2 = msg.getBpheartattack()) && proto.Xiaoyang.Measurement.ReportIndexExplanation.toObject(includeInstance, f2),
                    bpstroke: (f2 = msg.getBpstroke()) && proto.Xiaoyang.Measurement.ReportIndexExplanation.toObject(includeInstance, f2),
                    bpcvd: (f2 = msg.getBpcvd()) && proto.Xiaoyang.Measurement.ReportIndexExplanation.toObject(includeInstance, f2),
                    bppp: (f2 = msg.getBppp()) && proto.Xiaoyang.Measurement.ReportIndexExplanation.toObject(includeInstance, f2),
                    bptau: (f2 = msg.getBptau()) && proto.Xiaoyang.Measurement.ReportIndexExplanation.toObject(includeInstance, f2)
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.RiskExplanation.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.RiskExplanation();
                return proto.Xiaoyang.Measurement.RiskExplanation.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.RiskExplanation.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = new proto.Xiaoyang.Measurement.ReportIndexExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinaryFromReader);
                      msg.setBpheartattack(value);
                      break;
                    case 2:
                      var value = new proto.Xiaoyang.Measurement.ReportIndexExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinaryFromReader);
                      msg.setBpstroke(value);
                      break;
                    case 3:
                      var value = new proto.Xiaoyang.Measurement.ReportIndexExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinaryFromReader);
                      msg.setBpcvd(value);
                      break;
                    case 4:
                      var value = new proto.Xiaoyang.Measurement.ReportIndexExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinaryFromReader);
                      msg.setBppp(value);
                      break;
                    case 5:
                      var value = new proto.Xiaoyang.Measurement.ReportIndexExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinaryFromReader);
                      msg.setBptau(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.RiskExplanation.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.RiskExplanation.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getBpheartattack();
                if (f2 != null) {
                  writer.writeMessage(
                    1,
                    f2,
                    proto.Xiaoyang.Measurement.ReportIndexExplanation.serializeBinaryToWriter
                  );
                }
                f2 = message.getBpstroke();
                if (f2 != null) {
                  writer.writeMessage(
                    2,
                    f2,
                    proto.Xiaoyang.Measurement.ReportIndexExplanation.serializeBinaryToWriter
                  );
                }
                f2 = message.getBpcvd();
                if (f2 != null) {
                  writer.writeMessage(
                    3,
                    f2,
                    proto.Xiaoyang.Measurement.ReportIndexExplanation.serializeBinaryToWriter
                  );
                }
                f2 = message.getBppp();
                if (f2 != null) {
                  writer.writeMessage(
                    4,
                    f2,
                    proto.Xiaoyang.Measurement.ReportIndexExplanation.serializeBinaryToWriter
                  );
                }
                f2 = message.getBptau();
                if (f2 != null) {
                  writer.writeMessage(
                    5,
                    f2,
                    proto.Xiaoyang.Measurement.ReportIndexExplanation.serializeBinaryToWriter
                  );
                }
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.getBpheartattack = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.ReportIndexExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.ReportIndexExplanation, 1)
                );
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.setBpheartattack = function(value) {
                return jspb2.Message.setWrapperField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.clearBpheartattack = function() {
                return this.setBpheartattack(void 0);
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.hasBpheartattack = function() {
                return jspb2.Message.getField(this, 1) != null;
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.getBpstroke = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.ReportIndexExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.ReportIndexExplanation, 2)
                );
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.setBpstroke = function(value) {
                return jspb2.Message.setWrapperField(this, 2, value);
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.clearBpstroke = function() {
                return this.setBpstroke(void 0);
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.hasBpstroke = function() {
                return jspb2.Message.getField(this, 2) != null;
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.getBpcvd = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.ReportIndexExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.ReportIndexExplanation, 3)
                );
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.setBpcvd = function(value) {
                return jspb2.Message.setWrapperField(this, 3, value);
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.clearBpcvd = function() {
                return this.setBpcvd(void 0);
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.hasBpcvd = function() {
                return jspb2.Message.getField(this, 3) != null;
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.getBppp = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.ReportIndexExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.ReportIndexExplanation, 4)
                );
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.setBppp = function(value) {
                return jspb2.Message.setWrapperField(this, 4, value);
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.clearBppp = function() {
                return this.setBppp(void 0);
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.hasBppp = function() {
                return jspb2.Message.getField(this, 4) != null;
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.getBptau = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.ReportIndexExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.ReportIndexExplanation, 5)
                );
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.setBptau = function(value) {
                return jspb2.Message.setWrapperField(this, 5, value);
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.clearBptau = function() {
                return this.setBptau(void 0);
              };
              proto.Xiaoyang.Measurement.RiskExplanation.prototype.hasBptau = function() {
                return jspb2.Message.getField(this, 5) != null;
              };
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.EssentialData.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.EssentialData.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.EssentialData.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    age: jspb2.Message.getFieldWithDefault(msg, 1, 0),
                    gender: jspb2.Message.getFieldWithDefault(msg, 2, 0),
                    bmi: jspb2.Message.getFloatingPointFieldWithDefault(msg, 3, 0)
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.EssentialData.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.EssentialData();
                return proto.Xiaoyang.Measurement.EssentialData.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.EssentialData.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = (
                        /** @type {number} */
                        reader.readInt32()
                      );
                      msg.setAge(value);
                      break;
                    case 2:
                      var value = (
                        /** @type {!proto.Xiaoyang.Measurement.Gender} */
                        reader.readEnum()
                      );
                      msg.setGender(value);
                      break;
                    case 3:
                      var value = (
                        /** @type {number} */
                        reader.readDouble()
                      );
                      msg.setBmi(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.EssentialData.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.EssentialData.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.EssentialData.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getAge();
                if (f2 !== 0) {
                  writer.writeInt32(
                    1,
                    f2
                  );
                }
                f2 = message.getGender();
                if (f2 !== 0) {
                  writer.writeEnum(
                    2,
                    f2
                  );
                }
                f2 = message.getBmi();
                if (f2 !== 0) {
                  writer.writeDouble(
                    3,
                    f2
                  );
                }
              };
              proto.Xiaoyang.Measurement.EssentialData.prototype.getAge = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFieldWithDefault(this, 1, 0)
                );
              };
              proto.Xiaoyang.Measurement.EssentialData.prototype.setAge = function(value) {
                return jspb2.Message.setProto3IntField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.EssentialData.prototype.getGender = function() {
                return (
                  /** @type {!proto.Xiaoyang.Measurement.Gender} */
                  jspb2.Message.getFieldWithDefault(this, 2, 0)
                );
              };
              proto.Xiaoyang.Measurement.EssentialData.prototype.setGender = function(value) {
                return jspb2.Message.setProto3EnumField(this, 2, value);
              };
              proto.Xiaoyang.Measurement.EssentialData.prototype.getBmi = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFloatingPointFieldWithDefault(this, 3, 0)
                );
              };
              proto.Xiaoyang.Measurement.EssentialData.prototype.setBmi = function(value) {
                return jspb2.Message.setProto3FloatField(this, 3, value);
              };
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.EssentialExplanation.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.EssentialExplanation.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.EssentialExplanation.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    bmi: (f2 = msg.getBmi()) && proto.Xiaoyang.Measurement.ReportIndexExplanation.toObject(includeInstance, f2),
                    age: (f2 = msg.getAge()) && proto.Xiaoyang.Measurement.ReportIndexExplanation.toObject(includeInstance, f2)
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.EssentialExplanation.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.EssentialExplanation();
                return proto.Xiaoyang.Measurement.EssentialExplanation.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.EssentialExplanation.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = new proto.Xiaoyang.Measurement.ReportIndexExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinaryFromReader);
                      msg.setBmi(value);
                      break;
                    case 2:
                      var value = new proto.Xiaoyang.Measurement.ReportIndexExplanation();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinaryFromReader);
                      msg.setAge(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.EssentialExplanation.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.EssentialExplanation.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.EssentialExplanation.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getBmi();
                if (f2 != null) {
                  writer.writeMessage(
                    1,
                    f2,
                    proto.Xiaoyang.Measurement.ReportIndexExplanation.serializeBinaryToWriter
                  );
                }
                f2 = message.getAge();
                if (f2 != null) {
                  writer.writeMessage(
                    2,
                    f2,
                    proto.Xiaoyang.Measurement.ReportIndexExplanation.serializeBinaryToWriter
                  );
                }
              };
              proto.Xiaoyang.Measurement.EssentialExplanation.prototype.getBmi = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.ReportIndexExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.ReportIndexExplanation, 1)
                );
              };
              proto.Xiaoyang.Measurement.EssentialExplanation.prototype.setBmi = function(value) {
                return jspb2.Message.setWrapperField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.EssentialExplanation.prototype.clearBmi = function() {
                return this.setBmi(void 0);
              };
              proto.Xiaoyang.Measurement.EssentialExplanation.prototype.hasBmi = function() {
                return jspb2.Message.getField(this, 1) != null;
              };
              proto.Xiaoyang.Measurement.EssentialExplanation.prototype.getAge = function() {
                return (
                  /** @type{?proto.Xiaoyang.Measurement.ReportIndexExplanation} */
                  jspb2.Message.getWrapperField(this, proto.Xiaoyang.Measurement.ReportIndexExplanation, 2)
                );
              };
              proto.Xiaoyang.Measurement.EssentialExplanation.prototype.setAge = function(value) {
                return jspb2.Message.setWrapperField(this, 2, value);
              };
              proto.Xiaoyang.Measurement.EssentialExplanation.prototype.clearAge = function() {
                return this.setAge(void 0);
              };
              proto.Xiaoyang.Measurement.EssentialExplanation.prototype.hasAge = function() {
                return jspb2.Message.getField(this, 2) != null;
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.repeatedFields_ = [1, 4, 5];
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.ReportIndexExplanation.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.ReportIndexExplanation.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    introductionList: (f2 = jspb2.Message.getRepeatedField(msg, 1)) == null ? void 0 : f2,
                    risk: jspb2.Message.getFieldWithDefault(msg, 2, 0),
                    ranking: jspb2.Message.getFloatingPointFieldWithDefault(msg, 3, 0),
                    detailsList: jspb2.Message.toObjectList(
                      msg.getDetailsList(),
                      proto.Xiaoyang.Measurement.ReportIndexText.toObject,
                      includeInstance
                    ),
                    advicesList: jspb2.Message.toObjectList(
                      msg.getAdvicesList(),
                      proto.Xiaoyang.Measurement.ReportIndexText.toObject,
                      includeInstance
                    )
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.ReportIndexExplanation();
                return proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = (
                        /** @type {string} */
                        reader.readString()
                      );
                      msg.addIntroduction(value);
                      break;
                    case 2:
                      var value = (
                        /** @type {number} */
                        reader.readInt32()
                      );
                      msg.setRisk(value);
                      break;
                    case 3:
                      var value = (
                        /** @type {number} */
                        reader.readDouble()
                      );
                      msg.setRanking(value);
                      break;
                    case 4:
                      var value = new proto.Xiaoyang.Measurement.ReportIndexText();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.ReportIndexText.deserializeBinaryFromReader);
                      msg.addDetails(value);
                      break;
                    case 5:
                      var value = new proto.Xiaoyang.Measurement.ReportIndexText();
                      reader.readMessage(value, proto.Xiaoyang.Measurement.ReportIndexText.deserializeBinaryFromReader);
                      msg.addAdvices(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.ReportIndexExplanation.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getIntroductionList();
                if (f2.length > 0) {
                  writer.writeRepeatedString(
                    1,
                    f2
                  );
                }
                f2 = message.getRisk();
                if (f2 !== 0) {
                  writer.writeInt32(
                    2,
                    f2
                  );
                }
                f2 = message.getRanking();
                if (f2 !== 0) {
                  writer.writeDouble(
                    3,
                    f2
                  );
                }
                f2 = message.getDetailsList();
                if (f2.length > 0) {
                  writer.writeRepeatedMessage(
                    4,
                    f2,
                    proto.Xiaoyang.Measurement.ReportIndexText.serializeBinaryToWriter
                  );
                }
                f2 = message.getAdvicesList();
                if (f2.length > 0) {
                  writer.writeRepeatedMessage(
                    5,
                    f2,
                    proto.Xiaoyang.Measurement.ReportIndexText.serializeBinaryToWriter
                  );
                }
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.getIntroductionList = function() {
                return (
                  /** @type {!Array<string>} */
                  jspb2.Message.getRepeatedField(this, 1)
                );
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.setIntroductionList = function(value) {
                return jspb2.Message.setField(this, 1, value || []);
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.addIntroduction = function(value, opt_index) {
                return jspb2.Message.addToRepeatedField(this, 1, value, opt_index);
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.clearIntroductionList = function() {
                return this.setIntroductionList([]);
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.getRisk = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFieldWithDefault(this, 2, 0)
                );
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.setRisk = function(value) {
                return jspb2.Message.setProto3IntField(this, 2, value);
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.getRanking = function() {
                return (
                  /** @type {number} */
                  jspb2.Message.getFloatingPointFieldWithDefault(this, 3, 0)
                );
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.setRanking = function(value) {
                return jspb2.Message.setProto3FloatField(this, 3, value);
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.getDetailsList = function() {
                return (
                  /** @type{!Array<!proto.Xiaoyang.Measurement.ReportIndexText>} */
                  jspb2.Message.getRepeatedWrapperField(this, proto.Xiaoyang.Measurement.ReportIndexText, 4)
                );
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.setDetailsList = function(value) {
                return jspb2.Message.setRepeatedWrapperField(this, 4, value);
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.addDetails = function(opt_value, opt_index) {
                return jspb2.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.Xiaoyang.Measurement.ReportIndexText, opt_index);
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.clearDetailsList = function() {
                return this.setDetailsList([]);
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.getAdvicesList = function() {
                return (
                  /** @type{!Array<!proto.Xiaoyang.Measurement.ReportIndexText>} */
                  jspb2.Message.getRepeatedWrapperField(this, proto.Xiaoyang.Measurement.ReportIndexText, 5)
                );
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.setAdvicesList = function(value) {
                return jspb2.Message.setRepeatedWrapperField(this, 5, value);
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.addAdvices = function(opt_value, opt_index) {
                return jspb2.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.Xiaoyang.Measurement.ReportIndexText, opt_index);
              };
              proto.Xiaoyang.Measurement.ReportIndexExplanation.prototype.clearAdvicesList = function() {
                return this.setAdvicesList([]);
              };
              proto.Xiaoyang.Measurement.ReportIndexText.repeatedFields_ = [2];
              if (jspb2.Message.GENERATE_TO_OBJECT) {
                proto.Xiaoyang.Measurement.ReportIndexText.prototype.toObject = function(opt_includeInstance) {
                  return proto.Xiaoyang.Measurement.ReportIndexText.toObject(opt_includeInstance, this);
                };
                proto.Xiaoyang.Measurement.ReportIndexText.toObject = function(includeInstance, msg) {
                  var f2, obj = {
                    name: jspb2.Message.getFieldWithDefault(msg, 1, ""),
                    valuesList: (f2 = jspb2.Message.getRepeatedField(msg, 2)) == null ? void 0 : f2
                  };
                  if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                  }
                  return obj;
                };
              }
              proto.Xiaoyang.Measurement.ReportIndexText.deserializeBinary = function(bytes) {
                var reader = new jspb2.BinaryReader(bytes);
                var msg = new proto.Xiaoyang.Measurement.ReportIndexText();
                return proto.Xiaoyang.Measurement.ReportIndexText.deserializeBinaryFromReader(msg, reader);
              };
              proto.Xiaoyang.Measurement.ReportIndexText.deserializeBinaryFromReader = function(msg, reader) {
                while (reader.nextField()) {
                  if (reader.isEndGroup()) {
                    break;
                  }
                  var field = reader.getFieldNumber();
                  switch (field) {
                    case 1:
                      var value = (
                        /** @type {string} */
                        reader.readString()
                      );
                      msg.setName(value);
                      break;
                    case 2:
                      var value = (
                        /** @type {string} */
                        reader.readString()
                      );
                      msg.addValues(value);
                      break;
                    default:
                      reader.skipField();
                      break;
                  }
                }
                return msg;
              };
              proto.Xiaoyang.Measurement.ReportIndexText.prototype.serializeBinary = function() {
                var writer = new jspb2.BinaryWriter();
                proto.Xiaoyang.Measurement.ReportIndexText.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
              };
              proto.Xiaoyang.Measurement.ReportIndexText.serializeBinaryToWriter = function(message, writer) {
                var f2 = void 0;
                f2 = message.getName();
                if (f2.length > 0) {
                  writer.writeString(
                    1,
                    f2
                  );
                }
                f2 = message.getValuesList();
                if (f2.length > 0) {
                  writer.writeRepeatedString(
                    2,
                    f2
                  );
                }
              };
              proto.Xiaoyang.Measurement.ReportIndexText.prototype.getName = function() {
                return (
                  /** @type {string} */
                  jspb2.Message.getFieldWithDefault(this, 1, "")
                );
              };
              proto.Xiaoyang.Measurement.ReportIndexText.prototype.setName = function(value) {
                return jspb2.Message.setProto3StringField(this, 1, value);
              };
              proto.Xiaoyang.Measurement.ReportIndexText.prototype.getValuesList = function() {
                return (
                  /** @type {!Array<string>} */
                  jspb2.Message.getRepeatedField(this, 2)
                );
              };
              proto.Xiaoyang.Measurement.ReportIndexText.prototype.setValuesList = function(value) {
                return jspb2.Message.setField(this, 2, value || []);
              };
              proto.Xiaoyang.Measurement.ReportIndexText.prototype.addValues = function(value, opt_index) {
                return jspb2.Message.addToRepeatedField(this, 2, value, opt_index);
              };
              proto.Xiaoyang.Measurement.ReportIndexText.prototype.clearValuesList = function() {
                return this.setValuesList([]);
              };
              proto.Xiaoyang.Measurement.Gender = {
                MALE: 0,
                FEMALE: 1
              };
              goog2.object.extend(exports2, proto.Xiaoyang.Measurement);
            },
            /* 2 */
            /***/
            function(__unused_webpack_module, exports, __webpack_require__) {
              var $jscomp = $jscomp || {};
              $jscomp.scope = {};
              $jscomp.findInternal = function(a2, b2, c2) {
                a2 instanceof String && (a2 = String(a2));
                for (var d2 = a2.length, e2 = 0; e2 < d2; e2++) {
                  var f2 = a2[e2];
                  if (b2.call(c2, f2, e2, a2))
                    return { i: e2, v: f2 };
                }
                return { i: -1, v: void 0 };
              };
              $jscomp.ASSUME_ES5 = false;
              $jscomp.ASSUME_NO_NATIVE_MAP = false;
              $jscomp.ASSUME_NO_NATIVE_SET = false;
              $jscomp.SIMPLE_FROUND_POLYFILL = false;
              $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a2, b2, c2) {
                a2 != Array.prototype && a2 != Object.prototype && (a2[b2] = c2.value);
              };
              $jscomp.getGlobal = function(a2) {
                return "undefined" != typeof window && window === a2 ? a2 : "undefined" != typeof __webpack_require__.g && null != __webpack_require__.g ? __webpack_require__.g : a2;
              };
              $jscomp.global = $jscomp.getGlobal(this);
              $jscomp.polyfill = function(a2, b2, c2, d2) {
                if (b2) {
                  c2 = $jscomp.global;
                  a2 = a2.split(".");
                  for (d2 = 0; d2 < a2.length - 1; d2++) {
                    var e2 = a2[d2];
                    e2 in c2 || (c2[e2] = {});
                    c2 = c2[e2];
                  }
                  a2 = a2[a2.length - 1];
                  d2 = c2[a2];
                  b2 = b2(d2);
                  b2 != d2 && null != b2 && $jscomp.defineProperty(c2, a2, { configurable: true, writable: true, value: b2 });
                }
              };
              $jscomp.polyfill("Array.prototype.findIndex", function(a2) {
                return a2 ? a2 : function(a3, c2) {
                  return $jscomp.findInternal(this, a3, c2).i;
                };
              }, "es6", "es3");
              $jscomp.checkStringArgs = function(a2, b2, c2) {
                if (null == a2)
                  throw new TypeError("The 'this' value for String.prototype." + c2 + " must not be null or undefined");
                if (b2 instanceof RegExp)
                  throw new TypeError("First argument to String.prototype." + c2 + " must not be a regular expression");
                return a2 + "";
              };
              $jscomp.polyfill("String.prototype.endsWith", function(a2) {
                return a2 ? a2 : function(a3, c2) {
                  var b2 = $jscomp.checkStringArgs(this, a3, "endsWith");
                  a3 += "";
                  void 0 === c2 && (c2 = b2.length);
                  c2 = Math.max(0, Math.min(c2 | 0, b2.length));
                  for (var e2 = a3.length; 0 < e2 && 0 < c2; )
                    if (b2[--c2] != a3[--e2])
                      return false;
                  return 0 >= e2;
                };
              }, "es6", "es3");
              $jscomp.polyfill("Array.prototype.find", function(a2) {
                return a2 ? a2 : function(a3, c2) {
                  return $jscomp.findInternal(this, a3, c2).v;
                };
              }, "es6", "es3");
              $jscomp.polyfill("String.prototype.startsWith", function(a2) {
                return a2 ? a2 : function(a3, c2) {
                  var b2 = $jscomp.checkStringArgs(this, a3, "startsWith");
                  a3 += "";
                  var e2 = b2.length, f2 = a3.length;
                  c2 = Math.max(0, Math.min(c2 | 0, b2.length));
                  for (var g = 0; g < f2 && c2 < e2; )
                    if (b2[c2++] != a3[g++])
                      return false;
                  return g >= f2;
                };
              }, "es6", "es3");
              $jscomp.polyfill("String.prototype.repeat", function(a2) {
                return a2 ? a2 : function(a3) {
                  var b2 = $jscomp.checkStringArgs(this, null, "repeat");
                  if (0 > a3 || 1342177279 < a3)
                    throw new RangeError("Invalid count value");
                  a3 |= 0;
                  for (var d2 = ""; a3; )
                    if (a3 & 1 && (d2 += b2), a3 >>>= 1)
                      b2 += b2;
                  return d2;
                };
              }, "es6", "es3");
              var COMPILED = true, goog = goog || {};
              goog.global = this || self;
              goog.exportPath_ = function(a2, b2, c2) {
                a2 = a2.split(".");
                c2 = c2 || goog.global;
                a2[0] in c2 || "undefined" == typeof c2.execScript || c2.execScript("var " + a2[0]);
                for (var d2; a2.length && (d2 = a2.shift()); )
                  a2.length || void 0 === b2 ? c2 = c2[d2] && c2[d2] !== Object.prototype[d2] ? c2[d2] : c2[d2] = {} : c2[d2] = b2;
              };
              goog.define = function(a2, b2) {
                if (!COMPILED) {
                  var c2 = goog.global.CLOSURE_UNCOMPILED_DEFINES, d2 = goog.global.CLOSURE_DEFINES;
                  c2 && void 0 === c2.nodeType && Object.prototype.hasOwnProperty.call(c2, a2) ? b2 = c2[a2] : d2 && void 0 === d2.nodeType && Object.prototype.hasOwnProperty.call(d2, a2) && (b2 = d2[a2]);
                }
                return b2;
              };
              goog.FEATURESET_YEAR = 2012;
              goog.DEBUG = true;
              goog.LOCALE = "en";
              goog.TRUSTED_SITE = true;
              goog.STRICT_MODE_COMPATIBLE = false;
              goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
              goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = false;
              goog.provide = function(a2) {
                if (goog.isInModuleLoader_())
                  throw Error("goog.provide cannot be used within a module.");
                if (!COMPILED && goog.isProvided_(a2))
                  throw Error('Namespace "' + a2 + '" already declared.');
                goog.constructNamespace_(a2);
              };
              goog.constructNamespace_ = function(a2, b2) {
                if (!COMPILED) {
                  delete goog.implicitNamespaces_[a2];
                  for (var c2 = a2; (c2 = c2.substring(0, c2.lastIndexOf("."))) && !goog.getObjectByName(c2); )
                    goog.implicitNamespaces_[c2] = true;
                }
                goog.exportPath_(a2, b2);
              };
              goog.getScriptNonce = function(a2) {
                if (a2 && a2 != goog.global)
                  return goog.getScriptNonce_(a2.document);
                null === goog.cspNonce_ && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document));
                return goog.cspNonce_;
              };
              goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
              goog.cspNonce_ = null;
              goog.getScriptNonce_ = function(a2) {
                return (a2 = a2.querySelector && a2.querySelector("script[nonce]")) && (a2 = a2.nonce || a2.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a2) ? a2 : "";
              };
              goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
              goog.module = function(a2) {
                if ("string" !== typeof a2 || !a2 || -1 == a2.search(goog.VALID_MODULE_RE_))
                  throw Error("Invalid module identifier");
                if (!goog.isInGoogModuleLoader_())
                  throw Error("Module " + a2 + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
                if (goog.moduleLoaderState_.moduleName)
                  throw Error("goog.module may only be called once per module.");
                goog.moduleLoaderState_.moduleName = a2;
                if (!COMPILED) {
                  if (goog.isProvided_(a2))
                    throw Error('Namespace "' + a2 + '" already declared.');
                  delete goog.implicitNamespaces_[a2];
                }
              };
              goog.module.get = function(a2) {
                return goog.module.getInternal_(a2);
              };
              goog.module.getInternal_ = function(a2) {
                if (!COMPILED) {
                  if (a2 in goog.loadedModules_)
                    return goog.loadedModules_[a2].exports;
                  if (!goog.implicitNamespaces_[a2])
                    return a2 = goog.getObjectByName(a2), null != a2 ? a2 : null;
                }
                return null;
              };
              goog.ModuleType = { ES6: "es6", GOOG: "goog" };
              goog.moduleLoaderState_ = null;
              goog.isInModuleLoader_ = function() {
                return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
              };
              goog.isInGoogModuleLoader_ = function() {
                return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
              };
              goog.isInEs6ModuleLoader_ = function() {
                if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6)
                  return true;
                var a2 = goog.global.$jscomp;
                return a2 ? "function" != typeof a2.getCurrentModulePath ? false : !!a2.getCurrentModulePath() : false;
              };
              goog.module.declareLegacyNamespace = function() {
                if (!COMPILED && !goog.isInGoogModuleLoader_())
                  throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
                if (!COMPILED && !goog.moduleLoaderState_.moduleName)
                  throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
                goog.moduleLoaderState_.declareLegacyNamespace = true;
              };
              goog.declareModuleId = function(a2) {
                if (!COMPILED) {
                  if (!goog.isInEs6ModuleLoader_())
                    throw Error("goog.declareModuleId may only be called from within an ES6 module");
                  if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
                    throw Error("goog.declareModuleId may only be called once per module.");
                  if (a2 in goog.loadedModules_)
                    throw Error('Module with namespace "' + a2 + '" already exists.');
                }
                if (goog.moduleLoaderState_)
                  goog.moduleLoaderState_.moduleName = a2;
                else {
                  var b2 = goog.global.$jscomp;
                  if (!b2 || "function" != typeof b2.getCurrentModulePath)
                    throw Error('Module with namespace "' + a2 + '" has been loaded incorrectly.');
                  b2 = b2.require(b2.getCurrentModulePath());
                  goog.loadedModules_[a2] = { exports: b2, type: goog.ModuleType.ES6, moduleId: a2 };
                }
              };
              goog.setTestOnly = function(a2) {
                if (goog.DISALLOW_TEST_ONLY_CODE)
                  throw a2 = a2 || "", Error("Importing test-only code into non-debug environment" + (a2 ? ": " + a2 : "."));
              };
              goog.forwardDeclare = function(a2) {
              };
              COMPILED || (goog.isProvided_ = function(a2) {
                return a2 in goog.loadedModules_ || !goog.implicitNamespaces_[a2] && null != goog.getObjectByName(a2);
              }, goog.implicitNamespaces_ = { "goog.module": true });
              goog.getObjectByName = function(a2, b2) {
                a2 = a2.split(".");
                b2 = b2 || goog.global;
                for (var c2 = 0; c2 < a2.length; c2++)
                  if (b2 = b2[a2[c2]], null == b2)
                    return null;
                return b2;
              };
              goog.globalize = function(a2, b2) {
                b2 = b2 || goog.global;
                for (var c2 in a2)
                  b2[c2] = a2[c2];
              };
              goog.addDependency = function(a2, b2, c2, d2) {
                !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(a2, b2, c2, d2);
              };
              goog.ENABLE_DEBUG_LOADER = true;
              goog.logToConsole_ = function(a2) {
                goog.global.console && goog.global.console.error(a2);
              };
              goog.require = function(a2) {
                if (!COMPILED) {
                  goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(a2);
                  if (goog.isProvided_(a2)) {
                    if (goog.isInModuleLoader_())
                      return goog.module.getInternal_(a2);
                  } else if (goog.ENABLE_DEBUG_LOADER) {
                    var b2 = goog.moduleLoaderState_;
                    goog.moduleLoaderState_ = null;
                    try {
                      goog.debugLoader_.load_(a2);
                    } finally {
                      goog.moduleLoaderState_ = b2;
                    }
                  }
                  return null;
                }
              };
              goog.requireType = function(a2) {
                return {};
              };
              goog.basePath = "";
              goog.nullFunction = function() {
              };
              goog.abstractMethod = function() {
                throw Error("unimplemented abstract method");
              };
              goog.addSingletonGetter = function(a2) {
                a2.instance_ = void 0;
                a2.getInstance = function() {
                  if (a2.instance_)
                    return a2.instance_;
                  goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a2);
                  return a2.instance_ = new a2();
                };
              };
              goog.instantiatedSingletons_ = [];
              goog.LOAD_MODULE_USING_EVAL = true;
              goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
              goog.loadedModules_ = {};
              goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
              goog.TRANSPILE = "detect";
              goog.ASSUME_ES_MODULES_TRANSPILED = false;
              goog.TRANSPILE_TO_LANGUAGE = "";
              goog.TRANSPILER = "transpile.js";
              goog.hasBadLetScoping = null;
              goog.useSafari10Workaround = function() {
                if (null == goog.hasBadLetScoping) {
                  try {
                    var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
                  } catch (b2) {
                    a = false;
                  }
                  goog.hasBadLetScoping = a;
                }
                return goog.hasBadLetScoping;
              };
              goog.workaroundSafari10EvalBug = function(a2) {
                return "(function(){" + a2 + "\n;})();\n";
              };
              goog.loadModule = function(a2) {
                var b2 = goog.moduleLoaderState_;
                try {
                  goog.moduleLoaderState_ = { moduleName: "", declareLegacyNamespace: false, type: goog.ModuleType.GOOG };
                  if (goog.isFunction(a2))
                    var c2 = a2.call(void 0, {});
                  else if ("string" === typeof a2)
                    goog.useSafari10Workaround() && (a2 = goog.workaroundSafari10EvalBug(a2)), c2 = goog.loadModuleFromSource_.call(void 0, a2);
                  else
                    throw Error("Invalid module definition");
                  var d2 = goog.moduleLoaderState_.moduleName;
                  if ("string" === typeof d2 && d2)
                    goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(
                      d2,
                      c2
                    ) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof c2 && null != c2 && Object.seal(c2), goog.loadedModules_[d2] = { exports: c2, type: goog.ModuleType.GOOG, moduleId: goog.moduleLoaderState_.moduleName };
                  else
                    throw Error('Invalid module name "' + d2 + '"');
                } finally {
                  goog.moduleLoaderState_ = b2;
                }
              };
              goog.loadModuleFromSource_ = function(a) {
                eval(a);
                return {};
              };
              goog.normalizePath_ = function(a2) {
                a2 = a2.split("/");
                for (var b2 = 0; b2 < a2.length; )
                  "." == a2[b2] ? a2.splice(b2, 1) : b2 && ".." == a2[b2] && a2[b2 - 1] && ".." != a2[b2 - 1] ? a2.splice(--b2, 2) : b2++;
                return a2.join("/");
              };
              goog.loadFileSync_ = function(a2) {
                if (goog.global.CLOSURE_LOAD_FILE_SYNC)
                  return goog.global.CLOSURE_LOAD_FILE_SYNC(a2);
                try {
                  var b2 = new goog.global.XMLHttpRequest();
                  b2.open("get", a2, false);
                  b2.send();
                  return 0 == b2.status || 200 == b2.status ? b2.responseText : null;
                } catch (c2) {
                  return null;
                }
              };
              goog.transpile_ = function(a2, b2, c2) {
                var d2 = goog.global.$jscomp;
                d2 || (goog.global.$jscomp = d2 = {});
                var e2 = d2.transpile;
                if (!e2) {
                  var f2 = goog.basePath + goog.TRANSPILER, g = goog.loadFileSync_(f2);
                  if (g) {
                    (function() {
                      (0, eval)(g + "\n//# sourceURL=" + f2);
                    }).call(goog.global);
                    if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile)
                      throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
                    goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
                    d2 = goog.global.$jscomp;
                    e2 = d2.transpile;
                  }
                }
                e2 || (e2 = d2.transpile = function(a3, b3) {
                  goog.logToConsole_(b3 + " requires transpilation but no transpiler was found.");
                  return a3;
                });
                return e2(a2, b2, c2);
              };
              goog.typeOf = function(a2) {
                var b2 = typeof a2;
                if ("object" == b2)
                  if (a2) {
                    if (a2 instanceof Array)
                      return "array";
                    if (a2 instanceof Object)
                      return b2;
                    var c2 = Object.prototype.toString.call(a2);
                    if ("[object Window]" == c2)
                      return "object";
                    if ("[object Array]" == c2 || "number" == typeof a2.length && "undefined" != typeof a2.splice && "undefined" != typeof a2.propertyIsEnumerable && !a2.propertyIsEnumerable("splice"))
                      return "array";
                    if ("[object Function]" == c2 || "undefined" != typeof a2.call && "undefined" != typeof a2.propertyIsEnumerable && !a2.propertyIsEnumerable("call"))
                      return "function";
                  } else
                    return "null";
                else if ("function" == b2 && "undefined" == typeof a2.call)
                  return "object";
                return b2;
              };
              goog.isArray = function(a2) {
                return "array" == goog.typeOf(a2);
              };
              goog.isArrayLike = function(a2) {
                var b2 = goog.typeOf(a2);
                return "array" == b2 || "object" == b2 && "number" == typeof a2.length;
              };
              goog.isDateLike = function(a2) {
                return goog.isObject(a2) && "function" == typeof a2.getFullYear;
              };
              goog.isFunction = function(a2) {
                return "function" == goog.typeOf(a2);
              };
              goog.isObject = function(a2) {
                var b2 = typeof a2;
                return "object" == b2 && null != a2 || "function" == b2;
              };
              goog.getUid = function(a2) {
                return Object.prototype.hasOwnProperty.call(a2, goog.UID_PROPERTY_) && a2[goog.UID_PROPERTY_] || (a2[goog.UID_PROPERTY_] = ++goog.uidCounter_);
              };
              goog.hasUid = function(a2) {
                return !!a2[goog.UID_PROPERTY_];
              };
              goog.removeUid = function(a2) {
                null !== a2 && "removeAttribute" in a2 && a2.removeAttribute(goog.UID_PROPERTY_);
                try {
                  delete a2[goog.UID_PROPERTY_];
                } catch (b2) {
                }
              };
              goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
              goog.uidCounter_ = 0;
              goog.getHashCode = goog.getUid;
              goog.removeHashCode = goog.removeUid;
              goog.cloneObject = function(a2) {
                var b2 = goog.typeOf(a2);
                if ("object" == b2 || "array" == b2) {
                  if ("function" === typeof a2.clone)
                    return a2.clone();
                  b2 = "array" == b2 ? [] : {};
                  for (var c2 in a2)
                    b2[c2] = goog.cloneObject(a2[c2]);
                  return b2;
                }
                return a2;
              };
              goog.bindNative_ = function(a2, b2, c2) {
                return a2.call.apply(a2.bind, arguments);
              };
              goog.bindJs_ = function(a2, b2, c2) {
                if (!a2)
                  throw Error();
                if (2 < arguments.length) {
                  var d2 = Array.prototype.slice.call(arguments, 2);
                  return function() {
                    var c3 = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c3, d2);
                    return a2.apply(b2, c3);
                  };
                }
                return function() {
                  return a2.apply(b2, arguments);
                };
              };
              goog.bind = function(a2, b2, c2) {
                Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
                return goog.bind.apply(null, arguments);
              };
              goog.partial = function(a2, b2) {
                var c2 = Array.prototype.slice.call(arguments, 1);
                return function() {
                  var b3 = c2.slice();
                  b3.push.apply(b3, arguments);
                  return a2.apply(this, b3);
                };
              };
              goog.mixin = function(a2, b2) {
                for (var c2 in b2)
                  a2[c2] = b2[c2];
              };
              goog.now = goog.TRUSTED_SITE && Date.now || function() {
                return +/* @__PURE__ */ new Date();
              };
              goog.globalEval = function(a2) {
                if (goog.global.execScript)
                  goog.global.execScript(a2, "JavaScript");
                else if (goog.global.eval) {
                  if (null == goog.evalWorksForGlobals_) {
                    try {
                      goog.global.eval("var _evalTest_ = 1;");
                    } catch (d2) {
                    }
                    if ("undefined" != typeof goog.global._evalTest_) {
                      try {
                        delete goog.global._evalTest_;
                      } catch (d2) {
                      }
                      goog.evalWorksForGlobals_ = true;
                    } else
                      goog.evalWorksForGlobals_ = false;
                  }
                  if (goog.evalWorksForGlobals_)
                    goog.global.eval(a2);
                  else {
                    var b2 = goog.global.document, c2 = b2.createElement("script");
                    c2.type = "text/javascript";
                    c2.defer = false;
                    c2.appendChild(b2.createTextNode(a2));
                    b2.head.appendChild(c2);
                    b2.head.removeChild(c2);
                  }
                } else
                  throw Error("goog.globalEval not available");
              };
              goog.evalWorksForGlobals_ = null;
              goog.getCssName = function(a2, b2) {
                if ("." == String(a2).charAt(0))
                  throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a2);
                var c2 = function(a3) {
                  return goog.cssNameMapping_[a3] || a3;
                }, d2 = function(a3) {
                  a3 = a3.split("-");
                  for (var b3 = [], d3 = 0; d3 < a3.length; d3++)
                    b3.push(c2(a3[d3]));
                  return b3.join("-");
                };
                d2 = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c2 : d2 : function(a3) {
                  return a3;
                };
                a2 = b2 ? a2 + "-" + d2(b2) : d2(a2);
                return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(a2) : a2;
              };
              goog.setCssNameMapping = function(a2, b2) {
                goog.cssNameMapping_ = a2;
                goog.cssNameMappingStyle_ = b2;
              };
              !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
              goog.getMsg = function(a2, b2, c2) {
                c2 && c2.html && (a2 = a2.replace(/</g, "&lt;"));
                b2 && (a2 = a2.replace(/\{\$([^}]+)}/g, function(a3, c3) {
                  return null != b2 && c3 in b2 ? b2[c3] : a3;
                }));
                return a2;
              };
              goog.getMsgWithFallback = function(a2, b2) {
                return a2;
              };
              goog.exportSymbol = function(a2, b2, c2) {
                goog.exportPath_(a2, b2, c2);
              };
              goog.exportProperty = function(a2, b2, c2) {
                a2[b2] = c2;
              };
              goog.inherits = function(a2, b2) {
                function c2() {
                }
                c2.prototype = b2.prototype;
                a2.superClass_ = b2.prototype;
                a2.prototype = new c2();
                a2.prototype.constructor = a2;
                a2.base = function(a3, c3, f2) {
                  for (var d2 = Array(arguments.length - 2), e2 = 2; e2 < arguments.length; e2++)
                    d2[e2 - 2] = arguments[e2];
                  return b2.prototype[c3].apply(a3, d2);
                };
              };
              goog.scope = function(a2) {
                if (goog.isInModuleLoader_())
                  throw Error("goog.scope is not supported within a module.");
                a2.call(goog.global);
              };
              COMPILED || (goog.global.COMPILED = COMPILED);
              goog.defineClass = function(a2, b2) {
                var c2 = b2.constructor, d2 = b2.statics;
                c2 && c2 != Object.prototype.constructor || (c2 = function() {
                  throw Error("cannot instantiate an interface (no constructor defined).");
                });
                c2 = goog.defineClass.createSealingConstructor_(c2, a2);
                a2 && goog.inherits(c2, a2);
                delete b2.constructor;
                delete b2.statics;
                goog.defineClass.applyProperties_(c2.prototype, b2);
                null != d2 && (d2 instanceof Function ? d2(c2) : goog.defineClass.applyProperties_(c2, d2));
                return c2;
              };
              goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
              goog.defineClass.createSealingConstructor_ = function(a2, b2) {
                if (!goog.defineClass.SEAL_CLASS_INSTANCES)
                  return a2;
                var c2 = !goog.defineClass.isUnsealable_(b2), d2 = function() {
                  var b3 = a2.apply(this, arguments) || this;
                  b3[goog.UID_PROPERTY_] = b3[goog.UID_PROPERTY_];
                  this.constructor === d2 && c2 && Object.seal instanceof Function && Object.seal(b3);
                  return b3;
                };
                return d2;
              };
              goog.defineClass.isUnsealable_ = function(a2) {
                return a2 && a2.prototype && a2.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
              };
              goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
              goog.defineClass.applyProperties_ = function(a2, b2) {
                for (var c2 in b2)
                  Object.prototype.hasOwnProperty.call(b2, c2) && (a2[c2] = b2[c2]);
                for (var d2 = 0; d2 < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d2++)
                  c2 = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d2], Object.prototype.hasOwnProperty.call(b2, c2) && (a2[c2] = b2[c2]);
              };
              goog.tagUnsealableClass = function(a2) {
                !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a2.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = true);
              };
              goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
              !COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function() {
                var a2 = goog.global.document;
                return null != a2 && "write" in a2;
              }, goog.isDocumentLoading_ = function() {
                var a2 = goog.global.document;
                return a2.attachEvent ? "complete" != a2.readyState : "loading" == a2.readyState;
              }, goog.findBasePath_ = function() {
                if (void 0 != goog.global.CLOSURE_BASE_PATH && "string" === typeof goog.global.CLOSURE_BASE_PATH)
                  goog.basePath = goog.global.CLOSURE_BASE_PATH;
                else if (goog.inHtmlDocument_()) {
                  var a2 = goog.global.document, b2 = a2.currentScript;
                  a2 = b2 ? [b2] : a2.getElementsByTagName("SCRIPT");
                  for (b2 = a2.length - 1; 0 <= b2; --b2) {
                    var c2 = a2[b2].src, d2 = c2.lastIndexOf("?");
                    d2 = -1 == d2 ? c2.length : d2;
                    if ("base.js" == c2.substr(d2 - 7, 7)) {
                      goog.basePath = c2.substr(0, d2 - 7);
                      break;
                    }
                  }
                }
              }, goog.findBasePath_(), goog.Transpiler = function() {
                this.requiresTranspilation_ = null;
                this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
              }, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
                function a(a2, b2) {
                  e ? d[a2] = true : b2() ? (c = a2, d[a2] = false) : e = d[a2] = true;
                }
                function b(a) {
                  try {
                    return !!eval(a);
                  } catch (h) {
                    return false;
                  }
                }
                var c = "es3", d = { es3: false }, e = false, f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
                a("es5", function() {
                  return b("[1,].length==1");
                });
                a("es6", function() {
                  return f.match(/Edge\/(\d+)(\.\d)*/i) ? false : b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
                });
                a("es7", function() {
                  return b("2 ** 2 == 4");
                });
                a("es8", function() {
                  return b("async () => 1, true");
                });
                a("es9", function() {
                  return b("({...rest} = {}), true");
                });
                a("es_next", function() {
                  return false;
                });
                return { target: c, map: d };
              }, goog.Transpiler.prototype.needsTranspile = function(a2, b2) {
                if ("always" == goog.TRANSPILE)
                  return true;
                if ("never" == goog.TRANSPILE)
                  return false;
                if (!this.requiresTranspilation_) {
                  var c2 = this.createRequiresTranspilation_();
                  this.requiresTranspilation_ = c2.map;
                  this.transpilationTarget_ = this.transpilationTarget_ || c2.target;
                }
                if (a2 in this.requiresTranspilation_)
                  return this.requiresTranspilation_[a2] ? true : !goog.inHtmlDocument_() || "es6" != b2 || "noModule" in goog.global.document.createElement("script") ? false : true;
                throw Error("Unknown language mode: " + a2);
              }, goog.Transpiler.prototype.transpile = function(a2, b2) {
                return goog.transpile_(a2, b2, this.transpilationTarget_);
              }, goog.transpiler_ = new goog.Transpiler(), goog.protectScriptTag_ = function(a2) {
                return a2.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
              }, goog.DebugLoader_ = function() {
                this.dependencies_ = {};
                this.idToPath_ = {};
                this.written_ = {};
                this.loadingDeps_ = [];
                this.depsToLoad_ = [];
                this.paused_ = false;
                this.factory_ = new goog.DependencyFactory(goog.transpiler_);
                this.deferredCallbacks_ = {};
                this.deferredQueue_ = [];
              }, goog.DebugLoader_.prototype.bootstrap = function(a2, b2) {
                function c2() {
                  d2 && (goog.global.setTimeout(d2, 0), d2 = null);
                }
                var d2 = b2;
                if (a2.length) {
                  b2 = [];
                  for (var e2 = 0; e2 < a2.length; e2++) {
                    var f2 = this.getPathFromDeps_(a2[e2]);
                    if (!f2)
                      throw Error("Unregonized namespace: " + a2[e2]);
                    b2.push(this.dependencies_[f2]);
                  }
                  f2 = goog.require;
                  var g = 0;
                  for (e2 = 0; e2 < a2.length; e2++)
                    f2(a2[e2]), b2[e2].onLoad(function() {
                      ++g == a2.length && c2();
                    });
                } else
                  c2();
              }, goog.DebugLoader_.prototype.loadClosureDeps = function() {
                this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, false));
                this.loadDeps_();
              }, goog.DebugLoader_.prototype.requested = function(a2, b2) {
                (a2 = this.getPathFromDeps_(a2)) && (b2 || this.areDepsLoaded_(this.dependencies_[a2].requires)) && (b2 = this.deferredCallbacks_[a2]) && (delete this.deferredCallbacks_[a2], b2());
              }, goog.DebugLoader_.prototype.setDependencyFactory = function(a2) {
                this.factory_ = a2;
              }, goog.DebugLoader_.prototype.load_ = function(a2) {
                if (this.getPathFromDeps_(a2)) {
                  var b2 = this, c2 = [], d2 = function(a3) {
                    var e2 = b2.getPathFromDeps_(a3);
                    if (!e2)
                      throw Error("Bad dependency path or symbol: " + a3);
                    if (!b2.written_[e2]) {
                      b2.written_[e2] = true;
                      a3 = b2.dependencies_[e2];
                      for (e2 = 0; e2 < a3.requires.length; e2++)
                        goog.isProvided_(a3.requires[e2]) || d2(a3.requires[e2]);
                      c2.push(a3);
                    }
                  };
                  d2(a2);
                  a2 = !!this.depsToLoad_.length;
                  this.depsToLoad_ = this.depsToLoad_.concat(c2);
                  this.paused_ || a2 || this.loadDeps_();
                } else
                  throw a2 = "goog.require could not find: " + a2, goog.logToConsole_(a2), Error(a2);
              }, goog.DebugLoader_.prototype.loadDeps_ = function() {
                for (var a2 = this, b2 = this.paused_; this.depsToLoad_.length && !b2; )
                  (function() {
                    var c2 = false, d2 = a2.depsToLoad_.shift(), e2 = false;
                    a2.loading_(d2);
                    var f2 = { pause: function() {
                      if (c2)
                        throw Error("Cannot call pause after the call to load.");
                      b2 = true;
                    }, resume: function() {
                      c2 ? a2.resume_() : b2 = false;
                    }, loaded: function() {
                      if (e2)
                        throw Error("Double call to loaded.");
                      e2 = true;
                      a2.loaded_(d2);
                    }, pending: function() {
                      for (var b3 = [], c3 = 0; c3 < a2.loadingDeps_.length; c3++)
                        b3.push(a2.loadingDeps_[c3]);
                      return b3;
                    }, setModuleState: function(a3) {
                      goog.moduleLoaderState_ = { type: a3, moduleName: "", declareLegacyNamespace: false };
                    }, registerEs6ModuleExports: function(a3, b3, c3) {
                      c3 && (goog.loadedModules_[c3] = { exports: b3, type: goog.ModuleType.ES6, moduleId: c3 || "" });
                    }, registerGoogModuleExports: function(a3, b3) {
                      goog.loadedModules_[a3] = { exports: b3, type: goog.ModuleType.GOOG, moduleId: a3 };
                    }, clearModuleState: function() {
                      goog.moduleLoaderState_ = null;
                    }, defer: function(b3) {
                      if (c2)
                        throw Error("Cannot register with defer after the call to load.");
                      a2.defer_(
                        d2,
                        b3
                      );
                    }, areDepsLoaded: function() {
                      return a2.areDepsLoaded_(d2.requires);
                    } };
                    try {
                      d2.load(f2);
                    } finally {
                      c2 = true;
                    }
                  })();
                b2 && this.pause_();
              }, goog.DebugLoader_.prototype.pause_ = function() {
                this.paused_ = true;
              }, goog.DebugLoader_.prototype.resume_ = function() {
                this.paused_ && (this.paused_ = false, this.loadDeps_());
              }, goog.DebugLoader_.prototype.loading_ = function(a2) {
                this.loadingDeps_.push(a2);
              }, goog.DebugLoader_.prototype.loaded_ = function(a2) {
                for (var b2 = 0; b2 < this.loadingDeps_.length; b2++)
                  if (this.loadingDeps_[b2] == a2) {
                    this.loadingDeps_.splice(b2, 1);
                    break;
                  }
                for (b2 = 0; b2 < this.deferredQueue_.length; b2++)
                  if (this.deferredQueue_[b2] == a2.path) {
                    this.deferredQueue_.splice(b2, 1);
                    break;
                  }
                if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length)
                  for (; this.deferredQueue_.length; )
                    this.requested(this.deferredQueue_.shift(), true);
                a2.loaded();
              }, goog.DebugLoader_.prototype.areDepsLoaded_ = function(a2) {
                for (var b2 = 0; b2 < a2.length; b2++) {
                  var c2 = this.getPathFromDeps_(a2[b2]);
                  if (!c2 || !(c2 in this.deferredCallbacks_ || goog.isProvided_(a2[b2])))
                    return false;
                }
                return true;
              }, goog.DebugLoader_.prototype.getPathFromDeps_ = function(a2) {
                return a2 in this.idToPath_ ? this.idToPath_[a2] : a2 in this.dependencies_ ? a2 : null;
              }, goog.DebugLoader_.prototype.defer_ = function(a2, b2) {
                this.deferredCallbacks_[a2.path] = b2;
                this.deferredQueue_.push(a2.path);
              }, goog.LoadController = function() {
              }, goog.LoadController.prototype.pause = function() {
              }, goog.LoadController.prototype.resume = function() {
              }, goog.LoadController.prototype.loaded = function() {
              }, goog.LoadController.prototype.pending = function() {
              }, goog.LoadController.prototype.registerEs6ModuleExports = function(a2, b2, c2) {
              }, goog.LoadController.prototype.setModuleState = function(a2) {
              }, goog.LoadController.prototype.clearModuleState = function() {
              }, goog.LoadController.prototype.defer = function(a2) {
              }, goog.LoadController.prototype.areDepsLoaded = function() {
              }, goog.Dependency = function(a2, b2, c2, d2, e2) {
                this.path = a2;
                this.relativePath = b2;
                this.provides = c2;
                this.requires = d2;
                this.loadFlags = e2;
                this.loaded_ = false;
                this.loadCallbacks_ = [];
              }, goog.Dependency.prototype.getPathName = function() {
                var a2 = this.path, b2 = a2.indexOf("://");
                0 <= b2 && (a2 = a2.substring(b2 + 3), b2 = a2.indexOf("/"), 0 <= b2 && (a2 = a2.substring(b2 + 1)));
                return a2;
              }, goog.Dependency.prototype.onLoad = function(a2) {
                this.loaded_ ? a2() : this.loadCallbacks_.push(a2);
              }, goog.Dependency.prototype.loaded = function() {
                this.loaded_ = true;
                var a2 = this.loadCallbacks_;
                this.loadCallbacks_ = [];
                for (var b2 = 0; b2 < a2.length; b2++)
                  a2[b2]();
              }, goog.Dependency.defer_ = false, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function(a2) {
                var b2 = Math.random().toString(32);
                goog.Dependency.callbackMap_[b2] = a2;
                return b2;
              }, goog.Dependency.unregisterCallback_ = function(a2) {
                delete goog.Dependency.callbackMap_[a2];
              }, goog.Dependency.callback_ = function(a2, b2) {
                if (a2 in goog.Dependency.callbackMap_) {
                  for (var c2 = goog.Dependency.callbackMap_[a2], d2 = [], e2 = 1; e2 < arguments.length; e2++)
                    d2.push(arguments[e2]);
                  c2.apply(void 0, d2);
                } else
                  throw Error("Callback key " + a2 + " does not exist (was base.js loaded more than once?).");
              }, goog.Dependency.prototype.load = function(a2) {
                if (goog.global.CLOSURE_IMPORT_SCRIPT)
                  goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a2.loaded() : a2.pause();
                else if (goog.inHtmlDocument_()) {
                  var b2 = goog.global.document;
                  if ("complete" == b2.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
                    if (/\bdeps.js$/.test(this.path)) {
                      a2.loaded();
                      return;
                    }
                    throw Error('Cannot write "' + this.path + '" after document load');
                  }
                  if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
                    var c2 = goog.Dependency.registerCallback_(function(b3) {
                      goog.DebugLoader_.IS_OLD_IE_ && "complete" != b3.readyState || (goog.Dependency.unregisterCallback_(c2), a2.loaded());
                    }), d2 = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
                    d2 = '<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + `="goog.Dependency.callback_('` + c2 + `', this)" type="text/javascript" ` + (goog.Dependency.defer_ ? "defer" : "") + d2 + "><\/script>";
                    b2.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d2) : d2);
                  } else {
                    var e2 = b2.createElement("script");
                    e2.defer = goog.Dependency.defer_;
                    e2.async = false;
                    e2.type = "text/javascript";
                    (d2 = goog.getScriptNonce()) && e2.setAttribute("nonce", d2);
                    goog.DebugLoader_.IS_OLD_IE_ ? (a2.pause(), e2.onreadystatechange = function() {
                      if ("loaded" == e2.readyState || "complete" == e2.readyState)
                        a2.loaded(), a2.resume();
                    }) : e2.onload = function() {
                      e2.onload = null;
                      a2.loaded();
                    };
                    e2.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
                    b2.head.appendChild(e2);
                  }
                } else
                  goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), a2.loaded()) : a2.pause();
              }, goog.Es6ModuleDependency = function(a2, b2, c2, d2, e2) {
                goog.Dependency.call(this, a2, b2, c2, d2, e2);
              }, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(a2) {
                function b2(a3, b3) {
                  a3 = b3 ? '<script type="module" crossorigin>' + b3 + "<\/script>" : '<script type="module" crossorigin src="' + a3 + '"><\/script>';
                  d2.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(a3) : a3);
                }
                function c2(a3, b3) {
                  var c3 = d2.createElement("script");
                  c3.defer = true;
                  c3.async = false;
                  c3.type = "module";
                  c3.setAttribute("crossorigin", true);
                  var e3 = goog.getScriptNonce();
                  e3 && c3.setAttribute("nonce", e3);
                  b3 ? c3.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(b3) : b3 : c3.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(a3) : a3;
                  d2.head.appendChild(c3);
                }
                if (goog.global.CLOSURE_IMPORT_SCRIPT)
                  goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a2.loaded() : a2.pause();
                else if (goog.inHtmlDocument_()) {
                  var d2 = goog.global.document, e2 = this;
                  if (goog.isDocumentLoading_()) {
                    var f2 = b2;
                    goog.Dependency.defer_ = true;
                  } else
                    f2 = c2;
                  var g = goog.Dependency.registerCallback_(function() {
                    goog.Dependency.unregisterCallback_(g);
                    a2.setModuleState(goog.ModuleType.ES6);
                  });
                  f2(void 0, 'goog.Dependency.callback_("' + g + '")');
                  f2(this.path, void 0);
                  var h = goog.Dependency.registerCallback_(function(b3) {
                    goog.Dependency.unregisterCallback_(h);
                    a2.registerEs6ModuleExports(e2.path, b3, goog.moduleLoaderState_.moduleName);
                  });
                  f2(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
                  var k = goog.Dependency.registerCallback_(function() {
                    goog.Dependency.unregisterCallback_(k);
                    a2.clearModuleState();
                    a2.loaded();
                  });
                  f2(void 0, 'goog.Dependency.callback_("' + k + '")');
                } else
                  goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a2.pause();
              }, goog.TransformedDependency = function(a2, b2, c2, d2, e2) {
                goog.Dependency.call(this, a2, b2, c2, d2, e2);
                this.contents_ = null;
                this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
              }, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function(a2) {
                function b2() {
                  e2.contents_ = goog.loadFileSync_(e2.path);
                  e2.contents_ && (e2.contents_ = e2.transform(e2.contents_), e2.contents_ && (e2.contents_ += "\n//# sourceURL=" + e2.path));
                }
                function c2() {
                  e2.lazyFetch_ && b2();
                  if (e2.contents_) {
                    f2 && a2.setModuleState(goog.ModuleType.ES6);
                    try {
                      var c3 = e2.contents_;
                      e2.contents_ = null;
                      goog.globalEval(c3);
                      if (f2)
                        var d3 = goog.moduleLoaderState_.moduleName;
                    } finally {
                      f2 && a2.clearModuleState();
                    }
                    f2 && goog.global.$jscomp.require.ensure([e2.getPathName()], function() {
                      a2.registerEs6ModuleExports(
                        e2.path,
                        goog.global.$jscomp.require(e2.getPathName()),
                        d3
                      );
                    });
                    a2.loaded();
                  }
                }
                function d2() {
                  var a3 = goog.global.document, b3 = goog.Dependency.registerCallback_(function() {
                    goog.Dependency.unregisterCallback_(b3);
                    c2();
                  }), d3 = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + b3 + '");') + "<\/script>";
                  a3.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d3) : d3);
                }
                var e2 = this;
                if (goog.global.CLOSURE_IMPORT_SCRIPT)
                  b2(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, a2.loaded()) : a2.pause();
                else {
                  var f2 = this.loadFlags.module == goog.ModuleType.ES6;
                  this.lazyFetch_ || b2();
                  var g = 1 < a2.pending().length, h = g && goog.DebugLoader_.IS_OLD_IE_;
                  g = goog.Dependency.defer_ && (g || goog.isDocumentLoading_());
                  if (h || g)
                    a2.defer(function() {
                      c2();
                    });
                  else {
                    var k = goog.global.document;
                    h = goog.inHtmlDocument_() && "ActiveXObject" in goog.global;
                    if (f2 && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !h) {
                      goog.Dependency.defer_ = true;
                      a2.pause();
                      var l = k.onreadystatechange;
                      k.onreadystatechange = function() {
                        "interactive" == k.readyState && (k.onreadystatechange = l, c2(), a2.resume());
                        goog.isFunction(l) && l.apply(void 0, arguments);
                      };
                    } else
                      !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? d2() : c2();
                  }
                }
              }, goog.TransformedDependency.prototype.transform = function(a2) {
              }, goog.TranspiledDependency = function(a2, b2, c2, d2, e2, f2) {
                goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
                this.transpiler = f2;
              }, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function(a2) {
                return this.transpiler.transpile(a2, this.getPathName());
              }, goog.PreTranspiledEs6ModuleDependency = function(a2, b2, c2, d2, e2) {
                goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
              }, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(a2) {
                return a2;
              }, goog.GoogModuleDependency = function(a2, b2, c2, d2, e2, f2, g) {
                goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
                this.needsTranspile_ = f2;
                this.transpiler_ = g;
              }, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(a2) {
                this.needsTranspile_ && (a2 = this.transpiler_.transpile(a2, this.getPathName()));
                return goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON ? "goog.loadModule(" + goog.global.JSON.stringify(a2 + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + a2 + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
              }, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function(a2, b2, c2, d2) {
                b2 = b2 || [];
                a2 = a2.replace(/\\/g, "/");
                var e2 = goog.normalizePath_(goog.basePath + a2);
                d2 && "boolean" !== typeof d2 || (d2 = d2 ? { module: goog.ModuleType.GOOG } : {});
                c2 = this.factory_.createDependency(e2, a2, b2, c2, d2, goog.transpiler_.needsTranspile(d2.lang || "es3", d2.module));
                this.dependencies_[e2] = c2;
                for (c2 = 0; c2 < b2.length; c2++)
                  this.idToPath_[b2[c2]] = e2;
                this.idToPath_[a2] = e2;
              }, goog.DependencyFactory = function(a2) {
                this.transpiler = a2;
              }, goog.DependencyFactory.prototype.createDependency = function(a2, b2, c2, d2, e2, f2) {
                return e2.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(
                  a2,
                  b2,
                  c2,
                  d2,
                  e2,
                  f2,
                  this.transpiler
                ) : f2 ? new goog.TranspiledDependency(a2, b2, c2, d2, e2, this.transpiler) : e2.module == goog.ModuleType.ES6 ? "never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(a2, b2, c2, d2, e2) : new goog.Es6ModuleDependency(a2, b2, c2, d2, e2) : new goog.Dependency(a2, b2, c2, d2, e2);
              }, goog.debugLoader_ = new goog.DebugLoader_(), goog.loadClosureDeps = function() {
                goog.debugLoader_.loadClosureDeps();
              }, goog.setDependencyFactory = function(a2) {
                goog.debugLoader_.setDependencyFactory(a2);
              }, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function(a2, b2) {
                goog.debugLoader_.bootstrap(a2, b2);
              });
              goog.TRUSTED_TYPES_POLICY_NAME = "";
              goog.identity_ = function(a2) {
                return a2;
              };
              goog.createTrustedTypesPolicy = function(a2) {
                var b2 = null, c2 = goog.global.trustedTypes || goog.global.TrustedTypes;
                if (!c2 || !c2.createPolicy)
                  return b2;
                try {
                  b2 = c2.createPolicy(a2, { createHTML: goog.identity_, createScript: goog.identity_, createScriptURL: goog.identity_, createURL: goog.identity_ });
                } catch (d2) {
                  goog.logToConsole_(d2.message);
                }
                return b2;
              };
              goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null;
              goog.object = {};
              goog.object.is = function(a2, b2) {
                return a2 === b2 ? 0 !== a2 || 1 / a2 === 1 / b2 : a2 !== a2 && b2 !== b2;
              };
              goog.object.forEach = function(a2, b2, c2) {
                for (var d2 in a2)
                  b2.call(c2, a2[d2], d2, a2);
              };
              goog.object.filter = function(a2, b2, c2) {
                var d2 = {}, e2;
                for (e2 in a2)
                  b2.call(c2, a2[e2], e2, a2) && (d2[e2] = a2[e2]);
                return d2;
              };
              goog.object.map = function(a2, b2, c2) {
                var d2 = {}, e2;
                for (e2 in a2)
                  d2[e2] = b2.call(c2, a2[e2], e2, a2);
                return d2;
              };
              goog.object.some = function(a2, b2, c2) {
                for (var d2 in a2)
                  if (b2.call(c2, a2[d2], d2, a2))
                    return true;
                return false;
              };
              goog.object.every = function(a2, b2, c2) {
                for (var d2 in a2)
                  if (!b2.call(c2, a2[d2], d2, a2))
                    return false;
                return true;
              };
              goog.object.getCount = function(a2) {
                var b2 = 0, c2;
                for (c2 in a2)
                  b2++;
                return b2;
              };
              goog.object.getAnyKey = function(a2) {
                for (var b2 in a2)
                  return b2;
              };
              goog.object.getAnyValue = function(a2) {
                for (var b2 in a2)
                  return a2[b2];
              };
              goog.object.contains = function(a2, b2) {
                return goog.object.containsValue(a2, b2);
              };
              goog.object.getValues = function(a2) {
                var b2 = [], c2 = 0, d2;
                for (d2 in a2)
                  b2[c2++] = a2[d2];
                return b2;
              };
              goog.object.getKeys = function(a2) {
                var b2 = [], c2 = 0, d2;
                for (d2 in a2)
                  b2[c2++] = d2;
                return b2;
              };
              goog.object.getValueByKeys = function(a2, b2) {
                var c2 = goog.isArrayLike(b2), d2 = c2 ? b2 : arguments;
                for (c2 = c2 ? 0 : 1; c2 < d2.length; c2++) {
                  if (null == a2)
                    return;
                  a2 = a2[d2[c2]];
                }
                return a2;
              };
              goog.object.containsKey = function(a2, b2) {
                return null !== a2 && b2 in a2;
              };
              goog.object.containsValue = function(a2, b2) {
                for (var c2 in a2)
                  if (a2[c2] == b2)
                    return true;
                return false;
              };
              goog.object.findKey = function(a2, b2, c2) {
                for (var d2 in a2)
                  if (b2.call(c2, a2[d2], d2, a2))
                    return d2;
              };
              goog.object.findValue = function(a2, b2, c2) {
                return (b2 = goog.object.findKey(a2, b2, c2)) && a2[b2];
              };
              goog.object.isEmpty = function(a2) {
                for (var b2 in a2)
                  return false;
                return true;
              };
              goog.object.clear = function(a2) {
                for (var b2 in a2)
                  delete a2[b2];
              };
              goog.object.remove = function(a2, b2) {
                var c2;
                (c2 = b2 in a2) && delete a2[b2];
                return c2;
              };
              goog.object.add = function(a2, b2, c2) {
                if (null !== a2 && b2 in a2)
                  throw Error('The object already contains the key "' + b2 + '"');
                goog.object.set(a2, b2, c2);
              };
              goog.object.get = function(a2, b2, c2) {
                return null !== a2 && b2 in a2 ? a2[b2] : c2;
              };
              goog.object.set = function(a2, b2, c2) {
                a2[b2] = c2;
              };
              goog.object.setIfUndefined = function(a2, b2, c2) {
                return b2 in a2 ? a2[b2] : a2[b2] = c2;
              };
              goog.object.setWithReturnValueIfNotSet = function(a2, b2, c2) {
                if (b2 in a2)
                  return a2[b2];
                c2 = c2();
                return a2[b2] = c2;
              };
              goog.object.equals = function(a2, b2) {
                for (var c2 in a2)
                  if (!(c2 in b2) || a2[c2] !== b2[c2])
                    return false;
                for (var d2 in b2)
                  if (!(d2 in a2))
                    return false;
                return true;
              };
              goog.object.clone = function(a2) {
                var b2 = {}, c2;
                for (c2 in a2)
                  b2[c2] = a2[c2];
                return b2;
              };
              goog.object.unsafeClone = function(a2) {
                var b2 = goog.typeOf(a2);
                if ("object" == b2 || "array" == b2) {
                  if (goog.isFunction(a2.clone))
                    return a2.clone();
                  b2 = "array" == b2 ? [] : {};
                  for (var c2 in a2)
                    b2[c2] = goog.object.unsafeClone(a2[c2]);
                  return b2;
                }
                return a2;
              };
              goog.object.transpose = function(a2) {
                var b2 = {}, c2;
                for (c2 in a2)
                  b2[a2[c2]] = c2;
                return b2;
              };
              goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
              goog.object.extend = function(a2, b2) {
                for (var c2, d2, e2 = 1; e2 < arguments.length; e2++) {
                  d2 = arguments[e2];
                  for (c2 in d2)
                    a2[c2] = d2[c2];
                  for (var f2 = 0; f2 < goog.object.PROTOTYPE_FIELDS_.length; f2++)
                    c2 = goog.object.PROTOTYPE_FIELDS_[f2], Object.prototype.hasOwnProperty.call(d2, c2) && (a2[c2] = d2[c2]);
                }
              };
              goog.object.create = function(a2) {
                var b2 = arguments.length;
                if (1 == b2 && Array.isArray(arguments[0]))
                  return goog.object.create.apply(null, arguments[0]);
                if (b2 % 2)
                  throw Error("Uneven number of arguments");
                for (var c2 = {}, d2 = 0; d2 < b2; d2 += 2)
                  c2[arguments[d2]] = arguments[d2 + 1];
                return c2;
              };
              goog.object.createSet = function(a2) {
                var b2 = arguments.length;
                if (1 == b2 && Array.isArray(arguments[0]))
                  return goog.object.createSet.apply(null, arguments[0]);
                for (var c2 = {}, d2 = 0; d2 < b2; d2++)
                  c2[arguments[d2]] = true;
                return c2;
              };
              goog.object.createImmutableView = function(a2) {
                var b2 = a2;
                Object.isFrozen && !Object.isFrozen(a2) && (b2 = Object.create(a2), Object.freeze(b2));
                return b2;
              };
              goog.object.isImmutableView = function(a2) {
                return !!Object.isFrozen && Object.isFrozen(a2);
              };
              goog.object.getAllPropertyNames = function(a2, b2, c2) {
                if (!a2)
                  return [];
                if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
                  return goog.object.getKeys(a2);
                for (var d2 = {}; a2 && (a2 !== Object.prototype || b2) && (a2 !== Function.prototype || c2); ) {
                  for (var e2 = Object.getOwnPropertyNames(a2), f2 = 0; f2 < e2.length; f2++)
                    d2[e2[f2]] = true;
                  a2 = Object.getPrototypeOf(a2);
                }
                return goog.object.getKeys(d2);
              };
              goog.object.getSuperClass = function(a2) {
                return (a2 = Object.getPrototypeOf(a2.prototype)) && a2.constructor;
              };
              var jspb = { asserts: {} };
              jspb.asserts.doAssertFailure = function(a2, b2, c2, d2) {
                var e2 = "Assertion failed";
                if (c2) {
                  e2 += ": " + c2;
                  var f2 = d2;
                } else
                  a2 && (e2 += ": " + a2, f2 = b2);
                throw Error("" + e2, f2 || []);
              };
              jspb.asserts.assert = function(a2, b2, c2) {
                for (var d2 = [], e2 = 2; e2 < arguments.length; ++e2)
                  d2[e2 - 2] = arguments[e2];
                a2 || jspb.asserts.doAssertFailure("", null, b2, d2);
                return a2;
              };
              jspb.asserts.assertString = function(a2, b2, c2) {
                for (var d2 = [], e2 = 2; e2 < arguments.length; ++e2)
                  d2[e2 - 2] = arguments[e2];
                "string" !== typeof a2 && jspb.asserts.doAssertFailure("Expected string but got %s: %s.", [goog.typeOf(a2), a2], b2, d2);
                return a2;
              };
              jspb.asserts.assertArray = function(a2, b2, c2) {
                for (var d2 = [], e2 = 2; e2 < arguments.length; ++e2)
                  d2[e2 - 2] = arguments[e2];
                Array.isArray(a2) || jspb.asserts.doAssertFailure("Expected array but got %s: %s.", [goog.typeOf(a2), a2], b2, d2);
                return a2;
              };
              jspb.asserts.fail = function(a2, b2) {
                for (var c2 = [], d2 = 1; d2 < arguments.length; ++d2)
                  c2[d2 - 1] = arguments[d2];
                throw Error("Failure" + (a2 ? ": " + a2 : ""), c2);
              };
              jspb.asserts.assertInstanceof = function(a2, b2, c2, d2) {
                for (var e2 = [], f2 = 3; f2 < arguments.length; ++f2)
                  e2[f2 - 3] = arguments[f2];
                a2 instanceof b2 || jspb.asserts.doAssertFailure("Expected instanceof %s but got %s.", [jspb.asserts.getType(b2), jspb.asserts.getType(a2)], c2, e2);
                return a2;
              };
              jspb.asserts.getType = function(a2) {
                return a2 instanceof Function ? a2.displayName || a2.name || "unknown type name" : a2 instanceof Object ? a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2) : null === a2 ? "null" : typeof a2;
              };
              jspb.BinaryConstants = {};
              jspb.ConstBinaryMessage = function() {
              };
              jspb.BinaryMessage = function() {
              };
              jspb.BinaryConstants.FieldType = { INVALID: -1, DOUBLE: 1, FLOAT: 2, INT64: 3, UINT64: 4, INT32: 5, FIXED64: 6, FIXED32: 7, BOOL: 8, STRING: 9, GROUP: 10, MESSAGE: 11, BYTES: 12, UINT32: 13, ENUM: 14, SFIXED32: 15, SFIXED64: 16, SINT32: 17, SINT64: 18, FHASH64: 30, VHASH64: 31 };
              jspb.BinaryConstants.WireType = { INVALID: -1, VARINT: 0, FIXED64: 1, DELIMITED: 2, START_GROUP: 3, END_GROUP: 4, FIXED32: 5 };
              jspb.BinaryConstants.FieldTypeToWireType = function(a2) {
                var b2 = jspb.BinaryConstants.FieldType, c2 = jspb.BinaryConstants.WireType;
                switch (a2) {
                  case b2.INT32:
                  case b2.INT64:
                  case b2.UINT32:
                  case b2.UINT64:
                  case b2.SINT32:
                  case b2.SINT64:
                  case b2.BOOL:
                  case b2.ENUM:
                  case b2.VHASH64:
                    return c2.VARINT;
                  case b2.DOUBLE:
                  case b2.FIXED64:
                  case b2.SFIXED64:
                  case b2.FHASH64:
                    return c2.FIXED64;
                  case b2.STRING:
                  case b2.MESSAGE:
                  case b2.BYTES:
                    return c2.DELIMITED;
                  case b2.FLOAT:
                  case b2.FIXED32:
                  case b2.SFIXED32:
                    return c2.FIXED32;
                  default:
                    return c2.INVALID;
                }
              };
              jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1;
              jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60;
              jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54;
              jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22;
              jspb.BinaryConstants.FLOAT64_EPS = 5e-324;
              jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324;
              jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292;
              jspb.BinaryConstants.TWO_TO_20 = 1048576;
              jspb.BinaryConstants.TWO_TO_23 = 8388608;
              jspb.BinaryConstants.TWO_TO_31 = 2147483648;
              jspb.BinaryConstants.TWO_TO_32 = 4294967296;
              jspb.BinaryConstants.TWO_TO_52 = 4503599627370496;
              jspb.BinaryConstants.TWO_TO_63 = 9223372036854776e3;
              jspb.BinaryConstants.TWO_TO_64 = 18446744073709552e3;
              jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0";
              goog.debug = {};
              goog.debug.Error = function(a2) {
                if (Error.captureStackTrace)
                  Error.captureStackTrace(this, goog.debug.Error);
                else {
                  var b2 = Error().stack;
                  b2 && (this.stack = b2);
                }
                a2 && (this.message = String(a2));
                this.reportErrorToServer = true;
              };
              goog.inherits(goog.debug.Error, Error);
              goog.debug.Error.prototype.name = "CustomError";
              goog.dom = {};
              goog.dom.NodeType = { ELEMENT: 1, ATTRIBUTE: 2, TEXT: 3, CDATA_SECTION: 4, ENTITY_REFERENCE: 5, ENTITY: 6, PROCESSING_INSTRUCTION: 7, COMMENT: 8, DOCUMENT: 9, DOCUMENT_TYPE: 10, DOCUMENT_FRAGMENT: 11, NOTATION: 12 };
              goog.asserts = {};
              goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
              goog.asserts.AssertionError = function(a2, b2) {
                goog.debug.Error.call(this, goog.asserts.subs_(a2, b2));
                this.messagePattern = a2;
              };
              goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
              goog.asserts.AssertionError.prototype.name = "AssertionError";
              goog.asserts.DEFAULT_ERROR_HANDLER = function(a2) {
                throw a2;
              };
              goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
              goog.asserts.subs_ = function(a2, b2) {
                a2 = a2.split("%s");
                for (var c2 = "", d2 = a2.length - 1, e2 = 0; e2 < d2; e2++)
                  c2 += a2[e2] + (e2 < b2.length ? b2[e2] : "%s");
                return c2 + a2[d2];
              };
              goog.asserts.doAssertFailure_ = function(a2, b2, c2, d2) {
                var e2 = "Assertion failed";
                if (c2) {
                  e2 += ": " + c2;
                  var f2 = d2;
                } else
                  a2 && (e2 += ": " + a2, f2 = b2);
                a2 = new goog.asserts.AssertionError("" + e2, f2 || []);
                goog.asserts.errorHandler_(a2);
              };
              goog.asserts.setErrorHandler = function(a2) {
                goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a2);
              };
              goog.asserts.assert = function(a2, b2, c2) {
                goog.asserts.ENABLE_ASSERTS && !a2 && goog.asserts.doAssertFailure_("", null, b2, Array.prototype.slice.call(arguments, 2));
                return a2;
              };
              goog.asserts.assertExists = function(a2, b2, c2) {
                goog.asserts.ENABLE_ASSERTS && null == a2 && goog.asserts.doAssertFailure_("Expected to exist: %s.", [a2], b2, Array.prototype.slice.call(arguments, 2));
                return a2;
              };
              goog.asserts.fail = function(a2, b2) {
                goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a2 ? ": " + a2 : ""), Array.prototype.slice.call(arguments, 1)));
              };
              goog.asserts.assertNumber = function(a2, b2, c2) {
                goog.asserts.ENABLE_ASSERTS && "number" !== typeof a2 && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
                return a2;
              };
              goog.asserts.assertString = function(a2, b2, c2) {
                goog.asserts.ENABLE_ASSERTS && "string" !== typeof a2 && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
                return a2;
              };
              goog.asserts.assertFunction = function(a2, b2, c2) {
                goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a2) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
                return a2;
              };
              goog.asserts.assertObject = function(a2, b2, c2) {
                goog.asserts.ENABLE_ASSERTS && !goog.isObject(a2) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
                return a2;
              };
              goog.asserts.assertArray = function(a2, b2, c2) {
                goog.asserts.ENABLE_ASSERTS && !Array.isArray(a2) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
                return a2;
              };
              goog.asserts.assertBoolean = function(a2, b2, c2) {
                goog.asserts.ENABLE_ASSERTS && "boolean" !== typeof a2 && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
                return a2;
              };
              goog.asserts.assertElement = function(a2, b2, c2) {
                !goog.asserts.ENABLE_ASSERTS || goog.isObject(a2) && a2.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
                return a2;
              };
              goog.asserts.assertInstanceof = function(a2, b2, c2, d2) {
                !goog.asserts.ENABLE_ASSERTS || a2 instanceof b2 || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(b2), goog.asserts.getType_(a2)], c2, Array.prototype.slice.call(arguments, 3));
                return a2;
              };
              goog.asserts.assertFinite = function(a2, b2, c2) {
                !goog.asserts.ENABLE_ASSERTS || "number" == typeof a2 && isFinite(a2) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [a2], b2, Array.prototype.slice.call(arguments, 2));
                return a2;
              };
              goog.asserts.assertObjectPrototypeIsIntact = function() {
                for (var a2 in Object.prototype)
                  goog.asserts.fail(a2 + " should not be enumerable in Object.prototype.");
              };
              goog.asserts.getType_ = function(a2) {
                return a2 instanceof Function ? a2.displayName || a2.name || "unknown type name" : a2 instanceof Object ? a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2) : null === a2 ? "null" : typeof a2;
              };
              goog.array = {};
              goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
              goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR;
              goog.array.peek = function(a2) {
                return a2[a2.length - 1];
              };
              goog.array.last = goog.array.peek;
              goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(a2, b2, c2) {
                goog.asserts.assert(null != a2.length);
                return Array.prototype.indexOf.call(a2, b2, c2);
              } : function(a2, b2, c2) {
                c2 = null == c2 ? 0 : 0 > c2 ? Math.max(0, a2.length + c2) : c2;
                if ("string" === typeof a2)
                  return "string" !== typeof b2 || 1 != b2.length ? -1 : a2.indexOf(b2, c2);
                for (; c2 < a2.length; c2++)
                  if (c2 in a2 && a2[c2] === b2)
                    return c2;
                return -1;
              };
              goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(a2, b2, c2) {
                goog.asserts.assert(null != a2.length);
                return Array.prototype.lastIndexOf.call(a2, b2, null == c2 ? a2.length - 1 : c2);
              } : function(a2, b2, c2) {
                c2 = null == c2 ? a2.length - 1 : c2;
                0 > c2 && (c2 = Math.max(0, a2.length + c2));
                if ("string" === typeof a2)
                  return "string" !== typeof b2 || 1 != b2.length ? -1 : a2.lastIndexOf(b2, c2);
                for (; 0 <= c2; c2--)
                  if (c2 in a2 && a2[c2] === b2)
                    return c2;
                return -1;
              };
              goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(a2, b2, c2) {
                goog.asserts.assert(null != a2.length);
                Array.prototype.forEach.call(a2, b2, c2);
              } : function(a2, b2, c2) {
                for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
                  f2 in e2 && b2.call(c2, e2[f2], f2, a2);
              };
              goog.array.forEachRight = function(a2, b2, c2) {
                var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2;
                for (--d2; 0 <= d2; --d2)
                  d2 in e2 && b2.call(c2, e2[d2], d2, a2);
              };
              goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(a2, b2, c2) {
                goog.asserts.assert(null != a2.length);
                return Array.prototype.filter.call(a2, b2, c2);
              } : function(a2, b2, c2) {
                for (var d2 = a2.length, e2 = [], f2 = 0, g = "string" === typeof a2 ? a2.split("") : a2, h = 0; h < d2; h++)
                  if (h in g) {
                    var k = g[h];
                    b2.call(c2, k, h, a2) && (e2[f2++] = k);
                  }
                return e2;
              };
              goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(a2, b2, c2) {
                goog.asserts.assert(null != a2.length);
                return Array.prototype.map.call(a2, b2, c2);
              } : function(a2, b2, c2) {
                for (var d2 = a2.length, e2 = Array(d2), f2 = "string" === typeof a2 ? a2.split("") : a2, g = 0; g < d2; g++)
                  g in f2 && (e2[g] = b2.call(c2, f2[g], g, a2));
                return e2;
              };
              goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(a2, b2, c2, d2) {
                goog.asserts.assert(null != a2.length);
                d2 && (b2 = goog.bind(b2, d2));
                return Array.prototype.reduce.call(a2, b2, c2);
              } : function(a2, b2, c2, d2) {
                var e2 = c2;
                goog.array.forEach(a2, function(c3, g) {
                  e2 = b2.call(d2, e2, c3, g, a2);
                });
                return e2;
              };
              goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(a2, b2, c2, d2) {
                goog.asserts.assert(null != a2.length);
                goog.asserts.assert(null != b2);
                d2 && (b2 = goog.bind(b2, d2));
                return Array.prototype.reduceRight.call(a2, b2, c2);
              } : function(a2, b2, c2, d2) {
                var e2 = c2;
                goog.array.forEachRight(a2, function(c3, g) {
                  e2 = b2.call(d2, e2, c3, g, a2);
                });
                return e2;
              };
              goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(a2, b2, c2) {
                goog.asserts.assert(null != a2.length);
                return Array.prototype.some.call(a2, b2, c2);
              } : function(a2, b2, c2) {
                for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
                  if (f2 in e2 && b2.call(c2, e2[f2], f2, a2))
                    return true;
                return false;
              };
              goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(a2, b2, c2) {
                goog.asserts.assert(null != a2.length);
                return Array.prototype.every.call(a2, b2, c2);
              } : function(a2, b2, c2) {
                for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
                  if (f2 in e2 && !b2.call(c2, e2[f2], f2, a2))
                    return false;
                return true;
              };
              goog.array.count = function(a2, b2, c2) {
                var d2 = 0;
                goog.array.forEach(a2, function(a3, f2, g) {
                  b2.call(c2, a3, f2, g) && ++d2;
                }, c2);
                return d2;
              };
              goog.array.find = function(a2, b2, c2) {
                b2 = goog.array.findIndex(a2, b2, c2);
                return 0 > b2 ? null : "string" === typeof a2 ? a2.charAt(b2) : a2[b2];
              };
              goog.array.findIndex = function(a2, b2, c2) {
                for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
                  if (f2 in e2 && b2.call(c2, e2[f2], f2, a2))
                    return f2;
                return -1;
              };
              goog.array.findRight = function(a2, b2, c2) {
                b2 = goog.array.findIndexRight(a2, b2, c2);
                return 0 > b2 ? null : "string" === typeof a2 ? a2.charAt(b2) : a2[b2];
              };
              goog.array.findIndexRight = function(a2, b2, c2) {
                var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2;
                for (--d2; 0 <= d2; d2--)
                  if (d2 in e2 && b2.call(c2, e2[d2], d2, a2))
                    return d2;
                return -1;
              };
              goog.array.contains = function(a2, b2) {
                return 0 <= goog.array.indexOf(a2, b2);
              };
              goog.array.isEmpty = function(a2) {
                return 0 == a2.length;
              };
              goog.array.clear = function(a2) {
                if (!Array.isArray(a2))
                  for (var b2 = a2.length - 1; 0 <= b2; b2--)
                    delete a2[b2];
                a2.length = 0;
              };
              goog.array.insert = function(a2, b2) {
                goog.array.contains(a2, b2) || a2.push(b2);
              };
              goog.array.insertAt = function(a2, b2, c2) {
                goog.array.splice(a2, c2, 0, b2);
              };
              goog.array.insertArrayAt = function(a2, b2, c2) {
                goog.partial(goog.array.splice, a2, c2, 0).apply(null, b2);
              };
              goog.array.insertBefore = function(a2, b2, c2) {
                var d2;
                2 == arguments.length || 0 > (d2 = goog.array.indexOf(a2, c2)) ? a2.push(b2) : goog.array.insertAt(a2, b2, d2);
              };
              goog.array.remove = function(a2, b2) {
                b2 = goog.array.indexOf(a2, b2);
                var c2;
                (c2 = 0 <= b2) && goog.array.removeAt(a2, b2);
                return c2;
              };
              goog.array.removeLast = function(a2, b2) {
                b2 = goog.array.lastIndexOf(a2, b2);
                return 0 <= b2 ? (goog.array.removeAt(a2, b2), true) : false;
              };
              goog.array.removeAt = function(a2, b2) {
                goog.asserts.assert(null != a2.length);
                return 1 == Array.prototype.splice.call(a2, b2, 1).length;
              };
              goog.array.removeIf = function(a2, b2, c2) {
                b2 = goog.array.findIndex(a2, b2, c2);
                return 0 <= b2 ? (goog.array.removeAt(a2, b2), true) : false;
              };
              goog.array.removeAllIf = function(a2, b2, c2) {
                var d2 = 0;
                goog.array.forEachRight(a2, function(e2, f2) {
                  b2.call(c2, e2, f2, a2) && goog.array.removeAt(a2, f2) && d2++;
                });
                return d2;
              };
              goog.array.concat = function(a2) {
                return Array.prototype.concat.apply([], arguments);
              };
              goog.array.join = function(a2) {
                return Array.prototype.concat.apply([], arguments);
              };
              goog.array.toArray = function(a2) {
                var b2 = a2.length;
                if (0 < b2) {
                  for (var c2 = Array(b2), d2 = 0; d2 < b2; d2++)
                    c2[d2] = a2[d2];
                  return c2;
                }
                return [];
              };
              goog.array.clone = goog.array.toArray;
              goog.array.extend = function(a2, b2) {
                for (var c2 = 1; c2 < arguments.length; c2++) {
                  var d2 = arguments[c2];
                  if (goog.isArrayLike(d2)) {
                    var e2 = a2.length || 0, f2 = d2.length || 0;
                    a2.length = e2 + f2;
                    for (var g = 0; g < f2; g++)
                      a2[e2 + g] = d2[g];
                  } else
                    a2.push(d2);
                }
              };
              goog.array.splice = function(a2, b2, c2, d2) {
                goog.asserts.assert(null != a2.length);
                return Array.prototype.splice.apply(a2, goog.array.slice(arguments, 1));
              };
              goog.array.slice = function(a2, b2, c2) {
                goog.asserts.assert(null != a2.length);
                return 2 >= arguments.length ? Array.prototype.slice.call(a2, b2) : Array.prototype.slice.call(a2, b2, c2);
              };
              goog.array.removeDuplicates = function(a2, b2, c2) {
                b2 = b2 || a2;
                var d2 = function(a3) {
                  return goog.isObject(a3) ? "o" + goog.getUid(a3) : (typeof a3).charAt(0) + a3;
                };
                c2 = c2 || d2;
                d2 = {};
                for (var e2 = 0, f2 = 0; f2 < a2.length; ) {
                  var g = a2[f2++], h = c2(g);
                  Object.prototype.hasOwnProperty.call(d2, h) || (d2[h] = true, b2[e2++] = g);
                }
                b2.length = e2;
              };
              goog.array.binarySearch = function(a2, b2, c2) {
                return goog.array.binarySearch_(a2, c2 || goog.array.defaultCompare, false, b2);
              };
              goog.array.binarySelect = function(a2, b2, c2) {
                return goog.array.binarySearch_(a2, b2, true, void 0, c2);
              };
              goog.array.binarySearch_ = function(a2, b2, c2, d2, e2) {
                for (var f2 = 0, g = a2.length, h; f2 < g; ) {
                  var k = f2 + (g - f2 >>> 1);
                  var l = c2 ? b2.call(e2, a2[k], k, a2) : b2(d2, a2[k]);
                  0 < l ? f2 = k + 1 : (g = k, h = !l);
                }
                return h ? f2 : -f2 - 1;
              };
              goog.array.sort = function(a2, b2) {
                a2.sort(b2 || goog.array.defaultCompare);
              };
              goog.array.stableSort = function(a2, b2) {
                for (var c2 = Array(a2.length), d2 = 0; d2 < a2.length; d2++)
                  c2[d2] = { index: d2, value: a2[d2] };
                var e2 = b2 || goog.array.defaultCompare;
                goog.array.sort(c2, function(a3, b3) {
                  return e2(a3.value, b3.value) || a3.index - b3.index;
                });
                for (d2 = 0; d2 < a2.length; d2++)
                  a2[d2] = c2[d2].value;
              };
              goog.array.sortByKey = function(a2, b2, c2) {
                var d2 = c2 || goog.array.defaultCompare;
                goog.array.sort(a2, function(a3, c3) {
                  return d2(b2(a3), b2(c3));
                });
              };
              goog.array.sortObjectsByKey = function(a2, b2, c2) {
                goog.array.sortByKey(a2, function(a3) {
                  return a3[b2];
                }, c2);
              };
              goog.array.isSorted = function(a2, b2, c2) {
                b2 = b2 || goog.array.defaultCompare;
                for (var d2 = 1; d2 < a2.length; d2++) {
                  var e2 = b2(a2[d2 - 1], a2[d2]);
                  if (0 < e2 || 0 == e2 && c2)
                    return false;
                }
                return true;
              };
              goog.array.equals = function(a2, b2, c2) {
                if (!goog.isArrayLike(a2) || !goog.isArrayLike(b2) || a2.length != b2.length)
                  return false;
                var d2 = a2.length;
                c2 = c2 || goog.array.defaultCompareEquality;
                for (var e2 = 0; e2 < d2; e2++)
                  if (!c2(a2[e2], b2[e2]))
                    return false;
                return true;
              };
              goog.array.compare3 = function(a2, b2, c2) {
                c2 = c2 || goog.array.defaultCompare;
                for (var d2 = Math.min(a2.length, b2.length), e2 = 0; e2 < d2; e2++) {
                  var f2 = c2(a2[e2], b2[e2]);
                  if (0 != f2)
                    return f2;
                }
                return goog.array.defaultCompare(a2.length, b2.length);
              };
              goog.array.defaultCompare = function(a2, b2) {
                return a2 > b2 ? 1 : a2 < b2 ? -1 : 0;
              };
              goog.array.inverseDefaultCompare = function(a2, b2) {
                return -goog.array.defaultCompare(a2, b2);
              };
              goog.array.defaultCompareEquality = function(a2, b2) {
                return a2 === b2;
              };
              goog.array.binaryInsert = function(a2, b2, c2) {
                c2 = goog.array.binarySearch(a2, b2, c2);
                return 0 > c2 ? (goog.array.insertAt(a2, b2, -(c2 + 1)), true) : false;
              };
              goog.array.binaryRemove = function(a2, b2, c2) {
                b2 = goog.array.binarySearch(a2, b2, c2);
                return 0 <= b2 ? goog.array.removeAt(a2, b2) : false;
              };
              goog.array.bucket = function(a2, b2, c2) {
                for (var d2 = {}, e2 = 0; e2 < a2.length; e2++) {
                  var f2 = a2[e2], g = b2.call(c2, f2, e2, a2);
                  void 0 !== g && (d2[g] || (d2[g] = [])).push(f2);
                }
                return d2;
              };
              goog.array.toObject = function(a2, b2, c2) {
                var d2 = {};
                goog.array.forEach(a2, function(e2, f2) {
                  d2[b2.call(c2, e2, f2, a2)] = e2;
                });
                return d2;
              };
              goog.array.range = function(a2, b2, c2) {
                var d2 = [], e2 = 0, f2 = a2;
                c2 = c2 || 1;
                void 0 !== b2 && (e2 = a2, f2 = b2);
                if (0 > c2 * (f2 - e2))
                  return [];
                if (0 < c2)
                  for (a2 = e2; a2 < f2; a2 += c2)
                    d2.push(a2);
                else
                  for (a2 = e2; a2 > f2; a2 += c2)
                    d2.push(a2);
                return d2;
              };
              goog.array.repeat = function(a2, b2) {
                for (var c2 = [], d2 = 0; d2 < b2; d2++)
                  c2[d2] = a2;
                return c2;
              };
              goog.array.flatten = function(a2) {
                for (var b2 = [], c2 = 0; c2 < arguments.length; c2++) {
                  var d2 = arguments[c2];
                  if (Array.isArray(d2))
                    for (var e2 = 0; e2 < d2.length; e2 += 8192) {
                      var f2 = goog.array.slice(d2, e2, e2 + 8192);
                      f2 = goog.array.flatten.apply(null, f2);
                      for (var g = 0; g < f2.length; g++)
                        b2.push(f2[g]);
                    }
                  else
                    b2.push(d2);
                }
                return b2;
              };
              goog.array.rotate = function(a2, b2) {
                goog.asserts.assert(null != a2.length);
                a2.length && (b2 %= a2.length, 0 < b2 ? Array.prototype.unshift.apply(a2, a2.splice(-b2, b2)) : 0 > b2 && Array.prototype.push.apply(a2, a2.splice(0, -b2)));
                return a2;
              };
              goog.array.moveItem = function(a2, b2, c2) {
                goog.asserts.assert(0 <= b2 && b2 < a2.length);
                goog.asserts.assert(0 <= c2 && c2 < a2.length);
                b2 = Array.prototype.splice.call(a2, b2, 1);
                Array.prototype.splice.call(a2, c2, 0, b2[0]);
              };
              goog.array.zip = function(a2) {
                if (!arguments.length)
                  return [];
                for (var b2 = [], c2 = arguments[0].length, d2 = 1; d2 < arguments.length; d2++)
                  arguments[d2].length < c2 && (c2 = arguments[d2].length);
                for (d2 = 0; d2 < c2; d2++) {
                  for (var e2 = [], f2 = 0; f2 < arguments.length; f2++)
                    e2.push(arguments[f2][d2]);
                  b2.push(e2);
                }
                return b2;
              };
              goog.array.shuffle = function(a2, b2) {
                b2 = b2 || Math.random;
                for (var c2 = a2.length - 1; 0 < c2; c2--) {
                  var d2 = Math.floor(b2() * (c2 + 1)), e2 = a2[c2];
                  a2[c2] = a2[d2];
                  a2[d2] = e2;
                }
              };
              goog.array.copyByIndex = function(a2, b2) {
                var c2 = [];
                goog.array.forEach(b2, function(b3) {
                  c2.push(a2[b3]);
                });
                return c2;
              };
              goog.array.concatMap = function(a2, b2, c2) {
                return goog.array.concat.apply([], goog.array.map(a2, b2, c2));
              };
              goog.crypt = {};
              goog.crypt.stringToByteArray = function(a2) {
                for (var b2 = [], c2 = 0, d2 = 0; d2 < a2.length; d2++) {
                  var e2 = a2.charCodeAt(d2);
                  255 < e2 && (b2[c2++] = e2 & 255, e2 >>= 8);
                  b2[c2++] = e2;
                }
                return b2;
              };
              goog.crypt.byteArrayToString = function(a2) {
                if (8192 >= a2.length)
                  return String.fromCharCode.apply(null, a2);
                for (var b2 = "", c2 = 0; c2 < a2.length; c2 += 8192) {
                  var d2 = goog.array.slice(a2, c2, c2 + 8192);
                  b2 += String.fromCharCode.apply(null, d2);
                }
                return b2;
              };
              goog.crypt.byteArrayToHex = function(a2, b2) {
                return goog.array.map(a2, function(a3) {
                  a3 = a3.toString(16);
                  return 1 < a3.length ? a3 : "0" + a3;
                }).join(b2 || "");
              };
              goog.crypt.hexToByteArray = function(a2) {
                goog.asserts.assert(0 == a2.length % 2, "Key string length must be multiple of 2");
                for (var b2 = [], c2 = 0; c2 < a2.length; c2 += 2)
                  b2.push(parseInt(a2.substring(c2, c2 + 2), 16));
                return b2;
              };
              goog.crypt.stringToUtf8ByteArray = function(a2) {
                for (var b2 = [], c2 = 0, d2 = 0; d2 < a2.length; d2++) {
                  var e2 = a2.charCodeAt(d2);
                  128 > e2 ? b2[c2++] = e2 : (2048 > e2 ? b2[c2++] = e2 >> 6 | 192 : (55296 == (e2 & 64512) && d2 + 1 < a2.length && 56320 == (a2.charCodeAt(d2 + 1) & 64512) ? (e2 = 65536 + ((e2 & 1023) << 10) + (a2.charCodeAt(++d2) & 1023), b2[c2++] = e2 >> 18 | 240, b2[c2++] = e2 >> 12 & 63 | 128) : b2[c2++] = e2 >> 12 | 224, b2[c2++] = e2 >> 6 & 63 | 128), b2[c2++] = e2 & 63 | 128);
                }
                return b2;
              };
              goog.crypt.utf8ByteArrayToString = function(a2) {
                for (var b2 = [], c2 = 0, d2 = 0; c2 < a2.length; ) {
                  var e2 = a2[c2++];
                  if (128 > e2)
                    b2[d2++] = String.fromCharCode(e2);
                  else if (191 < e2 && 224 > e2) {
                    var f2 = a2[c2++];
                    b2[d2++] = String.fromCharCode((e2 & 31) << 6 | f2 & 63);
                  } else if (239 < e2 && 365 > e2) {
                    f2 = a2[c2++];
                    var g = a2[c2++], h = a2[c2++];
                    e2 = ((e2 & 7) << 18 | (f2 & 63) << 12 | (g & 63) << 6 | h & 63) - 65536;
                    b2[d2++] = String.fromCharCode(55296 + (e2 >> 10));
                    b2[d2++] = String.fromCharCode(56320 + (e2 & 1023));
                  } else
                    f2 = a2[c2++], g = a2[c2++], b2[d2++] = String.fromCharCode((e2 & 15) << 12 | (f2 & 63) << 6 | g & 63);
                }
                return b2.join("");
              };
              goog.crypt.xorByteArray = function(a2, b2) {
                goog.asserts.assert(a2.length == b2.length, "XOR array lengths must match");
                for (var c2 = [], d2 = 0; d2 < a2.length; d2++)
                  c2.push(a2[d2] ^ b2[d2]);
                return c2;
              };
              goog.dom.asserts = {};
              goog.dom.asserts.assertIsLocation = function(a2) {
                if (goog.asserts.ENABLE_ASSERTS) {
                  var b2 = goog.dom.asserts.getWindow_(a2);
                  b2 && (!a2 || !(a2 instanceof b2.Location) && a2 instanceof b2.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(a2));
                }
                return a2;
              };
              goog.dom.asserts.assertIsElementType_ = function(a2, b2) {
                if (goog.asserts.ENABLE_ASSERTS) {
                  var c2 = goog.dom.asserts.getWindow_(a2);
                  c2 && "undefined" != typeof c2[b2] && (a2 && (a2 instanceof c2[b2] || !(a2 instanceof c2.Location || a2 instanceof c2.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b2, goog.dom.asserts.debugStringForType_(a2)));
                }
                return a2;
              };
              goog.dom.asserts.assertIsHTMLAnchorElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLAnchorElement");
              };
              goog.dom.asserts.assertIsHTMLButtonElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLButtonElement");
              };
              goog.dom.asserts.assertIsHTMLLinkElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLLinkElement");
              };
              goog.dom.asserts.assertIsHTMLImageElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLImageElement");
              };
              goog.dom.asserts.assertIsHTMLAudioElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLAudioElement");
              };
              goog.dom.asserts.assertIsHTMLVideoElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLVideoElement");
              };
              goog.dom.asserts.assertIsHTMLInputElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLInputElement");
              };
              goog.dom.asserts.assertIsHTMLTextAreaElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLTextAreaElement");
              };
              goog.dom.asserts.assertIsHTMLCanvasElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLCanvasElement");
              };
              goog.dom.asserts.assertIsHTMLEmbedElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLEmbedElement");
              };
              goog.dom.asserts.assertIsHTMLFormElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLFormElement");
              };
              goog.dom.asserts.assertIsHTMLFrameElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLFrameElement");
              };
              goog.dom.asserts.assertIsHTMLIFrameElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLIFrameElement");
              };
              goog.dom.asserts.assertIsHTMLObjectElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLObjectElement");
              };
              goog.dom.asserts.assertIsHTMLScriptElement = function(a2) {
                return goog.dom.asserts.assertIsElementType_(a2, "HTMLScriptElement");
              };
              goog.dom.asserts.debugStringForType_ = function(a2) {
                if (goog.isObject(a2))
                  try {
                    return a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2);
                  } catch (b2) {
                    return "<object could not be stringified>";
                  }
                else
                  return void 0 === a2 ? "undefined" : null === a2 ? "null" : typeof a2;
              };
              goog.dom.asserts.getWindow_ = function(a2) {
                try {
                  var b2 = a2 && a2.ownerDocument, c2 = b2 && (b2.defaultView || b2.parentWindow);
                  c2 = c2 || goog.global;
                  if (c2.Element && c2.Location)
                    return c2;
                } catch (d2) {
                }
                return null;
              };
              goog.functions = {};
              goog.functions.constant = function(a2) {
                return function() {
                  return a2;
                };
              };
              goog.functions.FALSE = function() {
                return false;
              };
              goog.functions.TRUE = function() {
                return true;
              };
              goog.functions.NULL = function() {
                return null;
              };
              goog.functions.identity = function(a2, b2) {
                return a2;
              };
              goog.functions.error = function(a2) {
                return function() {
                  throw Error(a2);
                };
              };
              goog.functions.fail = function(a2) {
                return function() {
                  throw a2;
                };
              };
              goog.functions.lock = function(a2, b2) {
                b2 = b2 || 0;
                return function() {
                  return a2.apply(this, Array.prototype.slice.call(arguments, 0, b2));
                };
              };
              goog.functions.nth = function(a2) {
                return function() {
                  return arguments[a2];
                };
              };
              goog.functions.partialRight = function(a2, b2) {
                var c2 = Array.prototype.slice.call(arguments, 1);
                return function() {
                  var b3 = Array.prototype.slice.call(arguments);
                  b3.push.apply(b3, c2);
                  return a2.apply(this, b3);
                };
              };
              goog.functions.withReturnValue = function(a2, b2) {
                return goog.functions.sequence(a2, goog.functions.constant(b2));
              };
              goog.functions.equalTo = function(a2, b2) {
                return function(c2) {
                  return b2 ? a2 == c2 : a2 === c2;
                };
              };
              goog.functions.compose = function(a2, b2) {
                var c2 = arguments, d2 = c2.length;
                return function() {
                  var a3;
                  d2 && (a3 = c2[d2 - 1].apply(this, arguments));
                  for (var b3 = d2 - 2; 0 <= b3; b3--)
                    a3 = c2[b3].call(this, a3);
                  return a3;
                };
              };
              goog.functions.sequence = function(a2) {
                var b2 = arguments, c2 = b2.length;
                return function() {
                  for (var a3, e2 = 0; e2 < c2; e2++)
                    a3 = b2[e2].apply(this, arguments);
                  return a3;
                };
              };
              goog.functions.and = function(a2) {
                var b2 = arguments, c2 = b2.length;
                return function() {
                  for (var a3 = 0; a3 < c2; a3++)
                    if (!b2[a3].apply(this, arguments))
                      return false;
                  return true;
                };
              };
              goog.functions.or = function(a2) {
                var b2 = arguments, c2 = b2.length;
                return function() {
                  for (var a3 = 0; a3 < c2; a3++)
                    if (b2[a3].apply(this, arguments))
                      return true;
                  return false;
                };
              };
              goog.functions.not = function(a2) {
                return function() {
                  return !a2.apply(this, arguments);
                };
              };
              goog.functions.create = function(a2, b2) {
                var c2 = function() {
                };
                c2.prototype = a2.prototype;
                c2 = new c2();
                a2.apply(c2, Array.prototype.slice.call(arguments, 1));
                return c2;
              };
              goog.functions.CACHE_RETURN_VALUE = true;
              goog.functions.cacheReturnValue = function(a2) {
                var b2 = false, c2;
                return function() {
                  if (!goog.functions.CACHE_RETURN_VALUE)
                    return a2();
                  b2 || (c2 = a2(), b2 = true);
                  return c2;
                };
              };
              goog.functions.once = function(a2) {
                var b2 = a2;
                return function() {
                  if (b2) {
                    var a3 = b2;
                    b2 = null;
                    a3();
                  }
                };
              };
              goog.functions.debounce = function(a2, b2, c2) {
                var d2 = 0;
                return function(e2) {
                  goog.global.clearTimeout(d2);
                  var f2 = arguments;
                  d2 = goog.global.setTimeout(function() {
                    a2.apply(c2, f2);
                  }, b2);
                };
              };
              goog.functions.throttle = function(a2, b2, c2) {
                var d2 = 0, e2 = false, f2 = [], g = function() {
                  d2 = 0;
                  e2 && (e2 = false, h());
                }, h = function() {
                  d2 = goog.global.setTimeout(g, b2);
                  a2.apply(c2, f2);
                };
                return function(a3) {
                  f2 = arguments;
                  d2 ? e2 = true : h();
                };
              };
              goog.functions.rateLimit = function(a2, b2, c2) {
                var d2 = 0, e2 = function() {
                  d2 = 0;
                };
                return function(f2) {
                  d2 || (d2 = goog.global.setTimeout(e2, b2), a2.apply(c2, arguments));
                };
              };
              goog.dom.HtmlElement = function() {
              };
              goog.dom.TagName = function(a2) {
                this.tagName_ = a2;
              };
              goog.dom.TagName.prototype.toString = function() {
                return this.tagName_;
              };
              goog.dom.TagName.A = new goog.dom.TagName("A");
              goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR");
              goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM");
              goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS");
              goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET");
              goog.dom.TagName.AREA = new goog.dom.TagName("AREA");
              goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE");
              goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE");
              goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO");
              goog.dom.TagName.B = new goog.dom.TagName("B");
              goog.dom.TagName.BASE = new goog.dom.TagName("BASE");
              goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT");
              goog.dom.TagName.BDI = new goog.dom.TagName("BDI");
              goog.dom.TagName.BDO = new goog.dom.TagName("BDO");
              goog.dom.TagName.BIG = new goog.dom.TagName("BIG");
              goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE");
              goog.dom.TagName.BODY = new goog.dom.TagName("BODY");
              goog.dom.TagName.BR = new goog.dom.TagName("BR");
              goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON");
              goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS");
              goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION");
              goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER");
              goog.dom.TagName.CITE = new goog.dom.TagName("CITE");
              goog.dom.TagName.CODE = new goog.dom.TagName("CODE");
              goog.dom.TagName.COL = new goog.dom.TagName("COL");
              goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP");
              goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND");
              goog.dom.TagName.DATA = new goog.dom.TagName("DATA");
              goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST");
              goog.dom.TagName.DD = new goog.dom.TagName("DD");
              goog.dom.TagName.DEL = new goog.dom.TagName("DEL");
              goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS");
              goog.dom.TagName.DFN = new goog.dom.TagName("DFN");
              goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG");
              goog.dom.TagName.DIR = new goog.dom.TagName("DIR");
              goog.dom.TagName.DIV = new goog.dom.TagName("DIV");
              goog.dom.TagName.DL = new goog.dom.TagName("DL");
              goog.dom.TagName.DT = new goog.dom.TagName("DT");
              goog.dom.TagName.EM = new goog.dom.TagName("EM");
              goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED");
              goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET");
              goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION");
              goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE");
              goog.dom.TagName.FONT = new goog.dom.TagName("FONT");
              goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER");
              goog.dom.TagName.FORM = new goog.dom.TagName("FORM");
              goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME");
              goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET");
              goog.dom.TagName.H1 = new goog.dom.TagName("H1");
              goog.dom.TagName.H2 = new goog.dom.TagName("H2");
              goog.dom.TagName.H3 = new goog.dom.TagName("H3");
              goog.dom.TagName.H4 = new goog.dom.TagName("H4");
              goog.dom.TagName.H5 = new goog.dom.TagName("H5");
              goog.dom.TagName.H6 = new goog.dom.TagName("H6");
              goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD");
              goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER");
              goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP");
              goog.dom.TagName.HR = new goog.dom.TagName("HR");
              goog.dom.TagName.HTML = new goog.dom.TagName("HTML");
              goog.dom.TagName.I = new goog.dom.TagName("I");
              goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME");
              goog.dom.TagName.IMG = new goog.dom.TagName("IMG");
              goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT");
              goog.dom.TagName.INS = new goog.dom.TagName("INS");
              goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX");
              goog.dom.TagName.KBD = new goog.dom.TagName("KBD");
              goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN");
              goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL");
              goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND");
              goog.dom.TagName.LI = new goog.dom.TagName("LI");
              goog.dom.TagName.LINK = new goog.dom.TagName("LINK");
              goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN");
              goog.dom.TagName.MAP = new goog.dom.TagName("MAP");
              goog.dom.TagName.MARK = new goog.dom.TagName("MARK");
              goog.dom.TagName.MATH = new goog.dom.TagName("MATH");
              goog.dom.TagName.MENU = new goog.dom.TagName("MENU");
              goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM");
              goog.dom.TagName.META = new goog.dom.TagName("META");
              goog.dom.TagName.METER = new goog.dom.TagName("METER");
              goog.dom.TagName.NAV = new goog.dom.TagName("NAV");
              goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES");
              goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT");
              goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT");
              goog.dom.TagName.OL = new goog.dom.TagName("OL");
              goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP");
              goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION");
              goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT");
              goog.dom.TagName.P = new goog.dom.TagName("P");
              goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM");
              goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE");
              goog.dom.TagName.PRE = new goog.dom.TagName("PRE");
              goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS");
              goog.dom.TagName.Q = new goog.dom.TagName("Q");
              goog.dom.TagName.RP = new goog.dom.TagName("RP");
              goog.dom.TagName.RT = new goog.dom.TagName("RT");
              goog.dom.TagName.RTC = new goog.dom.TagName("RTC");
              goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY");
              goog.dom.TagName.S = new goog.dom.TagName("S");
              goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP");
              goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT");
              goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION");
              goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT");
              goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL");
              goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE");
              goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN");
              goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE");
              goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG");
              goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE");
              goog.dom.TagName.SUB = new goog.dom.TagName("SUB");
              goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY");
              goog.dom.TagName.SUP = new goog.dom.TagName("SUP");
              goog.dom.TagName.SVG = new goog.dom.TagName("SVG");
              goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE");
              goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY");
              goog.dom.TagName.TD = new goog.dom.TagName("TD");
              goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE");
              goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA");
              goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT");
              goog.dom.TagName.TH = new goog.dom.TagName("TH");
              goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD");
              goog.dom.TagName.TIME = new goog.dom.TagName("TIME");
              goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE");
              goog.dom.TagName.TR = new goog.dom.TagName("TR");
              goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK");
              goog.dom.TagName.TT = new goog.dom.TagName("TT");
              goog.dom.TagName.U = new goog.dom.TagName("U");
              goog.dom.TagName.UL = new goog.dom.TagName("UL");
              goog.dom.TagName.VAR = new goog.dom.TagName("VAR");
              goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO");
              goog.dom.TagName.WBR = new goog.dom.TagName("WBR");
              goog.dom.tags = {};
              goog.dom.tags.VOID_TAGS_ = { area: true, base: true, br: true, col: true, command: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
              goog.dom.tags.isVoidTag = function(a2) {
                return true === goog.dom.tags.VOID_TAGS_[a2];
              };
              goog.html = {};
              goog.html.trustedtypes = {};
              goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html") : null;
              goog.string = {};
              goog.string.TypedString = function() {
              };
              goog.string.Const = function(a2, b2) {
                this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = a2 === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && b2 || "";
                this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;
              };
              goog.string.Const.prototype.implementsGoogStringTypedString = true;
              goog.string.Const.prototype.getTypedStringValue = function() {
                return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
              };
              goog.DEBUG && (goog.string.Const.prototype.toString = function() {
                return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
              });
              goog.string.Const.unwrap = function(a2) {
                if (a2 instanceof goog.string.Const && a2.constructor === goog.string.Const && a2.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_)
                  return a2.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
                goog.asserts.fail("expected object of type Const, got '" + a2 + "'");
                return "type_error:Const";
              };
              goog.string.Const.from = function(a2) {
                return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, a2);
              };
              goog.string.Const.TYPE_MARKER_ = {};
              goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
              goog.string.Const.EMPTY = goog.string.Const.from("");
              goog.html.SafeScript = function() {
                this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "";
                this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
              };
              goog.html.SafeScript.prototype.implementsGoogStringTypedString = true;
              goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
              goog.html.SafeScript.fromConstant = function(a2) {
                a2 = goog.string.Const.unwrap(a2);
                return 0 === a2.length ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.SafeScript.fromConstantAndArgs = function(a2, b2) {
                for (var c2 = [], d2 = 1; d2 < arguments.length; d2++)
                  c2.push(goog.html.SafeScript.stringify_(arguments[d2]));
                return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + goog.string.Const.unwrap(a2) + ")(" + c2.join(", ") + ");");
              };
              goog.html.SafeScript.fromJson = function(a2) {
                return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(a2));
              };
              goog.html.SafeScript.prototype.getTypedStringValue = function() {
                return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
              };
              goog.DEBUG && (goog.html.SafeScript.prototype.toString = function() {
                return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}";
              });
              goog.html.SafeScript.unwrap = function(a2) {
                return goog.html.SafeScript.unwrapTrustedScript(a2).toString();
              };
              goog.html.SafeScript.unwrapTrustedScript = function(a2) {
                if (a2 instanceof goog.html.SafeScript && a2.constructor === goog.html.SafeScript && a2.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
                  return a2.privateDoNotAccessOrElseSafeScriptWrappedValue_;
                goog.asserts.fail("expected object of type SafeScript, got '" + a2 + "' of type " + goog.typeOf(a2));
                return "type_error:SafeScript";
              };
              goog.html.SafeScript.stringify_ = function(a2) {
                return JSON.stringify(a2).replace(/</g, "\\x3c");
              };
              goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(a2) {
                return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(a2);
              };
              goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
                this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(a2) : a2;
                return this;
              };
              goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
              goog.fs = {};
              goog.fs.url = {};
              goog.fs.url.createObjectUrl = function(a2) {
                return goog.fs.url.getUrlObject_().createObjectURL(a2);
              };
              goog.fs.url.revokeObjectUrl = function(a2) {
                goog.fs.url.getUrlObject_().revokeObjectURL(a2);
              };
              goog.fs.url.UrlObject_ = function() {
              };
              goog.fs.url.UrlObject_.prototype.createObjectURL = function(a2) {
              };
              goog.fs.url.UrlObject_.prototype.revokeObjectURL = function(a2) {
              };
              goog.fs.url.getUrlObject_ = function() {
                var a2 = goog.fs.url.findUrlObject_();
                if (null != a2)
                  return a2;
                throw Error("This browser doesn't seem to support blob URLs");
              };
              goog.fs.url.findUrlObject_ = function() {
                return void 0 !== goog.global.URL && void 0 !== goog.global.URL.createObjectURL ? goog.global.URL : void 0 !== goog.global.webkitURL && void 0 !== goog.global.webkitURL.createObjectURL ? goog.global.webkitURL : void 0 !== goog.global.createObjectURL ? goog.global : null;
              };
              goog.fs.url.browserSupportsObjectUrls = function() {
                return null != goog.fs.url.findUrlObject_();
              };
              goog.fs.blob = {};
              goog.fs.blob.getBlob = function(a2) {
                var b2 = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
                if (void 0 !== b2) {
                  b2 = new b2();
                  for (var c2 = 0; c2 < arguments.length; c2++)
                    b2.append(arguments[c2]);
                  return b2.getBlob();
                }
                return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments));
              };
              goog.fs.blob.getBlobWithProperties = function(a2, b2, c2) {
                var d2 = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
                if (void 0 !== d2) {
                  d2 = new d2();
                  for (var e2 = 0; e2 < a2.length; e2++)
                    d2.append(a2[e2], c2);
                  return d2.getBlob(b2);
                }
                if (void 0 !== goog.global.Blob)
                  return d2 = {}, b2 && (d2.type = b2), c2 && (d2.endings = c2), new Blob(a2, d2);
                throw Error("This browser doesn't seem to support creating Blobs");
              };
              goog.i18n = {};
              goog.i18n.bidi = {};
              goog.i18n.bidi.FORCE_RTL = false;
              goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) && (2 == goog.LOCALE.length || "-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) || 7 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) && ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() || "arab" == goog.LOCALE.substring(3, 7).toLowerCase() || "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() || "nkoo" == goog.LOCALE.substring(
                3,
                7
              ).toLowerCase() || "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() || "thaa" == goog.LOCALE.substring(3, 7).toLowerCase()) || 8 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) && ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() || "arab" == goog.LOCALE.substring(4, 8).toLowerCase() || "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() || "nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() || "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() || "thaa" == goog.LOCALE.substring(4, 8).toLowerCase());
              goog.i18n.bidi.Format = { LRE: "‪", RLE: "‫", PDF: "‬", LRM: "‎", RLM: "‏" };
              goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 };
              goog.i18n.bidi.RIGHT = "right";
              goog.i18n.bidi.LEFT = "left";
              goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
              goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
              goog.i18n.bidi.toDir = function(a2, b2) {
                return "number" == typeof a2 ? 0 < a2 ? goog.i18n.bidi.Dir.LTR : 0 > a2 ? goog.i18n.bidi.Dir.RTL : b2 ? null : goog.i18n.bidi.Dir.NEUTRAL : null == a2 ? null : a2 ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
              };
              goog.i18n.bidi.ltrChars_ = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\uD801\uD804-\uD839\uD83C-\uDBFF豈-﬜︀-﹯﻽-￿";
              goog.i18n.bidi.rtlChars_ = "֑-ۯۺ-ࣿ‏\uD802-\uD803\uD83A-\uD83Bיִ-﷿ﹰ-ﻼ";
              goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
              goog.i18n.bidi.stripHtmlIfNeeded_ = function(a2, b2) {
                return b2 ? a2.replace(goog.i18n.bidi.htmlSkipReg_, "") : a2;
              };
              goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
              goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
              goog.i18n.bidi.hasAnyRtl = function(a2, b2) {
                return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
              };
              goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
              goog.i18n.bidi.hasAnyLtr = function(a2, b2) {
                return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
              };
              goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
              goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
              goog.i18n.bidi.isRtlChar = function(a2) {
                return goog.i18n.bidi.rtlRe_.test(a2);
              };
              goog.i18n.bidi.isLtrChar = function(a2) {
                return goog.i18n.bidi.ltrRe_.test(a2);
              };
              goog.i18n.bidi.isNeutralChar = function(a2) {
                return !goog.i18n.bidi.isLtrChar(a2) && !goog.i18n.bidi.isRtlChar(a2);
              };
              goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
              goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
              goog.i18n.bidi.startsWithRtl = function(a2, b2) {
                return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
              };
              goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
              goog.i18n.bidi.startsWithLtr = function(a2, b2) {
                return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
              };
              goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
              goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
              goog.i18n.bidi.isNeutralText = function(a2, b2) {
                a2 = goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2);
                return goog.i18n.bidi.isRequiredLtrRe_.test(a2) || !goog.i18n.bidi.hasAnyLtr(a2) && !goog.i18n.bidi.hasAnyRtl(a2);
              };
              goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$");
              goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$");
              goog.i18n.bidi.endsWithLtr = function(a2, b2) {
                return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
              };
              goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
              goog.i18n.bidi.endsWithRtl = function(a2, b2) {
                return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
              };
              goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
              goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
              goog.i18n.bidi.isRtlLanguage = function(a2) {
                return goog.i18n.bidi.rtlLocalesRe_.test(a2);
              };
              goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
              goog.i18n.bidi.guardBracketInText = function(a2, b2) {
                b2 = (void 0 === b2 ? goog.i18n.bidi.hasAnyRtl(a2) : b2) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
                return a2.replace(goog.i18n.bidi.bracketGuardTextRe_, b2 + "$&" + b2);
              };
              goog.i18n.bidi.enforceRtlInHtml = function(a2) {
                return "<" == a2.charAt(0) ? a2.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a2 + "</span>";
              };
              goog.i18n.bidi.enforceRtlInText = function(a2) {
                return goog.i18n.bidi.Format.RLE + a2 + goog.i18n.bidi.Format.PDF;
              };
              goog.i18n.bidi.enforceLtrInHtml = function(a2) {
                return "<" == a2.charAt(0) ? a2.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a2 + "</span>";
              };
              goog.i18n.bidi.enforceLtrInText = function(a2) {
                return goog.i18n.bidi.Format.LRE + a2 + goog.i18n.bidi.Format.PDF;
              };
              goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
              goog.i18n.bidi.leftRe_ = /left/gi;
              goog.i18n.bidi.rightRe_ = /right/gi;
              goog.i18n.bidi.tempRe_ = /%%%%/g;
              goog.i18n.bidi.mirrorCSS = function(a2) {
                return a2.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
              };
              goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
              goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
              goog.i18n.bidi.normalizeHebrewQuote = function(a2) {
                return a2.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1״").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1׳");
              };
              goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
              goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
              goog.i18n.bidi.rtlDetectionThreshold_ = 0.4;
              goog.i18n.bidi.estimateDirection = function(a2, b2) {
                var c2 = 0, d2 = 0, e2 = false;
                a2 = goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2).split(goog.i18n.bidi.wordSeparatorRe_);
                for (b2 = 0; b2 < a2.length; b2++) {
                  var f2 = a2[b2];
                  goog.i18n.bidi.startsWithRtl(f2) ? (c2++, d2++) : goog.i18n.bidi.isRequiredLtrRe_.test(f2) ? e2 = true : goog.i18n.bidi.hasAnyLtr(f2) ? d2++ : goog.i18n.bidi.hasNumeralsRe_.test(f2) && (e2 = true);
                }
                return 0 == d2 ? e2 ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : c2 / d2 > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
              };
              goog.i18n.bidi.detectRtlDirectionality = function(a2, b2) {
                return goog.i18n.bidi.estimateDirection(a2, b2) == goog.i18n.bidi.Dir.RTL;
              };
              goog.i18n.bidi.setElementDirAndAlign = function(a2, b2) {
                a2 && (b2 = goog.i18n.bidi.toDir(b2)) && (a2.style.textAlign = b2 == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, a2.dir = b2 == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr");
              };
              goog.i18n.bidi.setElementDirByTextDirectionality = function(a2, b2) {
                switch (goog.i18n.bidi.estimateDirection(b2)) {
                  case goog.i18n.bidi.Dir.LTR:
                    a2.dir = "ltr";
                    break;
                  case goog.i18n.bidi.Dir.RTL:
                    a2.dir = "rtl";
                    break;
                  default:
                    a2.removeAttribute("dir");
                }
              };
              goog.i18n.bidi.DirectionalString = function() {
              };
              goog.html.TrustedResourceUrl = function(a2, b2) {
                this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = a2 === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && b2 || "";
                this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
              };
              goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = true;
              goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
                return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
              };
              goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
              goog.html.TrustedResourceUrl.prototype.getDirection = function() {
                return goog.i18n.bidi.Dir.LTR;
              };
              goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(a2, b2) {
                var c2 = goog.html.TrustedResourceUrl.unwrap(this);
                c2 = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(c2);
                var d2 = c2[3] || "";
                return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c2[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", c2[2] || "", a2) + goog.html.TrustedResourceUrl.stringifyParams_("#", d2, b2));
              };
              goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function() {
                return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}";
              });
              goog.html.TrustedResourceUrl.unwrap = function(a2) {
                return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a2).toString();
              };
              goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(a2) {
                if (a2 instanceof goog.html.TrustedResourceUrl && a2.constructor === goog.html.TrustedResourceUrl && a2.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
                  return a2.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
                goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + a2 + "' of type " + goog.typeOf(a2));
                return "type_error:TrustedResourceUrl";
              };
              goog.html.TrustedResourceUrl.format = function(a2, b2) {
                var c2 = goog.string.Const.unwrap(a2);
                if (!goog.html.TrustedResourceUrl.BASE_URL_.test(c2))
                  throw Error("Invalid TrustedResourceUrl format: " + c2);
                a2 = c2.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function(a3, e2) {
                  if (!Object.prototype.hasOwnProperty.call(b2, e2))
                    throw Error('Found marker, "' + e2 + '", in format string, "' + c2 + '", but no valid label mapping found in args: ' + JSON.stringify(b2));
                  a3 = b2[e2];
                  return a3 instanceof goog.string.Const ? goog.string.Const.unwrap(a3) : encodeURIComponent(String(a3));
                });
                return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
              goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
              goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
              goog.html.TrustedResourceUrl.formatWithParams = function(a2, b2, c2, d2) {
                return goog.html.TrustedResourceUrl.format(a2, b2).cloneWithParams(c2, d2);
              };
              goog.html.TrustedResourceUrl.fromConstant = function(a2) {
                return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a2));
              };
              goog.html.TrustedResourceUrl.fromConstants = function(a2) {
                for (var b2 = "", c2 = 0; c2 < a2.length; c2++)
                  b2 += goog.string.Const.unwrap(a2[c2]);
                return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b2);
              };
              goog.html.TrustedResourceUrl.fromSafeScript = function(a2) {
                a2 = goog.fs.blob.getBlobWithProperties([goog.html.SafeScript.unwrap(a2)], "text/javascript");
                a2 = goog.fs.url.createObjectUrl(a2);
                return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
              goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(a2) {
                a2 = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(a2) : a2;
                return new goog.html.TrustedResourceUrl(goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_, a2);
              };
              goog.html.TrustedResourceUrl.stringifyParams_ = function(a2, b2, c2) {
                if (null == c2)
                  return b2;
                if ("string" === typeof c2)
                  return c2 ? a2 + encodeURIComponent(c2) : "";
                for (var d2 in c2) {
                  var e2 = c2[d2];
                  e2 = Array.isArray(e2) ? e2 : [e2];
                  for (var f2 = 0; f2 < e2.length; f2++) {
                    var g = e2[f2];
                    null != g && (b2 || (b2 = a2), b2 += (b2.length > a2.length ? "&" : "") + encodeURIComponent(d2) + "=" + encodeURIComponent(String(g)));
                  }
                }
                return b2;
              };
              goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
              goog.string.internal = {};
              goog.string.internal.startsWith = function(a2, b2) {
                return 0 == a2.lastIndexOf(b2, 0);
              };
              goog.string.internal.endsWith = function(a2, b2) {
                var c2 = a2.length - b2.length;
                return 0 <= c2 && a2.indexOf(b2, c2) == c2;
              };
              goog.string.internal.caseInsensitiveStartsWith = function(a2, b2) {
                return 0 == goog.string.internal.caseInsensitiveCompare(b2, a2.substr(0, b2.length));
              };
              goog.string.internal.caseInsensitiveEndsWith = function(a2, b2) {
                return 0 == goog.string.internal.caseInsensitiveCompare(b2, a2.substr(a2.length - b2.length, b2.length));
              };
              goog.string.internal.caseInsensitiveEquals = function(a2, b2) {
                return a2.toLowerCase() == b2.toLowerCase();
              };
              goog.string.internal.isEmptyOrWhitespace = function(a2) {
                return /^[\s\xa0]*$/.test(a2);
              };
              goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(a2) {
                return a2.trim();
              } : function(a2) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a2)[1];
              };
              goog.string.internal.caseInsensitiveCompare = function(a2, b2) {
                a2 = String(a2).toLowerCase();
                b2 = String(b2).toLowerCase();
                return a2 < b2 ? -1 : a2 == b2 ? 0 : 1;
              };
              goog.string.internal.newLineToBr = function(a2, b2) {
                return a2.replace(/(\r\n|\r|\n)/g, b2 ? "<br />" : "<br>");
              };
              goog.string.internal.htmlEscape = function(a2, b2) {
                if (b2)
                  a2 = a2.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
                else {
                  if (!goog.string.internal.ALL_RE_.test(a2))
                    return a2;
                  -1 != a2.indexOf("&") && (a2 = a2.replace(goog.string.internal.AMP_RE_, "&amp;"));
                  -1 != a2.indexOf("<") && (a2 = a2.replace(
                    goog.string.internal.LT_RE_,
                    "&lt;"
                  ));
                  -1 != a2.indexOf(">") && (a2 = a2.replace(goog.string.internal.GT_RE_, "&gt;"));
                  -1 != a2.indexOf('"') && (a2 = a2.replace(goog.string.internal.QUOT_RE_, "&quot;"));
                  -1 != a2.indexOf("'") && (a2 = a2.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;"));
                  -1 != a2.indexOf("\0") && (a2 = a2.replace(goog.string.internal.NULL_RE_, "&#0;"));
                }
                return a2;
              };
              goog.string.internal.AMP_RE_ = /&/g;
              goog.string.internal.LT_RE_ = /</g;
              goog.string.internal.GT_RE_ = />/g;
              goog.string.internal.QUOT_RE_ = /"/g;
              goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
              goog.string.internal.NULL_RE_ = /\x00/g;
              goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
              goog.string.internal.whitespaceEscape = function(a2, b2) {
                return goog.string.internal.newLineToBr(a2.replace(/  /g, " &#160;"), b2);
              };
              goog.string.internal.contains = function(a2, b2) {
                return -1 != a2.indexOf(b2);
              };
              goog.string.internal.caseInsensitiveContains = function(a2, b2) {
                return goog.string.internal.contains(a2.toLowerCase(), b2.toLowerCase());
              };
              goog.string.internal.compareVersions = function(a2, b2) {
                var c2 = 0;
                a2 = goog.string.internal.trim(String(a2)).split(".");
                b2 = goog.string.internal.trim(String(b2)).split(".");
                for (var d2 = Math.max(a2.length, b2.length), e2 = 0; 0 == c2 && e2 < d2; e2++) {
                  var f2 = a2[e2] || "", g = b2[e2] || "";
                  do {
                    f2 = /(\d*)(\D*)(.*)/.exec(f2) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f2[0].length && 0 == g[0].length)
                      break;
                    c2 = 0 == f2[1].length ? 0 : parseInt(f2[1], 10);
                    var h = 0 == g[1].length ? 0 : parseInt(g[1], 10);
                    c2 = goog.string.internal.compareElements_(c2, h) || goog.string.internal.compareElements_(0 == f2[2].length, 0 == g[2].length) || goog.string.internal.compareElements_(f2[2], g[2]);
                    f2 = f2[3];
                    g = g[3];
                  } while (0 == c2);
                }
                return c2;
              };
              goog.string.internal.compareElements_ = function(a2, b2) {
                return a2 < b2 ? -1 : a2 > b2 ? 1 : 0;
              };
              goog.html.SafeUrl = function(a2, b2) {
                this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = a2 === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && b2 || "";
                this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
              };
              goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
              goog.html.SafeUrl.prototype.implementsGoogStringTypedString = true;
              goog.html.SafeUrl.prototype.getTypedStringValue = function() {
                return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
              };
              goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
              goog.html.SafeUrl.prototype.getDirection = function() {
                return goog.i18n.bidi.Dir.LTR;
              };
              goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function() {
                return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}";
              });
              goog.html.SafeUrl.unwrap = function(a2) {
                if (a2 instanceof goog.html.SafeUrl && a2.constructor === goog.html.SafeUrl && a2.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
                  return a2.privateDoNotAccessOrElseSafeUrlWrappedValue_;
                goog.asserts.fail("expected object of type SafeUrl, got '" + a2 + "' of type " + goog.typeOf(a2));
                return "type_error:SafeUrl";
              };
              goog.html.SafeUrl.fromConstant = function(a2) {
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a2));
              };
              goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i;
              goog.html.SafeUrl.isSafeMimeType = function(a2) {
                return goog.html.SAFE_MIME_TYPE_PATTERN_.test(a2);
              };
              goog.html.SafeUrl.fromBlob = function(a2) {
                a2 = goog.html.SafeUrl.isSafeMimeType(a2.type) ? goog.fs.url.createObjectUrl(a2) : goog.html.SafeUrl.INNOCUOUS_STRING;
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.SafeUrl.fromMediaSource = function(a2) {
                goog.asserts.assert("MediaSource" in goog.global, "No support for MediaSource");
                a2 = a2 instanceof MediaSource ? goog.fs.url.createObjectUrl(a2) : goog.html.SafeUrl.INNOCUOUS_STRING;
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
              goog.html.SafeUrl.fromDataUrl = function(a2) {
                a2 = a2.replace(/(%0A|%0D)/g, "");
                var b2 = a2.match(goog.html.DATA_URL_PATTERN_);
                b2 = b2 && goog.html.SafeUrl.isSafeMimeType(b2[1]);
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2 ? a2 : goog.html.SafeUrl.INNOCUOUS_STRING);
              };
              goog.html.SafeUrl.fromTelUrl = function(a2) {
                goog.string.internal.caseInsensitiveStartsWith(a2, "tel:") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
              goog.html.SafeUrl.fromSipUrl = function(a2) {
                goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(a2)) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.SafeUrl.fromFacebookMessengerUrl = function(a2) {
                goog.string.internal.caseInsensitiveStartsWith(a2, "fb-messenger://share") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.SafeUrl.fromWhatsAppUrl = function(a2) {
                goog.string.internal.caseInsensitiveStartsWith(a2, "whatsapp://send") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.SafeUrl.fromSmsUrl = function(a2) {
                goog.string.internal.caseInsensitiveStartsWith(a2, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.SafeUrl.isSmsUrlBodyValid_ = function(a2) {
                var b2 = a2.indexOf("#");
                0 < b2 && (a2 = a2.substring(0, b2));
                b2 = a2.match(/[?&]body=/gi);
                if (!b2)
                  return true;
                if (1 < b2.length)
                  return false;
                a2 = a2.match(/[?&]body=([^&]*)/)[1];
                if (!a2)
                  return true;
                try {
                  decodeURIComponent(a2);
                } catch (c2) {
                  return false;
                }
                return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a2);
              };
              goog.html.SafeUrl.fromSshUrl = function(a2) {
                goog.string.internal.caseInsensitiveStartsWith(a2, "ssh://") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.SafeUrl.sanitizeChromeExtensionUrl = function(a2, b2) {
                return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, a2, b2);
              };
              goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(a2, b2) {
                return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, a2, b2);
              };
              goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function(a2, b2) {
                return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, a2, b2);
              };
              goog.html.SafeUrl.sanitizeExtensionUrl_ = function(a2, b2, c2) {
                (a2 = a2.exec(b2)) ? (a2 = a2[1], -1 == (c2 instanceof goog.string.Const ? [goog.string.Const.unwrap(c2)] : c2.map(function(a3) {
                  return goog.string.Const.unwrap(a3);
                })).indexOf(a2) && (b2 = goog.html.SafeUrl.INNOCUOUS_STRING)) : b2 = goog.html.SafeUrl.INNOCUOUS_STRING;
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2);
              };
              goog.html.SafeUrl.fromTrustedResourceUrl = function(a2) {
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(a2));
              };
              goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
              goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
              goog.html.SafeUrl.sanitize = function(a2) {
                if (a2 instanceof goog.html.SafeUrl)
                  return a2;
                a2 = "object" == typeof a2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
                goog.html.SAFE_URL_PATTERN_.test(a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.SafeUrl.sanitizeAssertUnchanged = function(a2, b2) {
                if (a2 instanceof goog.html.SafeUrl)
                  return a2;
                a2 = "object" == typeof a2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
                if (b2 && /^data:/i.test(a2) && (b2 = goog.html.SafeUrl.fromDataUrl(a2), b2.getTypedStringValue() == a2))
                  return b2;
                goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(a2), "%s does not match the safe URL pattern", a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(a2) {
                return new goog.html.SafeUrl(goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_, a2);
              };
              goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
              goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
              goog.html.SafeStyle = function() {
                this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "";
                this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
              };
              goog.html.SafeStyle.prototype.implementsGoogStringTypedString = true;
              goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
              goog.html.SafeStyle.fromConstant = function(a2) {
                a2 = goog.string.Const.unwrap(a2);
                if (0 === a2.length)
                  return goog.html.SafeStyle.EMPTY;
                goog.asserts.assert(goog.string.internal.endsWith(a2, ";"), "Last character of style string is not ';': " + a2);
                goog.asserts.assert(goog.string.internal.contains(a2, ":"), `Style string must contain at least one ':', to specify a "name: value" pair: ` + a2);
                return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.SafeStyle.prototype.getTypedStringValue = function() {
                return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
              };
              goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function() {
                return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}";
              });
              goog.html.SafeStyle.unwrap = function(a2) {
                if (a2 instanceof goog.html.SafeStyle && a2.constructor === goog.html.SafeStyle && a2.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
                  return a2.privateDoNotAccessOrElseSafeStyleWrappedValue_;
                goog.asserts.fail("expected object of type SafeStyle, got '" + a2 + "' of type " + goog.typeOf(a2));
                return "type_error:SafeStyle";
              };
              goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(a2) {
                return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(a2);
              };
              goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
                this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = a2;
                return this;
              };
              goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
              goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
              goog.html.SafeStyle.create = function(a2) {
                var b2 = "", c2;
                for (c2 in a2) {
                  if (!/^[-_a-zA-Z0-9]+$/.test(c2))
                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + c2);
                  var d2 = a2[c2];
                  null != d2 && (d2 = Array.isArray(d2) ? goog.array.map(d2, goog.html.SafeStyle.sanitizePropertyValue_).join(" ") : goog.html.SafeStyle.sanitizePropertyValue_(d2), b2 += c2 + ":" + d2 + ";");
                }
                return b2 ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2) : goog.html.SafeStyle.EMPTY;
              };
              goog.html.SafeStyle.sanitizePropertyValue_ = function(a2) {
                if (a2 instanceof goog.html.SafeUrl)
                  return 'url("' + goog.html.SafeUrl.unwrap(a2).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
                a2 = a2 instanceof goog.string.Const ? goog.string.Const.unwrap(a2) : goog.html.SafeStyle.sanitizePropertyValueString_(String(a2));
                if (/[{;}]/.test(a2))
                  throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [a2]);
                return a2;
              };
              goog.html.SafeStyle.sanitizePropertyValueString_ = function(a2) {
                var b2 = a2.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.URL_RE_, "url");
                if (goog.html.SafeStyle.VALUE_RE_.test(b2)) {
                  if (goog.html.SafeStyle.COMMENT_RE_.test(a2))
                    return goog.asserts.fail("String value disallows comments, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
                  if (!goog.html.SafeStyle.hasBalancedQuotes_(a2))
                    return goog.asserts.fail("String value requires balanced quotes, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
                  if (!goog.html.SafeStyle.hasBalancedSquareBrackets_(a2))
                    return goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
                } else
                  return goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
                return goog.html.SafeStyle.sanitizeUrl_(a2);
              };
              goog.html.SafeStyle.hasBalancedQuotes_ = function(a2) {
                for (var b2 = true, c2 = true, d2 = 0; d2 < a2.length; d2++) {
                  var e2 = a2.charAt(d2);
                  "'" == e2 && c2 ? b2 = !b2 : '"' == e2 && b2 && (c2 = !c2);
                }
                return b2 && c2;
              };
              goog.html.SafeStyle.hasBalancedSquareBrackets_ = function(a2) {
                for (var b2 = true, c2 = /^[-_a-zA-Z0-9]$/, d2 = 0; d2 < a2.length; d2++) {
                  var e2 = a2.charAt(d2);
                  if ("]" == e2) {
                    if (b2)
                      return false;
                    b2 = true;
                  } else if ("[" == e2) {
                    if (!b2)
                      return false;
                    b2 = false;
                  } else if (!b2 && !c2.test(e2))
                    return false;
                }
                return b2;
              };
              goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = `[-,."'%_!# a-zA-Z0-9\\[\\]]`;
              goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$");
              goog.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
              goog.html.SafeStyle.ALLOWED_FUNCTIONS_ = "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(" ");
              goog.html.SafeStyle.FUNCTIONS_RE_ = new RegExp("\\b(" + goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|") + ")\\([-+*/0-9a-z.%\\[\\], ]+\\)", "g");
              goog.html.SafeStyle.COMMENT_RE_ = /\/\*/;
              goog.html.SafeStyle.sanitizeUrl_ = function(a2) {
                return a2.replace(goog.html.SafeStyle.URL_RE_, function(a3, c2, d2, e2) {
                  var b2 = "";
                  d2 = d2.replace(/^(['"])(.*)\1$/, function(a4, c3, d3) {
                    b2 = c3;
                    return d3;
                  });
                  a3 = goog.html.SafeUrl.sanitize(d2).getTypedStringValue();
                  return c2 + b2 + a3 + b2 + e2;
                });
              };
              goog.html.SafeStyle.concat = function(a2) {
                var b2 = "", c2 = function(a3) {
                  Array.isArray(a3) ? goog.array.forEach(a3, c2) : b2 += goog.html.SafeStyle.unwrap(a3);
                };
                goog.array.forEach(arguments, c2);
                return b2 ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2) : goog.html.SafeStyle.EMPTY;
              };
              goog.html.SafeStyleSheet = function() {
                this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "";
                this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
              };
              goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = true;
              goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
              goog.html.SafeStyleSheet.createRule = function(a2, b2) {
                if (goog.string.internal.contains(a2, "<"))
                  throw Error("Selector does not allow '<', got: " + a2);
                var c2 = a2.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
                if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c2))
                  throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a2);
                if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(c2))
                  throw Error("() and [] in selector must be balanced, got: " + a2);
                b2 instanceof goog.html.SafeStyle || (b2 = goog.html.SafeStyle.create(b2));
                a2 = a2 + "{" + goog.html.SafeStyle.unwrap(b2).replace(/</g, "\\3C ") + "}";
                return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.SafeStyleSheet.hasBalancedBrackets_ = function(a2) {
                for (var b2 = { "(": ")", "[": "]" }, c2 = [], d2 = 0; d2 < a2.length; d2++) {
                  var e2 = a2[d2];
                  if (b2[e2])
                    c2.push(b2[e2]);
                  else if (goog.object.contains(b2, e2) && c2.pop() != e2)
                    return false;
                }
                return 0 == c2.length;
              };
              goog.html.SafeStyleSheet.concat = function(a2) {
                var b2 = "", c2 = function(a3) {
                  Array.isArray(a3) ? goog.array.forEach(a3, c2) : b2 += goog.html.SafeStyleSheet.unwrap(a3);
                };
                goog.array.forEach(arguments, c2);
                return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b2);
              };
              goog.html.SafeStyleSheet.fromConstant = function(a2) {
                a2 = goog.string.Const.unwrap(a2);
                if (0 === a2.length)
                  return goog.html.SafeStyleSheet.EMPTY;
                goog.asserts.assert(!goog.string.internal.contains(a2, "<"), "Forbidden '<' character in style sheet string: " + a2);
                return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a2);
              };
              goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
                return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
              };
              goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function() {
                return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}";
              });
              goog.html.SafeStyleSheet.unwrap = function(a2) {
                if (a2 instanceof goog.html.SafeStyleSheet && a2.constructor === goog.html.SafeStyleSheet && a2.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
                  return a2.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
                goog.asserts.fail("expected object of type SafeStyleSheet, got '" + a2 + "' of type " + goog.typeOf(a2));
                return "type_error:SafeStyleSheet";
              };
              goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(a2) {
                return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(a2);
              };
              goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
                this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = a2;
                return this;
              };
              goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
              goog.labs = {};
              goog.labs.userAgent = {};
              goog.labs.userAgent.util = {};
              goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
                var a2 = goog.labs.userAgent.util.getNavigator_();
                return a2 && (a2 = a2.userAgent) ? a2 : "";
              };
              goog.labs.userAgent.util.getNavigator_ = function() {
                return goog.global.navigator;
              };
              goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
              goog.labs.userAgent.util.setUserAgent = function(a2) {
                goog.labs.userAgent.util.userAgent_ = a2 || goog.labs.userAgent.util.getNativeUserAgentString_();
              };
              goog.labs.userAgent.util.getUserAgent = function() {
                return goog.labs.userAgent.util.userAgent_;
              };
              goog.labs.userAgent.util.matchUserAgent = function(a2) {
                var b2 = goog.labs.userAgent.util.getUserAgent();
                return goog.string.internal.contains(b2, a2);
              };
              goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(a2) {
                var b2 = goog.labs.userAgent.util.getUserAgent();
                return goog.string.internal.caseInsensitiveContains(b2, a2);
              };
              goog.labs.userAgent.util.extractVersionTuples = function(a2) {
                for (var b2 = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c2 = [], d2; d2 = b2.exec(a2); )
                  c2.push([d2[1], d2[2], d2[3] || void 0]);
                return c2;
              };
              goog.labs.userAgent.browser = {};
              goog.labs.userAgent.browser.matchOpera_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Opera");
              };
              goog.labs.userAgent.browser.matchIE_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
              };
              goog.labs.userAgent.browser.matchEdgeHtml_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Edge");
              };
              goog.labs.userAgent.browser.matchEdgeChromium_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Edg/");
              };
              goog.labs.userAgent.browser.matchOperaChromium_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("OPR");
              };
              goog.labs.userAgent.browser.matchFirefox_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS");
              };
              goog.labs.userAgent.browser.matchSafari_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"));
              };
              goog.labs.userAgent.browser.matchCoast_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Coast");
              };
              goog.labs.userAgent.browser.matchIosWebview_ = function() {
                return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit");
              };
              goog.labs.userAgent.browser.matchChrome_ = function() {
                return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_();
              };
              goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk());
              };
              goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
              goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
              goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_;
              goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_;
              goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_;
              goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
              goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
              goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
              goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_;
              goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
              goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
              goog.labs.userAgent.browser.isSilk = function() {
                return goog.labs.userAgent.util.matchUserAgent("Silk");
              };
              goog.labs.userAgent.browser.getVersion = function() {
                function a2(a3) {
                  a3 = goog.array.find(a3, d2);
                  return c2[a3] || "";
                }
                var b2 = goog.labs.userAgent.util.getUserAgent();
                if (goog.labs.userAgent.browser.isIE())
                  return goog.labs.userAgent.browser.getIEVersion_(b2);
                b2 = goog.labs.userAgent.util.extractVersionTuples(b2);
                var c2 = {};
                goog.array.forEach(b2, function(a3) {
                  c2[a3[0]] = a3[1];
                });
                var d2 = goog.partial(goog.object.containsKey, c2);
                return goog.labs.userAgent.browser.isOpera() ? a2(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? a2(["Edge"]) : goog.labs.userAgent.browser.isEdgeChromium() ? a2(["Edg"]) : goog.labs.userAgent.browser.isChrome() ? a2(["Chrome", "CriOS", "HeadlessChrome"]) : (b2 = b2[2]) && b2[1] || "";
              };
              goog.labs.userAgent.browser.isVersionOrHigher = function(a2) {
                return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), a2);
              };
              goog.labs.userAgent.browser.getIEVersion_ = function(a2) {
                var b2 = /rv: *([\d\.]*)/.exec(a2);
                if (b2 && b2[1])
                  return b2[1];
                b2 = "";
                var c2 = /MSIE +([\d\.]+)/.exec(a2);
                if (c2 && c2[1])
                  if (a2 = /Trident\/(\d.\d)/.exec(a2), "7.0" == c2[1])
                    if (a2 && a2[1])
                      switch (a2[1]) {
                        case "4.0":
                          b2 = "8.0";
                          break;
                        case "5.0":
                          b2 = "9.0";
                          break;
                        case "6.0":
                          b2 = "10.0";
                          break;
                        case "7.0":
                          b2 = "11.0";
                      }
                    else
                      b2 = "7.0";
                  else
                    b2 = c2[1];
                return b2;
              };
              goog.html.SafeHtml = function() {
                this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
                this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
                this.dir_ = null;
              };
              goog.html.SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG;
              goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE = true;
              goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = true;
              goog.html.SafeHtml.prototype.getDirection = function() {
                return this.dir_;
              };
              goog.html.SafeHtml.prototype.implementsGoogStringTypedString = true;
              goog.html.SafeHtml.prototype.getTypedStringValue = function() {
                return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
              };
              goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function() {
                return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}";
              });
              goog.html.SafeHtml.unwrap = function(a2) {
                return goog.html.SafeHtml.unwrapTrustedHTML(a2).toString();
              };
              goog.html.SafeHtml.unwrapTrustedHTML = function(a2) {
                if (a2 instanceof goog.html.SafeHtml && a2.constructor === goog.html.SafeHtml && a2.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
                  return a2.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
                goog.asserts.fail("expected object of type SafeHtml, got '" + a2 + "' of type " + goog.typeOf(a2));
                return "type_error:SafeHtml";
              };
              goog.html.SafeHtml.htmlEscape = function(a2) {
                if (a2 instanceof goog.html.SafeHtml)
                  return a2;
                var b2 = "object" == typeof a2, c2 = null;
                b2 && a2.implementsGoogI18nBidiDirectionalString && (c2 = a2.getDirection());
                a2 = b2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
                return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(a2), c2);
              };
              goog.html.SafeHtml.htmlEscapePreservingNewlines = function(a2) {
                if (a2 instanceof goog.html.SafeHtml)
                  return a2;
                a2 = goog.html.SafeHtml.htmlEscape(a2);
                return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(a2)), a2.getDirection());
              };
              goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(a2) {
                if (a2 instanceof goog.html.SafeHtml)
                  return a2;
                a2 = goog.html.SafeHtml.htmlEscape(a2);
                return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(a2)), a2.getDirection());
              };
              goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape;
              goog.html.SafeHtml.comment = function(a2) {
                return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!--" + goog.string.internal.htmlEscape(a2) + "-->", null);
              };
              goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
              goog.html.SafeHtml.URL_ATTRIBUTES_ = { action: true, cite: true, data: true, formaction: true, href: true, manifest: true, poster: true, src: true };
              goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = { APPLET: true, BASE: true, EMBED: true, IFRAME: true, LINK: true, MATH: true, META: true, OBJECT: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
              goog.html.SafeHtml.create = function(a2, b2, c2) {
                goog.html.SafeHtml.verifyTagName(String(a2));
                return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a2), b2, c2);
              };
              goog.html.SafeHtml.verifyTagName = function(a2) {
                if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a2))
                  throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Invalid tag name <" + a2 + ">." : "");
                if (a2.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
                  throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Tag name <" + a2 + "> is not allowed for SafeHtml." : "");
              };
              goog.html.SafeHtml.createIframe = function(a2, b2, c2, d2) {
                a2 && goog.html.TrustedResourceUrl.unwrap(a2);
                var e2 = {};
                e2.src = a2 || null;
                e2.srcdoc = b2 && goog.html.SafeHtml.unwrap(b2);
                a2 = goog.html.SafeHtml.combineAttributes(e2, { sandbox: "" }, c2);
                return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a2, d2);
              };
              goog.html.SafeHtml.createSandboxIframe = function(a2, b2, c2, d2) {
                if (!goog.html.SafeHtml.canUseSandboxIframe())
                  throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
                var e2 = {};
                e2.src = a2 ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a2)) : null;
                e2.srcdoc = b2 || null;
                e2.sandbox = "";
                a2 = goog.html.SafeHtml.combineAttributes(e2, {}, c2);
                return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a2, d2);
              };
              goog.html.SafeHtml.canUseSandboxIframe = function() {
                return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype;
              };
              goog.html.SafeHtml.createScriptSrc = function(a2, b2) {
                goog.html.TrustedResourceUrl.unwrap(a2);
                a2 = goog.html.SafeHtml.combineAttributes({ src: a2 }, {}, b2);
                return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", a2);
              };
              goog.html.SafeHtml.createScript = function(a2, b2) {
                for (var c2 in b2) {
                  var d2 = c2.toLowerCase();
                  if ("language" == d2 || "src" == d2 || "text" == d2 || "type" == d2)
                    throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot set "' + d2 + '" attribute' : "");
                }
                c2 = "";
                a2 = goog.array.concat(a2);
                for (d2 = 0; d2 < a2.length; d2++)
                  c2 += goog.html.SafeScript.unwrap(a2[d2]);
                a2 = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c2, goog.i18n.bidi.Dir.NEUTRAL);
                return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", b2, a2);
              };
              goog.html.SafeHtml.createStyle = function(a2, b2) {
                b2 = goog.html.SafeHtml.combineAttributes({ type: "text/css" }, {}, b2);
                var c2 = "";
                a2 = goog.array.concat(a2);
                for (var d2 = 0; d2 < a2.length; d2++)
                  c2 += goog.html.SafeStyleSheet.unwrap(a2[d2]);
                a2 = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c2, goog.i18n.bidi.Dir.NEUTRAL);
                return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", b2, a2);
              };
              goog.html.SafeHtml.createMetaRefresh = function(a2, b2) {
                a2 = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a2));
                (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains(a2, ";") && (a2 = "'" + a2.replace(/'/g, "%27") + "'");
                return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", { "http-equiv": "refresh", content: (b2 || 0) + "; url=" + a2 });
              };
              goog.html.SafeHtml.getAttrNameAndValue_ = function(a2, b2, c2) {
                if (c2 instanceof goog.string.Const)
                  c2 = goog.string.Const.unwrap(c2);
                else if ("style" == b2.toLowerCase())
                  if (goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)
                    c2 = goog.html.SafeHtml.getStyleValue_(c2);
                  else
                    throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
                else {
                  if (/^on/i.test(b2))
                    throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + b2 + '" requires goog.string.Const value, "' + c2 + '" given.' : "");
                  if (b2.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
                    if (c2 instanceof goog.html.TrustedResourceUrl)
                      c2 = goog.html.TrustedResourceUrl.unwrap(c2);
                    else if (c2 instanceof goog.html.SafeUrl)
                      c2 = goog.html.SafeUrl.unwrap(c2);
                    else if ("string" === typeof c2)
                      c2 = goog.html.SafeUrl.sanitize(c2).getTypedStringValue();
                    else
                      throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + b2 + '" on tag "' + a2 + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + c2 + '" given.' : "");
                }
                c2.implementsGoogStringTypedString && (c2 = c2.getTypedStringValue());
                goog.asserts.assert("string" === typeof c2 || "number" === typeof c2, "String or number value expected, got " + typeof c2 + " with value: " + c2);
                return b2 + '="' + goog.string.internal.htmlEscape(String(c2)) + '"';
              };
              goog.html.SafeHtml.getStyleValue_ = function(a2) {
                if (!goog.isObject(a2))
                  throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a2 + " given: " + a2 : "");
                a2 instanceof goog.html.SafeStyle || (a2 = goog.html.SafeStyle.create(a2));
                return goog.html.SafeStyle.unwrap(a2);
              };
              goog.html.SafeHtml.createWithDir = function(a2, b2, c2, d2) {
                b2 = goog.html.SafeHtml.create(b2, c2, d2);
                b2.dir_ = a2;
                return b2;
              };
              goog.html.SafeHtml.join = function(a2, b2) {
                a2 = goog.html.SafeHtml.htmlEscape(a2);
                var c2 = a2.getDirection(), d2 = [], e2 = function(a3) {
                  Array.isArray(a3) ? goog.array.forEach(a3, e2) : (a3 = goog.html.SafeHtml.htmlEscape(a3), d2.push(goog.html.SafeHtml.unwrap(a3)), a3 = a3.getDirection(), c2 == goog.i18n.bidi.Dir.NEUTRAL ? c2 = a3 : a3 != goog.i18n.bidi.Dir.NEUTRAL && c2 != a3 && (c2 = null));
                };
                goog.array.forEach(b2, e2);
                return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d2.join(goog.html.SafeHtml.unwrap(a2)), c2);
              };
              goog.html.SafeHtml.concat = function(a2) {
                return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
              };
              goog.html.SafeHtml.concatWithDir = function(a2, b2) {
                var c2 = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
                c2.dir_ = a2;
                return c2;
              };
              goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
              goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(a2, b2) {
                return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(a2, b2);
              };
              goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2, b2) {
                this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(a2) : a2;
                this.dir_ = b2;
                return this;
              };
              goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(a2, b2, c2) {
                var d2 = null;
                var e2 = "<" + a2 + goog.html.SafeHtml.stringifyAttributes(a2, b2);
                null == c2 ? c2 = [] : Array.isArray(c2) || (c2 = [c2]);
                goog.dom.tags.isVoidTag(a2.toLowerCase()) ? (goog.asserts.assert(!c2.length, "Void tag <" + a2 + "> does not allow content."), e2 += ">") : (d2 = goog.html.SafeHtml.concat(c2), e2 += ">" + goog.html.SafeHtml.unwrap(d2) + "</" + a2 + ">", d2 = d2.getDirection());
                (a2 = b2 && b2.dir) && (d2 = /^(ltr|rtl|auto)$/i.test(a2) ? goog.i18n.bidi.Dir.NEUTRAL : null);
                return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                  e2,
                  d2
                );
              };
              goog.html.SafeHtml.stringifyAttributes = function(a2, b2) {
                var c2 = "";
                if (b2)
                  for (var d2 in b2) {
                    if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(d2))
                      throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Invalid attribute name "' + d2 + '".' : "");
                    var e2 = b2[d2];
                    null != e2 && (c2 += " " + goog.html.SafeHtml.getAttrNameAndValue_(a2, d2, e2));
                  }
                return c2;
              };
              goog.html.SafeHtml.combineAttributes = function(a2, b2, c2) {
                var d2 = {}, e2;
                for (e2 in a2)
                  goog.asserts.assert(e2.toLowerCase() == e2, "Must be lower case"), d2[e2] = a2[e2];
                for (e2 in b2)
                  goog.asserts.assert(e2.toLowerCase() == e2, "Must be lower case"), d2[e2] = b2[e2];
                if (c2)
                  for (e2 in c2) {
                    var f2 = e2.toLowerCase();
                    if (f2 in a2)
                      throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot override "' + f2 + '" attribute, got "' + e2 + '" with value "' + c2[e2] + '"' : "");
                    f2 in b2 && delete d2[f2];
                    d2[e2] = c2[e2];
                  }
                return d2;
              };
              goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL);
              goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL);
              goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL);
              goog.html.uncheckedconversions = {};
              goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(a2, b2, c2) {
                goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
                goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
                return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b2, c2 || null);
              };
              goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(a2, b2) {
                goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
                goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
                return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b2);
              };
              goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(a2, b2) {
                goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
                goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
                return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2);
              };
              goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(a2, b2) {
                goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
                goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
                return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b2);
              };
              goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(a2, b2) {
                goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
                goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2);
              };
              goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(a2, b2) {
                goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
                goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
                return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b2);
              };
              goog.dom.safe = {};
              goog.dom.safe.InsertAdjacentHtmlPosition = { AFTERBEGIN: "afterbegin", AFTEREND: "afterend", BEFOREBEGIN: "beforebegin", BEFOREEND: "beforeend" };
              goog.dom.safe.insertAdjacentHtml = function(a2, b2, c2) {
                a2.insertAdjacentHTML(b2, goog.html.SafeHtml.unwrapTrustedHTML(c2));
              };
              goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = { MATH: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
              goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function() {
                if (goog.DEBUG && "undefined" === typeof document)
                  return false;
                var a2 = document.createElement("div"), b2 = document.createElement("div");
                b2.appendChild(document.createElement("div"));
                a2.appendChild(b2);
                if (goog.DEBUG && !a2.firstChild)
                  return false;
                b2 = a2.firstChild.firstChild;
                a2.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY);
                return !b2.parentElement;
              });
              goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(a2, b2) {
                if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
                  for (; a2.lastChild; )
                    a2.removeChild(a2.lastChild);
                a2.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b2);
              };
              goog.dom.safe.setInnerHtml = function(a2, b2) {
                if (goog.asserts.ENABLE_ASSERTS) {
                  var c2 = a2.tagName.toUpperCase();
                  if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[c2])
                    throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a2.tagName + ".");
                }
                goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a2, b2);
              };
              goog.dom.safe.setOuterHtml = function(a2, b2) {
                a2.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b2);
              };
              goog.dom.safe.setFormElementAction = function(a2, b2) {
                b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
                goog.dom.asserts.assertIsHTMLFormElement(a2).action = goog.html.SafeUrl.unwrap(b2);
              };
              goog.dom.safe.setButtonFormAction = function(a2, b2) {
                b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
                goog.dom.asserts.assertIsHTMLButtonElement(a2).formAction = goog.html.SafeUrl.unwrap(b2);
              };
              goog.dom.safe.setInputFormAction = function(a2, b2) {
                b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
                goog.dom.asserts.assertIsHTMLInputElement(a2).formAction = goog.html.SafeUrl.unwrap(b2);
              };
              goog.dom.safe.setStyle = function(a2, b2) {
                a2.style.cssText = goog.html.SafeStyle.unwrap(b2);
              };
              goog.dom.safe.documentWrite = function(a2, b2) {
                a2.write(goog.html.SafeHtml.unwrapTrustedHTML(b2));
              };
              goog.dom.safe.setAnchorHref = function(a2, b2) {
                goog.dom.asserts.assertIsHTMLAnchorElement(a2);
                b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
                a2.href = goog.html.SafeUrl.unwrap(b2);
              };
              goog.dom.safe.setImageSrc = function(a2, b2) {
                goog.dom.asserts.assertIsHTMLImageElement(a2);
                if (!(b2 instanceof goog.html.SafeUrl)) {
                  var c2 = /^data:image\//i.test(b2);
                  b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
                }
                a2.src = goog.html.SafeUrl.unwrap(b2);
              };
              goog.dom.safe.setAudioSrc = function(a2, b2) {
                goog.dom.asserts.assertIsHTMLAudioElement(a2);
                if (!(b2 instanceof goog.html.SafeUrl)) {
                  var c2 = /^data:audio\//i.test(b2);
                  b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
                }
                a2.src = goog.html.SafeUrl.unwrap(b2);
              };
              goog.dom.safe.setVideoSrc = function(a2, b2) {
                goog.dom.asserts.assertIsHTMLVideoElement(a2);
                if (!(b2 instanceof goog.html.SafeUrl)) {
                  var c2 = /^data:video\//i.test(b2);
                  b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
                }
                a2.src = goog.html.SafeUrl.unwrap(b2);
              };
              goog.dom.safe.setEmbedSrc = function(a2, b2) {
                goog.dom.asserts.assertIsHTMLEmbedElement(a2);
                a2.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
              };
              goog.dom.safe.setFrameSrc = function(a2, b2) {
                goog.dom.asserts.assertIsHTMLFrameElement(a2);
                a2.src = goog.html.TrustedResourceUrl.unwrap(b2);
              };
              goog.dom.safe.setIframeSrc = function(a2, b2) {
                goog.dom.asserts.assertIsHTMLIFrameElement(a2);
                a2.src = goog.html.TrustedResourceUrl.unwrap(b2);
              };
              goog.dom.safe.setIframeSrcdoc = function(a2, b2) {
                goog.dom.asserts.assertIsHTMLIFrameElement(a2);
                a2.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(b2);
              };
              goog.dom.safe.setLinkHrefAndRel = function(a2, b2, c2) {
                goog.dom.asserts.assertIsHTMLLinkElement(a2);
                a2.rel = c2;
                goog.string.internal.caseInsensitiveContains(c2, "stylesheet") ? (goog.asserts.assert(b2 instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), a2.href = goog.html.TrustedResourceUrl.unwrap(b2)) : a2.href = b2 instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrap(b2) : b2 instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrap(b2) : goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeAssertUnchanged(b2));
              };
              goog.dom.safe.setObjectData = function(a2, b2) {
                goog.dom.asserts.assertIsHTMLObjectElement(a2);
                a2.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
              };
              goog.dom.safe.setScriptSrc = function(a2, b2) {
                goog.dom.asserts.assertIsHTMLScriptElement(a2);
                a2.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
                (b2 = goog.getScriptNonce()) && a2.setAttribute("nonce", b2);
              };
              goog.dom.safe.setScriptContent = function(a2, b2) {
                goog.dom.asserts.assertIsHTMLScriptElement(a2);
                a2.text = goog.html.SafeScript.unwrapTrustedScript(b2);
                (b2 = goog.getScriptNonce()) && a2.setAttribute("nonce", b2);
              };
              goog.dom.safe.setLocationHref = function(a2, b2) {
                goog.dom.asserts.assertIsLocation(a2);
                b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
                a2.href = goog.html.SafeUrl.unwrap(b2);
              };
              goog.dom.safe.assignLocation = function(a2, b2) {
                goog.dom.asserts.assertIsLocation(a2);
                b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
                a2.assign(goog.html.SafeUrl.unwrap(b2));
              };
              goog.dom.safe.replaceLocation = function(a2, b2) {
                b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
                a2.replace(goog.html.SafeUrl.unwrap(b2));
              };
              goog.dom.safe.openInWindow = function(a2, b2, c2, d2, e2) {
                a2 = a2 instanceof goog.html.SafeUrl ? a2 : goog.html.SafeUrl.sanitizeAssertUnchanged(a2);
                b2 = b2 || goog.global;
                c2 = c2 instanceof goog.string.Const ? goog.string.Const.unwrap(c2) : c2 || "";
                return b2.open(goog.html.SafeUrl.unwrap(a2), c2, d2, e2);
              };
              goog.dom.safe.parseFromStringHtml = function(a2, b2) {
                return goog.dom.safe.parseFromString(a2, b2, "text/html");
              };
              goog.dom.safe.parseFromString = function(a2, b2, c2) {
                return a2.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(b2), c2);
              };
              goog.dom.safe.createImageFromBlob = function(a2) {
                if (!/^image\/.*/g.test(a2.type))
                  throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
                var b2 = goog.global.URL.createObjectURL(a2);
                a2 = new goog.global.Image();
                a2.onload = function() {
                  goog.global.URL.revokeObjectURL(b2);
                };
                goog.dom.safe.setImageSrc(a2, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), b2));
                return a2;
              };
              goog.string.DETECT_DOUBLE_ESCAPING = false;
              goog.string.FORCE_NON_DOM_HTML_UNESCAPING = false;
              goog.string.Unicode = { NBSP: " " };
              goog.string.startsWith = goog.string.internal.startsWith;
              goog.string.endsWith = goog.string.internal.endsWith;
              goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
              goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
              goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
              goog.string.subs = function(a2, b2) {
                for (var c2 = a2.split("%s"), d2 = "", e2 = Array.prototype.slice.call(arguments, 1); e2.length && 1 < c2.length; )
                  d2 += c2.shift() + e2.shift();
                return d2 + c2.join("%s");
              };
              goog.string.collapseWhitespace = function(a2) {
                return a2.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
              };
              goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
              goog.string.isEmptyString = function(a2) {
                return 0 == a2.length;
              };
              goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
              goog.string.isEmptyOrWhitespaceSafe = function(a2) {
                return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a2));
              };
              goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
              goog.string.isBreakingWhitespace = function(a2) {
                return !/[^\t\n\r ]/.test(a2);
              };
              goog.string.isAlpha = function(a2) {
                return !/[^a-zA-Z]/.test(a2);
              };
              goog.string.isNumeric = function(a2) {
                return !/[^0-9]/.test(a2);
              };
              goog.string.isAlphaNumeric = function(a2) {
                return !/[^a-zA-Z0-9]/.test(a2);
              };
              goog.string.isSpace = function(a2) {
                return " " == a2;
              };
              goog.string.isUnicodeChar = function(a2) {
                return 1 == a2.length && " " <= a2 && "~" >= a2 || "" <= a2 && "�" >= a2;
              };
              goog.string.stripNewlines = function(a2) {
                return a2.replace(/(\r\n|\r|\n)+/g, " ");
              };
              goog.string.canonicalizeNewlines = function(a2) {
                return a2.replace(/(\r\n|\r|\n)/g, "\n");
              };
              goog.string.normalizeWhitespace = function(a2) {
                return a2.replace(/\xa0|\s/g, " ");
              };
              goog.string.normalizeSpaces = function(a2) {
                return a2.replace(/\xa0|[ \t]+/g, " ");
              };
              goog.string.collapseBreakingSpaces = function(a2) {
                return a2.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
              };
              goog.string.trim = goog.string.internal.trim;
              goog.string.trimLeft = function(a2) {
                return a2.replace(/^[\s\xa0]+/, "");
              };
              goog.string.trimRight = function(a2) {
                return a2.replace(/[\s\xa0]+$/, "");
              };
              goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
              goog.string.numberAwareCompare_ = function(a2, b2, c2) {
                if (a2 == b2)
                  return 0;
                if (!a2)
                  return -1;
                if (!b2)
                  return 1;
                for (var d2 = a2.toLowerCase().match(c2), e2 = b2.toLowerCase().match(c2), f2 = Math.min(d2.length, e2.length), g = 0; g < f2; g++) {
                  c2 = d2[g];
                  var h = e2[g];
                  if (c2 != h)
                    return a2 = parseInt(c2, 10), !isNaN(a2) && (b2 = parseInt(h, 10), !isNaN(b2) && a2 - b2) ? a2 - b2 : c2 < h ? -1 : 1;
                }
                return d2.length != e2.length ? d2.length - e2.length : a2 < b2 ? -1 : 1;
              };
              goog.string.intAwareCompare = function(a2, b2) {
                return goog.string.numberAwareCompare_(a2, b2, /\d+|\D+/g);
              };
              goog.string.floatAwareCompare = function(a2, b2) {
                return goog.string.numberAwareCompare_(a2, b2, /\d+|\.\d+|\D+/g);
              };
              goog.string.numerateCompare = goog.string.floatAwareCompare;
              goog.string.urlEncode = function(a2) {
                return encodeURIComponent(String(a2));
              };
              goog.string.urlDecode = function(a2) {
                return decodeURIComponent(a2.replace(/\+/g, " "));
              };
              goog.string.newLineToBr = goog.string.internal.newLineToBr;
              goog.string.htmlEscape = function(a2, b2) {
                a2 = goog.string.internal.htmlEscape(a2, b2);
                goog.string.DETECT_DOUBLE_ESCAPING && (a2 = a2.replace(goog.string.E_RE_, "&#101;"));
                return a2;
              };
              goog.string.E_RE_ = /e/g;
              goog.string.unescapeEntities = function(a2) {
                return goog.string.contains(a2, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a2) : goog.string.unescapePureXmlEntities_(a2) : a2;
              };
              goog.string.unescapeEntitiesWithDocument = function(a2, b2) {
                return goog.string.contains(a2, "&") ? goog.string.unescapeEntitiesUsingDom_(a2, b2) : a2;
              };
              goog.string.unescapeEntitiesUsingDom_ = function(a2, b2) {
                var c2 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
                var d2 = b2 ? b2.createElement("div") : goog.global.document.createElement("div");
                return a2.replace(goog.string.HTML_ENTITY_PATTERN_, function(a3, b3) {
                  var e2 = c2[a3];
                  if (e2)
                    return e2;
                  "#" == b3.charAt(0) && (b3 = Number("0" + b3.substr(1)), isNaN(b3) || (e2 = String.fromCharCode(b3)));
                  e2 || (goog.dom.safe.setInnerHtml(d2, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(
                    goog.string.Const.from("Single HTML entity."),
                    a3 + " "
                  )), e2 = d2.firstChild.nodeValue.slice(0, -1));
                  return c2[a3] = e2;
                });
              };
              goog.string.unescapePureXmlEntities_ = function(a2) {
                return a2.replace(/&([^;]+);/g, function(a3, c2) {
                  switch (c2) {
                    case "amp":
                      return "&";
                    case "lt":
                      return "<";
                    case "gt":
                      return ">";
                    case "quot":
                      return '"';
                    default:
                      return "#" != c2.charAt(0) || (c2 = Number("0" + c2.substr(1)), isNaN(c2)) ? a3 : String.fromCharCode(c2);
                  }
                });
              };
              goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
              goog.string.whitespaceEscape = function(a2, b2) {
                return goog.string.newLineToBr(a2.replace(/  /g, " &#160;"), b2);
              };
              goog.string.preserveSpaces = function(a2) {
                return a2.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
              };
              goog.string.stripQuotes = function(a2, b2) {
                for (var c2 = b2.length, d2 = 0; d2 < c2; d2++) {
                  var e2 = 1 == c2 ? b2 : b2.charAt(d2);
                  if (a2.charAt(0) == e2 && a2.charAt(a2.length - 1) == e2)
                    return a2.substring(1, a2.length - 1);
                }
                return a2;
              };
              goog.string.truncate = function(a2, b2, c2) {
                c2 && (a2 = goog.string.unescapeEntities(a2));
                a2.length > b2 && (a2 = a2.substring(0, b2 - 3) + "...");
                c2 && (a2 = goog.string.htmlEscape(a2));
                return a2;
              };
              goog.string.truncateMiddle = function(a2, b2, c2, d2) {
                c2 && (a2 = goog.string.unescapeEntities(a2));
                if (d2 && a2.length > b2) {
                  d2 > b2 && (d2 = b2);
                  var e2 = a2.length - d2;
                  a2 = a2.substring(0, b2 - d2) + "..." + a2.substring(e2);
                } else
                  a2.length > b2 && (d2 = Math.floor(b2 / 2), e2 = a2.length - d2, a2 = a2.substring(0, d2 + b2 % 2) + "..." + a2.substring(e2));
                c2 && (a2 = goog.string.htmlEscape(a2));
                return a2;
              };
              goog.string.specialEscapeChars_ = { "\0": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\v": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C" };
              goog.string.jsEscapeCache_ = { "'": "\\'" };
              goog.string.quote = function(a2) {
                a2 = String(a2);
                for (var b2 = ['"'], c2 = 0; c2 < a2.length; c2++) {
                  var d2 = a2.charAt(c2), e2 = d2.charCodeAt(0);
                  b2[c2 + 1] = goog.string.specialEscapeChars_[d2] || (31 < e2 && 127 > e2 ? d2 : goog.string.escapeChar(d2));
                }
                b2.push('"');
                return b2.join("");
              };
              goog.string.escapeString = function(a2) {
                for (var b2 = [], c2 = 0; c2 < a2.length; c2++)
                  b2[c2] = goog.string.escapeChar(a2.charAt(c2));
                return b2.join("");
              };
              goog.string.escapeChar = function(a2) {
                if (a2 in goog.string.jsEscapeCache_)
                  return goog.string.jsEscapeCache_[a2];
                if (a2 in goog.string.specialEscapeChars_)
                  return goog.string.jsEscapeCache_[a2] = goog.string.specialEscapeChars_[a2];
                var b2 = a2.charCodeAt(0);
                if (31 < b2 && 127 > b2)
                  var c2 = a2;
                else {
                  if (256 > b2) {
                    if (c2 = "\\x", 16 > b2 || 256 < b2)
                      c2 += "0";
                  } else
                    c2 = "\\u", 4096 > b2 && (c2 += "0");
                  c2 += b2.toString(16).toUpperCase();
                }
                return goog.string.jsEscapeCache_[a2] = c2;
              };
              goog.string.contains = goog.string.internal.contains;
              goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
              goog.string.countOf = function(a2, b2) {
                return a2 && b2 ? a2.split(b2).length - 1 : 0;
              };
              goog.string.removeAt = function(a2, b2, c2) {
                var d2 = a2;
                0 <= b2 && b2 < a2.length && 0 < c2 && (d2 = a2.substr(0, b2) + a2.substr(b2 + c2, a2.length - b2 - c2));
                return d2;
              };
              goog.string.remove = function(a2, b2) {
                return a2.replace(b2, "");
              };
              goog.string.removeAll = function(a2, b2) {
                b2 = new RegExp(goog.string.regExpEscape(b2), "g");
                return a2.replace(b2, "");
              };
              goog.string.replaceAll = function(a2, b2, c2) {
                b2 = new RegExp(goog.string.regExpEscape(b2), "g");
                return a2.replace(b2, c2.replace(/\$/g, "$$$$"));
              };
              goog.string.regExpEscape = function(a2) {
                return String(a2).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
              };
              goog.string.repeat = String.prototype.repeat ? function(a2, b2) {
                return a2.repeat(b2);
              } : function(a2, b2) {
                return Array(b2 + 1).join(a2);
              };
              goog.string.padNumber = function(a2, b2, c2) {
                a2 = void 0 !== c2 ? a2.toFixed(c2) : String(a2);
                c2 = a2.indexOf(".");
                -1 == c2 && (c2 = a2.length);
                return goog.string.repeat("0", Math.max(0, b2 - c2)) + a2;
              };
              goog.string.makeSafe = function(a2) {
                return null == a2 ? "" : String(a2);
              };
              goog.string.buildString = function(a2) {
                return Array.prototype.join.call(arguments, "");
              };
              goog.string.getRandomString = function() {
                return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
              };
              goog.string.compareVersions = goog.string.internal.compareVersions;
              goog.string.hashCode = function(a2) {
                for (var b2 = 0, c2 = 0; c2 < a2.length; ++c2)
                  b2 = 31 * b2 + a2.charCodeAt(c2) >>> 0;
                return b2;
              };
              goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
              goog.string.createUniqueString = function() {
                return "goog_" + goog.string.uniqueStringCounter_++;
              };
              goog.string.toNumber = function(a2) {
                var b2 = Number(a2);
                return 0 == b2 && goog.string.isEmptyOrWhitespace(a2) ? NaN : b2;
              };
              goog.string.isLowerCamelCase = function(a2) {
                return /^[a-z]+([A-Z][a-z]*)*$/.test(a2);
              };
              goog.string.isUpperCamelCase = function(a2) {
                return /^([A-Z][a-z]*)+$/.test(a2);
              };
              goog.string.toCamelCase = function(a2) {
                return String(a2).replace(/\-([a-z])/g, function(a3, c2) {
                  return c2.toUpperCase();
                });
              };
              goog.string.toSelectorCase = function(a2) {
                return String(a2).replace(/([A-Z])/g, "-$1").toLowerCase();
              };
              goog.string.toTitleCase = function(a2, b2) {
                b2 = "string" === typeof b2 ? goog.string.regExpEscape(b2) : "\\s";
                return a2.replace(new RegExp("(^" + (b2 ? "|[" + b2 + "]+" : "") + ")([a-z])", "g"), function(a3, b3, e2) {
                  return b3 + e2.toUpperCase();
                });
              };
              goog.string.capitalize = function(a2) {
                return String(a2.charAt(0)).toUpperCase() + String(a2.substr(1)).toLowerCase();
              };
              goog.string.parseInt = function(a2) {
                isFinite(a2) && (a2 = String(a2));
                return "string" === typeof a2 ? /^\s*-?0x/i.test(a2) ? parseInt(a2, 16) : parseInt(a2, 10) : NaN;
              };
              goog.string.splitLimit = function(a2, b2, c2) {
                a2 = a2.split(b2);
                for (var d2 = []; 0 < c2 && a2.length; )
                  d2.push(a2.shift()), c2--;
                a2.length && d2.push(a2.join(b2));
                return d2;
              };
              goog.string.lastComponent = function(a2, b2) {
                if (b2)
                  "string" == typeof b2 && (b2 = [b2]);
                else
                  return a2;
                for (var c2 = -1, d2 = 0; d2 < b2.length; d2++)
                  if ("" != b2[d2]) {
                    var e2 = a2.lastIndexOf(b2[d2]);
                    e2 > c2 && (c2 = e2);
                  }
                return -1 == c2 ? a2 : a2.slice(c2 + 1);
              };
              goog.string.editDistance = function(a2, b2) {
                var c2 = [], d2 = [];
                if (a2 == b2)
                  return 0;
                if (!a2.length || !b2.length)
                  return Math.max(a2.length, b2.length);
                for (var e2 = 0; e2 < b2.length + 1; e2++)
                  c2[e2] = e2;
                for (e2 = 0; e2 < a2.length; e2++) {
                  d2[0] = e2 + 1;
                  for (var f2 = 0; f2 < b2.length; f2++)
                    d2[f2 + 1] = Math.min(d2[f2] + 1, c2[f2 + 1] + 1, c2[f2] + Number(a2[e2] != b2[f2]));
                  for (f2 = 0; f2 < c2.length; f2++)
                    c2[f2] = d2[f2];
                }
                return d2[b2.length];
              };
              goog.labs.userAgent.engine = {};
              goog.labs.userAgent.engine.isPresto = function() {
                return goog.labs.userAgent.util.matchUserAgent("Presto");
              };
              goog.labs.userAgent.engine.isTrident = function() {
                return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
              };
              goog.labs.userAgent.engine.isEdge = function() {
                return goog.labs.userAgent.util.matchUserAgent("Edge");
              };
              goog.labs.userAgent.engine.isWebKit = function() {
                return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge();
              };
              goog.labs.userAgent.engine.isGecko = function() {
                return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge();
              };
              goog.labs.userAgent.engine.getVersion = function() {
                var a2 = goog.labs.userAgent.util.getUserAgent();
                if (a2) {
                  a2 = goog.labs.userAgent.util.extractVersionTuples(a2);
                  var b2 = goog.labs.userAgent.engine.getEngineTuple_(a2);
                  if (b2)
                    return "Gecko" == b2[0] ? goog.labs.userAgent.engine.getVersionForKey_(a2, "Firefox") : b2[1];
                  a2 = a2[0];
                  var c2;
                  if (a2 && (c2 = a2[2]) && (c2 = /Trident\/([^\s;]+)/.exec(c2)))
                    return c2[1];
                }
                return "";
              };
              goog.labs.userAgent.engine.getEngineTuple_ = function(a2) {
                if (!goog.labs.userAgent.engine.isEdge())
                  return a2[1];
                for (var b2 = 0; b2 < a2.length; b2++) {
                  var c2 = a2[b2];
                  if ("Edge" == c2[0])
                    return c2;
                }
              };
              goog.labs.userAgent.engine.isVersionOrHigher = function(a2) {
                return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), a2);
              };
              goog.labs.userAgent.engine.getVersionForKey_ = function(a2, b2) {
                return (a2 = goog.array.find(a2, function(a3) {
                  return b2 == a3[0];
                })) && a2[1] || "";
              };
              goog.labs.userAgent.platform = {};
              goog.labs.userAgent.platform.isAndroid = function() {
                return goog.labs.userAgent.util.matchUserAgent("Android");
              };
              goog.labs.userAgent.platform.isIpod = function() {
                return goog.labs.userAgent.util.matchUserAgent("iPod");
              };
              goog.labs.userAgent.platform.isIphone = function() {
                return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad");
              };
              goog.labs.userAgent.platform.isIpad = function() {
                return goog.labs.userAgent.util.matchUserAgent("iPad");
              };
              goog.labs.userAgent.platform.isIos = function() {
                return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();
              };
              goog.labs.userAgent.platform.isMacintosh = function() {
                return goog.labs.userAgent.util.matchUserAgent("Macintosh");
              };
              goog.labs.userAgent.platform.isLinux = function() {
                return goog.labs.userAgent.util.matchUserAgent("Linux");
              };
              goog.labs.userAgent.platform.isWindows = function() {
                return goog.labs.userAgent.util.matchUserAgent("Windows");
              };
              goog.labs.userAgent.platform.isChromeOS = function() {
                return goog.labs.userAgent.util.matchUserAgent("CrOS");
              };
              goog.labs.userAgent.platform.isChromecast = function() {
                return goog.labs.userAgent.util.matchUserAgent("CrKey");
              };
              goog.labs.userAgent.platform.isKaiOS = function() {
                return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
              };
              goog.labs.userAgent.platform.getVersion = function() {
                var a2 = goog.labs.userAgent.util.getUserAgent(), b2 = "";
                goog.labs.userAgent.platform.isWindows() ? (b2 = /Windows (?:NT|Phone) ([0-9.]+)/, b2 = (a2 = b2.exec(a2)) ? a2[1] : "0.0") : goog.labs.userAgent.platform.isIos() ? (b2 = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b2 = (a2 = b2.exec(a2)) && a2[1].replace(/_/g, ".")) : goog.labs.userAgent.platform.isMacintosh() ? (b2 = /Mac OS X ([0-9_.]+)/, b2 = (a2 = b2.exec(a2)) ? a2[1].replace(/_/g, ".") : "10") : goog.labs.userAgent.platform.isKaiOS() ? (b2 = /(?:KaiOS)\/(\S+)/i, b2 = (a2 = b2.exec(a2)) && a2[1]) : goog.labs.userAgent.platform.isAndroid() ? (b2 = /Android\s+([^\);]+)(\)|;)/, b2 = (a2 = b2.exec(a2)) && a2[1]) : goog.labs.userAgent.platform.isChromeOS() && (b2 = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b2 = (a2 = b2.exec(a2)) && a2[1]);
                return b2 || "";
              };
              goog.labs.userAgent.platform.isVersionOrHigher = function(a2) {
                return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), a2);
              };
              goog.reflect = {};
              goog.reflect.object = function(a2, b2) {
                return b2;
              };
              goog.reflect.objectProperty = function(a2, b2) {
                return a2;
              };
              goog.reflect.sinkValue = function(a2) {
                goog.reflect.sinkValue[" "](a2);
                return a2;
              };
              goog.reflect.sinkValue[" "] = goog.nullFunction;
              goog.reflect.canAccessProperty = function(a2, b2) {
                try {
                  return goog.reflect.sinkValue(a2[b2]), true;
                } catch (c2) {
                }
                return false;
              };
              goog.reflect.cache = function(a2, b2, c2, d2) {
                d2 = d2 ? d2(b2) : b2;
                return Object.prototype.hasOwnProperty.call(a2, d2) ? a2[d2] : a2[d2] = c2(b2);
              };
              goog.userAgent = {};
              goog.userAgent.ASSUME_IE = false;
              goog.userAgent.ASSUME_EDGE = false;
              goog.userAgent.ASSUME_GECKO = false;
              goog.userAgent.ASSUME_WEBKIT = false;
              goog.userAgent.ASSUME_MOBILE_WEBKIT = false;
              goog.userAgent.ASSUME_OPERA = false;
              goog.userAgent.ASSUME_ANY_VERSION = false;
              goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
              goog.userAgent.getUserAgentString = function() {
                return goog.labs.userAgent.util.getUserAgent();
              };
              goog.userAgent.getNavigatorTyped = function() {
                return goog.global.navigator || null;
              };
              goog.userAgent.getNavigator = function() {
                return goog.userAgent.getNavigatorTyped();
              };
              goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
              goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
              goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
              goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
              goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
              goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
              goog.userAgent.isMobile_ = function() {
                return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
              };
              goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
              goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
              goog.userAgent.determinePlatform_ = function() {
                var a2 = goog.userAgent.getNavigatorTyped();
                return a2 && a2.platform || "";
              };
              goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
              goog.userAgent.ASSUME_MAC = false;
              goog.userAgent.ASSUME_WINDOWS = false;
              goog.userAgent.ASSUME_LINUX = false;
              goog.userAgent.ASSUME_X11 = false;
              goog.userAgent.ASSUME_ANDROID = false;
              goog.userAgent.ASSUME_IPHONE = false;
              goog.userAgent.ASSUME_IPAD = false;
              goog.userAgent.ASSUME_IPOD = false;
              goog.userAgent.ASSUME_KAIOS = false;
              goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
              goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
              goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
              goog.userAgent.isLegacyLinux_ = function() {
                return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
              };
              goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
              goog.userAgent.isX11_ = function() {
                var a2 = goog.userAgent.getNavigatorTyped();
                return !!a2 && goog.string.contains(a2.appVersion || "", "X11");
              };
              goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
              goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
              goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
              goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
              goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod();
              goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos();
              goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS();
              goog.userAgent.determineVersion_ = function() {
                var a2 = "", b2 = goog.userAgent.getVersionRegexResult_();
                b2 && (a2 = b2 ? b2[1] : "");
                return goog.userAgent.IE && (b2 = goog.userAgent.getDocumentMode_(), null != b2 && b2 > parseFloat(a2)) ? String(b2) : a2;
              };
              goog.userAgent.getVersionRegexResult_ = function() {
                var a2 = goog.userAgent.getUserAgentString();
                if (goog.userAgent.GECKO)
                  return /rv:([^\);]+)(\)|;)/.exec(a2);
                if (goog.userAgent.EDGE)
                  return /Edge\/([\d\.]+)/.exec(a2);
                if (goog.userAgent.IE)
                  return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a2);
                if (goog.userAgent.WEBKIT)
                  return /WebKit\/(\S+)/.exec(a2);
                if (goog.userAgent.OPERA)
                  return /(?:Version)[ \/]?(\S+)/.exec(a2);
              };
              goog.userAgent.getDocumentMode_ = function() {
                var a2 = goog.global.document;
                return a2 ? a2.documentMode : void 0;
              };
              goog.userAgent.VERSION = goog.userAgent.determineVersion_();
              goog.userAgent.compare = function(a2, b2) {
                return goog.string.compareVersions(a2, b2);
              };
              goog.userAgent.isVersionOrHigherCache_ = {};
              goog.userAgent.isVersionOrHigher = function(a2) {
                return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, a2, function() {
                  return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, a2);
                });
              };
              goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
              goog.userAgent.isDocumentModeOrHigher = function(a2) {
                return Number(goog.userAgent.DOCUMENT_MODE) >= a2;
              };
              goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
              goog.userAgent.DOCUMENT_MODE = function() {
                if (goog.global.document && goog.userAgent.IE) {
                  var a2 = goog.userAgent.getDocumentMode_();
                  return a2 ? a2 : parseInt(goog.userAgent.VERSION, 10) || void 0;
                }
              }();
              goog.userAgent.product = {};
              goog.userAgent.product.ASSUME_FIREFOX = false;
              goog.userAgent.product.ASSUME_IPHONE = false;
              goog.userAgent.product.ASSUME_IPAD = false;
              goog.userAgent.product.ASSUME_ANDROID = false;
              goog.userAgent.product.ASSUME_CHROME = false;
              goog.userAgent.product.ASSUME_SAFARI = false;
              goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
              goog.userAgent.product.OPERA = goog.userAgent.OPERA;
              goog.userAgent.product.IE = goog.userAgent.IE;
              goog.userAgent.product.EDGE = goog.userAgent.EDGE;
              goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();
              goog.userAgent.product.isIphoneOrIpod_ = function() {
                return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();
              };
              goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();
              goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
              goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();
              goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();
              goog.userAgent.product.isSafariDesktop_ = function() {
                return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();
              };
              goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();
              goog.crypt.base64 = {};
              goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
              goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=";
              goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.";
              goog.crypt.base64.Alphabet = { DEFAULT: 0, NO_PADDING: 1, WEBSAFE: 2, WEBSAFE_DOT_PADDING: 3, WEBSAFE_NO_PADDING: 4 };
              goog.crypt.base64.paddingChars_ = "=.";
              goog.crypt.base64.isPadding_ = function(a2) {
                return goog.string.contains(goog.crypt.base64.paddingChars_, a2);
              };
              goog.crypt.base64.byteToCharMaps_ = {};
              goog.crypt.base64.charToByteMap_ = null;
              goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA;
              goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || "function" == typeof goog.global.btoa;
              goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && "function" == typeof goog.global.atob;
              goog.crypt.base64.encodeByteArray = function(a2, b2) {
                goog.asserts.assert(goog.isArrayLike(a2), "encodeByteArray takes an array as a parameter");
                void 0 === b2 && (b2 = goog.crypt.base64.Alphabet.DEFAULT);
                goog.crypt.base64.init_();
                b2 = goog.crypt.base64.byteToCharMaps_[b2];
                for (var c2 = [], d2 = 0; d2 < a2.length; d2 += 3) {
                  var e2 = a2[d2], f2 = d2 + 1 < a2.length, g = f2 ? a2[d2 + 1] : 0, h = d2 + 2 < a2.length, k = h ? a2[d2 + 2] : 0, l = e2 >> 2;
                  e2 = (e2 & 3) << 4 | g >> 4;
                  g = (g & 15) << 2 | k >> 6;
                  k &= 63;
                  h || (k = 64, f2 || (g = 64));
                  c2.push(b2[l], b2[e2], b2[g] || "", b2[k] || "");
                }
                return c2.join("");
              };
              goog.crypt.base64.encodeString = function(a2, b2) {
                return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !b2 ? goog.global.btoa(a2) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(a2), b2);
              };
              goog.crypt.base64.decodeString = function(a2, b2) {
                if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !b2)
                  return goog.global.atob(a2);
                var c2 = "";
                goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
                  c2 += String.fromCharCode(a3);
                });
                return c2;
              };
              goog.crypt.base64.decodeStringToByteArray = function(a2, b2) {
                var c2 = [];
                goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
                  c2.push(a3);
                });
                return c2;
              };
              goog.crypt.base64.decodeStringToUint8Array = function(a2) {
                goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
                var b2 = a2.length, c2 = 3 * b2 / 4;
                c2 % 3 ? c2 = Math.floor(c2) : goog.crypt.base64.isPadding_(a2[b2 - 1]) && (c2 = goog.crypt.base64.isPadding_(a2[b2 - 2]) ? c2 - 2 : c2 - 1);
                var d2 = new Uint8Array(c2), e2 = 0;
                goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
                  d2[e2++] = a3;
                });
                return d2.subarray(0, e2);
              };
              goog.crypt.base64.decodeStringInternal_ = function(a2, b2) {
                function c2(b3) {
                  for (; d2 < a2.length; ) {
                    var c3 = a2.charAt(d2++), e3 = goog.crypt.base64.charToByteMap_[c3];
                    if (null != e3)
                      return e3;
                    if (!goog.string.isEmptyOrWhitespace(c3))
                      throw Error("Unknown base64 encoding at char: " + c3);
                  }
                  return b3;
                }
                goog.crypt.base64.init_();
                for (var d2 = 0; ; ) {
                  var e2 = c2(-1), f2 = c2(0), g = c2(64), h = c2(64);
                  if (64 === h && -1 === e2)
                    break;
                  b2(e2 << 2 | f2 >> 4);
                  64 != g && (b2(f2 << 4 & 240 | g >> 2), 64 != h && b2(g << 6 & 192 | h));
                }
              };
              goog.crypt.base64.init_ = function() {
                if (!goog.crypt.base64.charToByteMap_) {
                  goog.crypt.base64.charToByteMap_ = {};
                  for (var a2 = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), b2 = ["+/=", "+/", "-_=", "-_.", "-_"], c2 = 0; 5 > c2; c2++) {
                    var d2 = a2.concat(b2[c2].split(""));
                    goog.crypt.base64.byteToCharMaps_[c2] = d2;
                    for (var e2 = 0; e2 < d2.length; e2++) {
                      var f2 = d2[e2], g = goog.crypt.base64.charToByteMap_[f2];
                      void 0 === g ? goog.crypt.base64.charToByteMap_[f2] = e2 : goog.asserts.assert(g === e2);
                    }
                  }
                }
              };
              jspb.utils = {};
              jspb.utils.split64Low = 0;
              jspb.utils.split64High = 0;
              jspb.utils.splitUint64 = function(a2) {
                var b2 = a2 >>> 0;
                a2 = Math.floor((a2 - b2) / jspb.BinaryConstants.TWO_TO_32) >>> 0;
                jspb.utils.split64Low = b2;
                jspb.utils.split64High = a2;
              };
              jspb.utils.splitInt64 = function(a2) {
                var b2 = 0 > a2;
                a2 = Math.abs(a2);
                var c2 = a2 >>> 0;
                a2 = Math.floor((a2 - c2) / jspb.BinaryConstants.TWO_TO_32);
                a2 >>>= 0;
                b2 && (a2 = ~a2 >>> 0, c2 = (~c2 >>> 0) + 1, 4294967295 < c2 && (c2 = 0, a2++, 4294967295 < a2 && (a2 = 0)));
                jspb.utils.split64Low = c2;
                jspb.utils.split64High = a2;
              };
              jspb.utils.splitZigzag64 = function(a2) {
                var b2 = 0 > a2;
                a2 = 2 * Math.abs(a2);
                jspb.utils.splitUint64(a2);
                a2 = jspb.utils.split64Low;
                var c2 = jspb.utils.split64High;
                b2 && (0 == a2 ? 0 == c2 ? c2 = a2 = 4294967295 : (c2--, a2 = 4294967295) : a2--);
                jspb.utils.split64Low = a2;
                jspb.utils.split64High = c2;
              };
              jspb.utils.splitFloat32 = function(a2) {
                var b2 = 0 > a2 ? 1 : 0;
                a2 = b2 ? -a2 : a2;
                if (0 === a2)
                  0 < 1 / a2 ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483648);
                else if (isNaN(a2))
                  jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483647;
                else if (a2 > jspb.BinaryConstants.FLOAT32_MAX)
                  jspb.utils.split64High = 0, jspb.utils.split64Low = (b2 << 31 | 2139095040) >>> 0;
                else if (a2 < jspb.BinaryConstants.FLOAT32_MIN)
                  a2 = Math.round(a2 / Math.pow(2, -149)), jspb.utils.split64High = 0, jspb.utils.split64Low = (b2 << 31 | a2) >>> 0;
                else {
                  var c2 = Math.floor(Math.log(a2) / Math.LN2);
                  a2 *= Math.pow(2, -c2);
                  a2 = Math.round(a2 * jspb.BinaryConstants.TWO_TO_23);
                  16777216 <= a2 && ++c2;
                  jspb.utils.split64High = 0;
                  jspb.utils.split64Low = (b2 << 31 | c2 + 127 << 23 | a2 & 8388607) >>> 0;
                }
              };
              jspb.utils.splitFloat64 = function(a2) {
                var b2 = 0 > a2 ? 1 : 0;
                a2 = b2 ? -a2 : a2;
                if (0 === a2)
                  jspb.utils.split64High = 0 < 1 / a2 ? 0 : 2147483648, jspb.utils.split64Low = 0;
                else if (isNaN(a2))
                  jspb.utils.split64High = 2147483647, jspb.utils.split64Low = 4294967295;
                else if (a2 > jspb.BinaryConstants.FLOAT64_MAX)
                  jspb.utils.split64High = (b2 << 31 | 2146435072) >>> 0, jspb.utils.split64Low = 0;
                else if (a2 < jspb.BinaryConstants.FLOAT64_MIN) {
                  var c2 = a2 / Math.pow(2, -1074);
                  a2 = c2 / jspb.BinaryConstants.TWO_TO_32;
                  jspb.utils.split64High = (b2 << 31 | a2) >>> 0;
                  jspb.utils.split64Low = c2 >>> 0;
                } else {
                  c2 = a2;
                  var d2 = 0;
                  if (2 <= c2)
                    for (; 2 <= c2 && 1023 > d2; )
                      d2++, c2 /= 2;
                  else
                    for (; 1 > c2 && -1022 < d2; )
                      c2 *= 2, d2--;
                  c2 = a2 * Math.pow(2, -d2);
                  a2 = c2 * jspb.BinaryConstants.TWO_TO_20 & 1048575;
                  c2 = c2 * jspb.BinaryConstants.TWO_TO_52 >>> 0;
                  jspb.utils.split64High = (b2 << 31 | d2 + 1023 << 20 | a2) >>> 0;
                  jspb.utils.split64Low = c2;
                }
              };
              jspb.utils.splitHash64 = function(a2) {
                var b2 = a2.charCodeAt(0), c2 = a2.charCodeAt(1), d2 = a2.charCodeAt(2), e2 = a2.charCodeAt(3), f2 = a2.charCodeAt(4), g = a2.charCodeAt(5), h = a2.charCodeAt(6);
                a2 = a2.charCodeAt(7);
                jspb.utils.split64Low = b2 + (c2 << 8) + (d2 << 16) + (e2 << 24) >>> 0;
                jspb.utils.split64High = f2 + (g << 8) + (h << 16) + (a2 << 24) >>> 0;
              };
              jspb.utils.joinUint64 = function(a2, b2) {
                return b2 * jspb.BinaryConstants.TWO_TO_32 + (a2 >>> 0);
              };
              jspb.utils.joinInt64 = function(a2, b2) {
                var c2 = b2 & 2147483648;
                c2 && (a2 = ~a2 + 1 >>> 0, b2 = ~b2 >>> 0, 0 == a2 && (b2 = b2 + 1 >>> 0));
                a2 = jspb.utils.joinUint64(a2, b2);
                return c2 ? -a2 : a2;
              };
              jspb.utils.toZigzag64 = function(a2, b2, c2) {
                var d2 = b2 >> 31;
                return c2(a2 << 1 ^ d2, (b2 << 1 | a2 >>> 31) ^ d2);
              };
              jspb.utils.joinZigzag64 = function(a2, b2) {
                return jspb.utils.fromZigzag64(a2, b2, jspb.utils.joinInt64);
              };
              jspb.utils.fromZigzag64 = function(a2, b2, c2) {
                var d2 = -(a2 & 1);
                return c2((a2 >>> 1 | b2 << 31) ^ d2, b2 >>> 1 ^ d2);
              };
              jspb.utils.joinFloat32 = function(a2, b2) {
                b2 = 2 * (a2 >> 31) + 1;
                var c2 = a2 >>> 23 & 255;
                a2 &= 8388607;
                return 255 == c2 ? a2 ? NaN : Infinity * b2 : 0 == c2 ? b2 * Math.pow(2, -149) * a2 : b2 * Math.pow(2, c2 - 150) * (a2 + Math.pow(2, 23));
              };
              jspb.utils.joinFloat64 = function(a2, b2) {
                var c2 = 2 * (b2 >> 31) + 1, d2 = b2 >>> 20 & 2047;
                a2 = jspb.BinaryConstants.TWO_TO_32 * (b2 & 1048575) + a2;
                return 2047 == d2 ? a2 ? NaN : Infinity * c2 : 0 == d2 ? c2 * Math.pow(2, -1074) * a2 : c2 * Math.pow(2, d2 - 1075) * (a2 + jspb.BinaryConstants.TWO_TO_52);
              };
              jspb.utils.joinHash64 = function(a2, b2) {
                return String.fromCharCode(a2 >>> 0 & 255, a2 >>> 8 & 255, a2 >>> 16 & 255, a2 >>> 24 & 255, b2 >>> 0 & 255, b2 >>> 8 & 255, b2 >>> 16 & 255, b2 >>> 24 & 255);
              };
              jspb.utils.DIGITS = "0123456789abcdef".split("");
              jspb.utils.ZERO_CHAR_CODE_ = 48;
              jspb.utils.A_CHAR_CODE_ = 97;
              jspb.utils.joinUnsignedDecimalString = function(a2, b2) {
                function c2(a3, b3) {
                  a3 = a3 ? String(a3) : "";
                  return b3 ? "0000000".slice(a3.length) + a3 : a3;
                }
                if (2097151 >= b2)
                  return "" + jspb.utils.joinUint64(a2, b2);
                var d2 = (a2 >>> 24 | b2 << 8) >>> 0 & 16777215;
                b2 = b2 >> 16 & 65535;
                a2 = (a2 & 16777215) + 6777216 * d2 + 6710656 * b2;
                d2 += 8147497 * b2;
                b2 *= 2;
                1e7 <= a2 && (d2 += Math.floor(a2 / 1e7), a2 %= 1e7);
                1e7 <= d2 && (b2 += Math.floor(d2 / 1e7), d2 %= 1e7);
                return c2(b2, 0) + c2(d2, b2) + c2(a2, 1);
              };
              jspb.utils.joinSignedDecimalString = function(a2, b2) {
                var c2 = b2 & 2147483648;
                c2 && (a2 = ~a2 + 1 >>> 0, b2 = ~b2 + (0 == a2 ? 1 : 0) >>> 0);
                a2 = jspb.utils.joinUnsignedDecimalString(a2, b2);
                return c2 ? "-" + a2 : a2;
              };
              jspb.utils.hash64ToDecimalString = function(a2, b2) {
                jspb.utils.splitHash64(a2);
                a2 = jspb.utils.split64Low;
                var c2 = jspb.utils.split64High;
                return b2 ? jspb.utils.joinSignedDecimalString(a2, c2) : jspb.utils.joinUnsignedDecimalString(a2, c2);
              };
              jspb.utils.hash64ArrayToDecimalStrings = function(a2, b2) {
                for (var c2 = Array(a2.length), d2 = 0; d2 < a2.length; d2++)
                  c2[d2] = jspb.utils.hash64ToDecimalString(a2[d2], b2);
                return c2;
              };
              jspb.utils.decimalStringToHash64 = function(a2) {
                function b2(a3, b3) {
                  for (var c3 = 0; 8 > c3 && (1 !== a3 || 0 < b3); c3++)
                    b3 = a3 * e2[c3] + b3, e2[c3] = b3 & 255, b3 >>>= 8;
                }
                function c2() {
                  for (var a3 = 0; 8 > a3; a3++)
                    e2[a3] = ~e2[a3] & 255;
                }
                jspb.asserts.assert(0 < a2.length);
                var d2 = false;
                "-" === a2[0] && (d2 = true, a2 = a2.slice(1));
                for (var e2 = [0, 0, 0, 0, 0, 0, 0, 0], f2 = 0; f2 < a2.length; f2++)
                  b2(10, a2.charCodeAt(f2) - jspb.utils.ZERO_CHAR_CODE_);
                d2 && (c2(), b2(1, 1));
                return goog.crypt.byteArrayToString(e2);
              };
              jspb.utils.splitDecimalString = function(a2) {
                jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a2));
              };
              jspb.utils.toHexDigit_ = function(a2) {
                return String.fromCharCode(10 > a2 ? jspb.utils.ZERO_CHAR_CODE_ + a2 : jspb.utils.A_CHAR_CODE_ - 10 + a2);
              };
              jspb.utils.fromHexCharCode_ = function(a2) {
                return a2 >= jspb.utils.A_CHAR_CODE_ ? a2 - jspb.utils.A_CHAR_CODE_ + 10 : a2 - jspb.utils.ZERO_CHAR_CODE_;
              };
              jspb.utils.hash64ToHexString = function(a2) {
                var b2 = Array(18);
                b2[0] = "0";
                b2[1] = "x";
                for (var c2 = 0; 8 > c2; c2++) {
                  var d2 = a2.charCodeAt(7 - c2);
                  b2[2 * c2 + 2] = jspb.utils.toHexDigit_(d2 >> 4);
                  b2[2 * c2 + 3] = jspb.utils.toHexDigit_(d2 & 15);
                }
                return b2.join("");
              };
              jspb.utils.hexStringToHash64 = function(a2) {
                a2 = a2.toLowerCase();
                jspb.asserts.assert(18 == a2.length);
                jspb.asserts.assert("0" == a2[0]);
                jspb.asserts.assert("x" == a2[1]);
                for (var b2 = "", c2 = 0; 8 > c2; c2++) {
                  var d2 = jspb.utils.fromHexCharCode_(a2.charCodeAt(2 * c2 + 2)), e2 = jspb.utils.fromHexCharCode_(a2.charCodeAt(2 * c2 + 3));
                  b2 = String.fromCharCode(16 * d2 + e2) + b2;
                }
                return b2;
              };
              jspb.utils.hash64ToNumber = function(a2, b2) {
                jspb.utils.splitHash64(a2);
                a2 = jspb.utils.split64Low;
                var c2 = jspb.utils.split64High;
                return b2 ? jspb.utils.joinInt64(a2, c2) : jspb.utils.joinUint64(a2, c2);
              };
              jspb.utils.numberToHash64 = function(a2) {
                jspb.utils.splitInt64(a2);
                return jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High);
              };
              jspb.utils.countVarints = function(a2, b2, c2) {
                for (var d2 = 0, e2 = b2; e2 < c2; e2++)
                  d2 += a2[e2] >> 7;
                return c2 - b2 - d2;
              };
              jspb.utils.countVarintFields = function(a2, b2, c2, d2) {
                var e2 = 0;
                d2 = 8 * d2 + jspb.BinaryConstants.WireType.VARINT;
                if (128 > d2)
                  for (; b2 < c2 && a2[b2++] == d2; )
                    for (e2++; ; ) {
                      var f2 = a2[b2++];
                      if (0 == (f2 & 128))
                        break;
                    }
                else
                  for (; b2 < c2; ) {
                    for (f2 = d2; 128 < f2; ) {
                      if (a2[b2] != (f2 & 127 | 128))
                        return e2;
                      b2++;
                      f2 >>= 7;
                    }
                    if (a2[b2++] != f2)
                      break;
                    for (e2++; f2 = a2[b2++], 0 != (f2 & 128); )
                      ;
                  }
                return e2;
              };
              jspb.utils.countFixedFields_ = function(a2, b2, c2, d2, e2) {
                var f2 = 0;
                if (128 > d2)
                  for (; b2 < c2 && a2[b2++] == d2; )
                    f2++, b2 += e2;
                else
                  for (; b2 < c2; ) {
                    for (var g = d2; 128 < g; ) {
                      if (a2[b2++] != (g & 127 | 128))
                        return f2;
                      g >>= 7;
                    }
                    if (a2[b2++] != g)
                      break;
                    f2++;
                    b2 += e2;
                  }
                return f2;
              };
              jspb.utils.countFixed32Fields = function(a2, b2, c2, d2) {
                return jspb.utils.countFixedFields_(a2, b2, c2, 8 * d2 + jspb.BinaryConstants.WireType.FIXED32, 4);
              };
              jspb.utils.countFixed64Fields = function(a2, b2, c2, d2) {
                return jspb.utils.countFixedFields_(a2, b2, c2, 8 * d2 + jspb.BinaryConstants.WireType.FIXED64, 8);
              };
              jspb.utils.countDelimitedFields = function(a2, b2, c2, d2) {
                var e2 = 0;
                for (d2 = 8 * d2 + jspb.BinaryConstants.WireType.DELIMITED; b2 < c2; ) {
                  for (var f2 = d2; 128 < f2; ) {
                    if (a2[b2++] != (f2 & 127 | 128))
                      return e2;
                    f2 >>= 7;
                  }
                  if (a2[b2++] != f2)
                    break;
                  e2++;
                  for (var g = 0, h = 1; f2 = a2[b2++], g += (f2 & 127) * h, h *= 128, 0 != (f2 & 128); )
                    ;
                  b2 += g;
                }
                return e2;
              };
              jspb.utils.debugBytesToTextFormat = function(a2) {
                var b2 = '"';
                if (a2) {
                  a2 = jspb.utils.byteSourceToUint8Array(a2);
                  for (var c2 = 0; c2 < a2.length; c2++)
                    b2 += "\\x", 16 > a2[c2] && (b2 += "0"), b2 += a2[c2].toString(16);
                }
                return b2 + '"';
              };
              jspb.utils.debugScalarToTextFormat = function(a2) {
                return "string" === typeof a2 ? goog.string.quote(a2) : a2.toString();
              };
              jspb.utils.stringToByteArray = function(a2) {
                for (var b2 = new Uint8Array(a2.length), c2 = 0; c2 < a2.length; c2++) {
                  var d2 = a2.charCodeAt(c2);
                  if (255 < d2)
                    throw Error("Conversion error: string contains codepoint outside of byte range");
                  b2[c2] = d2;
                }
                return b2;
              };
              jspb.utils.byteSourceToUint8Array = function(a2) {
                if (a2.constructor === Uint8Array)
                  return a2;
                if (a2.constructor === ArrayBuffer || a2.constructor === Array)
                  return new Uint8Array(a2);
                if (a2.constructor === String)
                  return goog.crypt.base64.decodeStringToUint8Array(a2);
                if (a2 instanceof Uint8Array)
                  return new Uint8Array(a2.buffer, a2.byteOffset, a2.byteLength);
                jspb.asserts.fail("Type not convertible to Uint8Array.");
                return new Uint8Array(0);
              };
              jspb.BinaryDecoder = function(a2, b2, c2) {
                this.bytes_ = null;
                this.cursor_ = this.end_ = this.start_ = 0;
                this.error_ = false;
                a2 && this.setBlock(a2, b2, c2);
              };
              jspb.BinaryDecoder.instanceCache_ = [];
              jspb.BinaryDecoder.alloc = function(a2, b2, c2) {
                if (jspb.BinaryDecoder.instanceCache_.length) {
                  var d2 = jspb.BinaryDecoder.instanceCache_.pop();
                  a2 && d2.setBlock(a2, b2, c2);
                  return d2;
                }
                return new jspb.BinaryDecoder(a2, b2, c2);
              };
              jspb.BinaryDecoder.prototype.free = function() {
                this.clear();
                100 > jspb.BinaryDecoder.instanceCache_.length && jspb.BinaryDecoder.instanceCache_.push(this);
              };
              jspb.BinaryDecoder.prototype.clone = function() {
                return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_);
              };
              jspb.BinaryDecoder.prototype.clear = function() {
                this.bytes_ = null;
                this.cursor_ = this.end_ = this.start_ = 0;
                this.error_ = false;
              };
              jspb.BinaryDecoder.prototype.getBuffer = function() {
                return this.bytes_;
              };
              jspb.BinaryDecoder.prototype.setBlock = function(a2, b2, c2) {
                this.bytes_ = jspb.utils.byteSourceToUint8Array(a2);
                this.start_ = void 0 !== b2 ? b2 : 0;
                this.end_ = void 0 !== c2 ? this.start_ + c2 : this.bytes_.length;
                this.cursor_ = this.start_;
              };
              jspb.BinaryDecoder.prototype.getEnd = function() {
                return this.end_;
              };
              jspb.BinaryDecoder.prototype.setEnd = function(a2) {
                this.end_ = a2;
              };
              jspb.BinaryDecoder.prototype.reset = function() {
                this.cursor_ = this.start_;
              };
              jspb.BinaryDecoder.prototype.getCursor = function() {
                return this.cursor_;
              };
              jspb.BinaryDecoder.prototype.setCursor = function(a2) {
                this.cursor_ = a2;
              };
              jspb.BinaryDecoder.prototype.advance = function(a2) {
                this.cursor_ += a2;
                jspb.asserts.assert(this.cursor_ <= this.end_);
              };
              jspb.BinaryDecoder.prototype.atEnd = function() {
                return this.cursor_ == this.end_;
              };
              jspb.BinaryDecoder.prototype.pastEnd = function() {
                return this.cursor_ > this.end_;
              };
              jspb.BinaryDecoder.prototype.getError = function() {
                return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_;
              };
              jspb.BinaryDecoder.prototype.readSplitVarint64 = function(a2) {
                for (var b2 = 128, c2 = 0, d2 = 0, e2 = 0; 4 > e2 && 128 <= b2; e2++)
                  b2 = this.bytes_[this.cursor_++], c2 |= (b2 & 127) << 7 * e2;
                128 <= b2 && (b2 = this.bytes_[this.cursor_++], c2 |= (b2 & 127) << 28, d2 |= (b2 & 127) >> 4);
                if (128 <= b2)
                  for (e2 = 0; 5 > e2 && 128 <= b2; e2++)
                    b2 = this.bytes_[this.cursor_++], d2 |= (b2 & 127) << 7 * e2 + 3;
                if (128 > b2)
                  return a2(c2 >>> 0, d2 >>> 0);
                jspb.asserts.fail("Failed to read varint, encoding is invalid.");
                this.error_ = true;
              };
              jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function(a2) {
                return this.readSplitVarint64(function(b2, c2) {
                  return jspb.utils.fromZigzag64(b2, c2, a2);
                });
              };
              jspb.BinaryDecoder.prototype.readSplitFixed64 = function(a2) {
                var b2 = this.bytes_, c2 = this.cursor_;
                this.cursor_ += 8;
                for (var d2 = 0, e2 = 0, f2 = c2 + 7; f2 >= c2; f2--)
                  d2 = d2 << 8 | b2[f2], e2 = e2 << 8 | b2[f2 + 4];
                return a2(d2, e2);
              };
              jspb.BinaryDecoder.prototype.skipVarint = function() {
                for (; this.bytes_[this.cursor_] & 128; )
                  this.cursor_++;
                this.cursor_++;
              };
              jspb.BinaryDecoder.prototype.unskipVarint = function(a2) {
                for (; 128 < a2; )
                  this.cursor_--, a2 >>>= 7;
                this.cursor_--;
              };
              jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function() {
                var a2 = this.bytes_;
                var b2 = a2[this.cursor_ + 0];
                var c2 = b2 & 127;
                if (128 > b2)
                  return this.cursor_ += 1, jspb.asserts.assert(this.cursor_ <= this.end_), c2;
                b2 = a2[this.cursor_ + 1];
                c2 |= (b2 & 127) << 7;
                if (128 > b2)
                  return this.cursor_ += 2, jspb.asserts.assert(this.cursor_ <= this.end_), c2;
                b2 = a2[this.cursor_ + 2];
                c2 |= (b2 & 127) << 14;
                if (128 > b2)
                  return this.cursor_ += 3, jspb.asserts.assert(this.cursor_ <= this.end_), c2;
                b2 = a2[this.cursor_ + 3];
                c2 |= (b2 & 127) << 21;
                if (128 > b2)
                  return this.cursor_ += 4, jspb.asserts.assert(this.cursor_ <= this.end_), c2;
                b2 = a2[this.cursor_ + 4];
                c2 |= (b2 & 15) << 28;
                if (128 > b2)
                  return this.cursor_ += 5, jspb.asserts.assert(this.cursor_ <= this.end_), c2 >>> 0;
                this.cursor_ += 5;
                128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && jspb.asserts.assert(false);
                jspb.asserts.assert(this.cursor_ <= this.end_);
                return c2;
              };
              jspb.BinaryDecoder.prototype.readSignedVarint32 = function() {
                return ~~this.readUnsignedVarint32();
              };
              jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function() {
                return this.readUnsignedVarint32().toString();
              };
              jspb.BinaryDecoder.prototype.readSignedVarint32String = function() {
                return this.readSignedVarint32().toString();
              };
              jspb.BinaryDecoder.prototype.readZigzagVarint32 = function() {
                var a2 = this.readUnsignedVarint32();
                return a2 >>> 1 ^ -(a2 & 1);
              };
              jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function() {
                return this.readSplitVarint64(jspb.utils.joinUint64);
              };
              jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function() {
                return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString);
              };
              jspb.BinaryDecoder.prototype.readSignedVarint64 = function() {
                return this.readSplitVarint64(jspb.utils.joinInt64);
              };
              jspb.BinaryDecoder.prototype.readSignedVarint64String = function() {
                return this.readSplitVarint64(jspb.utils.joinSignedDecimalString);
              };
              jspb.BinaryDecoder.prototype.readZigzagVarint64 = function() {
                return this.readSplitVarint64(jspb.utils.joinZigzag64);
              };
              jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function() {
                return this.readSplitZigzagVarint64(jspb.utils.joinHash64);
              };
              jspb.BinaryDecoder.prototype.readZigzagVarint64String = function() {
                return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString);
              };
              jspb.BinaryDecoder.prototype.readUint8 = function() {
                var a2 = this.bytes_[this.cursor_ + 0];
                this.cursor_ += 1;
                jspb.asserts.assert(this.cursor_ <= this.end_);
                return a2;
              };
              jspb.BinaryDecoder.prototype.readUint16 = function() {
                var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1];
                this.cursor_ += 2;
                jspb.asserts.assert(this.cursor_ <= this.end_);
                return a2 << 0 | b2 << 8;
              };
              jspb.BinaryDecoder.prototype.readUint32 = function() {
                var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1], c2 = this.bytes_[this.cursor_ + 2], d2 = this.bytes_[this.cursor_ + 3];
                this.cursor_ += 4;
                jspb.asserts.assert(this.cursor_ <= this.end_);
                return (a2 << 0 | b2 << 8 | c2 << 16 | d2 << 24) >>> 0;
              };
              jspb.BinaryDecoder.prototype.readUint64 = function() {
                var a2 = this.readUint32(), b2 = this.readUint32();
                return jspb.utils.joinUint64(a2, b2);
              };
              jspb.BinaryDecoder.prototype.readUint64String = function() {
                var a2 = this.readUint32(), b2 = this.readUint32();
                return jspb.utils.joinUnsignedDecimalString(a2, b2);
              };
              jspb.BinaryDecoder.prototype.readInt8 = function() {
                var a2 = this.bytes_[this.cursor_ + 0];
                this.cursor_ += 1;
                jspb.asserts.assert(this.cursor_ <= this.end_);
                return a2 << 24 >> 24;
              };
              jspb.BinaryDecoder.prototype.readInt16 = function() {
                var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1];
                this.cursor_ += 2;
                jspb.asserts.assert(this.cursor_ <= this.end_);
                return (a2 << 0 | b2 << 8) << 16 >> 16;
              };
              jspb.BinaryDecoder.prototype.readInt32 = function() {
                var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1], c2 = this.bytes_[this.cursor_ + 2], d2 = this.bytes_[this.cursor_ + 3];
                this.cursor_ += 4;
                jspb.asserts.assert(this.cursor_ <= this.end_);
                return a2 << 0 | b2 << 8 | c2 << 16 | d2 << 24;
              };
              jspb.BinaryDecoder.prototype.readInt64 = function() {
                var a2 = this.readUint32(), b2 = this.readUint32();
                return jspb.utils.joinInt64(a2, b2);
              };
              jspb.BinaryDecoder.prototype.readInt64String = function() {
                var a2 = this.readUint32(), b2 = this.readUint32();
                return jspb.utils.joinSignedDecimalString(a2, b2);
              };
              jspb.BinaryDecoder.prototype.readFloat = function() {
                var a2 = this.readUint32();
                return jspb.utils.joinFloat32(a2, 0);
              };
              jspb.BinaryDecoder.prototype.readDouble = function() {
                var a2 = this.readUint32(), b2 = this.readUint32();
                return jspb.utils.joinFloat64(a2, b2);
              };
              jspb.BinaryDecoder.prototype.readBool = function() {
                return !!this.bytes_[this.cursor_++];
              };
              jspb.BinaryDecoder.prototype.readEnum = function() {
                return this.readSignedVarint32();
              };
              jspb.BinaryDecoder.prototype.readString = function(a2) {
                var b2 = this.bytes_, c2 = this.cursor_;
                a2 = c2 + a2;
                for (var d2 = [], e2 = ""; c2 < a2; ) {
                  var f2 = b2[c2++];
                  if (128 > f2)
                    d2.push(f2);
                  else if (192 > f2)
                    continue;
                  else if (224 > f2) {
                    var g = b2[c2++];
                    d2.push((f2 & 31) << 6 | g & 63);
                  } else if (240 > f2) {
                    g = b2[c2++];
                    var h = b2[c2++];
                    d2.push((f2 & 15) << 12 | (g & 63) << 6 | h & 63);
                  } else if (248 > f2) {
                    g = b2[c2++];
                    h = b2[c2++];
                    var k = b2[c2++];
                    f2 = (f2 & 7) << 18 | (g & 63) << 12 | (h & 63) << 6 | k & 63;
                    f2 -= 65536;
                    d2.push((f2 >> 10 & 1023) + 55296, (f2 & 1023) + 56320);
                  }
                  8192 <= d2.length && (e2 += String.fromCharCode.apply(null, d2), d2.length = 0);
                }
                e2 += goog.crypt.byteArrayToString(d2);
                this.cursor_ = c2;
                return e2;
              };
              jspb.BinaryDecoder.prototype.readStringWithLength = function() {
                var a2 = this.readUnsignedVarint32();
                return this.readString(a2);
              };
              jspb.BinaryDecoder.prototype.readBytes = function(a2) {
                if (0 > a2 || this.cursor_ + a2 > this.bytes_.length)
                  return this.error_ = true, jspb.asserts.fail("Invalid byte length!"), new Uint8Array(0);
                var b2 = this.bytes_.subarray(this.cursor_, this.cursor_ + a2);
                this.cursor_ += a2;
                jspb.asserts.assert(this.cursor_ <= this.end_);
                return b2;
              };
              jspb.BinaryDecoder.prototype.readVarintHash64 = function() {
                return this.readSplitVarint64(jspb.utils.joinHash64);
              };
              jspb.BinaryDecoder.prototype.readFixedHash64 = function() {
                var a2 = this.bytes_, b2 = this.cursor_, c2 = a2[b2 + 0], d2 = a2[b2 + 1], e2 = a2[b2 + 2], f2 = a2[b2 + 3], g = a2[b2 + 4], h = a2[b2 + 5], k = a2[b2 + 6];
                a2 = a2[b2 + 7];
                this.cursor_ += 8;
                return String.fromCharCode(c2, d2, e2, f2, g, h, k, a2);
              };
              jspb.BinaryReader = function(a2, b2, c2) {
                this.decoder_ = jspb.BinaryDecoder.alloc(a2, b2, c2);
                this.fieldCursor_ = this.decoder_.getCursor();
                this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
                this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
                this.error_ = false;
                this.readCallbacks_ = null;
              };
              jspb.BinaryReader.instanceCache_ = [];
              jspb.BinaryReader.alloc = function(a2, b2, c2) {
                if (jspb.BinaryReader.instanceCache_.length) {
                  var d2 = jspb.BinaryReader.instanceCache_.pop();
                  a2 && d2.decoder_.setBlock(a2, b2, c2);
                  return d2;
                }
                return new jspb.BinaryReader(a2, b2, c2);
              };
              jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc;
              jspb.BinaryReader.prototype.free = function() {
                this.decoder_.clear();
                this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
                this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
                this.error_ = false;
                this.readCallbacks_ = null;
                100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this);
              };
              jspb.BinaryReader.prototype.getFieldCursor = function() {
                return this.fieldCursor_;
              };
              jspb.BinaryReader.prototype.getCursor = function() {
                return this.decoder_.getCursor();
              };
              jspb.BinaryReader.prototype.getBuffer = function() {
                return this.decoder_.getBuffer();
              };
              jspb.BinaryReader.prototype.getFieldNumber = function() {
                return this.nextField_;
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "getFieldNumber", jspb.BinaryReader.prototype.getFieldNumber);
              jspb.BinaryReader.prototype.getWireType = function() {
                return this.nextWireType_;
              };
              jspb.BinaryReader.prototype.isDelimited = function() {
                return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED;
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "isDelimited", jspb.BinaryReader.prototype.isDelimited);
              jspb.BinaryReader.prototype.isEndGroup = function() {
                return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP;
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "isEndGroup", jspb.BinaryReader.prototype.isEndGroup);
              jspb.BinaryReader.prototype.getError = function() {
                return this.error_ || this.decoder_.getError();
              };
              jspb.BinaryReader.prototype.setBlock = function(a2, b2, c2) {
                this.decoder_.setBlock(a2, b2, c2);
                this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
                this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
              };
              jspb.BinaryReader.prototype.reset = function() {
                this.decoder_.reset();
                this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
                this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
              };
              jspb.BinaryReader.prototype.advance = function(a2) {
                this.decoder_.advance(a2);
              };
              jspb.BinaryReader.prototype.nextField = function() {
                if (this.decoder_.atEnd())
                  return false;
                if (this.getError())
                  return jspb.asserts.fail("Decoder hit an error"), false;
                this.fieldCursor_ = this.decoder_.getCursor();
                var a2 = this.decoder_.readUnsignedVarint32(), b2 = a2 >>> 3;
                a2 &= 7;
                if (a2 != jspb.BinaryConstants.WireType.VARINT && a2 != jspb.BinaryConstants.WireType.FIXED32 && a2 != jspb.BinaryConstants.WireType.FIXED64 && a2 != jspb.BinaryConstants.WireType.DELIMITED && a2 != jspb.BinaryConstants.WireType.START_GROUP && a2 != jspb.BinaryConstants.WireType.END_GROUP)
                  return jspb.asserts.fail(
                    "Invalid wire type: %s (at position %s)",
                    a2,
                    this.fieldCursor_
                  ), this.error_ = true, false;
                this.nextField_ = b2;
                this.nextWireType_ = a2;
                return true;
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "nextField", jspb.BinaryReader.prototype.nextField);
              jspb.BinaryReader.prototype.unskipHeader = function() {
                this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_);
              };
              jspb.BinaryReader.prototype.skipMatchingFields = function() {
                var a2 = this.nextField_;
                for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == a2; )
                  this.skipField();
                this.decoder_.atEnd() || this.unskipHeader();
              };
              jspb.BinaryReader.prototype.skipVarintField = function() {
                this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (jspb.asserts.fail("Invalid wire type for skipVarintField"), this.skipField()) : this.decoder_.skipVarint();
              };
              jspb.BinaryReader.prototype.skipDelimitedField = function() {
                if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
                  jspb.asserts.fail("Invalid wire type for skipDelimitedField"), this.skipField();
                else {
                  var a2 = this.decoder_.readUnsignedVarint32();
                  this.decoder_.advance(a2);
                }
              };
              jspb.BinaryReader.prototype.skipFixed32Field = function() {
                this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (jspb.asserts.fail("Invalid wire type for skipFixed32Field"), this.skipField()) : this.decoder_.advance(4);
              };
              jspb.BinaryReader.prototype.skipFixed64Field = function() {
                this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (jspb.asserts.fail("Invalid wire type for skipFixed64Field"), this.skipField()) : this.decoder_.advance(8);
              };
              jspb.BinaryReader.prototype.skipGroup = function() {
                var a2 = this.nextField_;
                do {
                  if (!this.nextField()) {
                    jspb.asserts.fail("Unmatched start-group tag: stream EOF");
                    this.error_ = true;
                    break;
                  }
                  if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
                    this.nextField_ != a2 && (jspb.asserts.fail("Unmatched end-group tag"), this.error_ = true);
                    break;
                  }
                  this.skipField();
                } while (1);
              };
              jspb.BinaryReader.prototype.skipField = function() {
                switch (this.nextWireType_) {
                  case jspb.BinaryConstants.WireType.VARINT:
                    this.skipVarintField();
                    break;
                  case jspb.BinaryConstants.WireType.FIXED64:
                    this.skipFixed64Field();
                    break;
                  case jspb.BinaryConstants.WireType.DELIMITED:
                    this.skipDelimitedField();
                    break;
                  case jspb.BinaryConstants.WireType.FIXED32:
                    this.skipFixed32Field();
                    break;
                  case jspb.BinaryConstants.WireType.START_GROUP:
                    this.skipGroup();
                    break;
                  default:
                    jspb.asserts.fail("Invalid wire encoding for field.");
                }
              };
              jspb.BinaryReader.prototype.registerReadCallback = function(a2, b2) {
                null === this.readCallbacks_ && (this.readCallbacks_ = {});
                jspb.asserts.assert(!this.readCallbacks_[a2]);
                this.readCallbacks_[a2] = b2;
              };
              jspb.BinaryReader.prototype.runReadCallback = function(a2) {
                jspb.asserts.assert(null !== this.readCallbacks_);
                a2 = this.readCallbacks_[a2];
                jspb.asserts.assert(a2);
                return a2(this);
              };
              jspb.BinaryReader.prototype.readAny = function(a2) {
                this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(a2);
                var b2 = jspb.BinaryConstants.FieldType;
                switch (a2) {
                  case b2.DOUBLE:
                    return this.readDouble();
                  case b2.FLOAT:
                    return this.readFloat();
                  case b2.INT64:
                    return this.readInt64();
                  case b2.UINT64:
                    return this.readUint64();
                  case b2.INT32:
                    return this.readInt32();
                  case b2.FIXED64:
                    return this.readFixed64();
                  case b2.FIXED32:
                    return this.readFixed32();
                  case b2.BOOL:
                    return this.readBool();
                  case b2.STRING:
                    return this.readString();
                  case b2.GROUP:
                    jspb.asserts.fail("Group field type not supported in readAny()");
                  case b2.MESSAGE:
                    jspb.asserts.fail("Message field type not supported in readAny()");
                  case b2.BYTES:
                    return this.readBytes();
                  case b2.UINT32:
                    return this.readUint32();
                  case b2.ENUM:
                    return this.readEnum();
                  case b2.SFIXED32:
                    return this.readSfixed32();
                  case b2.SFIXED64:
                    return this.readSfixed64();
                  case b2.SINT32:
                    return this.readSint32();
                  case b2.SINT64:
                    return this.readSint64();
                  case b2.FHASH64:
                    return this.readFixedHash64();
                  case b2.VHASH64:
                    return this.readVarintHash64();
                  default:
                    jspb.asserts.fail("Invalid field type in readAny()");
                }
                return 0;
              };
              jspb.BinaryReader.prototype.readMessage = function(a2, b2) {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                var c2 = this.decoder_.getEnd(), d2 = this.decoder_.readUnsignedVarint32();
                d2 = this.decoder_.getCursor() + d2;
                this.decoder_.setEnd(d2);
                b2(a2, this);
                this.decoder_.setCursor(d2);
                this.decoder_.setEnd(c2);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readMessage", jspb.BinaryReader.prototype.readMessage);
              jspb.BinaryReader.prototype.readGroup = function(a2, b2, c2) {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP);
                jspb.asserts.assert(this.nextField_ == a2);
                c2(b2, this);
                this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (jspb.asserts.fail("Group submessage did not end with an END_GROUP tag"), this.error_ = true);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readGroup", jspb.BinaryReader.prototype.readGroup);
              jspb.BinaryReader.prototype.getFieldDecoder = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                var a2 = this.decoder_.readUnsignedVarint32(), b2 = this.decoder_.getCursor(), c2 = b2 + a2;
                a2 = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), b2, a2);
                this.decoder_.setCursor(c2);
                return a2;
              };
              jspb.BinaryReader.prototype.readInt32 = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readSignedVarint32();
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readInt32", jspb.BinaryReader.prototype.readInt32);
              jspb.BinaryReader.prototype.readInt32String = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readSignedVarint32String();
              };
              jspb.BinaryReader.prototype.readInt64 = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readSignedVarint64();
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readInt64", jspb.BinaryReader.prototype.readInt64);
              jspb.BinaryReader.prototype.readInt64String = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readSignedVarint64String();
              };
              jspb.BinaryReader.prototype.readUint32 = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readUnsignedVarint32();
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readUint32", jspb.BinaryReader.prototype.readUint32);
              jspb.BinaryReader.prototype.readUint32String = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readUnsignedVarint32String();
              };
              jspb.BinaryReader.prototype.readUint64 = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readUnsignedVarint64();
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readUint64", jspb.BinaryReader.prototype.readUint64);
              jspb.BinaryReader.prototype.readUint64String = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readUnsignedVarint64String();
              };
              jspb.BinaryReader.prototype.readSint32 = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readZigzagVarint32();
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readSint32", jspb.BinaryReader.prototype.readSint32);
              jspb.BinaryReader.prototype.readSint64 = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readZigzagVarint64();
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readSint64", jspb.BinaryReader.prototype.readSint64);
              jspb.BinaryReader.prototype.readSint64String = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readZigzagVarint64String();
              };
              jspb.BinaryReader.prototype.readFixed32 = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
                return this.decoder_.readUint32();
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readFixed32", jspb.BinaryReader.prototype.readFixed32);
              jspb.BinaryReader.prototype.readFixed64 = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
                return this.decoder_.readUint64();
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readFixed64", jspb.BinaryReader.prototype.readFixed64);
              jspb.BinaryReader.prototype.readFixed64String = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
                return this.decoder_.readUint64String();
              };
              jspb.BinaryReader.prototype.readSfixed32 = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
                return this.decoder_.readInt32();
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readSfixed32", jspb.BinaryReader.prototype.readSfixed32);
              jspb.BinaryReader.prototype.readSfixed32String = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
                return this.decoder_.readInt32().toString();
              };
              jspb.BinaryReader.prototype.readSfixed64 = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
                return this.decoder_.readInt64();
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readSfixed64", jspb.BinaryReader.prototype.readSfixed64);
              jspb.BinaryReader.prototype.readSfixed64String = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
                return this.decoder_.readInt64String();
              };
              jspb.BinaryReader.prototype.readFloat = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
                return this.decoder_.readFloat();
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readFloat", jspb.BinaryReader.prototype.readFloat);
              jspb.BinaryReader.prototype.readDouble = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
                return this.decoder_.readDouble();
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readDouble", jspb.BinaryReader.prototype.readDouble);
              jspb.BinaryReader.prototype.readBool = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return !!this.decoder_.readUnsignedVarint32();
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readBool", jspb.BinaryReader.prototype.readBool);
              jspb.BinaryReader.prototype.readEnum = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readSignedVarint64();
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readEnum", jspb.BinaryReader.prototype.readEnum);
              jspb.BinaryReader.prototype.readString = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                var a2 = this.decoder_.readUnsignedVarint32();
                return this.decoder_.readString(a2);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readString", jspb.BinaryReader.prototype.readString);
              jspb.BinaryReader.prototype.readBytes = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                var a2 = this.decoder_.readUnsignedVarint32();
                return this.decoder_.readBytes(a2);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readBytes", jspb.BinaryReader.prototype.readBytes);
              jspb.BinaryReader.prototype.readVarintHash64 = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readVarintHash64();
              };
              jspb.BinaryReader.prototype.readSintHash64 = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readZigzagVarintHash64();
              };
              jspb.BinaryReader.prototype.readSplitVarint64 = function(a2) {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readSplitVarint64(a2);
              };
              jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function(a2) {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
                return this.decoder_.readSplitVarint64(function(b2, c2) {
                  return jspb.utils.fromZigzag64(b2, c2, a2);
                });
              };
              jspb.BinaryReader.prototype.readFixedHash64 = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
                return this.decoder_.readFixedHash64();
              };
              jspb.BinaryReader.prototype.readSplitFixed64 = function(a2) {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
                return this.decoder_.readSplitFixed64(a2);
              };
              jspb.BinaryReader.prototype.readPackedField_ = function(a2) {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                var b2 = this.decoder_.readUnsignedVarint32();
                b2 = this.decoder_.getCursor() + b2;
                for (var c2 = []; this.decoder_.getCursor() < b2; )
                  c2.push(a2.call(this.decoder_));
                return c2;
              };
              jspb.BinaryReader.prototype.readPackedInt32 = function() {
                return this.readPackedField_(this.decoder_.readSignedVarint32);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readPackedInt32", jspb.BinaryReader.prototype.readPackedInt32);
              jspb.BinaryReader.prototype.readPackedInt32String = function() {
                return this.readPackedField_(this.decoder_.readSignedVarint32String);
              };
              jspb.BinaryReader.prototype.readPackedInt64 = function() {
                return this.readPackedField_(this.decoder_.readSignedVarint64);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readPackedInt64", jspb.BinaryReader.prototype.readPackedInt64);
              jspb.BinaryReader.prototype.readPackedInt64String = function() {
                return this.readPackedField_(this.decoder_.readSignedVarint64String);
              };
              jspb.BinaryReader.prototype.readPackedUint32 = function() {
                return this.readPackedField_(this.decoder_.readUnsignedVarint32);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readPackedUint32", jspb.BinaryReader.prototype.readPackedUint32);
              jspb.BinaryReader.prototype.readPackedUint32String = function() {
                return this.readPackedField_(this.decoder_.readUnsignedVarint32String);
              };
              jspb.BinaryReader.prototype.readPackedUint64 = function() {
                return this.readPackedField_(this.decoder_.readUnsignedVarint64);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readPackedUint64", jspb.BinaryReader.prototype.readPackedUint64);
              jspb.BinaryReader.prototype.readPackedUint64String = function() {
                return this.readPackedField_(this.decoder_.readUnsignedVarint64String);
              };
              jspb.BinaryReader.prototype.readPackedSint32 = function() {
                return this.readPackedField_(this.decoder_.readZigzagVarint32);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSint32", jspb.BinaryReader.prototype.readPackedSint32);
              jspb.BinaryReader.prototype.readPackedSint64 = function() {
                return this.readPackedField_(this.decoder_.readZigzagVarint64);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSint64", jspb.BinaryReader.prototype.readPackedSint64);
              jspb.BinaryReader.prototype.readPackedSint64String = function() {
                return this.readPackedField_(this.decoder_.readZigzagVarint64String);
              };
              jspb.BinaryReader.prototype.readPackedFixed32 = function() {
                return this.readPackedField_(this.decoder_.readUint32);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFixed32", jspb.BinaryReader.prototype.readPackedFixed32);
              jspb.BinaryReader.prototype.readPackedFixed64 = function() {
                return this.readPackedField_(this.decoder_.readUint64);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFixed64", jspb.BinaryReader.prototype.readPackedFixed64);
              jspb.BinaryReader.prototype.readPackedFixed64String = function() {
                return this.readPackedField_(this.decoder_.readUint64String);
              };
              jspb.BinaryReader.prototype.readPackedSfixed32 = function() {
                return this.readPackedField_(this.decoder_.readInt32);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSfixed32", jspb.BinaryReader.prototype.readPackedSfixed32);
              jspb.BinaryReader.prototype.readPackedSfixed64 = function() {
                return this.readPackedField_(this.decoder_.readInt64);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSfixed64", jspb.BinaryReader.prototype.readPackedSfixed64);
              jspb.BinaryReader.prototype.readPackedSfixed64String = function() {
                return this.readPackedField_(this.decoder_.readInt64String);
              };
              jspb.BinaryReader.prototype.readPackedFloat = function() {
                return this.readPackedField_(this.decoder_.readFloat);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFloat", jspb.BinaryReader.prototype.readPackedFloat);
              jspb.BinaryReader.prototype.readPackedDouble = function() {
                return this.readPackedField_(this.decoder_.readDouble);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readPackedDouble", jspb.BinaryReader.prototype.readPackedDouble);
              jspb.BinaryReader.prototype.readPackedBool = function() {
                return this.readPackedField_(this.decoder_.readBool);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readPackedBool", jspb.BinaryReader.prototype.readPackedBool);
              jspb.BinaryReader.prototype.readPackedEnum = function() {
                return this.readPackedField_(this.decoder_.readEnum);
              };
              goog.exportProperty(jspb.BinaryReader.prototype, "readPackedEnum", jspb.BinaryReader.prototype.readPackedEnum);
              jspb.BinaryReader.prototype.readPackedVarintHash64 = function() {
                return this.readPackedField_(this.decoder_.readVarintHash64);
              };
              jspb.BinaryReader.prototype.readPackedFixedHash64 = function() {
                return this.readPackedField_(this.decoder_.readFixedHash64);
              };
              jspb.BinaryEncoder = function() {
                this.buffer_ = [];
              };
              jspb.BinaryEncoder.prototype.length = function() {
                return this.buffer_.length;
              };
              jspb.BinaryEncoder.prototype.end = function() {
                var a2 = this.buffer_;
                this.buffer_ = [];
                return a2;
              };
              jspb.BinaryEncoder.prototype.writeSplitVarint64 = function(a2, b2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(b2 == Math.floor(b2));
                jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
                for (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32); 0 < b2 || 127 < a2; )
                  this.buffer_.push(a2 & 127 | 128), a2 = (a2 >>> 7 | b2 << 25) >>> 0, b2 >>>= 7;
                this.buffer_.push(a2);
              };
              jspb.BinaryEncoder.prototype.writeSplitFixed64 = function(a2, b2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(b2 == Math.floor(b2));
                jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
                jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32);
                this.writeUint32(a2);
                this.writeUint32(b2);
              };
              jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                for (jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32); 127 < a2; )
                  this.buffer_.push(a2 & 127 | 128), a2 >>>= 7;
                this.buffer_.push(a2);
              };
              jspb.BinaryEncoder.prototype.writeSignedVarint32 = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
                if (0 <= a2)
                  this.writeUnsignedVarint32(a2);
                else {
                  for (var b2 = 0; 9 > b2; b2++)
                    this.buffer_.push(a2 & 127 | 128), a2 >>= 7;
                  this.buffer_.push(1);
                }
              };
              jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_64);
                jspb.utils.splitInt64(a2);
                this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
              };
              jspb.BinaryEncoder.prototype.writeSignedVarint64 = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
                jspb.utils.splitInt64(a2);
                this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
              };
              jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
                this.writeUnsignedVarint32((a2 << 1 ^ a2 >> 31) >>> 0);
              };
              jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
                jspb.utils.splitZigzag64(a2);
                this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
              };
              jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function(a2) {
                this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(a2));
              };
              jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function(a2) {
                var b2 = this;
                jspb.utils.splitHash64(a2);
                jspb.utils.toZigzag64(jspb.utils.split64Low, jspb.utils.split64High, function(a3, d2) {
                  b2.writeSplitVarint64(a3 >>> 0, d2 >>> 0);
                });
              };
              jspb.BinaryEncoder.prototype.writeUint8 = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(0 <= a2 && 256 > a2);
                this.buffer_.push(a2 >>> 0 & 255);
              };
              jspb.BinaryEncoder.prototype.writeUint16 = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(0 <= a2 && 65536 > a2);
                this.buffer_.push(a2 >>> 0 & 255);
                this.buffer_.push(a2 >>> 8 & 255);
              };
              jspb.BinaryEncoder.prototype.writeUint32 = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
                this.buffer_.push(a2 >>> 0 & 255);
                this.buffer_.push(a2 >>> 8 & 255);
                this.buffer_.push(a2 >>> 16 & 255);
                this.buffer_.push(a2 >>> 24 & 255);
              };
              jspb.BinaryEncoder.prototype.writeUint64 = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_64);
                jspb.utils.splitUint64(a2);
                this.writeUint32(jspb.utils.split64Low);
                this.writeUint32(jspb.utils.split64High);
              };
              jspb.BinaryEncoder.prototype.writeInt8 = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(-128 <= a2 && 128 > a2);
                this.buffer_.push(a2 >>> 0 & 255);
              };
              jspb.BinaryEncoder.prototype.writeInt16 = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(-32768 <= a2 && 32768 > a2);
                this.buffer_.push(a2 >>> 0 & 255);
                this.buffer_.push(a2 >>> 8 & 255);
              };
              jspb.BinaryEncoder.prototype.writeInt32 = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
                this.buffer_.push(a2 >>> 0 & 255);
                this.buffer_.push(a2 >>> 8 & 255);
                this.buffer_.push(a2 >>> 16 & 255);
                this.buffer_.push(a2 >>> 24 & 255);
              };
              jspb.BinaryEncoder.prototype.writeInt64 = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
                jspb.utils.splitInt64(a2);
                this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
              };
              jspb.BinaryEncoder.prototype.writeInt64String = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(+a2 >= -jspb.BinaryConstants.TWO_TO_63 && +a2 < jspb.BinaryConstants.TWO_TO_63);
                jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a2));
                this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
              };
              jspb.BinaryEncoder.prototype.writeFloat = function(a2) {
                jspb.asserts.assert(Infinity === a2 || -Infinity === a2 || isNaN(a2) || a2 >= -jspb.BinaryConstants.FLOAT32_MAX && a2 <= jspb.BinaryConstants.FLOAT32_MAX);
                jspb.utils.splitFloat32(a2);
                this.writeUint32(jspb.utils.split64Low);
              };
              jspb.BinaryEncoder.prototype.writeDouble = function(a2) {
                jspb.asserts.assert(Infinity === a2 || -Infinity === a2 || isNaN(a2) || a2 >= -jspb.BinaryConstants.FLOAT64_MAX && a2 <= jspb.BinaryConstants.FLOAT64_MAX);
                jspb.utils.splitFloat64(a2);
                this.writeUint32(jspb.utils.split64Low);
                this.writeUint32(jspb.utils.split64High);
              };
              jspb.BinaryEncoder.prototype.writeBool = function(a2) {
                jspb.asserts.assert("boolean" === typeof a2 || "number" === typeof a2);
                this.buffer_.push(a2 ? 1 : 0);
              };
              jspb.BinaryEncoder.prototype.writeEnum = function(a2) {
                jspb.asserts.assert(a2 == Math.floor(a2));
                jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
                this.writeSignedVarint32(a2);
              };
              jspb.BinaryEncoder.prototype.writeBytes = function(a2) {
                this.buffer_.push.apply(this.buffer_, a2);
              };
              jspb.BinaryEncoder.prototype.writeVarintHash64 = function(a2) {
                jspb.utils.splitHash64(a2);
                this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
              };
              jspb.BinaryEncoder.prototype.writeFixedHash64 = function(a2) {
                jspb.utils.splitHash64(a2);
                this.writeUint32(jspb.utils.split64Low);
                this.writeUint32(jspb.utils.split64High);
              };
              jspb.BinaryEncoder.prototype.writeString = function(a2) {
                var b2 = this.buffer_.length;
                jspb.asserts.assertString(a2);
                for (var c2 = 0; c2 < a2.length; c2++) {
                  var d2 = a2.charCodeAt(c2);
                  if (128 > d2)
                    this.buffer_.push(d2);
                  else if (2048 > d2)
                    this.buffer_.push(d2 >> 6 | 192), this.buffer_.push(d2 & 63 | 128);
                  else if (65536 > d2)
                    if (55296 <= d2 && 56319 >= d2 && c2 + 1 < a2.length) {
                      var e2 = a2.charCodeAt(c2 + 1);
                      56320 <= e2 && 57343 >= e2 && (d2 = 1024 * (d2 - 55296) + e2 - 56320 + 65536, this.buffer_.push(d2 >> 18 | 240), this.buffer_.push(d2 >> 12 & 63 | 128), this.buffer_.push(d2 >> 6 & 63 | 128), this.buffer_.push(d2 & 63 | 128), c2++);
                    } else
                      this.buffer_.push(d2 >> 12 | 224), this.buffer_.push(d2 >> 6 & 63 | 128), this.buffer_.push(d2 & 63 | 128);
                }
                return this.buffer_.length - b2;
              };
              jspb.arith = {};
              jspb.arith.UInt64 = function(a2, b2) {
                this.lo = a2;
                this.hi = b2;
              };
              jspb.arith.UInt64.prototype.cmp = function(a2) {
                return this.hi < a2.hi || this.hi == a2.hi && this.lo < a2.lo ? -1 : this.hi == a2.hi && this.lo == a2.lo ? 0 : 1;
              };
              jspb.arith.UInt64.prototype.rightShift = function() {
                return new jspb.arith.UInt64((this.lo >>> 1 | (this.hi & 1) << 31) >>> 0, this.hi >>> 1 >>> 0);
              };
              jspb.arith.UInt64.prototype.leftShift = function() {
                return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0);
              };
              jspb.arith.UInt64.prototype.msb = function() {
                return !!(this.hi & 2147483648);
              };
              jspb.arith.UInt64.prototype.lsb = function() {
                return !!(this.lo & 1);
              };
              jspb.arith.UInt64.prototype.zero = function() {
                return 0 == this.lo && 0 == this.hi;
              };
              jspb.arith.UInt64.prototype.add = function(a2) {
                return new jspb.arith.UInt64((this.lo + a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a2.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a2.lo ? 1 : 0) >>> 0);
              };
              jspb.arith.UInt64.prototype.sub = function(a2) {
                return new jspb.arith.UInt64((this.lo - a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a2.hi & 4294967295) >>> 0) - (0 > this.lo - a2.lo ? 1 : 0) >>> 0);
              };
              jspb.arith.UInt64.mul32x32 = function(a2, b2) {
                var c2 = a2 & 65535;
                a2 >>>= 16;
                var d2 = b2 & 65535, e2 = b2 >>> 16;
                b2 = c2 * d2 + 65536 * (c2 * e2 & 65535) + 65536 * (a2 * d2 & 65535);
                for (c2 = a2 * e2 + (c2 * e2 >>> 16) + (a2 * d2 >>> 16); 4294967296 <= b2; )
                  b2 -= 4294967296, c2 += 1;
                return new jspb.arith.UInt64(b2 >>> 0, c2 >>> 0);
              };
              jspb.arith.UInt64.prototype.mul = function(a2) {
                var b2 = jspb.arith.UInt64.mul32x32(this.lo, a2);
                a2 = jspb.arith.UInt64.mul32x32(this.hi, a2);
                a2.hi = a2.lo;
                a2.lo = 0;
                return b2.add(a2);
              };
              jspb.arith.UInt64.prototype.div = function(a2) {
                if (0 == a2)
                  return [];
                var b2 = new jspb.arith.UInt64(0, 0), c2 = new jspb.arith.UInt64(this.lo, this.hi);
                a2 = new jspb.arith.UInt64(a2, 0);
                for (var d2 = new jspb.arith.UInt64(1, 0); !a2.msb(); )
                  a2 = a2.leftShift(), d2 = d2.leftShift();
                for (; !d2.zero(); )
                  0 >= a2.cmp(c2) && (b2 = b2.add(d2), c2 = c2.sub(a2)), a2 = a2.rightShift(), d2 = d2.rightShift();
                return [b2, c2];
              };
              jspb.arith.UInt64.prototype.toString = function() {
                for (var a2 = "", b2 = this; !b2.zero(); ) {
                  b2 = b2.div(10);
                  var c2 = b2[0];
                  a2 = b2[1].lo + a2;
                  b2 = c2;
                }
                "" == a2 && (a2 = "0");
                return a2;
              };
              jspb.arith.UInt64.fromString = function(a2) {
                for (var b2 = new jspb.arith.UInt64(0, 0), c2 = new jspb.arith.UInt64(0, 0), d2 = 0; d2 < a2.length; d2++) {
                  if ("0" > a2[d2] || "9" < a2[d2])
                    return null;
                  var e2 = parseInt(a2[d2], 10);
                  c2.lo = e2;
                  b2 = b2.mul(10).add(c2);
                }
                return b2;
              };
              jspb.arith.UInt64.prototype.clone = function() {
                return new jspb.arith.UInt64(this.lo, this.hi);
              };
              jspb.arith.Int64 = function(a2, b2) {
                this.lo = a2;
                this.hi = b2;
              };
              jspb.arith.Int64.prototype.add = function(a2) {
                return new jspb.arith.Int64((this.lo + a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a2.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a2.lo ? 1 : 0) >>> 0);
              };
              jspb.arith.Int64.prototype.sub = function(a2) {
                return new jspb.arith.Int64((this.lo - a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a2.hi & 4294967295) >>> 0) - (0 > this.lo - a2.lo ? 1 : 0) >>> 0);
              };
              jspb.arith.Int64.prototype.clone = function() {
                return new jspb.arith.Int64(this.lo, this.hi);
              };
              jspb.arith.Int64.prototype.toString = function() {
                var a2 = 0 != (this.hi & 2147483648), b2 = new jspb.arith.UInt64(this.lo, this.hi);
                a2 && (b2 = new jspb.arith.UInt64(0, 0).sub(b2));
                return (a2 ? "-" : "") + b2.toString();
              };
              jspb.arith.Int64.fromString = function(a2) {
                var b2 = 0 < a2.length && "-" == a2[0];
                b2 && (a2 = a2.substring(1));
                a2 = jspb.arith.UInt64.fromString(a2);
                if (null === a2)
                  return null;
                b2 && (a2 = new jspb.arith.UInt64(0, 0).sub(a2));
                return new jspb.arith.Int64(a2.lo, a2.hi);
              };
              jspb.BinaryWriter = function() {
                this.blocks_ = [];
                this.totalLength_ = 0;
                this.encoder_ = new jspb.BinaryEncoder();
                this.bookmarks_ = [];
              };
              jspb.BinaryWriter.prototype.appendUint8Array_ = function(a2) {
                var b2 = this.encoder_.end();
                this.blocks_.push(b2);
                this.blocks_.push(a2);
                this.totalLength_ += b2.length + a2.length;
              };
              jspb.BinaryWriter.prototype.beginDelimited_ = function(a2) {
                this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED);
                a2 = this.encoder_.end();
                this.blocks_.push(a2);
                this.totalLength_ += a2.length;
                a2.push(this.totalLength_);
                return a2;
              };
              jspb.BinaryWriter.prototype.endDelimited_ = function(a2) {
                var b2 = a2.pop();
                b2 = this.totalLength_ + this.encoder_.length() - b2;
                for (jspb.asserts.assert(0 <= b2); 127 < b2; )
                  a2.push(b2 & 127 | 128), b2 >>>= 7, this.totalLength_++;
                a2.push(b2);
                this.totalLength_++;
              };
              jspb.BinaryWriter.prototype.writeSerializedMessage = function(a2, b2, c2) {
                this.appendUint8Array_(a2.subarray(b2, c2));
              };
              jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function(a2, b2, c2) {
                null != a2 && null != b2 && null != c2 && this.writeSerializedMessage(a2, b2, c2);
              };
              jspb.BinaryWriter.prototype.reset = function() {
                this.blocks_ = [];
                this.encoder_.end();
                this.totalLength_ = 0;
                this.bookmarks_ = [];
              };
              jspb.BinaryWriter.prototype.getResultBuffer = function() {
                jspb.asserts.assert(0 == this.bookmarks_.length);
                for (var a2 = new Uint8Array(this.totalLength_ + this.encoder_.length()), b2 = this.blocks_, c2 = b2.length, d2 = 0, e2 = 0; e2 < c2; e2++) {
                  var f2 = b2[e2];
                  a2.set(f2, d2);
                  d2 += f2.length;
                }
                b2 = this.encoder_.end();
                a2.set(b2, d2);
                d2 += b2.length;
                jspb.asserts.assert(d2 == a2.length);
                this.blocks_ = [a2];
                return a2;
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "getResultBuffer", jspb.BinaryWriter.prototype.getResultBuffer);
              jspb.BinaryWriter.prototype.getResultBase64String = function(a2) {
                return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), a2);
              };
              jspb.BinaryWriter.prototype.beginSubMessage = function(a2) {
                this.bookmarks_.push(this.beginDelimited_(a2));
              };
              jspb.BinaryWriter.prototype.endSubMessage = function() {
                jspb.asserts.assert(0 <= this.bookmarks_.length);
                this.endDelimited_(this.bookmarks_.pop());
              };
              jspb.BinaryWriter.prototype.writeFieldHeader_ = function(a2, b2) {
                jspb.asserts.assert(1 <= a2 && a2 == Math.floor(a2));
                this.encoder_.writeUnsignedVarint32(8 * a2 + b2);
              };
              jspb.BinaryWriter.prototype.writeAny = function(a2, b2, c2) {
                var d2 = jspb.BinaryConstants.FieldType;
                switch (a2) {
                  case d2.DOUBLE:
                    this.writeDouble(b2, c2);
                    break;
                  case d2.FLOAT:
                    this.writeFloat(b2, c2);
                    break;
                  case d2.INT64:
                    this.writeInt64(b2, c2);
                    break;
                  case d2.UINT64:
                    this.writeUint64(b2, c2);
                    break;
                  case d2.INT32:
                    this.writeInt32(b2, c2);
                    break;
                  case d2.FIXED64:
                    this.writeFixed64(b2, c2);
                    break;
                  case d2.FIXED32:
                    this.writeFixed32(b2, c2);
                    break;
                  case d2.BOOL:
                    this.writeBool(b2, c2);
                    break;
                  case d2.STRING:
                    this.writeString(b2, c2);
                    break;
                  case d2.GROUP:
                    jspb.asserts.fail("Group field type not supported in writeAny()");
                    break;
                  case d2.MESSAGE:
                    jspb.asserts.fail("Message field type not supported in writeAny()");
                    break;
                  case d2.BYTES:
                    this.writeBytes(b2, c2);
                    break;
                  case d2.UINT32:
                    this.writeUint32(b2, c2);
                    break;
                  case d2.ENUM:
                    this.writeEnum(b2, c2);
                    break;
                  case d2.SFIXED32:
                    this.writeSfixed32(b2, c2);
                    break;
                  case d2.SFIXED64:
                    this.writeSfixed64(b2, c2);
                    break;
                  case d2.SINT32:
                    this.writeSint32(b2, c2);
                    break;
                  case d2.SINT64:
                    this.writeSint64(b2, c2);
                    break;
                  case d2.FHASH64:
                    this.writeFixedHash64(b2, c2);
                    break;
                  case d2.VHASH64:
                    this.writeVarintHash64(b2, c2);
                    break;
                  default:
                    jspb.asserts.fail("Invalid field type in writeAny()");
                }
              };
              jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function(a2, b2) {
                null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(b2));
              };
              jspb.BinaryWriter.prototype.writeSignedVarint32_ = function(a2, b2) {
                null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b2));
              };
              jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function(a2, b2) {
                null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(b2));
              };
              jspb.BinaryWriter.prototype.writeSignedVarint64_ = function(a2, b2) {
                null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(b2));
              };
              jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function(a2, b2) {
                null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(b2));
              };
              jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function(a2, b2) {
                null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(b2));
              };
              jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function(a2, b2) {
                null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(b2));
              };
              jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function(a2, b2) {
                null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarintHash64(b2));
              };
              jspb.BinaryWriter.prototype.writeInt32 = function(a2, b2) {
                null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a2, b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeInt32", jspb.BinaryWriter.prototype.writeInt32);
              jspb.BinaryWriter.prototype.writeInt32String = function(a2, b2) {
                null != b2 && (b2 = parseInt(b2, 10), jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a2, b2));
              };
              jspb.BinaryWriter.prototype.writeInt64 = function(a2, b2) {
                null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeSignedVarint64_(a2, b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeInt64", jspb.BinaryWriter.prototype.writeInt64);
              jspb.BinaryWriter.prototype.writeInt64String = function(a2, b2) {
                null != b2 && (b2 = jspb.arith.Int64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b2.lo, b2.hi));
              };
              jspb.BinaryWriter.prototype.writeUint32 = function(a2, b2) {
                null != b2 && (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a2, b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeUint32", jspb.BinaryWriter.prototype.writeUint32);
              jspb.BinaryWriter.prototype.writeUint32String = function(a2, b2) {
                null != b2 && (b2 = parseInt(b2, 10), jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a2, b2));
              };
              jspb.BinaryWriter.prototype.writeUint64 = function(a2, b2) {
                null != b2 && (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_64), this.writeUnsignedVarint64_(a2, b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeUint64", jspb.BinaryWriter.prototype.writeUint64);
              jspb.BinaryWriter.prototype.writeUint64String = function(a2, b2) {
                null != b2 && (b2 = jspb.arith.UInt64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b2.lo, b2.hi));
              };
              jspb.BinaryWriter.prototype.writeSint32 = function(a2, b2) {
                null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeZigzagVarint32_(a2, b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeSint32", jspb.BinaryWriter.prototype.writeSint32);
              jspb.BinaryWriter.prototype.writeSint64 = function(a2, b2) {
                null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64_(a2, b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeSint64", jspb.BinaryWriter.prototype.writeSint64);
              jspb.BinaryWriter.prototype.writeSintHash64 = function(a2, b2) {
                null != b2 && this.writeZigzagVarintHash64_(a2, b2);
              };
              jspb.BinaryWriter.prototype.writeSint64String = function(a2, b2) {
                null != b2 && this.writeZigzagVarint64String_(a2, b2);
              };
              jspb.BinaryWriter.prototype.writeFixed32 = function(a2, b2) {
                null != b2 && (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeFixed32", jspb.BinaryWriter.prototype.writeFixed32);
              jspb.BinaryWriter.prototype.writeFixed64 = function(a2, b2) {
                null != b2 && (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_64), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeFixed64", jspb.BinaryWriter.prototype.writeFixed64);
              jspb.BinaryWriter.prototype.writeFixed64String = function(a2, b2) {
                null != b2 && (b2 = jspb.arith.UInt64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b2.lo, b2.hi));
              };
              jspb.BinaryWriter.prototype.writeSfixed32 = function(a2, b2) {
                null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeSfixed32", jspb.BinaryWriter.prototype.writeSfixed32);
              jspb.BinaryWriter.prototype.writeSfixed64 = function(a2, b2) {
                null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeSfixed64", jspb.BinaryWriter.prototype.writeSfixed64);
              jspb.BinaryWriter.prototype.writeSfixed64String = function(a2, b2) {
                null != b2 && (b2 = jspb.arith.Int64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b2.lo, b2.hi));
              };
              jspb.BinaryWriter.prototype.writeFloat = function(a2, b2) {
                null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeFloat(b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeFloat", jspb.BinaryWriter.prototype.writeFloat);
              jspb.BinaryWriter.prototype.writeDouble = function(a2, b2) {
                null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeDouble(b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeDouble", jspb.BinaryWriter.prototype.writeDouble);
              jspb.BinaryWriter.prototype.writeBool = function(a2, b2) {
                null != b2 && (jspb.asserts.assert("boolean" === typeof b2 || "number" === typeof b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeBool(b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeBool", jspb.BinaryWriter.prototype.writeBool);
              jspb.BinaryWriter.prototype.writeEnum = function(a2, b2) {
                null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeEnum", jspb.BinaryWriter.prototype.writeEnum);
              jspb.BinaryWriter.prototype.writeString = function(a2, b2) {
                null != b2 && (a2 = this.beginDelimited_(a2), this.encoder_.writeString(b2), this.endDelimited_(a2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeString", jspb.BinaryWriter.prototype.writeString);
              jspb.BinaryWriter.prototype.writeBytes = function(a2, b2) {
                null != b2 && (b2 = jspb.utils.byteSourceToUint8Array(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b2.length), this.appendUint8Array_(b2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeBytes", jspb.BinaryWriter.prototype.writeBytes);
              jspb.BinaryWriter.prototype.writeMessage = function(a2, b2, c2) {
                null != b2 && (a2 = this.beginDelimited_(a2), c2(b2, this), this.endDelimited_(a2));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeMessage", jspb.BinaryWriter.prototype.writeMessage);
              jspb.BinaryWriter.prototype.writeMessageSet = function(a2, b2, c2) {
                null != b2 && (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP), this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(a2), a2 = this.beginDelimited_(3), c2(b2, this), this.endDelimited_(a2), this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP));
              };
              jspb.BinaryWriter.prototype.writeGroup = function(a2, b2, c2) {
                null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.START_GROUP), c2(b2, this), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.END_GROUP));
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeGroup", jspb.BinaryWriter.prototype.writeGroup);
              jspb.BinaryWriter.prototype.writeFixedHash64 = function(a2, b2) {
                null != b2 && (jspb.asserts.assert(8 == b2.length), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeFixedHash64(b2));
              };
              jspb.BinaryWriter.prototype.writeVarintHash64 = function(a2, b2) {
                null != b2 && (jspb.asserts.assert(8 == b2.length), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeVarintHash64(b2));
              };
              jspb.BinaryWriter.prototype.writeSplitFixed64 = function(a2, b2, c2) {
                this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64);
                this.encoder_.writeSplitFixed64(b2, c2);
              };
              jspb.BinaryWriter.prototype.writeSplitVarint64 = function(a2, b2, c2) {
                this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT);
                this.encoder_.writeSplitVarint64(b2, c2);
              };
              jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function(a2, b2, c2) {
                this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT);
                var d2 = this.encoder_;
                jspb.utils.toZigzag64(b2, c2, function(a3, b3) {
                  d2.writeSplitVarint64(a3 >>> 0, b3 >>> 0);
                });
              };
              jspb.BinaryWriter.prototype.writeRepeatedInt32 = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeSignedVarint32_(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedInt32", jspb.BinaryWriter.prototype.writeRepeatedInt32);
              jspb.BinaryWriter.prototype.writeRepeatedInt32String = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeInt32String(a2, b2[c2]);
              };
              jspb.BinaryWriter.prototype.writeRepeatedInt64 = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeSignedVarint64_(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedInt64", jspb.BinaryWriter.prototype.writeRepeatedInt64);
              jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function(a2, b2, c2, d2) {
                if (null != b2)
                  for (var e2 = 0; e2 < b2.length; e2++)
                    this.writeSplitFixed64(a2, c2(b2[e2]), d2(b2[e2]));
              };
              jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function(a2, b2, c2, d2) {
                if (null != b2)
                  for (var e2 = 0; e2 < b2.length; e2++)
                    this.writeSplitVarint64(a2, c2(b2[e2]), d2(b2[e2]));
              };
              jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function(a2, b2, c2, d2) {
                if (null != b2)
                  for (var e2 = 0; e2 < b2.length; e2++)
                    this.writeSplitZigzagVarint64(a2, c2(b2[e2]), d2(b2[e2]));
              };
              jspb.BinaryWriter.prototype.writeRepeatedInt64String = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeInt64String(a2, b2[c2]);
              };
              jspb.BinaryWriter.prototype.writeRepeatedUint32 = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeUnsignedVarint32_(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedUint32", jspb.BinaryWriter.prototype.writeRepeatedUint32);
              jspb.BinaryWriter.prototype.writeRepeatedUint32String = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeUint32String(a2, b2[c2]);
              };
              jspb.BinaryWriter.prototype.writeRepeatedUint64 = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeUnsignedVarint64_(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedUint64", jspb.BinaryWriter.prototype.writeRepeatedUint64);
              jspb.BinaryWriter.prototype.writeRepeatedUint64String = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeUint64String(a2, b2[c2]);
              };
              jspb.BinaryWriter.prototype.writeRepeatedSint32 = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeZigzagVarint32_(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSint32", jspb.BinaryWriter.prototype.writeRepeatedSint32);
              jspb.BinaryWriter.prototype.writeRepeatedSint64 = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeZigzagVarint64_(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSint64", jspb.BinaryWriter.prototype.writeRepeatedSint64);
              jspb.BinaryWriter.prototype.writeRepeatedSint64String = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeZigzagVarint64String_(a2, b2[c2]);
              };
              jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeZigzagVarintHash64_(a2, b2[c2]);
              };
              jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeFixed32(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed32", jspb.BinaryWriter.prototype.writeRepeatedFixed32);
              jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeFixed64(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed64", jspb.BinaryWriter.prototype.writeRepeatedFixed64);
              jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeFixed64String(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed64String", jspb.BinaryWriter.prototype.writeRepeatedFixed64String);
              jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeSfixed32(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSfixed32", jspb.BinaryWriter.prototype.writeRepeatedSfixed32);
              jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeSfixed64(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSfixed64", jspb.BinaryWriter.prototype.writeRepeatedSfixed64);
              jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeSfixed64String(a2, b2[c2]);
              };
              jspb.BinaryWriter.prototype.writeRepeatedFloat = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeFloat(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFloat", jspb.BinaryWriter.prototype.writeRepeatedFloat);
              jspb.BinaryWriter.prototype.writeRepeatedDouble = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeDouble(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedDouble", jspb.BinaryWriter.prototype.writeRepeatedDouble);
              jspb.BinaryWriter.prototype.writeRepeatedBool = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeBool(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedBool", jspb.BinaryWriter.prototype.writeRepeatedBool);
              jspb.BinaryWriter.prototype.writeRepeatedEnum = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeEnum(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedEnum", jspb.BinaryWriter.prototype.writeRepeatedEnum);
              jspb.BinaryWriter.prototype.writeRepeatedString = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeString(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedString", jspb.BinaryWriter.prototype.writeRepeatedString);
              jspb.BinaryWriter.prototype.writeRepeatedBytes = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeBytes(a2, b2[c2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedBytes", jspb.BinaryWriter.prototype.writeRepeatedBytes);
              jspb.BinaryWriter.prototype.writeRepeatedMessage = function(a2, b2, c2) {
                if (null != b2)
                  for (var d2 = 0; d2 < b2.length; d2++) {
                    var e2 = this.beginDelimited_(a2);
                    c2(b2[d2], this);
                    this.endDelimited_(e2);
                  }
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedMessage", jspb.BinaryWriter.prototype.writeRepeatedMessage);
              jspb.BinaryWriter.prototype.writeRepeatedGroup = function(a2, b2, c2) {
                if (null != b2)
                  for (var d2 = 0; d2 < b2.length; d2++)
                    this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.START_GROUP), c2(b2[d2], this), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.END_GROUP);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedGroup", jspb.BinaryWriter.prototype.writeRepeatedGroup);
              jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeFixedHash64(a2, b2[c2]);
              };
              jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function(a2, b2) {
                if (null != b2)
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.writeVarintHash64(a2, b2[c2]);
              };
              jspb.BinaryWriter.prototype.writePackedInt32 = function(a2, b2) {
                if (null != b2 && b2.length) {
                  a2 = this.beginDelimited_(a2);
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.encoder_.writeSignedVarint32(b2[c2]);
                  this.endDelimited_(a2);
                }
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedInt32", jspb.BinaryWriter.prototype.writePackedInt32);
              jspb.BinaryWriter.prototype.writePackedInt32String = function(a2, b2) {
                if (null != b2 && b2.length) {
                  a2 = this.beginDelimited_(a2);
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.encoder_.writeSignedVarint32(parseInt(b2[c2], 10));
                  this.endDelimited_(a2);
                }
              };
              jspb.BinaryWriter.prototype.writePackedInt64 = function(a2, b2) {
                if (null != b2 && b2.length) {
                  a2 = this.beginDelimited_(a2);
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.encoder_.writeSignedVarint64(b2[c2]);
                  this.endDelimited_(a2);
                }
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedInt64", jspb.BinaryWriter.prototype.writePackedInt64);
              jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function(a2, b2, c2, d2) {
                if (null != b2) {
                  a2 = this.beginDelimited_(a2);
                  for (var e2 = 0; e2 < b2.length; e2++)
                    this.encoder_.writeSplitFixed64(c2(b2[e2]), d2(b2[e2]));
                  this.endDelimited_(a2);
                }
              };
              jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function(a2, b2, c2, d2) {
                if (null != b2) {
                  a2 = this.beginDelimited_(a2);
                  for (var e2 = 0; e2 < b2.length; e2++)
                    this.encoder_.writeSplitVarint64(c2(b2[e2]), d2(b2[e2]));
                  this.endDelimited_(a2);
                }
              };
              jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function(a2, b2, c2, d2) {
                if (null != b2) {
                  a2 = this.beginDelimited_(a2);
                  for (var e2 = this.encoder_, f2 = 0; f2 < b2.length; f2++)
                    jspb.utils.toZigzag64(c2(b2[f2]), d2(b2[f2]), function(a3, b3) {
                      e2.writeSplitVarint64(a3 >>> 0, b3 >>> 0);
                    });
                  this.endDelimited_(a2);
                }
              };
              jspb.BinaryWriter.prototype.writePackedInt64String = function(a2, b2) {
                if (null != b2 && b2.length) {
                  a2 = this.beginDelimited_(a2);
                  for (var c2 = 0; c2 < b2.length; c2++) {
                    var d2 = jspb.arith.Int64.fromString(b2[c2]);
                    this.encoder_.writeSplitVarint64(d2.lo, d2.hi);
                  }
                  this.endDelimited_(a2);
                }
              };
              jspb.BinaryWriter.prototype.writePackedUint32 = function(a2, b2) {
                if (null != b2 && b2.length) {
                  a2 = this.beginDelimited_(a2);
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.encoder_.writeUnsignedVarint32(b2[c2]);
                  this.endDelimited_(a2);
                }
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedUint32", jspb.BinaryWriter.prototype.writePackedUint32);
              jspb.BinaryWriter.prototype.writePackedUint32String = function(a2, b2) {
                if (null != b2 && b2.length) {
                  a2 = this.beginDelimited_(a2);
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.encoder_.writeUnsignedVarint32(parseInt(b2[c2], 10));
                  this.endDelimited_(a2);
                }
              };
              jspb.BinaryWriter.prototype.writePackedUint64 = function(a2, b2) {
                if (null != b2 && b2.length) {
                  a2 = this.beginDelimited_(a2);
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.encoder_.writeUnsignedVarint64(b2[c2]);
                  this.endDelimited_(a2);
                }
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedUint64", jspb.BinaryWriter.prototype.writePackedUint64);
              jspb.BinaryWriter.prototype.writePackedUint64String = function(a2, b2) {
                if (null != b2 && b2.length) {
                  a2 = this.beginDelimited_(a2);
                  for (var c2 = 0; c2 < b2.length; c2++) {
                    var d2 = jspb.arith.UInt64.fromString(b2[c2]);
                    this.encoder_.writeSplitVarint64(d2.lo, d2.hi);
                  }
                  this.endDelimited_(a2);
                }
              };
              jspb.BinaryWriter.prototype.writePackedSint32 = function(a2, b2) {
                if (null != b2 && b2.length) {
                  a2 = this.beginDelimited_(a2);
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.encoder_.writeZigzagVarint32(b2[c2]);
                  this.endDelimited_(a2);
                }
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSint32", jspb.BinaryWriter.prototype.writePackedSint32);
              jspb.BinaryWriter.prototype.writePackedSint64 = function(a2, b2) {
                if (null != b2 && b2.length) {
                  a2 = this.beginDelimited_(a2);
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.encoder_.writeZigzagVarint64(b2[c2]);
                  this.endDelimited_(a2);
                }
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSint64", jspb.BinaryWriter.prototype.writePackedSint64);
              jspb.BinaryWriter.prototype.writePackedSint64String = function(a2, b2) {
                if (null != b2 && b2.length) {
                  a2 = this.beginDelimited_(a2);
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(b2[c2]));
                  this.endDelimited_(a2);
                }
              };
              jspb.BinaryWriter.prototype.writePackedSintHash64 = function(a2, b2) {
                if (null != b2 && b2.length) {
                  a2 = this.beginDelimited_(a2);
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.encoder_.writeZigzagVarintHash64(b2[c2]);
                  this.endDelimited_(a2);
                }
              };
              jspb.BinaryWriter.prototype.writePackedFixed32 = function(a2, b2) {
                if (null != b2 && b2.length)
                  for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
                    this.encoder_.writeUint32(b2[a2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFixed32", jspb.BinaryWriter.prototype.writePackedFixed32);
              jspb.BinaryWriter.prototype.writePackedFixed64 = function(a2, b2) {
                if (null != b2 && b2.length)
                  for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
                    this.encoder_.writeUint64(b2[a2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFixed64", jspb.BinaryWriter.prototype.writePackedFixed64);
              jspb.BinaryWriter.prototype.writePackedFixed64String = function(a2, b2) {
                if (null != b2 && b2.length)
                  for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++) {
                    var c2 = jspb.arith.UInt64.fromString(b2[a2]);
                    this.encoder_.writeSplitFixed64(c2.lo, c2.hi);
                  }
              };
              jspb.BinaryWriter.prototype.writePackedSfixed32 = function(a2, b2) {
                if (null != b2 && b2.length)
                  for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
                    this.encoder_.writeInt32(b2[a2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSfixed32", jspb.BinaryWriter.prototype.writePackedSfixed32);
              jspb.BinaryWriter.prototype.writePackedSfixed64 = function(a2, b2) {
                if (null != b2 && b2.length)
                  for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
                    this.encoder_.writeInt64(b2[a2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSfixed64", jspb.BinaryWriter.prototype.writePackedSfixed64);
              jspb.BinaryWriter.prototype.writePackedSfixed64String = function(a2, b2) {
                if (null != b2 && b2.length)
                  for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
                    this.encoder_.writeInt64String(b2[a2]);
              };
              jspb.BinaryWriter.prototype.writePackedFloat = function(a2, b2) {
                if (null != b2 && b2.length)
                  for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
                    this.encoder_.writeFloat(b2[a2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFloat", jspb.BinaryWriter.prototype.writePackedFloat);
              jspb.BinaryWriter.prototype.writePackedDouble = function(a2, b2) {
                if (null != b2 && b2.length)
                  for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
                    this.encoder_.writeDouble(b2[a2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedDouble", jspb.BinaryWriter.prototype.writePackedDouble);
              jspb.BinaryWriter.prototype.writePackedBool = function(a2, b2) {
                if (null != b2 && b2.length)
                  for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b2.length), a2 = 0; a2 < b2.length; a2++)
                    this.encoder_.writeBool(b2[a2]);
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedBool", jspb.BinaryWriter.prototype.writePackedBool);
              jspb.BinaryWriter.prototype.writePackedEnum = function(a2, b2) {
                if (null != b2 && b2.length) {
                  a2 = this.beginDelimited_(a2);
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.encoder_.writeEnum(b2[c2]);
                  this.endDelimited_(a2);
                }
              };
              goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedEnum", jspb.BinaryWriter.prototype.writePackedEnum);
              jspb.BinaryWriter.prototype.writePackedFixedHash64 = function(a2, b2) {
                if (null != b2 && b2.length)
                  for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
                    this.encoder_.writeFixedHash64(b2[a2]);
              };
              jspb.BinaryWriter.prototype.writePackedVarintHash64 = function(a2, b2) {
                if (null != b2 && b2.length) {
                  a2 = this.beginDelimited_(a2);
                  for (var c2 = 0; c2 < b2.length; c2++)
                    this.encoder_.writeVarintHash64(b2[c2]);
                  this.endDelimited_(a2);
                }
              };
              jspb.Map = function(a2, b2) {
                this.arr_ = a2;
                this.valueCtor_ = b2;
                this.map_ = {};
                this.arrClean = true;
                0 < this.arr_.length && this.loadFromArray_();
              };
              goog.exportSymbol("jspb.Map", jspb.Map);
              jspb.Map.prototype.loadFromArray_ = function() {
                for (var a2 = 0; a2 < this.arr_.length; a2++) {
                  var b2 = this.arr_[a2], c2 = b2[0];
                  this.map_[c2.toString()] = new jspb.Map.Entry_(c2, b2[1]);
                }
                this.arrClean = true;
              };
              jspb.Map.prototype.toArray = function() {
                if (this.arrClean) {
                  if (this.valueCtor_) {
                    var a2 = this.map_, b2;
                    for (b2 in a2)
                      if (Object.prototype.hasOwnProperty.call(a2, b2)) {
                        var c2 = a2[b2].valueWrapper;
                        c2 && c2.toArray();
                      }
                  }
                } else {
                  this.arr_.length = 0;
                  a2 = this.stringKeys_();
                  a2.sort();
                  for (b2 = 0; b2 < a2.length; b2++) {
                    var d2 = this.map_[a2[b2]];
                    (c2 = d2.valueWrapper) && c2.toArray();
                    this.arr_.push([d2.key, d2.value]);
                  }
                  this.arrClean = true;
                }
                return this.arr_;
              };
              goog.exportProperty(jspb.Map.prototype, "toArray", jspb.Map.prototype.toArray);
              jspb.Map.prototype.toObject = function(a2, b2) {
                for (var c2 = this.toArray(), d2 = [], e2 = 0; e2 < c2.length; e2++) {
                  var f2 = this.map_[c2[e2][0].toString()];
                  this.wrapEntry_(f2);
                  var g = f2.valueWrapper;
                  g ? (jspb.asserts.assert(b2), d2.push([f2.key, b2(a2, g)])) : d2.push([f2.key, f2.value]);
                }
                return d2;
              };
              goog.exportProperty(jspb.Map.prototype, "toObject", jspb.Map.prototype.toObject);
              jspb.Map.fromObject = function(a2, b2, c2) {
                b2 = new jspb.Map([], b2);
                for (var d2 = 0; d2 < a2.length; d2++) {
                  var e2 = a2[d2][0], f2 = c2(a2[d2][1]);
                  b2.set(e2, f2);
                }
                return b2;
              };
              goog.exportProperty(jspb.Map, "fromObject", jspb.Map.fromObject);
              jspb.Map.ArrayIteratorIterable_ = function(a2) {
                this.idx_ = 0;
                this.arr_ = a2;
              };
              jspb.Map.ArrayIteratorIterable_.prototype.next = function() {
                return this.idx_ < this.arr_.length ? { done: false, value: this.arr_[this.idx_++] } : { done: true, value: void 0 };
              };
              "undefined" != typeof Symbol && (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function() {
                return this;
              });
              jspb.Map.prototype.getLength = function() {
                return this.stringKeys_().length;
              };
              goog.exportProperty(jspb.Map.prototype, "getLength", jspb.Map.prototype.getLength);
              jspb.Map.prototype.clear = function() {
                this.map_ = {};
                this.arrClean = false;
              };
              goog.exportProperty(jspb.Map.prototype, "clear", jspb.Map.prototype.clear);
              jspb.Map.prototype.del = function(a2) {
                a2 = a2.toString();
                var b2 = this.map_.hasOwnProperty(a2);
                delete this.map_[a2];
                this.arrClean = false;
                return b2;
              };
              goog.exportProperty(jspb.Map.prototype, "del", jspb.Map.prototype.del);
              jspb.Map.prototype.getEntryList = function() {
                var a2 = [], b2 = this.stringKeys_();
                b2.sort();
                for (var c2 = 0; c2 < b2.length; c2++) {
                  var d2 = this.map_[b2[c2]];
                  a2.push([d2.key, d2.value]);
                }
                return a2;
              };
              goog.exportProperty(jspb.Map.prototype, "getEntryList", jspb.Map.prototype.getEntryList);
              jspb.Map.prototype.entries = function() {
                var a2 = [], b2 = this.stringKeys_();
                b2.sort();
                for (var c2 = 0; c2 < b2.length; c2++) {
                  var d2 = this.map_[b2[c2]];
                  a2.push([d2.key, this.wrapEntry_(d2)]);
                }
                return new jspb.Map.ArrayIteratorIterable_(a2);
              };
              goog.exportProperty(jspb.Map.prototype, "entries", jspb.Map.prototype.entries);
              jspb.Map.prototype.keys = function() {
                var a2 = [], b2 = this.stringKeys_();
                b2.sort();
                for (var c2 = 0; c2 < b2.length; c2++)
                  a2.push(this.map_[b2[c2]].key);
                return new jspb.Map.ArrayIteratorIterable_(a2);
              };
              goog.exportProperty(jspb.Map.prototype, "keys", jspb.Map.prototype.keys);
              jspb.Map.prototype.values = function() {
                var a2 = [], b2 = this.stringKeys_();
                b2.sort();
                for (var c2 = 0; c2 < b2.length; c2++)
                  a2.push(this.wrapEntry_(this.map_[b2[c2]]));
                return new jspb.Map.ArrayIteratorIterable_(a2);
              };
              goog.exportProperty(jspb.Map.prototype, "values", jspb.Map.prototype.values);
              jspb.Map.prototype.forEach = function(a2, b2) {
                var c2 = this.stringKeys_();
                c2.sort();
                for (var d2 = 0; d2 < c2.length; d2++) {
                  var e2 = this.map_[c2[d2]];
                  a2.call(b2, this.wrapEntry_(e2), e2.key, this);
                }
              };
              goog.exportProperty(jspb.Map.prototype, "forEach", jspb.Map.prototype.forEach);
              jspb.Map.prototype.set = function(a2, b2) {
                var c2 = new jspb.Map.Entry_(a2);
                this.valueCtor_ ? (c2.valueWrapper = b2, c2.value = b2.toArray()) : c2.value = b2;
                this.map_[a2.toString()] = c2;
                this.arrClean = false;
                return this;
              };
              goog.exportProperty(jspb.Map.prototype, "set", jspb.Map.prototype.set);
              jspb.Map.prototype.wrapEntry_ = function(a2) {
                return this.valueCtor_ ? (a2.valueWrapper || (a2.valueWrapper = new this.valueCtor_(a2.value)), a2.valueWrapper) : a2.value;
              };
              jspb.Map.prototype.get = function(a2) {
                if (a2 = this.map_[a2.toString()])
                  return this.wrapEntry_(a2);
              };
              goog.exportProperty(jspb.Map.prototype, "get", jspb.Map.prototype.get);
              jspb.Map.prototype.has = function(a2) {
                return a2.toString() in this.map_;
              };
              goog.exportProperty(jspb.Map.prototype, "has", jspb.Map.prototype.has);
              jspb.Map.prototype.serializeBinary = function(a2, b2, c2, d2, e2) {
                var f2 = this.stringKeys_();
                f2.sort();
                for (var g = 0; g < f2.length; g++) {
                  var h = this.map_[f2[g]];
                  b2.beginSubMessage(a2);
                  c2.call(b2, 1, h.key);
                  this.valueCtor_ ? d2.call(b2, 2, this.wrapEntry_(h), e2) : d2.call(b2, 2, h.value);
                  b2.endSubMessage();
                }
              };
              goog.exportProperty(jspb.Map.prototype, "serializeBinary", jspb.Map.prototype.serializeBinary);
              jspb.Map.deserializeBinary = function(a2, b2, c2, d2, e2, f2, g) {
                for (; b2.nextField() && !b2.isEndGroup(); ) {
                  var h = b2.getFieldNumber();
                  1 == h ? f2 = c2.call(b2) : 2 == h && (a2.valueCtor_ ? (jspb.asserts.assert(e2), g || (g = new a2.valueCtor_()), d2.call(b2, g, e2)) : g = d2.call(b2));
                }
                jspb.asserts.assert(void 0 != f2);
                jspb.asserts.assert(void 0 != g);
                a2.set(f2, g);
              };
              goog.exportProperty(jspb.Map, "deserializeBinary", jspb.Map.deserializeBinary);
              jspb.Map.prototype.stringKeys_ = function() {
                var a2 = this.map_, b2 = [], c2;
                for (c2 in a2)
                  Object.prototype.hasOwnProperty.call(a2, c2) && b2.push(c2);
                return b2;
              };
              jspb.Map.Entry_ = function(a2, b2) {
                this.key = a2;
                this.value = b2;
                this.valueWrapper = void 0;
              };
              jspb.ExtensionFieldInfo = function(a2, b2, c2, d2, e2) {
                this.fieldIndex = a2;
                this.fieldName = b2;
                this.ctor = c2;
                this.toObjectFn = d2;
                this.isRepeated = e2;
              };
              goog.exportSymbol("jspb.ExtensionFieldInfo", jspb.ExtensionFieldInfo);
              jspb.ExtensionFieldBinaryInfo = function(a2, b2, c2, d2, e2, f2) {
                this.fieldInfo = a2;
                this.binaryReaderFn = b2;
                this.binaryWriterFn = c2;
                this.binaryMessageSerializeFn = d2;
                this.binaryMessageDeserializeFn = e2;
                this.isPacked = f2;
              };
              goog.exportSymbol("jspb.ExtensionFieldBinaryInfo", jspb.ExtensionFieldBinaryInfo);
              jspb.ExtensionFieldInfo.prototype.isMessageType = function() {
                return !!this.ctor;
              };
              goog.exportProperty(jspb.ExtensionFieldInfo.prototype, "isMessageType", jspb.ExtensionFieldInfo.prototype.isMessageType);
              jspb.Message = function() {
              };
              goog.exportSymbol("jspb.Message", jspb.Message);
              jspb.Message.GENERATE_TO_OBJECT = true;
              goog.exportProperty(jspb.Message, "GENERATE_TO_OBJECT", jspb.Message.GENERATE_TO_OBJECT);
              jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE;
              goog.exportProperty(jspb.Message, "GENERATE_FROM_OBJECT", jspb.Message.GENERATE_FROM_OBJECT);
              jspb.Message.GENERATE_TO_STRING = true;
              jspb.Message.ASSUME_LOCAL_ARRAYS = false;
              jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = true;
              jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array;
              jspb.Message.prototype.getJsPbMessageId = function() {
                return this.messageId_;
              };
              goog.exportProperty(jspb.Message.prototype, "getJsPbMessageId", jspb.Message.prototype.getJsPbMessageId);
              jspb.Message.getIndex_ = function(a2, b2) {
                return b2 + a2.arrayIndexOffset_;
              };
              jspb.Message.hiddenES6Property_ = function() {
              };
              jspb.Message.getFieldNumber_ = function(a2, b2) {
                return b2 - a2.arrayIndexOffset_;
              };
              jspb.Message.initialize = function(a2, b2, c2, d2, e2, f2) {
                a2.wrappers_ = null;
                b2 || (b2 = c2 ? [c2] : []);
                a2.messageId_ = c2 ? String(c2) : void 0;
                a2.arrayIndexOffset_ = 0 === c2 ? -1 : 0;
                a2.array = b2;
                jspb.Message.initPivotAndExtensionObject_(a2, d2);
                a2.convertedPrimitiveFields_ = {};
                jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (a2.repeatedFields = e2);
                if (e2)
                  for (b2 = 0; b2 < e2.length; b2++)
                    c2 = e2[b2], c2 < a2.pivot_ ? (c2 = jspb.Message.getIndex_(a2, c2), a2.array[c2] = a2.array[c2] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(a2), a2.extensionObject_[c2] = a2.extensionObject_[c2] || jspb.Message.EMPTY_LIST_SENTINEL_);
                if (f2 && f2.length)
                  for (b2 = 0; b2 < f2.length; b2++)
                    jspb.Message.computeOneofCase(a2, f2[b2]);
              };
              goog.exportProperty(jspb.Message, "initialize", jspb.Message.initialize);
              jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [];
              jspb.Message.isArray_ = function(a2) {
                return jspb.Message.ASSUME_LOCAL_ARRAYS ? a2 instanceof Array : Array.isArray(a2);
              };
              jspb.Message.isExtensionObject_ = function(a2) {
                return null !== a2 && "object" == typeof a2 && !jspb.Message.isArray_(a2) && !(jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array);
              };
              jspb.Message.initPivotAndExtensionObject_ = function(a2, b2) {
                var c2 = a2.array.length, d2 = -1;
                if (c2 && (d2 = c2 - 1, c2 = a2.array[d2], jspb.Message.isExtensionObject_(c2))) {
                  a2.pivot_ = jspb.Message.getFieldNumber_(a2, d2);
                  a2.extensionObject_ = c2;
                  return;
                }
                -1 < b2 ? (a2.pivot_ = Math.max(b2, jspb.Message.getFieldNumber_(a2, d2 + 1)), a2.extensionObject_ = null) : a2.pivot_ = Number.MAX_VALUE;
              };
              jspb.Message.maybeInitEmptyExtensionObject_ = function(a2) {
                var b2 = jspb.Message.getIndex_(a2, a2.pivot_);
                a2.array[b2] || (a2.extensionObject_ = a2.array[b2] = {});
              };
              jspb.Message.toObjectList = function(a2, b2, c2) {
                for (var d2 = [], e2 = 0; e2 < a2.length; e2++)
                  d2[e2] = b2.call(a2[e2], c2, a2[e2]);
                return d2;
              };
              goog.exportProperty(jspb.Message, "toObjectList", jspb.Message.toObjectList);
              jspb.Message.toObjectExtension = function(a2, b2, c2, d2, e2) {
                for (var f2 in c2) {
                  var g = c2[f2], h = d2.call(a2, g);
                  if (null != h) {
                    for (var k in g.fieldName)
                      if (g.fieldName.hasOwnProperty(k))
                        break;
                    b2[k] = g.toObjectFn ? g.isRepeated ? jspb.Message.toObjectList(h, g.toObjectFn, e2) : g.toObjectFn(e2, h) : h;
                  }
                }
              };
              goog.exportProperty(jspb.Message, "toObjectExtension", jspb.Message.toObjectExtension);
              jspb.Message.serializeBinaryExtensions = function(a2, b2, c2, d2) {
                for (var e2 in c2) {
                  var f2 = c2[e2], g = f2.fieldInfo;
                  if (!f2.binaryWriterFn)
                    throw Error("Message extension present that was generated without binary serialization support");
                  var h = d2.call(a2, g);
                  if (null != h)
                    if (g.isMessageType())
                      if (f2.binaryMessageSerializeFn)
                        f2.binaryWriterFn.call(b2, g.fieldIndex, h, f2.binaryMessageSerializeFn);
                      else
                        throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
                    else
                      f2.binaryWriterFn.call(b2, g.fieldIndex, h);
                }
              };
              goog.exportProperty(jspb.Message, "serializeBinaryExtensions", jspb.Message.serializeBinaryExtensions);
              jspb.Message.readBinaryExtension = function(a2, b2, c2, d2, e2) {
                var f2 = c2[b2.getFieldNumber()];
                if (f2) {
                  c2 = f2.fieldInfo;
                  if (!f2.binaryReaderFn)
                    throw Error("Deserializing extension whose generated code does not support binary format");
                  if (c2.isMessageType()) {
                    var g = new c2.ctor();
                    f2.binaryReaderFn.call(b2, g, f2.binaryMessageDeserializeFn);
                  } else
                    g = f2.binaryReaderFn.call(b2);
                  c2.isRepeated && !f2.isPacked ? (b2 = d2.call(a2, c2)) ? b2.push(g) : e2.call(a2, c2, [g]) : e2.call(a2, c2, g);
                } else
                  b2.skipField();
              };
              goog.exportProperty(jspb.Message, "readBinaryExtension", jspb.Message.readBinaryExtension);
              jspb.Message.getField = function(a2, b2) {
                if (b2 < a2.pivot_) {
                  b2 = jspb.Message.getIndex_(a2, b2);
                  var c2 = a2.array[b2];
                  return c2 === jspb.Message.EMPTY_LIST_SENTINEL_ ? a2.array[b2] = [] : c2;
                }
                if (a2.extensionObject_)
                  return c2 = a2.extensionObject_[b2], c2 === jspb.Message.EMPTY_LIST_SENTINEL_ ? a2.extensionObject_[b2] = [] : c2;
              };
              goog.exportProperty(jspb.Message, "getField", jspb.Message.getField);
              jspb.Message.getRepeatedField = function(a2, b2) {
                return jspb.Message.getField(a2, b2);
              };
              goog.exportProperty(jspb.Message, "getRepeatedField", jspb.Message.getRepeatedField);
              jspb.Message.getOptionalFloatingPointField = function(a2, b2) {
                a2 = jspb.Message.getField(a2, b2);
                return null == a2 ? a2 : +a2;
              };
              goog.exportProperty(jspb.Message, "getOptionalFloatingPointField", jspb.Message.getOptionalFloatingPointField);
              jspb.Message.getBooleanField = function(a2, b2) {
                a2 = jspb.Message.getField(a2, b2);
                return null == a2 ? a2 : !!a2;
              };
              goog.exportProperty(jspb.Message, "getBooleanField", jspb.Message.getBooleanField);
              jspb.Message.getRepeatedFloatingPointField = function(a2, b2) {
                var c2 = jspb.Message.getRepeatedField(a2, b2);
                a2.convertedPrimitiveFields_ || (a2.convertedPrimitiveFields_ = {});
                if (!a2.convertedPrimitiveFields_[b2]) {
                  for (var d2 = 0; d2 < c2.length; d2++)
                    c2[d2] = +c2[d2];
                  a2.convertedPrimitiveFields_[b2] = true;
                }
                return c2;
              };
              goog.exportProperty(jspb.Message, "getRepeatedFloatingPointField", jspb.Message.getRepeatedFloatingPointField);
              jspb.Message.getRepeatedBooleanField = function(a2, b2) {
                var c2 = jspb.Message.getRepeatedField(a2, b2);
                a2.convertedPrimitiveFields_ || (a2.convertedPrimitiveFields_ = {});
                if (!a2.convertedPrimitiveFields_[b2]) {
                  for (var d2 = 0; d2 < c2.length; d2++)
                    c2[d2] = !!c2[d2];
                  a2.convertedPrimitiveFields_[b2] = true;
                }
                return c2;
              };
              goog.exportProperty(jspb.Message, "getRepeatedBooleanField", jspb.Message.getRepeatedBooleanField);
              jspb.Message.bytesAsB64 = function(a2) {
                if (null == a2 || "string" === typeof a2)
                  return a2;
                if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array)
                  return goog.crypt.base64.encodeByteArray(a2);
                jspb.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(a2));
                return null;
              };
              goog.exportProperty(jspb.Message, "bytesAsB64", jspb.Message.bytesAsB64);
              jspb.Message.bytesAsU8 = function(a2) {
                if (null == a2 || a2 instanceof Uint8Array)
                  return a2;
                if ("string" === typeof a2)
                  return goog.crypt.base64.decodeStringToUint8Array(a2);
                jspb.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(a2));
                return null;
              };
              goog.exportProperty(jspb.Message, "bytesAsU8", jspb.Message.bytesAsU8);
              jspb.Message.bytesListAsB64 = function(a2) {
                jspb.Message.assertConsistentTypes_(a2);
                return a2.length && "string" !== typeof a2[0] ? goog.array.map(a2, jspb.Message.bytesAsB64) : a2;
              };
              goog.exportProperty(jspb.Message, "bytesListAsB64", jspb.Message.bytesListAsB64);
              jspb.Message.bytesListAsU8 = function(a2) {
                jspb.Message.assertConsistentTypes_(a2);
                return !a2.length || a2[0] instanceof Uint8Array ? a2 : goog.array.map(a2, jspb.Message.bytesAsU8);
              };
              goog.exportProperty(jspb.Message, "bytesListAsU8", jspb.Message.bytesListAsU8);
              jspb.Message.assertConsistentTypes_ = function(a2) {
                if (goog.DEBUG && a2 && 1 < a2.length) {
                  var b2 = goog.typeOf(a2[0]);
                  goog.array.forEach(a2, function(a3) {
                    goog.typeOf(a3) != b2 && jspb.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(a3) + " expected " + b2);
                  });
                }
              };
              jspb.Message.getFieldWithDefault = function(a2, b2, c2) {
                a2 = jspb.Message.getField(a2, b2);
                return null == a2 ? c2 : a2;
              };
              goog.exportProperty(jspb.Message, "getFieldWithDefault", jspb.Message.getFieldWithDefault);
              jspb.Message.getBooleanFieldWithDefault = function(a2, b2, c2) {
                a2 = jspb.Message.getBooleanField(a2, b2);
                return null == a2 ? c2 : a2;
              };
              goog.exportProperty(jspb.Message, "getBooleanFieldWithDefault", jspb.Message.getBooleanFieldWithDefault);
              jspb.Message.getFloatingPointFieldWithDefault = function(a2, b2, c2) {
                a2 = jspb.Message.getOptionalFloatingPointField(a2, b2);
                return null == a2 ? c2 : a2;
              };
              goog.exportProperty(jspb.Message, "getFloatingPointFieldWithDefault", jspb.Message.getFloatingPointFieldWithDefault);
              jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault;
              goog.exportProperty(jspb.Message, "getFieldProto3", jspb.Message.getFieldProto3);
              jspb.Message.getMapField = function(a2, b2, c2, d2) {
                a2.wrappers_ || (a2.wrappers_ = {});
                if (b2 in a2.wrappers_)
                  return a2.wrappers_[b2];
                var e2 = jspb.Message.getField(a2, b2);
                if (!e2) {
                  if (c2)
                    return;
                  e2 = [];
                  jspb.Message.setField(a2, b2, e2);
                }
                return a2.wrappers_[b2] = new jspb.Map(e2, d2);
              };
              goog.exportProperty(jspb.Message, "getMapField", jspb.Message.getMapField);
              jspb.Message.setField = function(a2, b2, c2) {
                jspb.asserts.assertInstanceof(a2, jspb.Message);
                b2 < a2.pivot_ ? a2.array[jspb.Message.getIndex_(a2, b2)] = c2 : (jspb.Message.maybeInitEmptyExtensionObject_(a2), a2.extensionObject_[b2] = c2);
                return a2;
              };
              goog.exportProperty(jspb.Message, "setField", jspb.Message.setField);
              jspb.Message.setProto3IntField = function(a2, b2, c2) {
                return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
              };
              goog.exportProperty(jspb.Message, "setProto3IntField", jspb.Message.setProto3IntField);
              jspb.Message.setProto3FloatField = function(a2, b2, c2) {
                return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
              };
              goog.exportProperty(jspb.Message, "setProto3FloatField", jspb.Message.setProto3FloatField);
              jspb.Message.setProto3BooleanField = function(a2, b2, c2) {
                return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, false);
              };
              goog.exportProperty(jspb.Message, "setProto3BooleanField", jspb.Message.setProto3BooleanField);
              jspb.Message.setProto3StringField = function(a2, b2, c2) {
                return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "");
              };
              goog.exportProperty(jspb.Message, "setProto3StringField", jspb.Message.setProto3StringField);
              jspb.Message.setProto3BytesField = function(a2, b2, c2) {
                return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "");
              };
              goog.exportProperty(jspb.Message, "setProto3BytesField", jspb.Message.setProto3BytesField);
              jspb.Message.setProto3EnumField = function(a2, b2, c2) {
                return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
              };
              goog.exportProperty(jspb.Message, "setProto3EnumField", jspb.Message.setProto3EnumField);
              jspb.Message.setProto3StringIntField = function(a2, b2, c2) {
                return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "0");
              };
              goog.exportProperty(jspb.Message, "setProto3StringIntField", jspb.Message.setProto3StringIntField);
              jspb.Message.setFieldIgnoringDefault_ = function(a2, b2, c2, d2) {
                jspb.asserts.assertInstanceof(a2, jspb.Message);
                c2 !== d2 ? jspb.Message.setField(a2, b2, c2) : b2 < a2.pivot_ ? a2.array[jspb.Message.getIndex_(a2, b2)] = null : (jspb.Message.maybeInitEmptyExtensionObject_(a2), delete a2.extensionObject_[b2]);
                return a2;
              };
              jspb.Message.addToRepeatedField = function(a2, b2, c2, d2) {
                jspb.asserts.assertInstanceof(a2, jspb.Message);
                b2 = jspb.Message.getRepeatedField(a2, b2);
                void 0 != d2 ? b2.splice(d2, 0, c2) : b2.push(c2);
                return a2;
              };
              goog.exportProperty(jspb.Message, "addToRepeatedField", jspb.Message.addToRepeatedField);
              jspb.Message.setOneofField = function(a2, b2, c2, d2) {
                jspb.asserts.assertInstanceof(a2, jspb.Message);
                (c2 = jspb.Message.computeOneofCase(a2, c2)) && c2 !== b2 && void 0 !== d2 && (a2.wrappers_ && c2 in a2.wrappers_ && (a2.wrappers_[c2] = void 0), jspb.Message.setField(a2, c2, void 0));
                return jspb.Message.setField(a2, b2, d2);
              };
              goog.exportProperty(jspb.Message, "setOneofField", jspb.Message.setOneofField);
              jspb.Message.computeOneofCase = function(a2, b2) {
                for (var c2, d2, e2 = 0; e2 < b2.length; e2++) {
                  var f2 = b2[e2], g = jspb.Message.getField(a2, f2);
                  null != g && (c2 = f2, d2 = g, jspb.Message.setField(a2, f2, void 0));
                }
                return c2 ? (jspb.Message.setField(a2, c2, d2), c2) : 0;
              };
              goog.exportProperty(jspb.Message, "computeOneofCase", jspb.Message.computeOneofCase);
              jspb.Message.getWrapperField = function(a2, b2, c2, d2) {
                a2.wrappers_ || (a2.wrappers_ = {});
                if (!a2.wrappers_[c2]) {
                  var e2 = jspb.Message.getField(a2, c2);
                  if (d2 || e2)
                    a2.wrappers_[c2] = new b2(e2);
                }
                return a2.wrappers_[c2];
              };
              goog.exportProperty(jspb.Message, "getWrapperField", jspb.Message.getWrapperField);
              jspb.Message.getRepeatedWrapperField = function(a2, b2, c2) {
                jspb.Message.wrapRepeatedField_(a2, b2, c2);
                b2 = a2.wrappers_[c2];
                b2 == jspb.Message.EMPTY_LIST_SENTINEL_ && (b2 = a2.wrappers_[c2] = []);
                return b2;
              };
              goog.exportProperty(jspb.Message, "getRepeatedWrapperField", jspb.Message.getRepeatedWrapperField);
              jspb.Message.wrapRepeatedField_ = function(a2, b2, c2) {
                a2.wrappers_ || (a2.wrappers_ = {});
                if (!a2.wrappers_[c2]) {
                  for (var d2 = jspb.Message.getRepeatedField(a2, c2), e2 = [], f2 = 0; f2 < d2.length; f2++)
                    e2[f2] = new b2(d2[f2]);
                  a2.wrappers_[c2] = e2;
                }
              };
              jspb.Message.setWrapperField = function(a2, b2, c2) {
                jspb.asserts.assertInstanceof(a2, jspb.Message);
                a2.wrappers_ || (a2.wrappers_ = {});
                var d2 = c2 ? c2.toArray() : c2;
                a2.wrappers_[b2] = c2;
                return jspb.Message.setField(a2, b2, d2);
              };
              goog.exportProperty(jspb.Message, "setWrapperField", jspb.Message.setWrapperField);
              jspb.Message.setOneofWrapperField = function(a2, b2, c2, d2) {
                jspb.asserts.assertInstanceof(a2, jspb.Message);
                a2.wrappers_ || (a2.wrappers_ = {});
                var e2 = d2 ? d2.toArray() : d2;
                a2.wrappers_[b2] = d2;
                return jspb.Message.setOneofField(a2, b2, c2, e2);
              };
              goog.exportProperty(jspb.Message, "setOneofWrapperField", jspb.Message.setOneofWrapperField);
              jspb.Message.setRepeatedWrapperField = function(a2, b2, c2) {
                jspb.asserts.assertInstanceof(a2, jspb.Message);
                a2.wrappers_ || (a2.wrappers_ = {});
                c2 = c2 || [];
                for (var d2 = [], e2 = 0; e2 < c2.length; e2++)
                  d2[e2] = c2[e2].toArray();
                a2.wrappers_[b2] = c2;
                return jspb.Message.setField(a2, b2, d2);
              };
              goog.exportProperty(jspb.Message, "setRepeatedWrapperField", jspb.Message.setRepeatedWrapperField);
              jspb.Message.addToRepeatedWrapperField = function(a2, b2, c2, d2, e2) {
                jspb.Message.wrapRepeatedField_(a2, d2, b2);
                var f2 = a2.wrappers_[b2];
                f2 || (f2 = a2.wrappers_[b2] = []);
                c2 = c2 ? c2 : new d2();
                a2 = jspb.Message.getRepeatedField(a2, b2);
                void 0 != e2 ? (f2.splice(e2, 0, c2), a2.splice(e2, 0, c2.toArray())) : (f2.push(c2), a2.push(c2.toArray()));
                return c2;
              };
              goog.exportProperty(jspb.Message, "addToRepeatedWrapperField", jspb.Message.addToRepeatedWrapperField);
              jspb.Message.toMap = function(a2, b2, c2, d2) {
                for (var e2 = {}, f2 = 0; f2 < a2.length; f2++)
                  e2[b2.call(a2[f2])] = c2 ? c2.call(a2[f2], d2, a2[f2]) : a2[f2];
                return e2;
              };
              goog.exportProperty(jspb.Message, "toMap", jspb.Message.toMap);
              jspb.Message.prototype.syncMapFields_ = function() {
                if (this.wrappers_)
                  for (var a2 in this.wrappers_) {
                    var b2 = this.wrappers_[a2];
                    if (Array.isArray(b2))
                      for (var c2 = 0; c2 < b2.length; c2++)
                        b2[c2] && b2[c2].toArray();
                    else
                      b2 && b2.toArray();
                  }
              };
              jspb.Message.prototype.toArray = function() {
                this.syncMapFields_();
                return this.array;
              };
              goog.exportProperty(jspb.Message.prototype, "toArray", jspb.Message.prototype.toArray);
              jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function() {
                this.syncMapFields_();
                return this.array.toString();
              });
              jspb.Message.prototype.getExtension = function(a2) {
                if (this.extensionObject_) {
                  this.wrappers_ || (this.wrappers_ = {});
                  var b2 = a2.fieldIndex;
                  if (a2.isRepeated) {
                    if (a2.isMessageType())
                      return this.wrappers_[b2] || (this.wrappers_[b2] = goog.array.map(this.extensionObject_[b2] || [], function(b3) {
                        return new a2.ctor(b3);
                      })), this.wrappers_[b2];
                  } else if (a2.isMessageType())
                    return !this.wrappers_[b2] && this.extensionObject_[b2] && (this.wrappers_[b2] = new a2.ctor(this.extensionObject_[b2])), this.wrappers_[b2];
                  return this.extensionObject_[b2];
                }
              };
              goog.exportProperty(jspb.Message.prototype, "getExtension", jspb.Message.prototype.getExtension);
              jspb.Message.prototype.setExtension = function(a2, b2) {
                this.wrappers_ || (this.wrappers_ = {});
                jspb.Message.maybeInitEmptyExtensionObject_(this);
                var c2 = a2.fieldIndex;
                a2.isRepeated ? (b2 = b2 || [], a2.isMessageType() ? (this.wrappers_[c2] = b2, this.extensionObject_[c2] = goog.array.map(b2, function(a3) {
                  return a3.toArray();
                })) : this.extensionObject_[c2] = b2) : a2.isMessageType() ? (this.wrappers_[c2] = b2, this.extensionObject_[c2] = b2 ? b2.toArray() : b2) : this.extensionObject_[c2] = b2;
                return this;
              };
              goog.exportProperty(jspb.Message.prototype, "setExtension", jspb.Message.prototype.setExtension);
              jspb.Message.difference = function(a2, b2) {
                if (!(a2 instanceof b2.constructor))
                  throw Error("Messages have different types.");
                var c2 = a2.toArray();
                b2 = b2.toArray();
                var d2 = [], e2 = 0, f2 = c2.length > b2.length ? c2.length : b2.length;
                a2.getJsPbMessageId() && (d2[0] = a2.getJsPbMessageId(), e2 = 1);
                for (; e2 < f2; e2++)
                  jspb.Message.compareFields(c2[e2], b2[e2]) || (d2[e2] = b2[e2]);
                return new a2.constructor(d2);
              };
              goog.exportProperty(jspb.Message, "difference", jspb.Message.difference);
              jspb.Message.equals = function(a2, b2) {
                return a2 == b2 || !(!a2 || !b2) && a2 instanceof b2.constructor && jspb.Message.compareFields(a2.toArray(), b2.toArray());
              };
              goog.exportProperty(jspb.Message, "equals", jspb.Message.equals);
              jspb.Message.compareExtensions = function(a2, b2) {
                a2 = a2 || {};
                b2 = b2 || {};
                var c2 = {}, d2;
                for (d2 in a2)
                  c2[d2] = 0;
                for (d2 in b2)
                  c2[d2] = 0;
                for (d2 in c2)
                  if (!jspb.Message.compareFields(a2[d2], b2[d2]))
                    return false;
                return true;
              };
              goog.exportProperty(jspb.Message, "compareExtensions", jspb.Message.compareExtensions);
              jspb.Message.compareFields = function(a2, b2) {
                if (a2 == b2)
                  return true;
                if (!goog.isObject(a2) || !goog.isObject(b2))
                  return "number" === typeof a2 && isNaN(a2) || "number" === typeof b2 && isNaN(b2) ? String(a2) == String(b2) : false;
                if (a2.constructor != b2.constructor)
                  return false;
                if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2.constructor === Uint8Array) {
                  if (a2.length != b2.length)
                    return false;
                  for (var c2 = 0; c2 < a2.length; c2++)
                    if (a2[c2] != b2[c2])
                      return false;
                  return true;
                }
                if (a2.constructor === Array) {
                  var d2 = void 0, e2 = void 0, f2 = Math.max(a2.length, b2.length);
                  for (c2 = 0; c2 < f2; c2++) {
                    var g = a2[c2], h = b2[c2];
                    g && g.constructor == Object && (jspb.asserts.assert(void 0 === d2), jspb.asserts.assert(c2 === a2.length - 1), d2 = g, g = void 0);
                    h && h.constructor == Object && (jspb.asserts.assert(void 0 === e2), jspb.asserts.assert(c2 === b2.length - 1), e2 = h, h = void 0);
                    if (!jspb.Message.compareFields(g, h))
                      return false;
                  }
                  return d2 || e2 ? (d2 = d2 || {}, e2 = e2 || {}, jspb.Message.compareExtensions(d2, e2)) : true;
                }
                if (a2.constructor === Object)
                  return jspb.Message.compareExtensions(a2, b2);
                throw Error("Invalid type in JSPB array");
              };
              goog.exportProperty(jspb.Message, "compareFields", jspb.Message.compareFields);
              jspb.Message.prototype.cloneMessage = function() {
                return jspb.Message.cloneMessage(this);
              };
              goog.exportProperty(jspb.Message.prototype, "cloneMessage", jspb.Message.prototype.cloneMessage);
              jspb.Message.prototype.clone = function() {
                return jspb.Message.cloneMessage(this);
              };
              goog.exportProperty(jspb.Message.prototype, "clone", jspb.Message.prototype.clone);
              jspb.Message.clone = function(a2) {
                return jspb.Message.cloneMessage(a2);
              };
              goog.exportProperty(jspb.Message, "clone", jspb.Message.clone);
              jspb.Message.cloneMessage = function(a2) {
                return new a2.constructor(jspb.Message.clone_(a2.toArray()));
              };
              jspb.Message.copyInto = function(a2, b2) {
                jspb.asserts.assertInstanceof(a2, jspb.Message);
                jspb.asserts.assertInstanceof(b2, jspb.Message);
                jspb.asserts.assert(a2.constructor == b2.constructor, "Copy source and target message should have the same type.");
                a2 = jspb.Message.clone(a2);
                for (var c2 = b2.toArray(), d2 = a2.toArray(), e2 = c2.length = 0; e2 < d2.length; e2++)
                  c2[e2] = d2[e2];
                b2.wrappers_ = a2.wrappers_;
                b2.extensionObject_ = a2.extensionObject_;
              };
              goog.exportProperty(jspb.Message, "copyInto", jspb.Message.copyInto);
              jspb.Message.clone_ = function(a2) {
                if (Array.isArray(a2)) {
                  for (var b2 = Array(a2.length), c2 = 0; c2 < a2.length; c2++) {
                    var d2 = a2[c2];
                    null != d2 && (b2[c2] = "object" == typeof d2 ? jspb.Message.clone_(jspb.asserts.assert(d2)) : d2);
                  }
                  return b2;
                }
                if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array)
                  return new Uint8Array(a2);
                b2 = {};
                for (c2 in a2)
                  d2 = a2[c2], null != d2 && (b2[c2] = "object" == typeof d2 ? jspb.Message.clone_(jspb.asserts.assert(d2)) : d2);
                return b2;
              };
              jspb.Message.registerMessageType = function(a2, b2) {
                b2.messageId = a2;
              };
              goog.exportProperty(jspb.Message, "registerMessageType", jspb.Message.registerMessageType);
              jspb.Message.messageSetExtensions = {};
              jspb.Message.messageSetExtensionsBinary = {};
              jspb.Export = {};
              exports.Map = jspb.Map, exports.Message = jspb.Message, exports.BinaryReader = jspb.BinaryReader, exports.BinaryWriter = jspb.BinaryWriter, exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo, exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo, exports.exportSymbol = goog.exportSymbol, exports.inherits = goog.inherits, exports.object = { extend: goog.object.extend }, exports.typeOf = goog.typeOf;
            },
            /* 3 */
            /***/
            (__unused_webpack_module2, exports2, __webpack_require__2) => {
              var jspb2 = __webpack_require__2(2);
              var goog2 = jspb2;
              var global = (function() {
                if (this) {
                  return this;
                }
                if (typeof window !== "undefined") {
                  return window;
                }
                if (typeof global !== "undefined") {
                  return global;
                }
                if (typeof self !== "undefined") {
                  return self;
                }
                return Function("return this")();
              }).call(null);
              goog2.exportSymbol("proto.Xiaoyang.Measurement.MeasurementCategory", null, global);
              proto.Xiaoyang.Measurement.MeasurementCategory = {
                NONE: 0,
                HEARTRATE: 1,
                BLOODPRESSURE: 2,
                BLOODOXYGEN: 4,
                RISK: 8,
                AGGRESSIVITY: 16,
                ANXIETY: 32,
                DEPRESSION: 64,
                VITALITY: 128,
                POSITIVITY: 256,
                SUPPRESSION: 512,
                FATIGUE: 1024,
                PHYSIOLOGY: 15,
                EMOTION: 1713,
                ALL: 1727
              };
              goog2.object.extend(exports2, proto.Xiaoyang.Measurement);
            },
            /* 4 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                MessagePackHubProtocol: () => (
                  /* binding */
                  MessagePackHubProtocol
                )
                /* harmony export */
              });
              var _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(7);
              var _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(15);
              var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(5);
              var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(6);
              var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(19);
              var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__2(21);
              var _BinaryMessageFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__2(20);
              var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(18);
              const SERIALIZED_PING_MESSAGE = new Uint8Array([145, _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Ping]);
              class MessagePackHubProtocol {
                /**
                 *
                 * @param messagePackOptions MessagePack options passed to @msgpack/msgpack
                 */
                constructor(messagePackOptions) {
                  this.name = "messagepack";
                  this.version = 2;
                  this.transferFormat = _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__.TransferFormat.Binary;
                  this._errorResult = 1;
                  this._voidResult = 2;
                  this._nonVoidResult = 3;
                  messagePackOptions = messagePackOptions || {};
                  this._encoder = new _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_2__.Encoder(messagePackOptions.extensionCodec, messagePackOptions.context, messagePackOptions.maxDepth, messagePackOptions.initialBufferSize, messagePackOptions.sortKeys, messagePackOptions.forceFloat32, messagePackOptions.ignoreUndefined, messagePackOptions.forceIntegerToFloat);
                  this._decoder = new _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_3__.Decoder(messagePackOptions.extensionCodec, messagePackOptions.context, messagePackOptions.maxStrLength, messagePackOptions.maxBinLength, messagePackOptions.maxArrayLength, messagePackOptions.maxMapLength, messagePackOptions.maxExtLength);
                }
                /** Creates an array of HubMessage objects from the specified serialized representation.
                 *
                 * @param {ArrayBuffer} input An ArrayBuffer containing the serialized representation.
                 * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
                 */
                parseMessages(input, logger) {
                  if (!(0, _Utils__WEBPACK_IMPORTED_MODULE_4__.isArrayBuffer)(input)) {
                    throw new Error("Invalid input for MessagePack hub protocol. Expected an ArrayBuffer.");
                  }
                  if (logger === null) {
                    logger = _microsoft_signalr__WEBPACK_IMPORTED_MODULE_5__.NullLogger.instance;
                  }
                  const messages = _BinaryMessageFormat__WEBPACK_IMPORTED_MODULE_6__.BinaryMessageFormat.parse(input);
                  const hubMessages = [];
                  for (const message of messages) {
                    const parsedMessage = this._parseMessage(message, logger);
                    if (parsedMessage) {
                      hubMessages.push(parsedMessage);
                    }
                  }
                  return hubMessages;
                }
                /** Writes the specified HubMessage to an ArrayBuffer and returns it.
                 *
                 * @param {HubMessage} message The message to write.
                 * @returns {ArrayBuffer} An ArrayBuffer containing the serialized representation of the message.
                 */
                writeMessage(message) {
                  switch (message.type) {
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Invocation:
                      return this._writeInvocation(message);
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.StreamInvocation:
                      return this._writeStreamInvocation(message);
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.StreamItem:
                      return this._writeStreamItem(message);
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Completion:
                      return this._writeCompletion(message);
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Ping:
                      return _BinaryMessageFormat__WEBPACK_IMPORTED_MODULE_6__.BinaryMessageFormat.write(SERIALIZED_PING_MESSAGE);
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.CancelInvocation:
                      return this._writeCancelInvocation(message);
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Close:
                      return this._writeClose();
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Ack:
                      return this._writeAck(message);
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Sequence:
                      return this._writeSequence(message);
                    default:
                      throw new Error("Invalid message type.");
                  }
                }
                _parseMessage(input, logger) {
                  if (input.length === 0) {
                    throw new Error("Invalid payload.");
                  }
                  const properties = this._decoder.decode(input);
                  if (properties.length === 0 || !(properties instanceof Array)) {
                    throw new Error("Invalid payload.");
                  }
                  const messageType = properties[0];
                  switch (messageType) {
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Invocation:
                      return this._createInvocationMessage(this._readHeaders(properties), properties);
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.StreamItem:
                      return this._createStreamItemMessage(this._readHeaders(properties), properties);
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Completion:
                      return this._createCompletionMessage(this._readHeaders(properties), properties);
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Ping:
                      return this._createPingMessage(properties);
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Close:
                      return this._createCloseMessage(properties);
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Ack:
                      return this._createAckMessage(properties);
                    case _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Sequence:
                      return this._createSequenceMessage(properties);
                    default:
                      logger.log(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_7__.LogLevel.Information, "Unknown message type '" + messageType + "' ignored.");
                      return null;
                  }
                }
                _createCloseMessage(properties) {
                  if (properties.length < 2) {
                    throw new Error("Invalid payload for Close message.");
                  }
                  return {
                    // Close messages have no headers.
                    allowReconnect: properties.length >= 3 ? properties[2] : void 0,
                    error: properties[1],
                    type: _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Close
                  };
                }
                _createPingMessage(properties) {
                  if (properties.length < 1) {
                    throw new Error("Invalid payload for Ping message.");
                  }
                  return {
                    // Ping messages have no headers.
                    type: _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Ping
                  };
                }
                _createInvocationMessage(headers, properties) {
                  if (properties.length < 5) {
                    throw new Error("Invalid payload for Invocation message.");
                  }
                  const invocationId = properties[2];
                  if (invocationId) {
                    return {
                      arguments: properties[4],
                      headers,
                      invocationId,
                      streamIds: [],
                      target: properties[3],
                      type: _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Invocation
                    };
                  } else {
                    return {
                      arguments: properties[4],
                      headers,
                      streamIds: [],
                      target: properties[3],
                      type: _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Invocation
                    };
                  }
                }
                _createStreamItemMessage(headers, properties) {
                  if (properties.length < 4) {
                    throw new Error("Invalid payload for StreamItem message.");
                  }
                  return {
                    headers,
                    invocationId: properties[2],
                    item: properties[3],
                    type: _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.StreamItem
                  };
                }
                _createCompletionMessage(headers, properties) {
                  if (properties.length < 4) {
                    throw new Error("Invalid payload for Completion message.");
                  }
                  const resultKind = properties[3];
                  if (resultKind !== this._voidResult && properties.length < 5) {
                    throw new Error("Invalid payload for Completion message.");
                  }
                  let error;
                  let result;
                  switch (resultKind) {
                    case this._errorResult:
                      error = properties[4];
                      break;
                    case this._nonVoidResult:
                      result = properties[4];
                      break;
                  }
                  const completionMessage = {
                    error,
                    headers,
                    invocationId: properties[2],
                    result,
                    type: _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Completion
                  };
                  return completionMessage;
                }
                _createAckMessage(properties) {
                  if (properties.length < 1) {
                    throw new Error("Invalid payload for Ack message.");
                  }
                  return {
                    sequenceId: properties[1],
                    type: _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Ack
                  };
                }
                _createSequenceMessage(properties) {
                  if (properties.length < 1) {
                    throw new Error("Invalid payload for Sequence message.");
                  }
                  return {
                    sequenceId: properties[1],
                    type: _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Sequence
                  };
                }
                _writeInvocation(invocationMessage) {
                  let payload;
                  if (invocationMessage.streamIds) {
                    payload = this._encoder.encode([
                      _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Invocation,
                      invocationMessage.headers || {},
                      invocationMessage.invocationId || null,
                      invocationMessage.target,
                      invocationMessage.arguments,
                      invocationMessage.streamIds
                    ]);
                  } else {
                    payload = this._encoder.encode([
                      _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Invocation,
                      invocationMessage.headers || {},
                      invocationMessage.invocationId || null,
                      invocationMessage.target,
                      invocationMessage.arguments
                    ]);
                  }
                  return _BinaryMessageFormat__WEBPACK_IMPORTED_MODULE_6__.BinaryMessageFormat.write(payload.slice());
                }
                _writeStreamInvocation(streamInvocationMessage) {
                  let payload;
                  if (streamInvocationMessage.streamIds) {
                    payload = this._encoder.encode([
                      _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.StreamInvocation,
                      streamInvocationMessage.headers || {},
                      streamInvocationMessage.invocationId,
                      streamInvocationMessage.target,
                      streamInvocationMessage.arguments,
                      streamInvocationMessage.streamIds
                    ]);
                  } else {
                    payload = this._encoder.encode([
                      _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.StreamInvocation,
                      streamInvocationMessage.headers || {},
                      streamInvocationMessage.invocationId,
                      streamInvocationMessage.target,
                      streamInvocationMessage.arguments
                    ]);
                  }
                  return _BinaryMessageFormat__WEBPACK_IMPORTED_MODULE_6__.BinaryMessageFormat.write(payload.slice());
                }
                _writeStreamItem(streamItemMessage) {
                  const payload = this._encoder.encode([
                    _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.StreamItem,
                    streamItemMessage.headers || {},
                    streamItemMessage.invocationId,
                    streamItemMessage.item
                  ]);
                  return _BinaryMessageFormat__WEBPACK_IMPORTED_MODULE_6__.BinaryMessageFormat.write(payload.slice());
                }
                _writeCompletion(completionMessage) {
                  const resultKind = completionMessage.error ? this._errorResult : completionMessage.result !== void 0 ? this._nonVoidResult : this._voidResult;
                  let payload;
                  switch (resultKind) {
                    case this._errorResult:
                      payload = this._encoder.encode([_microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Completion, completionMessage.headers || {}, completionMessage.invocationId, resultKind, completionMessage.error]);
                      break;
                    case this._voidResult:
                      payload = this._encoder.encode([_microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Completion, completionMessage.headers || {}, completionMessage.invocationId, resultKind]);
                      break;
                    case this._nonVoidResult:
                      payload = this._encoder.encode([_microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Completion, completionMessage.headers || {}, completionMessage.invocationId, resultKind, completionMessage.result]);
                      break;
                  }
                  return _BinaryMessageFormat__WEBPACK_IMPORTED_MODULE_6__.BinaryMessageFormat.write(payload.slice());
                }
                _writeCancelInvocation(cancelInvocationMessage) {
                  const payload = this._encoder.encode([_microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.CancelInvocation, cancelInvocationMessage.headers || {}, cancelInvocationMessage.invocationId]);
                  return _BinaryMessageFormat__WEBPACK_IMPORTED_MODULE_6__.BinaryMessageFormat.write(payload.slice());
                }
                _writeClose() {
                  const payload = this._encoder.encode([_microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Close, null]);
                  return _BinaryMessageFormat__WEBPACK_IMPORTED_MODULE_6__.BinaryMessageFormat.write(payload.slice());
                }
                _writeAck(ackMessage) {
                  const payload = this._encoder.encode([_microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Ack, ackMessage.sequenceId]);
                  return _BinaryMessageFormat__WEBPACK_IMPORTED_MODULE_6__.BinaryMessageFormat.write(payload.slice());
                }
                _writeSequence(sequenceMessage) {
                  const payload = this._encoder.encode([_microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.MessageType.Sequence, sequenceMessage.sequenceId]);
                  return _BinaryMessageFormat__WEBPACK_IMPORTED_MODULE_6__.BinaryMessageFormat.write(payload.slice());
                }
                _readHeaders(properties) {
                  const headers = properties[1];
                  if (typeof headers !== "object") {
                    throw new Error("Invalid headers.");
                  }
                  return headers;
                }
              }
            },
            /* 5 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                MessageType: () => (
                  /* binding */
                  MessageType
                )
                /* harmony export */
              });
              var MessageType;
              (function(MessageType2) {
                MessageType2[MessageType2["Invocation"] = 1] = "Invocation";
                MessageType2[MessageType2["StreamItem"] = 2] = "StreamItem";
                MessageType2[MessageType2["Completion"] = 3] = "Completion";
                MessageType2[MessageType2["StreamInvocation"] = 4] = "StreamInvocation";
                MessageType2[MessageType2["CancelInvocation"] = 5] = "CancelInvocation";
                MessageType2[MessageType2["Ping"] = 6] = "Ping";
                MessageType2[MessageType2["Close"] = 7] = "Close";
                MessageType2[MessageType2["Ack"] = 8] = "Ack";
                MessageType2[MessageType2["Sequence"] = 9] = "Sequence";
              })(MessageType || (MessageType = {}));
            },
            /* 6 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                HttpTransportType: () => (
                  /* binding */
                  HttpTransportType
                ),
                /* harmony export */
                TransferFormat: () => (
                  /* binding */
                  TransferFormat
                )
                /* harmony export */
              });
              var HttpTransportType;
              (function(HttpTransportType2) {
                HttpTransportType2[HttpTransportType2["None"] = 0] = "None";
                HttpTransportType2[HttpTransportType2["WebSockets"] = 1] = "WebSockets";
                HttpTransportType2[HttpTransportType2["ServerSentEvents"] = 2] = "ServerSentEvents";
                HttpTransportType2[HttpTransportType2["LongPolling"] = 4] = "LongPolling";
              })(HttpTransportType || (HttpTransportType = {}));
              var TransferFormat;
              (function(TransferFormat2) {
                TransferFormat2[TransferFormat2["Text"] = 1] = "Text";
                TransferFormat2[TransferFormat2["Binary"] = 2] = "Binary";
              })(TransferFormat || (TransferFormat = {}));
            },
            /* 7 */
            /***/
            (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                DEFAULT_INITIAL_BUFFER_SIZE: () => (
                  /* binding */
                  DEFAULT_INITIAL_BUFFER_SIZE
                ),
                /* harmony export */
                DEFAULT_MAX_DEPTH: () => (
                  /* binding */
                  DEFAULT_MAX_DEPTH
                ),
                /* harmony export */
                Encoder: () => (
                  /* binding */
                  Encoder
                )
                /* harmony export */
              });
              var _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(13);
              var _ExtensionCodec_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8);
              var _utils_int_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(10);
              var _utils_typedArrays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(14);
              var DEFAULT_MAX_DEPTH = 100;
              var DEFAULT_INITIAL_BUFFER_SIZE = 2048;
              var Encoder = (
                /** @class */
                function() {
                  function Encoder2(extensionCodec, context, maxDepth, initialBufferSize, sortKeys, forceFloat32, ignoreUndefined, forceIntegerToFloat) {
                    if (extensionCodec === void 0) {
                      extensionCodec = _ExtensionCodec_mjs__WEBPACK_IMPORTED_MODULE_0__.ExtensionCodec.defaultCodec;
                    }
                    if (context === void 0) {
                      context = void 0;
                    }
                    if (maxDepth === void 0) {
                      maxDepth = DEFAULT_MAX_DEPTH;
                    }
                    if (initialBufferSize === void 0) {
                      initialBufferSize = DEFAULT_INITIAL_BUFFER_SIZE;
                    }
                    if (sortKeys === void 0) {
                      sortKeys = false;
                    }
                    if (forceFloat32 === void 0) {
                      forceFloat32 = false;
                    }
                    if (ignoreUndefined === void 0) {
                      ignoreUndefined = false;
                    }
                    if (forceIntegerToFloat === void 0) {
                      forceIntegerToFloat = false;
                    }
                    this.extensionCodec = extensionCodec;
                    this.context = context;
                    this.maxDepth = maxDepth;
                    this.initialBufferSize = initialBufferSize;
                    this.sortKeys = sortKeys;
                    this.forceFloat32 = forceFloat32;
                    this.ignoreUndefined = ignoreUndefined;
                    this.forceIntegerToFloat = forceIntegerToFloat;
                    this.pos = 0;
                    this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
                    this.bytes = new Uint8Array(this.view.buffer);
                  }
                  Encoder2.prototype.reinitializeState = function() {
                    this.pos = 0;
                  };
                  Encoder2.prototype.encodeSharedRef = function(object) {
                    this.reinitializeState();
                    this.doEncode(object, 1);
                    return this.bytes.subarray(0, this.pos);
                  };
                  Encoder2.prototype.encode = function(object) {
                    this.reinitializeState();
                    this.doEncode(object, 1);
                    return this.bytes.slice(0, this.pos);
                  };
                  Encoder2.prototype.doEncode = function(object, depth) {
                    if (depth > this.maxDepth) {
                      throw new Error("Too deep objects in depth ".concat(depth));
                    }
                    if (object == null) {
                      this.encodeNil();
                    } else if (typeof object === "boolean") {
                      this.encodeBoolean(object);
                    } else if (typeof object === "number") {
                      this.encodeNumber(object);
                    } else if (typeof object === "string") {
                      this.encodeString(object);
                    } else {
                      this.encodeObject(object, depth);
                    }
                  };
                  Encoder2.prototype.ensureBufferSizeToWrite = function(sizeToWrite) {
                    var requiredSize = this.pos + sizeToWrite;
                    if (this.view.byteLength < requiredSize) {
                      this.resizeBuffer(requiredSize * 2);
                    }
                  };
                  Encoder2.prototype.resizeBuffer = function(newSize) {
                    var newBuffer = new ArrayBuffer(newSize);
                    var newBytes = new Uint8Array(newBuffer);
                    var newView = new DataView(newBuffer);
                    newBytes.set(this.bytes);
                    this.view = newView;
                    this.bytes = newBytes;
                  };
                  Encoder2.prototype.encodeNil = function() {
                    this.writeU8(192);
                  };
                  Encoder2.prototype.encodeBoolean = function(object) {
                    if (object === false) {
                      this.writeU8(194);
                    } else {
                      this.writeU8(195);
                    }
                  };
                  Encoder2.prototype.encodeNumber = function(object) {
                    if (Number.isSafeInteger(object) && !this.forceIntegerToFloat) {
                      if (object >= 0) {
                        if (object < 128) {
                          this.writeU8(object);
                        } else if (object < 256) {
                          this.writeU8(204);
                          this.writeU8(object);
                        } else if (object < 65536) {
                          this.writeU8(205);
                          this.writeU16(object);
                        } else if (object < 4294967296) {
                          this.writeU8(206);
                          this.writeU32(object);
                        } else {
                          this.writeU8(207);
                          this.writeU64(object);
                        }
                      } else {
                        if (object >= -32) {
                          this.writeU8(224 | object + 32);
                        } else if (object >= -128) {
                          this.writeU8(208);
                          this.writeI8(object);
                        } else if (object >= -32768) {
                          this.writeU8(209);
                          this.writeI16(object);
                        } else if (object >= -2147483648) {
                          this.writeU8(210);
                          this.writeI32(object);
                        } else {
                          this.writeU8(211);
                          this.writeI64(object);
                        }
                      }
                    } else {
                      if (this.forceFloat32) {
                        this.writeU8(202);
                        this.writeF32(object);
                      } else {
                        this.writeU8(203);
                        this.writeF64(object);
                      }
                    }
                  };
                  Encoder2.prototype.writeStringHeader = function(byteLength) {
                    if (byteLength < 32) {
                      this.writeU8(160 + byteLength);
                    } else if (byteLength < 256) {
                      this.writeU8(217);
                      this.writeU8(byteLength);
                    } else if (byteLength < 65536) {
                      this.writeU8(218);
                      this.writeU16(byteLength);
                    } else if (byteLength < 4294967296) {
                      this.writeU8(219);
                      this.writeU32(byteLength);
                    } else {
                      throw new Error("Too long string: ".concat(byteLength, " bytes in UTF-8"));
                    }
                  };
                  Encoder2.prototype.encodeString = function(object) {
                    var maxHeaderSize = 1 + 4;
                    var strLength = object.length;
                    if (strLength > _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_1__.TEXT_ENCODER_THRESHOLD) {
                      var byteLength = (0, _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_1__.utf8Count)(object);
                      this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
                      this.writeStringHeader(byteLength);
                      (0, _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_1__.utf8EncodeTE)(object, this.bytes, this.pos);
                      this.pos += byteLength;
                    } else {
                      var byteLength = (0, _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_1__.utf8Count)(object);
                      this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
                      this.writeStringHeader(byteLength);
                      (0, _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_1__.utf8EncodeJs)(object, this.bytes, this.pos);
                      this.pos += byteLength;
                    }
                  };
                  Encoder2.prototype.encodeObject = function(object, depth) {
                    var ext = this.extensionCodec.tryToEncode(object, this.context);
                    if (ext != null) {
                      this.encodeExtension(ext);
                    } else if (Array.isArray(object)) {
                      this.encodeArray(object, depth);
                    } else if (ArrayBuffer.isView(object)) {
                      this.encodeBinary(object);
                    } else if (typeof object === "object") {
                      this.encodeMap(object, depth);
                    } else {
                      throw new Error("Unrecognized object: ".concat(Object.prototype.toString.apply(object)));
                    }
                  };
                  Encoder2.prototype.encodeBinary = function(object) {
                    var size = object.byteLength;
                    if (size < 256) {
                      this.writeU8(196);
                      this.writeU8(size);
                    } else if (size < 65536) {
                      this.writeU8(197);
                      this.writeU16(size);
                    } else if (size < 4294967296) {
                      this.writeU8(198);
                      this.writeU32(size);
                    } else {
                      throw new Error("Too large binary: ".concat(size));
                    }
                    var bytes = (0, _utils_typedArrays_mjs__WEBPACK_IMPORTED_MODULE_2__.ensureUint8Array)(object);
                    this.writeU8a(bytes);
                  };
                  Encoder2.prototype.encodeArray = function(object, depth) {
                    var size = object.length;
                    if (size < 16) {
                      this.writeU8(144 + size);
                    } else if (size < 65536) {
                      this.writeU8(220);
                      this.writeU16(size);
                    } else if (size < 4294967296) {
                      this.writeU8(221);
                      this.writeU32(size);
                    } else {
                      throw new Error("Too large array: ".concat(size));
                    }
                    for (var _i = 0, object_1 = object; _i < object_1.length; _i++) {
                      var item = object_1[_i];
                      this.doEncode(item, depth + 1);
                    }
                  };
                  Encoder2.prototype.countWithoutUndefined = function(object, keys) {
                    var count = 0;
                    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                      var key = keys_1[_i];
                      if (object[key] !== void 0) {
                        count++;
                      }
                    }
                    return count;
                  };
                  Encoder2.prototype.encodeMap = function(object, depth) {
                    var keys = Object.keys(object);
                    if (this.sortKeys) {
                      keys.sort();
                    }
                    var size = this.ignoreUndefined ? this.countWithoutUndefined(object, keys) : keys.length;
                    if (size < 16) {
                      this.writeU8(128 + size);
                    } else if (size < 65536) {
                      this.writeU8(222);
                      this.writeU16(size);
                    } else if (size < 4294967296) {
                      this.writeU8(223);
                      this.writeU32(size);
                    } else {
                      throw new Error("Too large map object: ".concat(size));
                    }
                    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                      var key = keys_2[_i];
                      var value = object[key];
                      if (!(this.ignoreUndefined && value === void 0)) {
                        this.encodeString(key);
                        this.doEncode(value, depth + 1);
                      }
                    }
                  };
                  Encoder2.prototype.encodeExtension = function(ext) {
                    var size = ext.data.length;
                    if (size === 1) {
                      this.writeU8(212);
                    } else if (size === 2) {
                      this.writeU8(213);
                    } else if (size === 4) {
                      this.writeU8(214);
                    } else if (size === 8) {
                      this.writeU8(215);
                    } else if (size === 16) {
                      this.writeU8(216);
                    } else if (size < 256) {
                      this.writeU8(199);
                      this.writeU8(size);
                    } else if (size < 65536) {
                      this.writeU8(200);
                      this.writeU16(size);
                    } else if (size < 4294967296) {
                      this.writeU8(201);
                      this.writeU32(size);
                    } else {
                      throw new Error("Too large extension object: ".concat(size));
                    }
                    this.writeI8(ext.type);
                    this.writeU8a(ext.data);
                  };
                  Encoder2.prototype.writeU8 = function(value) {
                    this.ensureBufferSizeToWrite(1);
                    this.view.setUint8(this.pos, value);
                    this.pos++;
                  };
                  Encoder2.prototype.writeU8a = function(values) {
                    var size = values.length;
                    this.ensureBufferSizeToWrite(size);
                    this.bytes.set(values, this.pos);
                    this.pos += size;
                  };
                  Encoder2.prototype.writeI8 = function(value) {
                    this.ensureBufferSizeToWrite(1);
                    this.view.setInt8(this.pos, value);
                    this.pos++;
                  };
                  Encoder2.prototype.writeU16 = function(value) {
                    this.ensureBufferSizeToWrite(2);
                    this.view.setUint16(this.pos, value);
                    this.pos += 2;
                  };
                  Encoder2.prototype.writeI16 = function(value) {
                    this.ensureBufferSizeToWrite(2);
                    this.view.setInt16(this.pos, value);
                    this.pos += 2;
                  };
                  Encoder2.prototype.writeU32 = function(value) {
                    this.ensureBufferSizeToWrite(4);
                    this.view.setUint32(this.pos, value);
                    this.pos += 4;
                  };
                  Encoder2.prototype.writeI32 = function(value) {
                    this.ensureBufferSizeToWrite(4);
                    this.view.setInt32(this.pos, value);
                    this.pos += 4;
                  };
                  Encoder2.prototype.writeF32 = function(value) {
                    this.ensureBufferSizeToWrite(4);
                    this.view.setFloat32(this.pos, value);
                    this.pos += 4;
                  };
                  Encoder2.prototype.writeF64 = function(value) {
                    this.ensureBufferSizeToWrite(8);
                    this.view.setFloat64(this.pos, value);
                    this.pos += 8;
                  };
                  Encoder2.prototype.writeU64 = function(value) {
                    this.ensureBufferSizeToWrite(8);
                    (0, _utils_int_mjs__WEBPACK_IMPORTED_MODULE_3__.setUint64)(this.view, this.pos, value);
                    this.pos += 8;
                  };
                  Encoder2.prototype.writeI64 = function(value) {
                    this.ensureBufferSizeToWrite(8);
                    (0, _utils_int_mjs__WEBPACK_IMPORTED_MODULE_3__.setInt64)(this.view, this.pos, value);
                    this.pos += 8;
                  };
                  return Encoder2;
                }()
              );
            },
            /* 8 */
            /***/
            (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                ExtensionCodec: () => (
                  /* binding */
                  ExtensionCodec
                )
                /* harmony export */
              });
              var _ExtData_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(12);
              var _timestamp_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(9);
              var ExtensionCodec = (
                /** @class */
                function() {
                  function ExtensionCodec2() {
                    this.builtInEncoders = [];
                    this.builtInDecoders = [];
                    this.encoders = [];
                    this.decoders = [];
                    this.register(_timestamp_mjs__WEBPACK_IMPORTED_MODULE_0__.timestampExtension);
                  }
                  ExtensionCodec2.prototype.register = function(_a) {
                    var type = _a.type, encode = _a.encode, decode = _a.decode;
                    if (type >= 0) {
                      this.encoders[type] = encode;
                      this.decoders[type] = decode;
                    } else {
                      var index = 1 + type;
                      this.builtInEncoders[index] = encode;
                      this.builtInDecoders[index] = decode;
                    }
                  };
                  ExtensionCodec2.prototype.tryToEncode = function(object, context) {
                    for (var i = 0; i < this.builtInEncoders.length; i++) {
                      var encodeExt = this.builtInEncoders[i];
                      if (encodeExt != null) {
                        var data = encodeExt(object, context);
                        if (data != null) {
                          var type = -1 - i;
                          return new _ExtData_mjs__WEBPACK_IMPORTED_MODULE_1__.ExtData(type, data);
                        }
                      }
                    }
                    for (var i = 0; i < this.encoders.length; i++) {
                      var encodeExt = this.encoders[i];
                      if (encodeExt != null) {
                        var data = encodeExt(object, context);
                        if (data != null) {
                          var type = i;
                          return new _ExtData_mjs__WEBPACK_IMPORTED_MODULE_1__.ExtData(type, data);
                        }
                      }
                    }
                    if (object instanceof _ExtData_mjs__WEBPACK_IMPORTED_MODULE_1__.ExtData) {
                      return object;
                    }
                    return null;
                  };
                  ExtensionCodec2.prototype.decode = function(data, type, context) {
                    var decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
                    if (decodeExt) {
                      return decodeExt(data, type, context);
                    } else {
                      return new _ExtData_mjs__WEBPACK_IMPORTED_MODULE_1__.ExtData(type, data);
                    }
                  };
                  ExtensionCodec2.defaultCodec = new ExtensionCodec2();
                  return ExtensionCodec2;
                }()
              );
            },
            /* 9 */
            /***/
            (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                EXT_TIMESTAMP: () => (
                  /* binding */
                  EXT_TIMESTAMP
                ),
                /* harmony export */
                decodeTimestampExtension: () => (
                  /* binding */
                  decodeTimestampExtension
                ),
                /* harmony export */
                decodeTimestampToTimeSpec: () => (
                  /* binding */
                  decodeTimestampToTimeSpec
                ),
                /* harmony export */
                encodeDateToTimeSpec: () => (
                  /* binding */
                  encodeDateToTimeSpec
                ),
                /* harmony export */
                encodeTimeSpecToTimestamp: () => (
                  /* binding */
                  encodeTimeSpecToTimestamp
                ),
                /* harmony export */
                encodeTimestampExtension: () => (
                  /* binding */
                  encodeTimestampExtension
                ),
                /* harmony export */
                timestampExtension: () => (
                  /* binding */
                  timestampExtension
                )
                /* harmony export */
              });
              var _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(11);
              var _utils_int_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(10);
              var EXT_TIMESTAMP = -1;
              var TIMESTAMP32_MAX_SEC = 4294967296 - 1;
              var TIMESTAMP64_MAX_SEC = 17179869184 - 1;
              function encodeTimeSpecToTimestamp(_a) {
                var sec = _a.sec, nsec = _a.nsec;
                if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
                  if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
                    var rv = new Uint8Array(4);
                    var view = new DataView(rv.buffer);
                    view.setUint32(0, sec);
                    return rv;
                  } else {
                    var secHigh = sec / 4294967296;
                    var secLow = sec & 4294967295;
                    var rv = new Uint8Array(8);
                    var view = new DataView(rv.buffer);
                    view.setUint32(0, nsec << 2 | secHigh & 3);
                    view.setUint32(4, secLow);
                    return rv;
                  }
                } else {
                  var rv = new Uint8Array(12);
                  var view = new DataView(rv.buffer);
                  view.setUint32(0, nsec);
                  (0, _utils_int_mjs__WEBPACK_IMPORTED_MODULE_0__.setInt64)(view, 4, sec);
                  return rv;
                }
              }
              function encodeDateToTimeSpec(date) {
                var msec = date.getTime();
                var sec = Math.floor(msec / 1e3);
                var nsec = (msec - sec * 1e3) * 1e6;
                var nsecInSec = Math.floor(nsec / 1e9);
                return {
                  sec: sec + nsecInSec,
                  nsec: nsec - nsecInSec * 1e9
                };
              }
              function encodeTimestampExtension(object) {
                if (object instanceof Date) {
                  var timeSpec = encodeDateToTimeSpec(object);
                  return encodeTimeSpecToTimestamp(timeSpec);
                } else {
                  return null;
                }
              }
              function decodeTimestampToTimeSpec(data) {
                var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
                switch (data.byteLength) {
                  case 4: {
                    var sec = view.getUint32(0);
                    var nsec = 0;
                    return { sec, nsec };
                  }
                  case 8: {
                    var nsec30AndSecHigh2 = view.getUint32(0);
                    var secLow32 = view.getUint32(4);
                    var sec = (nsec30AndSecHigh2 & 3) * 4294967296 + secLow32;
                    var nsec = nsec30AndSecHigh2 >>> 2;
                    return { sec, nsec };
                  }
                  case 12: {
                    var sec = (0, _utils_int_mjs__WEBPACK_IMPORTED_MODULE_0__.getInt64)(view, 4);
                    var nsec = view.getUint32(0);
                    return { sec, nsec };
                  }
                  default:
                    throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_1__.DecodeError("Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(data.length));
                }
              }
              function decodeTimestampExtension(data) {
                var timeSpec = decodeTimestampToTimeSpec(data);
                return new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
              }
              var timestampExtension = {
                type: EXT_TIMESTAMP,
                encode: encodeTimestampExtension,
                decode: decodeTimestampExtension
              };
            },
            /* 10 */
            /***/
            (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                UINT32_MAX: () => (
                  /* binding */
                  UINT32_MAX
                ),
                /* harmony export */
                getInt64: () => (
                  /* binding */
                  getInt64
                ),
                /* harmony export */
                getUint64: () => (
                  /* binding */
                  getUint64
                ),
                /* harmony export */
                setInt64: () => (
                  /* binding */
                  setInt64
                ),
                /* harmony export */
                setUint64: () => (
                  /* binding */
                  setUint64
                )
                /* harmony export */
              });
              var UINT32_MAX = 4294967295;
              function setUint64(view, offset, value) {
                var high = value / 4294967296;
                var low = value;
                view.setUint32(offset, high);
                view.setUint32(offset + 4, low);
              }
              function setInt64(view, offset, value) {
                var high = Math.floor(value / 4294967296);
                var low = value;
                view.setUint32(offset, high);
                view.setUint32(offset + 4, low);
              }
              function getInt64(view, offset) {
                var high = view.getInt32(offset);
                var low = view.getUint32(offset + 4);
                return high * 4294967296 + low;
              }
              function getUint64(view, offset) {
                var high = view.getUint32(offset);
                var low = view.getUint32(offset + 4);
                return high * 4294967296 + low;
              }
            },
            /* 11 */
            /***/
            (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                DecodeError: () => (
                  /* binding */
                  DecodeError
                )
                /* harmony export */
              });
              var __extends = /* @__PURE__ */ function() {
                var extendStatics = function(d2, b2) {
                  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
                    d3.__proto__ = b3;
                  } || function(d3, b3) {
                    for (var p in b3)
                      if (Object.prototype.hasOwnProperty.call(b3, p))
                        d3[p] = b3[p];
                  };
                  return extendStatics(d2, b2);
                };
                return function(d2, b2) {
                  if (typeof b2 !== "function" && b2 !== null)
                    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
                  extendStatics(d2, b2);
                  function __() {
                    this.constructor = d2;
                  }
                  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
                };
              }();
              var DecodeError = (
                /** @class */
                function(_super) {
                  __extends(DecodeError2, _super);
                  function DecodeError2(message) {
                    var _this = _super.call(this, message) || this;
                    var proto2 = Object.create(DecodeError2.prototype);
                    Object.setPrototypeOf(_this, proto2);
                    Object.defineProperty(_this, "name", {
                      configurable: true,
                      enumerable: false,
                      value: DecodeError2.name
                    });
                    return _this;
                  }
                  return DecodeError2;
                }(Error)
              );
            },
            /* 12 */
            /***/
            (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                ExtData: () => (
                  /* binding */
                  ExtData
                )
                /* harmony export */
              });
              var ExtData = (
                /** @class */
                /* @__PURE__ */ function() {
                  function ExtData2(type, data) {
                    this.type = type;
                    this.data = data;
                  }
                  return ExtData2;
                }()
              );
            },
            /* 13 */
            /***/
            (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                TEXT_DECODER_THRESHOLD: () => (
                  /* binding */
                  TEXT_DECODER_THRESHOLD
                ),
                /* harmony export */
                TEXT_ENCODER_THRESHOLD: () => (
                  /* binding */
                  TEXT_ENCODER_THRESHOLD
                ),
                /* harmony export */
                utf8Count: () => (
                  /* binding */
                  utf8Count
                ),
                /* harmony export */
                utf8DecodeJs: () => (
                  /* binding */
                  utf8DecodeJs
                ),
                /* harmony export */
                utf8DecodeTD: () => (
                  /* binding */
                  utf8DecodeTD
                ),
                /* harmony export */
                utf8EncodeJs: () => (
                  /* binding */
                  utf8EncodeJs
                ),
                /* harmony export */
                utf8EncodeTE: () => (
                  /* binding */
                  utf8EncodeTE
                )
                /* harmony export */
              });
              var _int_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(10);
              var _a, _b, _c;
              var TEXT_ENCODING_AVAILABLE = (typeof process === "undefined" || ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a["TEXT_ENCODING"]) !== "never") && typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined";
              function utf8Count(str) {
                var strLength = str.length;
                var byteLength = 0;
                var pos = 0;
                while (pos < strLength) {
                  var value = str.charCodeAt(pos++);
                  if ((value & 4294967168) === 0) {
                    byteLength++;
                    continue;
                  } else if ((value & 4294965248) === 0) {
                    byteLength += 2;
                  } else {
                    if (value >= 55296 && value <= 56319) {
                      if (pos < strLength) {
                        var extra = str.charCodeAt(pos);
                        if ((extra & 64512) === 56320) {
                          ++pos;
                          value = ((value & 1023) << 10) + (extra & 1023) + 65536;
                        }
                      }
                    }
                    if ((value & 4294901760) === 0) {
                      byteLength += 3;
                    } else {
                      byteLength += 4;
                    }
                  }
                }
                return byteLength;
              }
              function utf8EncodeJs(str, output, outputOffset) {
                var strLength = str.length;
                var offset = outputOffset;
                var pos = 0;
                while (pos < strLength) {
                  var value = str.charCodeAt(pos++);
                  if ((value & 4294967168) === 0) {
                    output[offset++] = value;
                    continue;
                  } else if ((value & 4294965248) === 0) {
                    output[offset++] = value >> 6 & 31 | 192;
                  } else {
                    if (value >= 55296 && value <= 56319) {
                      if (pos < strLength) {
                        var extra = str.charCodeAt(pos);
                        if ((extra & 64512) === 56320) {
                          ++pos;
                          value = ((value & 1023) << 10) + (extra & 1023) + 65536;
                        }
                      }
                    }
                    if ((value & 4294901760) === 0) {
                      output[offset++] = value >> 12 & 15 | 224;
                      output[offset++] = value >> 6 & 63 | 128;
                    } else {
                      output[offset++] = value >> 18 & 7 | 240;
                      output[offset++] = value >> 12 & 63 | 128;
                      output[offset++] = value >> 6 & 63 | 128;
                    }
                  }
                  output[offset++] = value & 63 | 128;
                }
              }
              var sharedTextEncoder = TEXT_ENCODING_AVAILABLE ? new TextEncoder() : void 0;
              var TEXT_ENCODER_THRESHOLD = !TEXT_ENCODING_AVAILABLE ? _int_mjs__WEBPACK_IMPORTED_MODULE_0__.UINT32_MAX : typeof process !== "undefined" && ((_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b["TEXT_ENCODING"]) !== "force" ? 200 : 0;
              function utf8EncodeTEencode(str, output, outputOffset) {
                output.set(sharedTextEncoder.encode(str), outputOffset);
              }
              function utf8EncodeTEencodeInto(str, output, outputOffset) {
                sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
              }
              var utf8EncodeTE = (sharedTextEncoder === null || sharedTextEncoder === void 0 ? void 0 : sharedTextEncoder.encodeInto) ? utf8EncodeTEencodeInto : utf8EncodeTEencode;
              var CHUNK_SIZE = 4096;
              function utf8DecodeJs(bytes, inputOffset, byteLength) {
                var offset = inputOffset;
                var end = offset + byteLength;
                var units = [];
                var result = "";
                while (offset < end) {
                  var byte1 = bytes[offset++];
                  if ((byte1 & 128) === 0) {
                    units.push(byte1);
                  } else if ((byte1 & 224) === 192) {
                    var byte2 = bytes[offset++] & 63;
                    units.push((byte1 & 31) << 6 | byte2);
                  } else if ((byte1 & 240) === 224) {
                    var byte2 = bytes[offset++] & 63;
                    var byte3 = bytes[offset++] & 63;
                    units.push((byte1 & 31) << 12 | byte2 << 6 | byte3);
                  } else if ((byte1 & 248) === 240) {
                    var byte2 = bytes[offset++] & 63;
                    var byte3 = bytes[offset++] & 63;
                    var byte4 = bytes[offset++] & 63;
                    var unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
                    if (unit > 65535) {
                      unit -= 65536;
                      units.push(unit >>> 10 & 1023 | 55296);
                      unit = 56320 | unit & 1023;
                    }
                    units.push(unit);
                  } else {
                    units.push(byte1);
                  }
                  if (units.length >= CHUNK_SIZE) {
                    result += String.fromCharCode.apply(String, units);
                    units.length = 0;
                  }
                }
                if (units.length > 0) {
                  result += String.fromCharCode.apply(String, units);
                }
                return result;
              }
              var sharedTextDecoder = TEXT_ENCODING_AVAILABLE ? new TextDecoder() : null;
              var TEXT_DECODER_THRESHOLD = !TEXT_ENCODING_AVAILABLE ? _int_mjs__WEBPACK_IMPORTED_MODULE_0__.UINT32_MAX : typeof process !== "undefined" && ((_c = process === null || process === void 0 ? void 0 : process.env) === null || _c === void 0 ? void 0 : _c["TEXT_DECODER"]) !== "force" ? 200 : 0;
              function utf8DecodeTD(bytes, inputOffset, byteLength) {
                var stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
                return sharedTextDecoder.decode(stringBytes);
              }
            },
            /* 14 */
            /***/
            (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                createDataView: () => (
                  /* binding */
                  createDataView
                ),
                /* harmony export */
                ensureUint8Array: () => (
                  /* binding */
                  ensureUint8Array
                )
                /* harmony export */
              });
              function ensureUint8Array(buffer) {
                if (buffer instanceof Uint8Array) {
                  return buffer;
                } else if (ArrayBuffer.isView(buffer)) {
                  return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
                } else if (buffer instanceof ArrayBuffer) {
                  return new Uint8Array(buffer);
                } else {
                  return Uint8Array.from(buffer);
                }
              }
              function createDataView(buffer) {
                if (buffer instanceof ArrayBuffer) {
                  return new DataView(buffer);
                }
                var bufferView = ensureUint8Array(buffer);
                return new DataView(bufferView.buffer, bufferView.byteOffset, bufferView.byteLength);
              }
            },
            /* 15 */
            /***/
            (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                DataViewIndexOutOfBoundsError: () => (
                  /* binding */
                  DataViewIndexOutOfBoundsError
                ),
                /* harmony export */
                Decoder: () => (
                  /* binding */
                  Decoder
                )
                /* harmony export */
              });
              var _utils_prettyByte_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(17);
              var _ExtensionCodec_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(8);
              var _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(10);
              var _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__2(13);
              var _utils_typedArrays_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(14);
              var _CachedKeyDecoder_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(16);
              var _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(11);
              var __awaiter = function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                  return value instanceof P ? value : new P(function(resolve) {
                    resolve(value);
                  });
                }
                return new (P || (P = Promise))(function(resolve, reject) {
                  function fulfilled(value) {
                    try {
                      step(generator.next(value));
                    } catch (e2) {
                      reject(e2);
                    }
                  }
                  function rejected(value) {
                    try {
                      step(generator["throw"](value));
                    } catch (e2) {
                      reject(e2);
                    }
                  }
                  function step(result) {
                    result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                  }
                  step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
              };
              var __generator = function(thisArg, body) {
                var _ = { label: 0, sent: function() {
                  if (t[0] & 1)
                    throw t[1];
                  return t[1];
                }, trys: [], ops: [] }, f2, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                  return this;
                }), g;
                function verb(n) {
                  return function(v) {
                    return step([n, v]);
                  };
                }
                function step(op) {
                  if (f2)
                    throw new TypeError("Generator is already executing.");
                  while (_)
                    try {
                      if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                      if (y = 0, t)
                        op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return { value: op[1], done: false };
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2])
                            _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e2) {
                      op = [6, e2];
                      y = 0;
                    } finally {
                      f2 = t = 0;
                    }
                  if (op[0] & 5)
                    throw op[1];
                  return { value: op[0] ? op[1] : void 0, done: true };
                }
              };
              var __asyncValues = function(o) {
                if (!Symbol.asyncIterator)
                  throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                  return this;
                }, i);
                function verb(n) {
                  i[n] = o[n] && function(v) {
                    return new Promise(function(resolve, reject) {
                      v = o[n](v), settle(resolve, reject, v.done, v.value);
                    });
                  };
                }
                function settle(resolve, reject, d2, v) {
                  Promise.resolve(v).then(function(v2) {
                    resolve({ value: v2, done: d2 });
                  }, reject);
                }
              };
              var __await = function(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
              };
              var __asyncGenerator = function(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                  throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                  return this;
                }, i;
                function verb(n) {
                  if (g[n])
                    i[n] = function(v) {
                      return new Promise(function(a2, b2) {
                        q.push([n, v, a2, b2]) > 1 || resume(n, v);
                      });
                    };
                }
                function resume(n, v) {
                  try {
                    step(g[n](v));
                  } catch (e2) {
                    settle(q[0][3], e2);
                  }
                }
                function step(r) {
                  r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
                }
                function fulfill(value) {
                  resume("next", value);
                }
                function reject(value) {
                  resume("throw", value);
                }
                function settle(f2, v) {
                  if (f2(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]);
                }
              };
              var isValidMapKeyType = function(key) {
                var keyType = typeof key;
                return keyType === "string" || keyType === "number";
              };
              var HEAD_BYTE_REQUIRED = -1;
              var EMPTY_VIEW = new DataView(new ArrayBuffer(0));
              var EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
              var DataViewIndexOutOfBoundsError = function() {
                try {
                  EMPTY_VIEW.getInt8(0);
                } catch (e2) {
                  return e2.constructor;
                }
                throw new Error("never reached");
              }();
              var MORE_DATA = new DataViewIndexOutOfBoundsError("Insufficient data");
              var sharedCachedKeyDecoder = new _CachedKeyDecoder_mjs__WEBPACK_IMPORTED_MODULE_0__.CachedKeyDecoder();
              var Decoder = (
                /** @class */
                function() {
                  function Decoder2(extensionCodec, context, maxStrLength, maxBinLength, maxArrayLength, maxMapLength, maxExtLength, keyDecoder) {
                    if (extensionCodec === void 0) {
                      extensionCodec = _ExtensionCodec_mjs__WEBPACK_IMPORTED_MODULE_1__.ExtensionCodec.defaultCodec;
                    }
                    if (context === void 0) {
                      context = void 0;
                    }
                    if (maxStrLength === void 0) {
                      maxStrLength = _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__.UINT32_MAX;
                    }
                    if (maxBinLength === void 0) {
                      maxBinLength = _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__.UINT32_MAX;
                    }
                    if (maxArrayLength === void 0) {
                      maxArrayLength = _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__.UINT32_MAX;
                    }
                    if (maxMapLength === void 0) {
                      maxMapLength = _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__.UINT32_MAX;
                    }
                    if (maxExtLength === void 0) {
                      maxExtLength = _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__.UINT32_MAX;
                    }
                    if (keyDecoder === void 0) {
                      keyDecoder = sharedCachedKeyDecoder;
                    }
                    this.extensionCodec = extensionCodec;
                    this.context = context;
                    this.maxStrLength = maxStrLength;
                    this.maxBinLength = maxBinLength;
                    this.maxArrayLength = maxArrayLength;
                    this.maxMapLength = maxMapLength;
                    this.maxExtLength = maxExtLength;
                    this.keyDecoder = keyDecoder;
                    this.totalPos = 0;
                    this.pos = 0;
                    this.view = EMPTY_VIEW;
                    this.bytes = EMPTY_BYTES;
                    this.headByte = HEAD_BYTE_REQUIRED;
                    this.stack = [];
                  }
                  Decoder2.prototype.reinitializeState = function() {
                    this.totalPos = 0;
                    this.headByte = HEAD_BYTE_REQUIRED;
                    this.stack.length = 0;
                  };
                  Decoder2.prototype.setBuffer = function(buffer) {
                    this.bytes = (0, _utils_typedArrays_mjs__WEBPACK_IMPORTED_MODULE_3__.ensureUint8Array)(buffer);
                    this.view = (0, _utils_typedArrays_mjs__WEBPACK_IMPORTED_MODULE_3__.createDataView)(this.bytes);
                    this.pos = 0;
                  };
                  Decoder2.prototype.appendBuffer = function(buffer) {
                    if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) {
                      this.setBuffer(buffer);
                    } else {
                      var remainingData = this.bytes.subarray(this.pos);
                      var newData = (0, _utils_typedArrays_mjs__WEBPACK_IMPORTED_MODULE_3__.ensureUint8Array)(buffer);
                      var newBuffer = new Uint8Array(remainingData.length + newData.length);
                      newBuffer.set(remainingData);
                      newBuffer.set(newData, remainingData.length);
                      this.setBuffer(newBuffer);
                    }
                  };
                  Decoder2.prototype.hasRemaining = function(size) {
                    return this.view.byteLength - this.pos >= size;
                  };
                  Decoder2.prototype.createExtraByteError = function(posToShow) {
                    var _a = this, view = _a.view, pos = _a.pos;
                    return new RangeError("Extra ".concat(view.byteLength - pos, " of ").concat(view.byteLength, " byte(s) found at buffer[").concat(posToShow, "]"));
                  };
                  Decoder2.prototype.decode = function(buffer) {
                    this.reinitializeState();
                    this.setBuffer(buffer);
                    var object = this.doDecodeSync();
                    if (this.hasRemaining(1)) {
                      throw this.createExtraByteError(this.pos);
                    }
                    return object;
                  };
                  Decoder2.prototype.decodeMulti = function(buffer) {
                    return __generator(this, function(_a) {
                      switch (_a.label) {
                        case 0:
                          this.reinitializeState();
                          this.setBuffer(buffer);
                          _a.label = 1;
                        case 1:
                          if (!this.hasRemaining(1))
                            return [3, 3];
                          return [4, this.doDecodeSync()];
                        case 2:
                          _a.sent();
                          return [3, 1];
                        case 3:
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  };
                  Decoder2.prototype.decodeAsync = function(stream) {
                    var stream_1, stream_1_1;
                    var e_1, _a;
                    return __awaiter(this, void 0, void 0, function() {
                      var decoded, object, buffer, e_1_1, _b, headByte, pos, totalPos;
                      return __generator(this, function(_c) {
                        switch (_c.label) {
                          case 0:
                            decoded = false;
                            _c.label = 1;
                          case 1:
                            _c.trys.push([1, 6, 7, 12]);
                            stream_1 = __asyncValues(stream);
                            _c.label = 2;
                          case 2:
                            return [4, stream_1.next()];
                          case 3:
                            if (!(stream_1_1 = _c.sent(), !stream_1_1.done))
                              return [3, 5];
                            buffer = stream_1_1.value;
                            if (decoded) {
                              throw this.createExtraByteError(this.totalPos);
                            }
                            this.appendBuffer(buffer);
                            try {
                              object = this.doDecodeSync();
                              decoded = true;
                            } catch (e2) {
                              if (!(e2 instanceof DataViewIndexOutOfBoundsError)) {
                                throw e2;
                              }
                            }
                            this.totalPos += this.pos;
                            _c.label = 4;
                          case 4:
                            return [3, 2];
                          case 5:
                            return [3, 12];
                          case 6:
                            e_1_1 = _c.sent();
                            e_1 = { error: e_1_1 };
                            return [3, 12];
                          case 7:
                            _c.trys.push([7, , 10, 11]);
                            if (!(stream_1_1 && !stream_1_1.done && (_a = stream_1.return)))
                              return [3, 9];
                            return [4, _a.call(stream_1)];
                          case 8:
                            _c.sent();
                            _c.label = 9;
                          case 9:
                            return [3, 11];
                          case 10:
                            if (e_1)
                              throw e_1.error;
                            return [
                              7
                              /*endfinally*/
                            ];
                          case 11:
                            return [
                              7
                              /*endfinally*/
                            ];
                          case 12:
                            if (decoded) {
                              if (this.hasRemaining(1)) {
                                throw this.createExtraByteError(this.totalPos);
                              }
                              return [2, object];
                            }
                            _b = this, headByte = _b.headByte, pos = _b.pos, totalPos = _b.totalPos;
                            throw new RangeError("Insufficient data in parsing ".concat((0, _utils_prettyByte_mjs__WEBPACK_IMPORTED_MODULE_4__.prettyByte)(headByte), " at ").concat(totalPos, " (").concat(pos, " in the current buffer)"));
                        }
                      });
                    });
                  };
                  Decoder2.prototype.decodeArrayStream = function(stream) {
                    return this.decodeMultiAsync(stream, true);
                  };
                  Decoder2.prototype.decodeStream = function(stream) {
                    return this.decodeMultiAsync(stream, false);
                  };
                  Decoder2.prototype.decodeMultiAsync = function(stream, isArray) {
                    return __asyncGenerator(this, arguments, function decodeMultiAsync_1() {
                      var isArrayHeaderRequired, arrayItemsLeft, stream_2, stream_2_1, buffer, e_2, e_3_1;
                      var e_3, _a;
                      return __generator(this, function(_b) {
                        switch (_b.label) {
                          case 0:
                            isArrayHeaderRequired = isArray;
                            arrayItemsLeft = -1;
                            _b.label = 1;
                          case 1:
                            _b.trys.push([1, 13, 14, 19]);
                            stream_2 = __asyncValues(stream);
                            _b.label = 2;
                          case 2:
                            return [4, __await(stream_2.next())];
                          case 3:
                            if (!(stream_2_1 = _b.sent(), !stream_2_1.done))
                              return [3, 12];
                            buffer = stream_2_1.value;
                            if (isArray && arrayItemsLeft === 0) {
                              throw this.createExtraByteError(this.totalPos);
                            }
                            this.appendBuffer(buffer);
                            if (isArrayHeaderRequired) {
                              arrayItemsLeft = this.readArraySize();
                              isArrayHeaderRequired = false;
                              this.complete();
                            }
                            _b.label = 4;
                          case 4:
                            _b.trys.push([4, 9, , 10]);
                            _b.label = 5;
                          case 5:
                            if (false) {
                            }
                            return [4, __await(this.doDecodeSync())];
                          case 6:
                            return [4, _b.sent()];
                          case 7:
                            _b.sent();
                            if (--arrayItemsLeft === 0) {
                              return [3, 8];
                            }
                            return [3, 5];
                          case 8:
                            return [3, 10];
                          case 9:
                            e_2 = _b.sent();
                            if (!(e_2 instanceof DataViewIndexOutOfBoundsError)) {
                              throw e_2;
                            }
                            return [3, 10];
                          case 10:
                            this.totalPos += this.pos;
                            _b.label = 11;
                          case 11:
                            return [3, 2];
                          case 12:
                            return [3, 19];
                          case 13:
                            e_3_1 = _b.sent();
                            e_3 = { error: e_3_1 };
                            return [3, 19];
                          case 14:
                            _b.trys.push([14, , 17, 18]);
                            if (!(stream_2_1 && !stream_2_1.done && (_a = stream_2.return)))
                              return [3, 16];
                            return [4, __await(_a.call(stream_2))];
                          case 15:
                            _b.sent();
                            _b.label = 16;
                          case 16:
                            return [3, 18];
                          case 17:
                            if (e_3)
                              throw e_3.error;
                            return [
                              7
                              /*endfinally*/
                            ];
                          case 18:
                            return [
                              7
                              /*endfinally*/
                            ];
                          case 19:
                            return [
                              2
                              /*return*/
                            ];
                        }
                      });
                    });
                  };
                  Decoder2.prototype.doDecodeSync = function() {
                    DECODE:
                      while (true) {
                        var headByte = this.readHeadByte();
                        var object = void 0;
                        if (headByte >= 224) {
                          object = headByte - 256;
                        } else if (headByte < 192) {
                          if (headByte < 128) {
                            object = headByte;
                          } else if (headByte < 144) {
                            var size = headByte - 128;
                            if (size !== 0) {
                              this.pushMapState(size);
                              this.complete();
                              continue DECODE;
                            } else {
                              object = {};
                            }
                          } else if (headByte < 160) {
                            var size = headByte - 144;
                            if (size !== 0) {
                              this.pushArrayState(size);
                              this.complete();
                              continue DECODE;
                            } else {
                              object = [];
                            }
                          } else {
                            var byteLength = headByte - 160;
                            object = this.decodeUtf8String(byteLength, 0);
                          }
                        } else if (headByte === 192) {
                          object = null;
                        } else if (headByte === 194) {
                          object = false;
                        } else if (headByte === 195) {
                          object = true;
                        } else if (headByte === 202) {
                          object = this.readF32();
                        } else if (headByte === 203) {
                          object = this.readF64();
                        } else if (headByte === 204) {
                          object = this.readU8();
                        } else if (headByte === 205) {
                          object = this.readU16();
                        } else if (headByte === 206) {
                          object = this.readU32();
                        } else if (headByte === 207) {
                          object = this.readU64();
                        } else if (headByte === 208) {
                          object = this.readI8();
                        } else if (headByte === 209) {
                          object = this.readI16();
                        } else if (headByte === 210) {
                          object = this.readI32();
                        } else if (headByte === 211) {
                          object = this.readI64();
                        } else if (headByte === 217) {
                          var byteLength = this.lookU8();
                          object = this.decodeUtf8String(byteLength, 1);
                        } else if (headByte === 218) {
                          var byteLength = this.lookU16();
                          object = this.decodeUtf8String(byteLength, 2);
                        } else if (headByte === 219) {
                          var byteLength = this.lookU32();
                          object = this.decodeUtf8String(byteLength, 4);
                        } else if (headByte === 220) {
                          var size = this.readU16();
                          if (size !== 0) {
                            this.pushArrayState(size);
                            this.complete();
                            continue DECODE;
                          } else {
                            object = [];
                          }
                        } else if (headByte === 221) {
                          var size = this.readU32();
                          if (size !== 0) {
                            this.pushArrayState(size);
                            this.complete();
                            continue DECODE;
                          } else {
                            object = [];
                          }
                        } else if (headByte === 222) {
                          var size = this.readU16();
                          if (size !== 0) {
                            this.pushMapState(size);
                            this.complete();
                            continue DECODE;
                          } else {
                            object = {};
                          }
                        } else if (headByte === 223) {
                          var size = this.readU32();
                          if (size !== 0) {
                            this.pushMapState(size);
                            this.complete();
                            continue DECODE;
                          } else {
                            object = {};
                          }
                        } else if (headByte === 196) {
                          var size = this.lookU8();
                          object = this.decodeBinary(size, 1);
                        } else if (headByte === 197) {
                          var size = this.lookU16();
                          object = this.decodeBinary(size, 2);
                        } else if (headByte === 198) {
                          var size = this.lookU32();
                          object = this.decodeBinary(size, 4);
                        } else if (headByte === 212) {
                          object = this.decodeExtension(1, 0);
                        } else if (headByte === 213) {
                          object = this.decodeExtension(2, 0);
                        } else if (headByte === 214) {
                          object = this.decodeExtension(4, 0);
                        } else if (headByte === 215) {
                          object = this.decodeExtension(8, 0);
                        } else if (headByte === 216) {
                          object = this.decodeExtension(16, 0);
                        } else if (headByte === 199) {
                          var size = this.lookU8();
                          object = this.decodeExtension(size, 1);
                        } else if (headByte === 200) {
                          var size = this.lookU16();
                          object = this.decodeExtension(size, 2);
                        } else if (headByte === 201) {
                          var size = this.lookU32();
                          object = this.decodeExtension(size, 4);
                        } else {
                          throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_5__.DecodeError("Unrecognized type byte: ".concat((0, _utils_prettyByte_mjs__WEBPACK_IMPORTED_MODULE_4__.prettyByte)(headByte)));
                        }
                        this.complete();
                        var stack = this.stack;
                        while (stack.length > 0) {
                          var state = stack[stack.length - 1];
                          if (state.type === 0) {
                            state.array[state.position] = object;
                            state.position++;
                            if (state.position === state.size) {
                              stack.pop();
                              object = state.array;
                            } else {
                              continue DECODE;
                            }
                          } else if (state.type === 1) {
                            if (!isValidMapKeyType(object)) {
                              throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_5__.DecodeError("The type of key must be string or number but " + typeof object);
                            }
                            if (object === "__proto__") {
                              throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_5__.DecodeError("The key __proto__ is not allowed");
                            }
                            state.key = object;
                            state.type = 2;
                            continue DECODE;
                          } else {
                            state.map[state.key] = object;
                            state.readCount++;
                            if (state.readCount === state.size) {
                              stack.pop();
                              object = state.map;
                            } else {
                              state.key = null;
                              state.type = 1;
                              continue DECODE;
                            }
                          }
                        }
                        return object;
                      }
                  };
                  Decoder2.prototype.readHeadByte = function() {
                    if (this.headByte === HEAD_BYTE_REQUIRED) {
                      this.headByte = this.readU8();
                    }
                    return this.headByte;
                  };
                  Decoder2.prototype.complete = function() {
                    this.headByte = HEAD_BYTE_REQUIRED;
                  };
                  Decoder2.prototype.readArraySize = function() {
                    var headByte = this.readHeadByte();
                    switch (headByte) {
                      case 220:
                        return this.readU16();
                      case 221:
                        return this.readU32();
                      default: {
                        if (headByte < 160) {
                          return headByte - 144;
                        } else {
                          throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_5__.DecodeError("Unrecognized array type byte: ".concat((0, _utils_prettyByte_mjs__WEBPACK_IMPORTED_MODULE_4__.prettyByte)(headByte)));
                        }
                      }
                    }
                  };
                  Decoder2.prototype.pushMapState = function(size) {
                    if (size > this.maxMapLength) {
                      throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_5__.DecodeError("Max length exceeded: map length (".concat(size, ") > maxMapLengthLength (").concat(this.maxMapLength, ")"));
                    }
                    this.stack.push({
                      type: 1,
                      size,
                      key: null,
                      readCount: 0,
                      map: {}
                    });
                  };
                  Decoder2.prototype.pushArrayState = function(size) {
                    if (size > this.maxArrayLength) {
                      throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_5__.DecodeError("Max length exceeded: array length (".concat(size, ") > maxArrayLength (").concat(this.maxArrayLength, ")"));
                    }
                    this.stack.push({
                      type: 0,
                      size,
                      array: new Array(size),
                      position: 0
                    });
                  };
                  Decoder2.prototype.decodeUtf8String = function(byteLength, headerOffset) {
                    var _a;
                    if (byteLength > this.maxStrLength) {
                      throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_5__.DecodeError("Max length exceeded: UTF-8 byte length (".concat(byteLength, ") > maxStrLength (").concat(this.maxStrLength, ")"));
                    }
                    if (this.bytes.byteLength < this.pos + headerOffset + byteLength) {
                      throw MORE_DATA;
                    }
                    var offset = this.pos + headerOffset;
                    var object;
                    if (this.stateIsMapKey() && ((_a = this.keyDecoder) === null || _a === void 0 ? void 0 : _a.canBeCached(byteLength))) {
                      object = this.keyDecoder.decode(this.bytes, offset, byteLength);
                    } else if (byteLength > _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_6__.TEXT_DECODER_THRESHOLD) {
                      object = (0, _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_6__.utf8DecodeTD)(this.bytes, offset, byteLength);
                    } else {
                      object = (0, _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_6__.utf8DecodeJs)(this.bytes, offset, byteLength);
                    }
                    this.pos += headerOffset + byteLength;
                    return object;
                  };
                  Decoder2.prototype.stateIsMapKey = function() {
                    if (this.stack.length > 0) {
                      var state = this.stack[this.stack.length - 1];
                      return state.type === 1;
                    }
                    return false;
                  };
                  Decoder2.prototype.decodeBinary = function(byteLength, headOffset) {
                    if (byteLength > this.maxBinLength) {
                      throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_5__.DecodeError("Max length exceeded: bin length (".concat(byteLength, ") > maxBinLength (").concat(this.maxBinLength, ")"));
                    }
                    if (!this.hasRemaining(byteLength + headOffset)) {
                      throw MORE_DATA;
                    }
                    var offset = this.pos + headOffset;
                    var object = this.bytes.subarray(offset, offset + byteLength);
                    this.pos += headOffset + byteLength;
                    return object;
                  };
                  Decoder2.prototype.decodeExtension = function(size, headOffset) {
                    if (size > this.maxExtLength) {
                      throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_5__.DecodeError("Max length exceeded: ext length (".concat(size, ") > maxExtLength (").concat(this.maxExtLength, ")"));
                    }
                    var extType = this.view.getInt8(this.pos + headOffset);
                    var data = this.decodeBinary(
                      size,
                      headOffset + 1
                      /* extType */
                    );
                    return this.extensionCodec.decode(data, extType, this.context);
                  };
                  Decoder2.prototype.lookU8 = function() {
                    return this.view.getUint8(this.pos);
                  };
                  Decoder2.prototype.lookU16 = function() {
                    return this.view.getUint16(this.pos);
                  };
                  Decoder2.prototype.lookU32 = function() {
                    return this.view.getUint32(this.pos);
                  };
                  Decoder2.prototype.readU8 = function() {
                    var value = this.view.getUint8(this.pos);
                    this.pos++;
                    return value;
                  };
                  Decoder2.prototype.readI8 = function() {
                    var value = this.view.getInt8(this.pos);
                    this.pos++;
                    return value;
                  };
                  Decoder2.prototype.readU16 = function() {
                    var value = this.view.getUint16(this.pos);
                    this.pos += 2;
                    return value;
                  };
                  Decoder2.prototype.readI16 = function() {
                    var value = this.view.getInt16(this.pos);
                    this.pos += 2;
                    return value;
                  };
                  Decoder2.prototype.readU32 = function() {
                    var value = this.view.getUint32(this.pos);
                    this.pos += 4;
                    return value;
                  };
                  Decoder2.prototype.readI32 = function() {
                    var value = this.view.getInt32(this.pos);
                    this.pos += 4;
                    return value;
                  };
                  Decoder2.prototype.readU64 = function() {
                    var value = (0, _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__.getUint64)(this.view, this.pos);
                    this.pos += 8;
                    return value;
                  };
                  Decoder2.prototype.readI64 = function() {
                    var value = (0, _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__.getInt64)(this.view, this.pos);
                    this.pos += 8;
                    return value;
                  };
                  Decoder2.prototype.readF32 = function() {
                    var value = this.view.getFloat32(this.pos);
                    this.pos += 4;
                    return value;
                  };
                  Decoder2.prototype.readF64 = function() {
                    var value = this.view.getFloat64(this.pos);
                    this.pos += 8;
                    return value;
                  };
                  return Decoder2;
                }()
              );
            },
            /* 16 */
            /***/
            (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                CachedKeyDecoder: () => (
                  /* binding */
                  CachedKeyDecoder
                )
                /* harmony export */
              });
              var _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(13);
              var DEFAULT_MAX_KEY_LENGTH = 16;
              var DEFAULT_MAX_LENGTH_PER_KEY = 16;
              var CachedKeyDecoder = (
                /** @class */
                function() {
                  function CachedKeyDecoder2(maxKeyLength, maxLengthPerKey) {
                    if (maxKeyLength === void 0) {
                      maxKeyLength = DEFAULT_MAX_KEY_LENGTH;
                    }
                    if (maxLengthPerKey === void 0) {
                      maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY;
                    }
                    this.maxKeyLength = maxKeyLength;
                    this.maxLengthPerKey = maxLengthPerKey;
                    this.hit = 0;
                    this.miss = 0;
                    this.caches = [];
                    for (var i = 0; i < this.maxKeyLength; i++) {
                      this.caches.push([]);
                    }
                  }
                  CachedKeyDecoder2.prototype.canBeCached = function(byteLength) {
                    return byteLength > 0 && byteLength <= this.maxKeyLength;
                  };
                  CachedKeyDecoder2.prototype.find = function(bytes, inputOffset, byteLength) {
                    var records = this.caches[byteLength - 1];
                    FIND_CHUNK:
                      for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
                        var record = records_1[_i];
                        var recordBytes = record.bytes;
                        for (var j = 0; j < byteLength; j++) {
                          if (recordBytes[j] !== bytes[inputOffset + j]) {
                            continue FIND_CHUNK;
                          }
                        }
                        return record.str;
                      }
                    return null;
                  };
                  CachedKeyDecoder2.prototype.store = function(bytes, value) {
                    var records = this.caches[bytes.length - 1];
                    var record = { bytes, str: value };
                    if (records.length >= this.maxLengthPerKey) {
                      records[Math.random() * records.length | 0] = record;
                    } else {
                      records.push(record);
                    }
                  };
                  CachedKeyDecoder2.prototype.decode = function(bytes, inputOffset, byteLength) {
                    var cachedValue = this.find(bytes, inputOffset, byteLength);
                    if (cachedValue != null) {
                      this.hit++;
                      return cachedValue;
                    }
                    this.miss++;
                    var str = (0, _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_0__.utf8DecodeJs)(bytes, inputOffset, byteLength);
                    var slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
                    this.store(slicedCopyOfBytes, str);
                    return str;
                  };
                  return CachedKeyDecoder2;
                }()
              );
            },
            /* 17 */
            /***/
            (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                prettyByte: () => (
                  /* binding */
                  prettyByte
                )
                /* harmony export */
              });
              function prettyByte(byte) {
                return "".concat(byte < 0 ? "-" : "", "0x").concat(Math.abs(byte).toString(16).padStart(2, "0"));
              }
            },
            /* 18 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                isArrayBuffer: () => (
                  /* binding */
                  isArrayBuffer
                )
                /* harmony export */
              });
              function isArrayBuffer(val) {
                return val && typeof ArrayBuffer !== "undefined" && (val instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
                val.constructor && val.constructor.name === "ArrayBuffer");
              }
            },
            /* 19 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                NullLogger: () => (
                  /* binding */
                  NullLogger
                )
                /* harmony export */
              });
              class NullLogger {
                constructor() {
                }
                /** @inheritDoc */
                // eslint-disable-next-line
                log(_logLevel, _message) {
                }
              }
              NullLogger.instance = new NullLogger();
            },
            /* 20 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                BinaryMessageFormat: () => (
                  /* binding */
                  BinaryMessageFormat
                )
                /* harmony export */
              });
              class BinaryMessageFormat {
                // The length prefix of binary messages is encoded as VarInt. Read the comment in
                // the BinaryMessageParser.TryParseMessage for details.
                static write(output) {
                  let size = output.byteLength || output.length;
                  const lenBuffer = [];
                  do {
                    let sizePart = size & 127;
                    size = size >> 7;
                    if (size > 0) {
                      sizePart |= 128;
                    }
                    lenBuffer.push(sizePart);
                  } while (size > 0);
                  size = output.byteLength || output.length;
                  const buffer = new Uint8Array(lenBuffer.length + size);
                  buffer.set(lenBuffer, 0);
                  buffer.set(output, lenBuffer.length);
                  return buffer.buffer;
                }
                static parse(input) {
                  const result = [];
                  const uint8Array = new Uint8Array(input);
                  const maxLengthPrefixSize = 5;
                  const numBitsToShift = [0, 7, 14, 21, 28];
                  for (let offset = 0; offset < input.byteLength; ) {
                    let numBytes = 0;
                    let size = 0;
                    let byteRead;
                    do {
                      byteRead = uint8Array[offset + numBytes];
                      size = size | (byteRead & 127) << numBitsToShift[numBytes];
                      numBytes++;
                    } while (numBytes < Math.min(maxLengthPrefixSize, input.byteLength - offset) && (byteRead & 128) !== 0);
                    if ((byteRead & 128) !== 0 && numBytes < maxLengthPrefixSize) {
                      throw new Error("Cannot read message size.");
                    }
                    if (numBytes === maxLengthPrefixSize && byteRead > 7) {
                      throw new Error("Messages bigger than 2GB are not supported.");
                    }
                    if (uint8Array.byteLength >= offset + numBytes + size) {
                      result.push(uint8Array.slice ? uint8Array.slice(offset + numBytes, offset + numBytes + size) : uint8Array.subarray(offset + numBytes, offset + numBytes + size));
                    } else {
                      throw new Error("Incomplete message.");
                    }
                    offset = offset + numBytes + size;
                  }
                  return result;
                }
              }
            },
            /* 21 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                LogLevel: () => (
                  /* binding */
                  LogLevel
                )
                /* harmony export */
              });
              var LogLevel;
              (function(LogLevel2) {
                LogLevel2[LogLevel2["Trace"] = 0] = "Trace";
                LogLevel2[LogLevel2["Debug"] = 1] = "Debug";
                LogLevel2[LogLevel2["Information"] = 2] = "Information";
                LogLevel2[LogLevel2["Warning"] = 3] = "Warning";
                LogLevel2[LogLevel2["Error"] = 4] = "Error";
                LogLevel2[LogLevel2["Critical"] = 5] = "Critical";
                LogLevel2[LogLevel2["None"] = 6] = "None";
              })(LogLevel || (LogLevel = {}));
            },
            /* 22 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                HubConnectionBuilder: () => (
                  /* binding */
                  HubConnectionBuilder
                )
                /* harmony export */
              });
              var _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(24);
              var _HttpConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(25);
              var _HubConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(44);
              var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(21);
              var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__2(49);
              var _Loggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(19);
              var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(23);
              const LogLevelNameMapping = {
                trace: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Trace,
                debug: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug,
                info: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information,
                information: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information,
                warn: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning,
                warning: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning,
                error: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error,
                critical: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Critical,
                none: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.None
              };
              function parseLogLevel(name) {
                const mapping = LogLevelNameMapping[name.toLowerCase()];
                if (typeof mapping !== "undefined") {
                  return mapping;
                } else {
                  throw new Error(`Unknown log level: ${name}`);
                }
              }
              class HubConnectionBuilder {
                configureLogging(logging) {
                  _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(logging, "logging");
                  if (isLogger(logging)) {
                    this.logger = logging;
                  } else if (typeof logging === "string") {
                    const logLevel = parseLogLevel(logging);
                    this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_1__.ConsoleLogger(logLevel);
                  } else {
                    this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_1__.ConsoleLogger(logging);
                  }
                  return this;
                }
                withUrl(url, transportTypeOrOptions) {
                  _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(url, "url");
                  _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isNotEmpty(url, "url");
                  this.url = url;
                  if (typeof transportTypeOrOptions === "object") {
                    this.httpConnectionOptions = { ...this.httpConnectionOptions, ...transportTypeOrOptions };
                  } else {
                    this.httpConnectionOptions = {
                      ...this.httpConnectionOptions,
                      transport: transportTypeOrOptions
                    };
                  }
                  return this;
                }
                /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
                 *
                 * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
                 */
                withHubProtocol(protocol) {
                  _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(protocol, "protocol");
                  this.protocol = protocol;
                  return this;
                }
                withAutomaticReconnect(retryDelaysOrReconnectPolicy) {
                  if (this.reconnectPolicy) {
                    throw new Error("A reconnectPolicy has already been set.");
                  }
                  if (!retryDelaysOrReconnectPolicy) {
                    this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__.DefaultReconnectPolicy();
                  } else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
                    this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__.DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
                  } else {
                    this.reconnectPolicy = retryDelaysOrReconnectPolicy;
                  }
                  return this;
                }
                /** Configures {@link @microsoft/signalr.HubConnection.serverTimeoutInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
                 *
                 * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
                 */
                withServerTimeout(milliseconds) {
                  _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(milliseconds, "milliseconds");
                  this._serverTimeoutInMilliseconds = milliseconds;
                  return this;
                }
                /** Configures {@link @microsoft/signalr.HubConnection.keepAliveIntervalInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
                 *
                 * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
                 */
                withKeepAliveInterval(milliseconds) {
                  _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(milliseconds, "milliseconds");
                  this._keepAliveIntervalInMilliseconds = milliseconds;
                  return this;
                }
                /** Enables and configures options for the Stateful Reconnect feature.
                 *
                 * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
                 */
                withStatefulReconnect(options) {
                  if (this.httpConnectionOptions === void 0) {
                    this.httpConnectionOptions = {};
                  }
                  this.httpConnectionOptions._useStatefulReconnect = true;
                  this._statefulReconnectBufferSize = options === null || options === void 0 ? void 0 : options.bufferSize;
                  return this;
                }
                /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
                 *
                 * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
                 */
                build() {
                  const httpConnectionOptions = this.httpConnectionOptions || {};
                  if (httpConnectionOptions.logger === void 0) {
                    httpConnectionOptions.logger = this.logger;
                  }
                  if (!this.url) {
                    throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
                  }
                  const connection = new _HttpConnection__WEBPACK_IMPORTED_MODULE_3__.HttpConnection(this.url, httpConnectionOptions);
                  return _HubConnection__WEBPACK_IMPORTED_MODULE_4__.HubConnection.create(connection, this.logger || _Loggers__WEBPACK_IMPORTED_MODULE_5__.NullLogger.instance, this.protocol || new _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_6__.JsonHubProtocol(), this.reconnectPolicy, this._serverTimeoutInMilliseconds, this._keepAliveIntervalInMilliseconds, this._statefulReconnectBufferSize);
                }
              }
              function isLogger(logger) {
                return logger.log !== void 0;
              }
            },
            /* 23 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                Arg: () => (
                  /* binding */
                  Arg
                ),
                /* harmony export */
                ConsoleLogger: () => (
                  /* binding */
                  ConsoleLogger
                ),
                /* harmony export */
                Platform: () => (
                  /* binding */
                  Platform
                ),
                /* harmony export */
                SubjectSubscription: () => (
                  /* binding */
                  SubjectSubscription
                ),
                /* harmony export */
                VERSION: () => (
                  /* binding */
                  VERSION
                ),
                /* harmony export */
                constructUserAgent: () => (
                  /* binding */
                  constructUserAgent
                ),
                /* harmony export */
                createLogger: () => (
                  /* binding */
                  createLogger
                ),
                /* harmony export */
                formatArrayBuffer: () => (
                  /* binding */
                  formatArrayBuffer
                ),
                /* harmony export */
                getDataDetail: () => (
                  /* binding */
                  getDataDetail
                ),
                /* harmony export */
                getErrorString: () => (
                  /* binding */
                  getErrorString
                ),
                /* harmony export */
                getGlobalThis: () => (
                  /* binding */
                  getGlobalThis
                ),
                /* harmony export */
                getUserAgentHeader: () => (
                  /* binding */
                  getUserAgentHeader
                ),
                /* harmony export */
                isArrayBuffer: () => (
                  /* binding */
                  isArrayBuffer
                ),
                /* harmony export */
                sendMessage: () => (
                  /* binding */
                  sendMessage
                )
                /* harmony export */
              });
              var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(21);
              var _Loggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(19);
              const VERSION = "8.0.0";
              class Arg {
                static isRequired(val, name) {
                  if (val === null || val === void 0) {
                    throw new Error(`The '${name}' argument is required.`);
                  }
                }
                static isNotEmpty(val, name) {
                  if (!val || val.match(/^\s*$/)) {
                    throw new Error(`The '${name}' argument should not be empty.`);
                  }
                }
                static isIn(val, values, name) {
                  if (!(val in values)) {
                    throw new Error(`Unknown ${name} value: ${val}.`);
                  }
                }
              }
              class Platform {
                // react-native has a window but no document so we should check both
                static get isBrowser() {
                  return !Platform.isNode && typeof window === "object" && typeof window.document === "object";
                }
                // WebWorkers don't have a window object so the isBrowser check would fail
                static get isWebWorker() {
                  return !Platform.isNode && typeof self === "object" && "importScripts" in self;
                }
                // react-native has a window but no document
                static get isReactNative() {
                  return !Platform.isNode && typeof window === "object" && typeof window.document === "undefined";
                }
                // Node apps shouldn't have a window object, but WebWorkers don't either
                // so we need to check for both WebWorker and window
                static get isNode() {
                  return typeof process !== "undefined" && process.release && process.release.name === "node";
                }
              }
              function getDataDetail(data, includeContent) {
                let detail = "";
                if (isArrayBuffer(data)) {
                  detail = `Binary data of length ${data.byteLength}`;
                  if (includeContent) {
                    detail += `. Content: '${formatArrayBuffer(data)}'`;
                  }
                } else if (typeof data === "string") {
                  detail = `String data of length ${data.length}`;
                  if (includeContent) {
                    detail += `. Content: '${data}'`;
                  }
                }
                return detail;
              }
              function formatArrayBuffer(data) {
                const view = new Uint8Array(data);
                let str = "";
                view.forEach((num) => {
                  const pad = num < 16 ? "0" : "";
                  str += `0x${pad}${num.toString(16)} `;
                });
                return str.substr(0, str.length - 1);
              }
              function isArrayBuffer(val) {
                return val && typeof ArrayBuffer !== "undefined" && (val instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
                val.constructor && val.constructor.name === "ArrayBuffer");
              }
              async function sendMessage(logger, transportName, httpClient, url, content, options) {
                const headers = {};
                const [name, value] = getUserAgentHeader();
                headers[name] = value;
                logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Trace, `(${transportName} transport) sending data. ${getDataDetail(content, options.logMessageContent)}.`);
                const responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
                const response = await httpClient.post(url, {
                  content,
                  headers: { ...headers, ...options.headers },
                  responseType,
                  timeout: options.timeout,
                  withCredentials: options.withCredentials
                });
                logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Trace, `(${transportName} transport) request complete. Response status: ${response.statusCode}.`);
              }
              function createLogger(logger) {
                if (logger === void 0) {
                  return new ConsoleLogger(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information);
                }
                if (logger === null) {
                  return _Loggers__WEBPACK_IMPORTED_MODULE_1__.NullLogger.instance;
                }
                if (logger.log !== void 0) {
                  return logger;
                }
                return new ConsoleLogger(logger);
              }
              class SubjectSubscription {
                constructor(subject, observer) {
                  this._subject = subject;
                  this._observer = observer;
                }
                dispose() {
                  const index = this._subject.observers.indexOf(this._observer);
                  if (index > -1) {
                    this._subject.observers.splice(index, 1);
                  }
                  if (this._subject.observers.length === 0 && this._subject.cancelCallback) {
                    this._subject.cancelCallback().catch((_) => {
                    });
                  }
                }
              }
              class ConsoleLogger {
                constructor(minimumLogLevel) {
                  this._minLevel = minimumLogLevel;
                  this.out = console;
                }
                log(logLevel, message) {
                  if (logLevel >= this._minLevel) {
                    const msg = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel[logLevel]}: ${message}`;
                    switch (logLevel) {
                      case _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Critical:
                      case _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error:
                        this.out.error(msg);
                        break;
                      case _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning:
                        this.out.warn(msg);
                        break;
                      case _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information:
                        this.out.info(msg);
                        break;
                      default:
                        this.out.log(msg);
                        break;
                    }
                  }
                }
              }
              function getUserAgentHeader() {
                let userAgentHeaderName = "X-SignalR-User-Agent";
                if (Platform.isNode) {
                  userAgentHeaderName = "User-Agent";
                }
                return [userAgentHeaderName, constructUserAgent(VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
              }
              function constructUserAgent(version, os, runtime, runtimeVersion) {
                let userAgent = "Microsoft SignalR/";
                const majorAndMinor = version.split(".");
                userAgent += `${majorAndMinor[0]}.${majorAndMinor[1]}`;
                userAgent += ` (${version}; `;
                if (os && os !== "") {
                  userAgent += `${os}; `;
                } else {
                  userAgent += "Unknown OS; ";
                }
                userAgent += `${runtime}`;
                if (runtimeVersion) {
                  userAgent += `; ${runtimeVersion}`;
                } else {
                  userAgent += "; Unknown Runtime Version";
                }
                userAgent += ")";
                return userAgent;
              }
              function getOsName() {
                if (Platform.isNode) {
                  switch (process.platform) {
                    case "win32":
                      return "Windows NT";
                    case "darwin":
                      return "macOS";
                    case "linux":
                      return "Linux";
                    default:
                      return process.platform;
                  }
                } else {
                  return "";
                }
              }
              function getRuntimeVersion() {
                if (Platform.isNode) {
                  return process.versions.node;
                }
                return void 0;
              }
              function getRuntime() {
                if (Platform.isNode) {
                  return "NodeJS";
                } else {
                  return "Browser";
                }
              }
              function getErrorString(e2) {
                if (e2.stack) {
                  return e2.stack;
                } else if (e2.message) {
                  return e2.message;
                }
                return `${e2}`;
              }
              function getGlobalThis() {
                if (typeof globalThis !== "undefined") {
                  return globalThis;
                }
                if (typeof self !== "undefined") {
                  return self;
                }
                if (typeof window !== "undefined") {
                  return window;
                }
                if (typeof __webpack_require__2.g !== "undefined") {
                  return __webpack_require__2.g;
                }
                throw new Error("could not find global");
              }
            },
            /* 24 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                DefaultReconnectPolicy: () => (
                  /* binding */
                  DefaultReconnectPolicy
                )
                /* harmony export */
              });
              const DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2e3, 1e4, 3e4, null];
              class DefaultReconnectPolicy {
                constructor(retryDelays) {
                  this._retryDelays = retryDelays !== void 0 ? [...retryDelays, null] : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
                }
                nextRetryDelayInMilliseconds(retryContext) {
                  return this._retryDelays[retryContext.previousRetryCount];
                }
              }
            },
            /* 25 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                HttpConnection: () => (
                  /* binding */
                  HttpConnection
                ),
                /* harmony export */
                TransportSendQueue: () => (
                  /* binding */
                  TransportSendQueue
                )
                /* harmony export */
              });
              var _AccessTokenHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(33);
              var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(36);
              var _DynamicImports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(26);
              var _Errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__2(38);
              var _ILogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(21);
              var _ITransport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(6);
              var _LongPollingTransport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__2(40);
              var _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__2(43);
              var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(23);
              var _WebSocketTransport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__2(42);
              const MAX_REDIRECTS = 100;
              class HttpConnection {
                constructor(url, options = {}) {
                  this._stopPromiseResolver = () => {
                  };
                  this.features = {};
                  this._negotiateVersion = 1;
                  _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(url, "url");
                  this._logger = (0, _Utils__WEBPACK_IMPORTED_MODULE_0__.createLogger)(options.logger);
                  this.baseUrl = this._resolveUrl(url);
                  options = options || {};
                  options.logMessageContent = options.logMessageContent === void 0 ? false : options.logMessageContent;
                  if (typeof options.withCredentials === "boolean" || options.withCredentials === void 0) {
                    options.withCredentials = options.withCredentials === void 0 ? true : options.withCredentials;
                  } else {
                    throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
                  }
                  options.timeout = options.timeout === void 0 ? 100 * 1e3 : options.timeout;
                  let webSocketModule = null;
                  let eventSourceModule = null;
                  if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && true) {
                    webSocketModule = (0, _DynamicImports__WEBPACK_IMPORTED_MODULE_1__.getWS)();
                    eventSourceModule = (0, _DynamicImports__WEBPACK_IMPORTED_MODULE_1__.getEventSource)();
                  }
                  if (!_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
                    options.WebSocket = WebSocket;
                  } else if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && !options.WebSocket) {
                    if (webSocketModule) {
                      options.WebSocket = webSocketModule;
                    }
                  }
                  if (!_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
                    options.EventSource = EventSource;
                  } else if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && !options.EventSource) {
                    if (typeof eventSourceModule !== "undefined") {
                      options.EventSource = eventSourceModule;
                    }
                  }
                  this._httpClient = new _AccessTokenHttpClient__WEBPACK_IMPORTED_MODULE_2__.AccessTokenHttpClient(options.httpClient || new _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_3__.DefaultHttpClient(this._logger), options.accessTokenFactory);
                  this._connectionState = "Disconnected";
                  this._connectionStarted = false;
                  this._options = options;
                  this.onreceive = null;
                  this.onclose = null;
                }
                async start(transferFormat) {
                  transferFormat = transferFormat || _ITransport__WEBPACK_IMPORTED_MODULE_4__.TransferFormat.Binary;
                  _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_4__.TransferFormat, "transferFormat");
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, `Starting connection with transfer format '${_ITransport__WEBPACK_IMPORTED_MODULE_4__.TransferFormat[transferFormat]}'.`);
                  if (this._connectionState !== "Disconnected") {
                    return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
                  }
                  this._connectionState = "Connecting";
                  this._startInternalPromise = this._startInternal(transferFormat);
                  await this._startInternalPromise;
                  if (this._connectionState === "Disconnecting") {
                    const message = "Failed to start the HttpConnection before stop() was called.";
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Error, message);
                    await this._stopPromise;
                    return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_6__.AbortError(message));
                  } else if (this._connectionState !== "Connected") {
                    const message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Error, message);
                    return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_6__.AbortError(message));
                  }
                  this._connectionStarted = true;
                }
                send(data) {
                  if (this._connectionState !== "Connected") {
                    return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
                  }
                  if (!this._sendQueue) {
                    this._sendQueue = new TransportSendQueue(this.transport);
                  }
                  return this._sendQueue.send(data);
                }
                async stop(error) {
                  if (this._connectionState === "Disconnected") {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnected state.`);
                    return Promise.resolve();
                  }
                  if (this._connectionState === "Disconnecting") {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
                    return this._stopPromise;
                  }
                  this._connectionState = "Disconnecting";
                  this._stopPromise = new Promise((resolve) => {
                    this._stopPromiseResolver = resolve;
                  });
                  await this._stopInternal(error);
                  await this._stopPromise;
                }
                async _stopInternal(error) {
                  this._stopError = error;
                  try {
                    await this._startInternalPromise;
                  } catch (e2) {
                  }
                  if (this.transport) {
                    try {
                      await this.transport.stop();
                    } catch (e2) {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Error, `HttpConnection.transport.stop() threw error '${e2}'.`);
                      this._stopConnection();
                    }
                    this.transport = void 0;
                  } else {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
                  }
                }
                async _startInternal(transferFormat) {
                  let url = this.baseUrl;
                  this._accessTokenFactory = this._options.accessTokenFactory;
                  this._httpClient._accessTokenFactory = this._accessTokenFactory;
                  try {
                    if (this._options.skipNegotiation) {
                      if (this._options.transport === _ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType.WebSockets) {
                        this.transport = this._constructTransport(_ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType.WebSockets);
                        await this._startTransport(url, transferFormat);
                      } else {
                        throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                      }
                    } else {
                      let negotiateResponse = null;
                      let redirects = 0;
                      do {
                        negotiateResponse = await this._getNegotiationResponse(url);
                        if (this._connectionState === "Disconnecting" || this._connectionState === "Disconnected") {
                          throw new _Errors__WEBPACK_IMPORTED_MODULE_6__.AbortError("The connection was stopped during negotiation.");
                        }
                        if (negotiateResponse.error) {
                          throw new Error(negotiateResponse.error);
                        }
                        if (negotiateResponse.ProtocolVersion) {
                          throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                        }
                        if (negotiateResponse.url) {
                          url = negotiateResponse.url;
                        }
                        if (negotiateResponse.accessToken) {
                          const accessToken = negotiateResponse.accessToken;
                          this._accessTokenFactory = () => accessToken;
                          this._httpClient._accessToken = accessToken;
                          this._httpClient._accessTokenFactory = void 0;
                        }
                        redirects++;
                      } while (negotiateResponse.url && redirects < MAX_REDIRECTS);
                      if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
                        throw new Error("Negotiate redirection limit exceeded.");
                      }
                      await this._createTransport(url, this._options.transport, negotiateResponse, transferFormat);
                    }
                    if (this.transport instanceof _LongPollingTransport__WEBPACK_IMPORTED_MODULE_7__.LongPollingTransport) {
                      this.features.inherentKeepAlive = true;
                    }
                    if (this._connectionState === "Connecting") {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, "The HttpConnection connected successfully.");
                      this._connectionState = "Connected";
                    }
                  } catch (e2) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Error, "Failed to start the connection: " + e2);
                    this._connectionState = "Disconnected";
                    this.transport = void 0;
                    this._stopPromiseResolver();
                    return Promise.reject(e2);
                  }
                }
                async _getNegotiationResponse(url) {
                  const headers = {};
                  const [name, value] = (0, _Utils__WEBPACK_IMPORTED_MODULE_0__.getUserAgentHeader)();
                  headers[name] = value;
                  const negotiateUrl = this._resolveNegotiateUrl(url);
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, `Sending negotiation request: ${negotiateUrl}.`);
                  try {
                    const response = await this._httpClient.post(negotiateUrl, {
                      content: "",
                      headers: { ...headers, ...this._options.headers },
                      timeout: this._options.timeout,
                      withCredentials: this._options.withCredentials
                    });
                    if (response.statusCode !== 200) {
                      return Promise.reject(new Error(`Unexpected status code returned from negotiate '${response.statusCode}'`));
                    }
                    const negotiateResponse = JSON.parse(response.content);
                    if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
                      negotiateResponse.connectionToken = negotiateResponse.connectionId;
                    }
                    if (negotiateResponse.useStatefulReconnect && this._options._useStatefulReconnect !== true) {
                      return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_6__.FailedToNegotiateWithServerError("Client didn't negotiate Stateful Reconnect but the server did."));
                    }
                    return negotiateResponse;
                  } catch (e2) {
                    let errorMessage = "Failed to complete negotiation with the server: " + e2;
                    if (e2 instanceof _Errors__WEBPACK_IMPORTED_MODULE_6__.HttpError) {
                      if (e2.statusCode === 404) {
                        errorMessage = errorMessage + " Either this is not a SignalR endpoint or there is a proxy blocking the connection.";
                      }
                    }
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Error, errorMessage);
                    return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_6__.FailedToNegotiateWithServerError(errorMessage));
                  }
                }
                _createConnectUrl(url, connectionToken) {
                  if (!connectionToken) {
                    return url;
                  }
                  return url + (url.indexOf("?") === -1 ? "?" : "&") + `id=${connectionToken}`;
                }
                async _createTransport(url, requestedTransport, negotiateResponse, requestedTransferFormat) {
                  let connectUrl = this._createConnectUrl(url, negotiateResponse.connectionToken);
                  if (this._isITransport(requestedTransport)) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");
                    this.transport = requestedTransport;
                    await this._startTransport(connectUrl, requestedTransferFormat);
                    this.connectionId = negotiateResponse.connectionId;
                    return;
                  }
                  const transportExceptions = [];
                  const transports = negotiateResponse.availableTransports || [];
                  let negotiate = negotiateResponse;
                  for (const endpoint of transports) {
                    const transportOrError = this._resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, (negotiate === null || negotiate === void 0 ? void 0 : negotiate.useStatefulReconnect) === true);
                    if (transportOrError instanceof Error) {
                      transportExceptions.push(`${endpoint.transport} failed:`);
                      transportExceptions.push(transportOrError);
                    } else if (this._isITransport(transportOrError)) {
                      this.transport = transportOrError;
                      if (!negotiate) {
                        try {
                          negotiate = await this._getNegotiationResponse(url);
                        } catch (ex) {
                          return Promise.reject(ex);
                        }
                        connectUrl = this._createConnectUrl(url, negotiate.connectionToken);
                      }
                      try {
                        await this._startTransport(connectUrl, requestedTransferFormat);
                        this.connectionId = negotiate.connectionId;
                        return;
                      } catch (ex) {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Error, `Failed to start the transport '${endpoint.transport}': ${ex}`);
                        negotiate = void 0;
                        transportExceptions.push(new _Errors__WEBPACK_IMPORTED_MODULE_6__.FailedToStartTransportError(`${endpoint.transport} failed: ${ex}`, _ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType[endpoint.transport]));
                        if (this._connectionState !== "Connecting") {
                          const message = "Failed to select transport before stop() was called.";
                          this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, message);
                          return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_6__.AbortError(message));
                        }
                      }
                    }
                  }
                  if (transportExceptions.length > 0) {
                    return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_6__.AggregateErrors(`Unable to connect to the server with any of the available transports. ${transportExceptions.join(" ")}`, transportExceptions));
                  }
                  return Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
                }
                _constructTransport(transport) {
                  switch (transport) {
                    case _ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType.WebSockets:
                      if (!this._options.WebSocket) {
                        throw new Error("'WebSocket' is not supported in your environment.");
                      }
                      return new _WebSocketTransport__WEBPACK_IMPORTED_MODULE_8__.WebSocketTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
                    case _ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType.ServerSentEvents:
                      if (!this._options.EventSource) {
                        throw new Error("'EventSource' is not supported in your environment.");
                      }
                      return new _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_9__.ServerSentEventsTransport(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
                    case _ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType.LongPolling:
                      return new _LongPollingTransport__WEBPACK_IMPORTED_MODULE_7__.LongPollingTransport(this._httpClient, this._logger, this._options);
                    default:
                      throw new Error(`Unknown transport: ${transport}.`);
                  }
                }
                _startTransport(url, transferFormat) {
                  this.transport.onreceive = this.onreceive;
                  if (this.features.reconnect) {
                    this.transport.onclose = async (e2) => {
                      let callStop = false;
                      if (this.features.reconnect) {
                        try {
                          this.features.disconnected();
                          await this.transport.connect(url, transferFormat);
                          await this.features.resend();
                        } catch {
                          callStop = true;
                        }
                      } else {
                        this._stopConnection(e2);
                        return;
                      }
                      if (callStop) {
                        this._stopConnection(e2);
                      }
                    };
                  } else {
                    this.transport.onclose = (e2) => this._stopConnection(e2);
                  }
                  return this.transport.connect(url, transferFormat);
                }
                _resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, useStatefulReconnect) {
                  const transport = _ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType[endpoint.transport];
                  if (transport === null || transport === void 0) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, `Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
                    return new Error(`Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
                  } else {
                    if (transportMatches(requestedTransport, transport)) {
                      const transferFormats = endpoint.transferFormats.map((s) => _ITransport__WEBPACK_IMPORTED_MODULE_4__.TransferFormat[s]);
                      if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
                        if (transport === _ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType.WebSockets && !this._options.WebSocket || transport === _ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType.ServerSentEvents && !this._options.EventSource) {
                          this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType[transport]}' because it is not supported in your environment.'`);
                          return new _Errors__WEBPACK_IMPORTED_MODULE_6__.UnsupportedTransportError(`'${_ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType[transport]}' is not supported in your environment.`, transport);
                        } else {
                          this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, `Selecting transport '${_ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType[transport]}'.`);
                          try {
                            this.features.reconnect = transport === _ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType.WebSockets ? useStatefulReconnect : void 0;
                            return this._constructTransport(transport);
                          } catch (ex) {
                            return ex;
                          }
                        }
                      } else {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType[transport]}' because it does not support the requested transfer format '${_ITransport__WEBPACK_IMPORTED_MODULE_4__.TransferFormat[requestedTransferFormat]}'.`);
                        return new Error(`'${_ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType[transport]}' does not support ${_ITransport__WEBPACK_IMPORTED_MODULE_4__.TransferFormat[requestedTransferFormat]}.`);
                      }
                    } else {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType[transport]}' because it was disabled by the client.`);
                      return new _Errors__WEBPACK_IMPORTED_MODULE_6__.DisabledTransportError(`'${_ITransport__WEBPACK_IMPORTED_MODULE_4__.HttpTransportType[transport]}' is disabled by the client.`, transport);
                    }
                  }
                }
                _isITransport(transport) {
                  return transport && typeof transport === "object" && "connect" in transport;
                }
                _stopConnection(error) {
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, `HttpConnection.stopConnection(${error}) called while in state ${this._connectionState}.`);
                  this.transport = void 0;
                  error = this._stopError || error;
                  this._stopError = void 0;
                  if (this._connectionState === "Disconnected") {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Debug, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is already in the disconnected state.`);
                    return;
                  }
                  if (this._connectionState === "Connecting") {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Warning, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is still in the connecting state.`);
                    throw new Error(`HttpConnection.stopConnection(${error}) was called while the connection is still in the connecting state.`);
                  }
                  if (this._connectionState === "Disconnecting") {
                    this._stopPromiseResolver();
                  }
                  if (error) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Error, `Connection disconnected with error '${error}'.`);
                  } else {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Information, "Connection disconnected.");
                  }
                  if (this._sendQueue) {
                    this._sendQueue.stop().catch((e2) => {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Error, `TransportSendQueue.stop() threw error '${e2}'.`);
                    });
                    this._sendQueue = void 0;
                  }
                  this.connectionId = void 0;
                  this._connectionState = "Disconnected";
                  if (this._connectionStarted) {
                    this._connectionStarted = false;
                    try {
                      if (this.onclose) {
                        this.onclose(error);
                      }
                    } catch (e2) {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Error, `HttpConnection.onclose(${error}) threw error '${e2}'.`);
                    }
                  }
                }
                _resolveUrl(url) {
                  if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
                    return url;
                  }
                  if (!_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isBrowser) {
                    throw new Error(`Cannot resolve '${url}'.`);
                  }
                  const aTag = window.document.createElement("a");
                  aTag.href = url;
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Information, `Normalizing '${url}' to '${aTag.href}'.`);
                  return aTag.href;
                }
                _resolveNegotiateUrl(url) {
                  const negotiateUrl = new URL(url);
                  if (negotiateUrl.pathname.endsWith("/")) {
                    negotiateUrl.pathname += "negotiate";
                  } else {
                    negotiateUrl.pathname += "/negotiate";
                  }
                  const searchParams = new URLSearchParams(negotiateUrl.searchParams);
                  if (!searchParams.has("negotiateVersion")) {
                    searchParams.append("negotiateVersion", this._negotiateVersion.toString());
                  }
                  if (searchParams.has("useStatefulReconnect")) {
                    if (searchParams.get("useStatefulReconnect") === "true") {
                      this._options._useStatefulReconnect = true;
                    }
                  } else if (this._options._useStatefulReconnect === true) {
                    searchParams.append("useStatefulReconnect", "true");
                  }
                  negotiateUrl.search = searchParams.toString();
                  return negotiateUrl.toString();
                }
              }
              function transportMatches(requestedTransport, actualTransport) {
                return !requestedTransport || (actualTransport & requestedTransport) !== 0;
              }
              class TransportSendQueue {
                constructor(_transport) {
                  this._transport = _transport;
                  this._buffer = [];
                  this._executing = true;
                  this._sendBufferedData = new PromiseSource();
                  this._transportResult = new PromiseSource();
                  this._sendLoopPromise = this._sendLoop();
                }
                send(data) {
                  this._bufferData(data);
                  if (!this._transportResult) {
                    this._transportResult = new PromiseSource();
                  }
                  return this._transportResult.promise;
                }
                stop() {
                  this._executing = false;
                  this._sendBufferedData.resolve();
                  return this._sendLoopPromise;
                }
                _bufferData(data) {
                  if (this._buffer.length && typeof this._buffer[0] !== typeof data) {
                    throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof data}`);
                  }
                  this._buffer.push(data);
                  this._sendBufferedData.resolve();
                }
                async _sendLoop() {
                  while (true) {
                    await this._sendBufferedData.promise;
                    if (!this._executing) {
                      if (this._transportResult) {
                        this._transportResult.reject("Connection stopped.");
                      }
                      break;
                    }
                    this._sendBufferedData = new PromiseSource();
                    const transportResult = this._transportResult;
                    this._transportResult = void 0;
                    const data = typeof this._buffer[0] === "string" ? this._buffer.join("") : TransportSendQueue._concatBuffers(this._buffer);
                    this._buffer.length = 0;
                    try {
                      await this._transport.send(data);
                      transportResult.resolve();
                    } catch (error) {
                      transportResult.reject(error);
                    }
                  }
                }
                static _concatBuffers(arrayBuffers) {
                  const totalLength = arrayBuffers.map((b2) => b2.byteLength).reduce((a2, b2) => a2 + b2);
                  const result = new Uint8Array(totalLength);
                  let offset = 0;
                  for (const item of arrayBuffers) {
                    result.set(new Uint8Array(item), offset);
                    offset += item.byteLength;
                  }
                  return result.buffer;
                }
              }
              class PromiseSource {
                constructor() {
                  this.promise = new Promise((resolve, reject) => [this._resolver, this._rejecter] = [resolve, reject]);
                }
                resolve() {
                  this._resolver();
                }
                reject(reason) {
                  this._rejecter(reason);
                }
              }
            },
            /* 26 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                configureAbortController: () => (
                  /* binding */
                  configureAbortController
                ),
                /* harmony export */
                configureFetch: () => (
                  /* binding */
                  configureFetch
                ),
                /* harmony export */
                getEventSource: () => (
                  /* binding */
                  getEventSource
                ),
                /* harmony export */
                getWS: () => (
                  /* binding */
                  getWS
                )
                /* harmony export */
              });
              var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(23);
              function configureFetch(obj) {
                if (typeof fetch === "undefined" || _Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode) {
                  obj._jar = new (__webpack_require__2(27)).CookieJar();
                  if (typeof fetch === "undefined") {
                    obj._fetchType = __webpack_require__2(28);
                  } else {
                    obj._fetchType = fetch;
                  }
                  obj._fetchType = __webpack_require__2(29)(obj._fetchType, obj._jar);
                  return true;
                }
                return false;
              }
              function configureAbortController(obj) {
                if (typeof AbortController === "undefined") {
                  obj._abortControllerType = __webpack_require__2(30);
                  return true;
                }
                return false;
              }
              function getWS() {
                return __webpack_require__2(31);
              }
              function getEventSource() {
                return __webpack_require__2(32);
              }
            },
            /* 27 */
            /***/
            () => {
            },
            /* 28 */
            /***/
            () => {
            },
            /* 29 */
            /***/
            () => {
            },
            /* 30 */
            /***/
            () => {
            },
            /* 31 */
            /***/
            () => {
            },
            /* 32 */
            /***/
            () => {
            },
            /* 33 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                AccessTokenHttpClient: () => (
                  /* binding */
                  AccessTokenHttpClient
                )
                /* harmony export */
              });
              var _HeaderNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(35);
              var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(34);
              class AccessTokenHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
                constructor(innerClient, accessTokenFactory) {
                  super();
                  this._innerClient = innerClient;
                  this._accessTokenFactory = accessTokenFactory;
                }
                async send(request) {
                  let allowRetry = true;
                  if (this._accessTokenFactory && (!this._accessToken || request.url && request.url.indexOf("/negotiate?") > 0)) {
                    allowRetry = false;
                    this._accessToken = await this._accessTokenFactory();
                  }
                  this._setAuthorizationHeader(request);
                  const response = await this._innerClient.send(request);
                  if (allowRetry && response.statusCode === 401 && this._accessTokenFactory) {
                    this._accessToken = await this._accessTokenFactory();
                    this._setAuthorizationHeader(request);
                    return await this._innerClient.send(request);
                  }
                  return response;
                }
                _setAuthorizationHeader(request) {
                  if (!request.headers) {
                    request.headers = {};
                  }
                  if (this._accessToken) {
                    request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_1__.HeaderNames.Authorization] = `Bearer ${this._accessToken}`;
                  } else if (this._accessTokenFactory) {
                    if (request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_1__.HeaderNames.Authorization]) {
                      delete request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_1__.HeaderNames.Authorization];
                    }
                  }
                }
                getCookieString(url) {
                  return this._innerClient.getCookieString(url);
                }
              }
            },
            /* 34 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                HttpClient: () => (
                  /* binding */
                  HttpClient
                ),
                /* harmony export */
                HttpResponse: () => (
                  /* binding */
                  HttpResponse
                )
                /* harmony export */
              });
              class HttpResponse {
                constructor(statusCode, statusText, content) {
                  this.statusCode = statusCode;
                  this.statusText = statusText;
                  this.content = content;
                }
              }
              class HttpClient {
                get(url, options) {
                  return this.send({
                    ...options,
                    method: "GET",
                    url
                  });
                }
                post(url, options) {
                  return this.send({
                    ...options,
                    method: "POST",
                    url
                  });
                }
                delete(url, options) {
                  return this.send({
                    ...options,
                    method: "DELETE",
                    url
                  });
                }
                /** Gets all cookies that apply to the specified URL.
                 *
                 * @param url The URL that the cookies are valid for.
                 * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
                 */
                // @ts-ignore
                getCookieString(url) {
                  return "";
                }
              }
            },
            /* 35 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                HeaderNames: () => (
                  /* binding */
                  HeaderNames
                )
                /* harmony export */
              });
              class HeaderNames {
              }
              HeaderNames.Authorization = "Authorization";
              HeaderNames.Cookie = "Cookie";
            },
            /* 36 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                DefaultHttpClient: () => (
                  /* binding */
                  DefaultHttpClient
                )
                /* harmony export */
              });
              var _Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(38);
              var _FetchHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(37);
              var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(34);
              var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(23);
              var _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(39);
              class DefaultHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
                /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
                constructor(logger) {
                  super();
                  if (typeof fetch !== "undefined" || _Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode) {
                    this._httpClient = new _FetchHttpClient__WEBPACK_IMPORTED_MODULE_2__.FetchHttpClient(logger);
                  } else if (typeof XMLHttpRequest !== "undefined") {
                    this._httpClient = new _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__.XhrHttpClient(logger);
                  } else {
                    throw new Error("No usable HttpClient found.");
                  }
                }
                /** @inheritDoc */
                send(request) {
                  if (request.abortSignal && request.abortSignal.aborted) {
                    return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_4__.AbortError());
                  }
                  if (!request.method) {
                    return Promise.reject(new Error("No method defined."));
                  }
                  if (!request.url) {
                    return Promise.reject(new Error("No url defined."));
                  }
                  return this._httpClient.send(request);
                }
                getCookieString(url) {
                  return this._httpClient.getCookieString(url);
                }
              }
            },
            /* 37 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                FetchHttpClient: () => (
                  /* binding */
                  FetchHttpClient
                )
                /* harmony export */
              });
              var _Errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(38);
              var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(34);
              var _ILogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(21);
              var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(23);
              var _DynamicImports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(26);
              class FetchHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
                constructor(logger) {
                  super();
                  this._logger = logger;
                  const fetchObj = { _fetchType: void 0, _jar: void 0 };
                  if ((0, _DynamicImports__WEBPACK_IMPORTED_MODULE_1__.configureFetch)(fetchObj)) {
                    this._fetchType = fetchObj._fetchType;
                    this._jar = fetchObj._jar;
                  } else {
                    this._fetchType = fetch.bind((0, _Utils__WEBPACK_IMPORTED_MODULE_2__.getGlobalThis)());
                  }
                  this._abortControllerType = AbortController;
                  const abortObj = { _abortControllerType: this._abortControllerType };
                  if ((0, _DynamicImports__WEBPACK_IMPORTED_MODULE_1__.configureAbortController)(abortObj)) {
                    this._abortControllerType = abortObj._abortControllerType;
                  }
                }
                /** @inheritDoc */
                async send(request) {
                  if (request.abortSignal && request.abortSignal.aborted) {
                    throw new _Errors__WEBPACK_IMPORTED_MODULE_3__.AbortError();
                  }
                  if (!request.method) {
                    throw new Error("No method defined.");
                  }
                  if (!request.url) {
                    throw new Error("No url defined.");
                  }
                  const abortController = new this._abortControllerType();
                  let error;
                  if (request.abortSignal) {
                    request.abortSignal.onabort = () => {
                      abortController.abort();
                      error = new _Errors__WEBPACK_IMPORTED_MODULE_3__.AbortError();
                    };
                  }
                  let timeoutId = null;
                  if (request.timeout) {
                    const msTimeout = request.timeout;
                    timeoutId = setTimeout(() => {
                      abortController.abort();
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Warning, `Timeout from HTTP request.`);
                      error = new _Errors__WEBPACK_IMPORTED_MODULE_3__.TimeoutError();
                    }, msTimeout);
                  }
                  if (request.content === "") {
                    request.content = void 0;
                  }
                  if (request.content) {
                    request.headers = request.headers || {};
                    if ((0, _Utils__WEBPACK_IMPORTED_MODULE_2__.isArrayBuffer)(request.content)) {
                      request.headers["Content-Type"] = "application/octet-stream";
                    } else {
                      request.headers["Content-Type"] = "text/plain;charset=UTF-8";
                    }
                  }
                  let response;
                  try {
                    response = await this._fetchType(request.url, {
                      body: request.content,
                      cache: "no-cache",
                      credentials: request.withCredentials === true ? "include" : "same-origin",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        ...request.headers
                      },
                      method: request.method,
                      mode: "cors",
                      redirect: "follow",
                      signal: abortController.signal
                    });
                  } catch (e2) {
                    if (error) {
                      throw error;
                    }
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Warning, `Error from HTTP request. ${e2}.`);
                    throw e2;
                  } finally {
                    if (timeoutId) {
                      clearTimeout(timeoutId);
                    }
                    if (request.abortSignal) {
                      request.abortSignal.onabort = null;
                    }
                  }
                  if (!response.ok) {
                    const errorMessage = await deserializeContent(response, "text");
                    throw new _Errors__WEBPACK_IMPORTED_MODULE_3__.HttpError(errorMessage || response.statusText, response.status);
                  }
                  const content = deserializeContent(response, request.responseType);
                  const payload = await content;
                  return new _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpResponse(response.status, response.statusText, payload);
                }
                getCookieString(url) {
                  let cookies = "";
                  if (_Utils__WEBPACK_IMPORTED_MODULE_2__.Platform.isNode && this._jar) {
                    this._jar.getCookies(url, (e2, c2) => cookies = c2.join("; "));
                  }
                  return cookies;
                }
              }
              function deserializeContent(response, responseType) {
                let content;
                switch (responseType) {
                  case "arraybuffer":
                    content = response.arrayBuffer();
                    break;
                  case "text":
                    content = response.text();
                    break;
                  case "blob":
                  case "document":
                  case "json":
                    throw new Error(`${responseType} is not supported.`);
                  default:
                    content = response.text();
                    break;
                }
                return content;
              }
            },
            /* 38 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                AbortError: () => (
                  /* binding */
                  AbortError
                ),
                /* harmony export */
                AggregateErrors: () => (
                  /* binding */
                  AggregateErrors
                ),
                /* harmony export */
                DisabledTransportError: () => (
                  /* binding */
                  DisabledTransportError
                ),
                /* harmony export */
                FailedToNegotiateWithServerError: () => (
                  /* binding */
                  FailedToNegotiateWithServerError
                ),
                /* harmony export */
                FailedToStartTransportError: () => (
                  /* binding */
                  FailedToStartTransportError
                ),
                /* harmony export */
                HttpError: () => (
                  /* binding */
                  HttpError
                ),
                /* harmony export */
                TimeoutError: () => (
                  /* binding */
                  TimeoutError
                ),
                /* harmony export */
                UnsupportedTransportError: () => (
                  /* binding */
                  UnsupportedTransportError
                )
                /* harmony export */
              });
              class HttpError extends Error {
                /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
                 *
                 * @param {string} errorMessage A descriptive error message.
                 * @param {number} statusCode The HTTP status code represented by this error.
                 */
                constructor(errorMessage, statusCode) {
                  const trueProto = new.target.prototype;
                  super(`${errorMessage}: Status code '${statusCode}'`);
                  this.statusCode = statusCode;
                  this.__proto__ = trueProto;
                }
              }
              class TimeoutError extends Error {
                /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
                 *
                 * @param {string} errorMessage A descriptive error message.
                 */
                constructor(errorMessage = "A timeout occurred.") {
                  const trueProto = new.target.prototype;
                  super(errorMessage);
                  this.__proto__ = trueProto;
                }
              }
              class AbortError extends Error {
                /** Constructs a new instance of {@link AbortError}.
                 *
                 * @param {string} errorMessage A descriptive error message.
                 */
                constructor(errorMessage = "An abort occurred.") {
                  const trueProto = new.target.prototype;
                  super(errorMessage);
                  this.__proto__ = trueProto;
                }
              }
              class UnsupportedTransportError extends Error {
                /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
                 *
                 * @param {string} message A descriptive error message.
                 * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
                 */
                constructor(message, transport) {
                  const trueProto = new.target.prototype;
                  super(message);
                  this.transport = transport;
                  this.errorType = "UnsupportedTransportError";
                  this.__proto__ = trueProto;
                }
              }
              class DisabledTransportError extends Error {
                /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
                 *
                 * @param {string} message A descriptive error message.
                 * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
                 */
                constructor(message, transport) {
                  const trueProto = new.target.prototype;
                  super(message);
                  this.transport = transport;
                  this.errorType = "DisabledTransportError";
                  this.__proto__ = trueProto;
                }
              }
              class FailedToStartTransportError extends Error {
                /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
                 *
                 * @param {string} message A descriptive error message.
                 * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
                 */
                constructor(message, transport) {
                  const trueProto = new.target.prototype;
                  super(message);
                  this.transport = transport;
                  this.errorType = "FailedToStartTransportError";
                  this.__proto__ = trueProto;
                }
              }
              class FailedToNegotiateWithServerError extends Error {
                /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
                 *
                 * @param {string} message A descriptive error message.
                 */
                constructor(message) {
                  const trueProto = new.target.prototype;
                  super(message);
                  this.errorType = "FailedToNegotiateWithServerError";
                  this.__proto__ = trueProto;
                }
              }
              class AggregateErrors extends Error {
                /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
                 *
                 * @param {string} message A descriptive error message.
                 * @param {Error[]} innerErrors The collection of errors this error is aggregating.
                 */
                constructor(message, innerErrors) {
                  const trueProto = new.target.prototype;
                  super(message);
                  this.innerErrors = innerErrors;
                  this.__proto__ = trueProto;
                }
              }
            },
            /* 39 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                XhrHttpClient: () => (
                  /* binding */
                  XhrHttpClient
                )
                /* harmony export */
              });
              var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(38);
              var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(34);
              var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(21);
              var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(23);
              class XhrHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
                constructor(logger) {
                  super();
                  this._logger = logger;
                }
                /** @inheritDoc */
                send(request) {
                  if (request.abortSignal && request.abortSignal.aborted) {
                    return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.AbortError());
                  }
                  if (!request.method) {
                    return Promise.reject(new Error("No method defined."));
                  }
                  if (!request.url) {
                    return Promise.reject(new Error("No url defined."));
                  }
                  return new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.open(request.method, request.url, true);
                    xhr.withCredentials = request.withCredentials === void 0 ? true : request.withCredentials;
                    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    if (request.content === "") {
                      request.content = void 0;
                    }
                    if (request.content) {
                      if ((0, _Utils__WEBPACK_IMPORTED_MODULE_2__.isArrayBuffer)(request.content)) {
                        xhr.setRequestHeader("Content-Type", "application/octet-stream");
                      } else {
                        xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                      }
                    }
                    const headers = request.headers;
                    if (headers) {
                      Object.keys(headers).forEach((header) => {
                        xhr.setRequestHeader(header, headers[header]);
                      });
                    }
                    if (request.responseType) {
                      xhr.responseType = request.responseType;
                    }
                    if (request.abortSignal) {
                      request.abortSignal.onabort = () => {
                        xhr.abort();
                        reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.AbortError());
                      };
                    }
                    if (request.timeout) {
                      xhr.timeout = request.timeout;
                    }
                    xhr.onload = () => {
                      if (request.abortSignal) {
                        request.abortSignal.onabort = null;
                      }
                      if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(new _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
                      } else {
                        reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.HttpError(xhr.response || xhr.responseText || xhr.statusText, xhr.status));
                      }
                    };
                    xhr.onerror = () => {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Warning, `Error from HTTP request. ${xhr.status}: ${xhr.statusText}.`);
                      reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.HttpError(xhr.statusText, xhr.status));
                    };
                    xhr.ontimeout = () => {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Warning, `Timeout from HTTP request.`);
                      reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.TimeoutError());
                    };
                    xhr.send(request.content);
                  });
                }
              }
            },
            /* 40 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                LongPollingTransport: () => (
                  /* binding */
                  LongPollingTransport
                )
                /* harmony export */
              });
              var _AbortController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(41);
              var _Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(38);
              var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(21);
              var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(6);
              var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(23);
              class LongPollingTransport {
                // This is an internal type, not exported from 'index' so this is really just internal.
                get pollAborted() {
                  return this._pollAbort.aborted;
                }
                constructor(httpClient, logger, options) {
                  this._httpClient = httpClient;
                  this._logger = logger;
                  this._pollAbort = new _AbortController__WEBPACK_IMPORTED_MODULE_0__.AbortController();
                  this._options = options;
                  this._running = false;
                  this.onreceive = null;
                  this.onclose = null;
                }
                async connect(url, transferFormat) {
                  _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(url, "url");
                  _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(transferFormat, "transferFormat");
                  _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat, "transferFormat");
                  this._url = url;
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Connecting.");
                  if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat.Binary && (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
                    throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                  }
                  const [name, value] = (0, _Utils__WEBPACK_IMPORTED_MODULE_1__.getUserAgentHeader)();
                  const headers = { [name]: value, ...this._options.headers };
                  const pollOptions = {
                    abortSignal: this._pollAbort.signal,
                    headers,
                    timeout: 1e5,
                    withCredentials: this._options.withCredentials
                  };
                  if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat.Binary) {
                    pollOptions.responseType = "arraybuffer";
                  }
                  const pollUrl = `${url}&_=${Date.now()}`;
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
                  const response = await this._httpClient.get(pollUrl, pollOptions);
                  if (response.statusCode !== 200) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
                    this._closeError = new _Errors__WEBPACK_IMPORTED_MODULE_4__.HttpError(response.statusText || "", response.statusCode);
                    this._running = false;
                  } else {
                    this._running = true;
                  }
                  this._receiving = this._poll(this._url, pollOptions);
                }
                async _poll(url, pollOptions) {
                  try {
                    while (this._running) {
                      try {
                        const pollUrl = `${url}&_=${Date.now()}`;
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
                        const response = await this._httpClient.get(pollUrl, pollOptions);
                        if (response.statusCode === 204) {
                          this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Information, "(LongPolling transport) Poll terminated by server.");
                          this._running = false;
                        } else if (response.statusCode !== 200) {
                          this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
                          this._closeError = new _Errors__WEBPACK_IMPORTED_MODULE_4__.HttpError(response.statusText || "", response.statusCode);
                          this._running = false;
                        } else {
                          if (response.content) {
                            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) data received. ${(0, _Utils__WEBPACK_IMPORTED_MODULE_1__.getDataDetail)(response.content, this._options.logMessageContent)}.`);
                            if (this.onreceive) {
                              this.onreceive(response.content);
                            }
                          } else {
                            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                          }
                        }
                      } catch (e2) {
                        if (!this._running) {
                          this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) Poll errored after shutdown: ${e2.message}`);
                        } else {
                          if (e2 instanceof _Errors__WEBPACK_IMPORTED_MODULE_4__.TimeoutError) {
                            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                          } else {
                            this._closeError = e2;
                            this._running = false;
                          }
                        }
                      }
                    }
                  } finally {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Polling complete.");
                    if (!this.pollAborted) {
                      this._raiseOnClose();
                    }
                  }
                }
                async send(data) {
                  if (!this._running) {
                    return Promise.reject(new Error("Cannot send until the transport is connected"));
                  }
                  return (0, _Utils__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(this._logger, "LongPolling", this._httpClient, this._url, data, this._options);
                }
                async stop() {
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Stopping polling.");
                  this._running = false;
                  this._pollAbort.abort();
                  try {
                    await this._receiving;
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
                    const headers = {};
                    const [name, value] = (0, _Utils__WEBPACK_IMPORTED_MODULE_1__.getUserAgentHeader)();
                    headers[name] = value;
                    const deleteOptions = {
                      headers: { ...headers, ...this._options.headers },
                      timeout: this._options.timeout,
                      withCredentials: this._options.withCredentials
                    };
                    let error;
                    try {
                      await this._httpClient.delete(this._url, deleteOptions);
                    } catch (err) {
                      error = err;
                    }
                    if (error) {
                      if (error instanceof _Errors__WEBPACK_IMPORTED_MODULE_4__.HttpError) {
                        if (error.statusCode === 404) {
                          this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) A 404 response was returned from sending a DELETE request.");
                        } else {
                          this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) Error sending a DELETE request: ${error}`);
                        }
                      }
                    } else {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) DELETE request accepted.");
                    }
                  } finally {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Stop finished.");
                    this._raiseOnClose();
                  }
                }
                _raiseOnClose() {
                  if (this.onclose) {
                    let logMessage = "(LongPolling transport) Firing onclose event.";
                    if (this._closeError) {
                      logMessage += " Error: " + this._closeError;
                    }
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, logMessage);
                    this.onclose(this._closeError);
                  }
                }
              }
            },
            /* 41 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                AbortController: () => (
                  /* binding */
                  AbortController2
                )
                /* harmony export */
              });
              class AbortController2 {
                constructor() {
                  this._isAborted = false;
                  this.onabort = null;
                }
                abort() {
                  if (!this._isAborted) {
                    this._isAborted = true;
                    if (this.onabort) {
                      this.onabort();
                    }
                  }
                }
                get signal() {
                  return this;
                }
                get aborted() {
                  return this._isAborted;
                }
              }
            },
            /* 42 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                WebSocketTransport: () => (
                  /* binding */
                  WebSocketTransport
                )
                /* harmony export */
              });
              var _HeaderNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(35);
              var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(21);
              var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(6);
              var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(23);
              class WebSocketTransport {
                constructor(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor, headers) {
                  this._logger = logger;
                  this._accessTokenFactory = accessTokenFactory;
                  this._logMessageContent = logMessageContent;
                  this._webSocketConstructor = webSocketConstructor;
                  this._httpClient = httpClient;
                  this.onreceive = null;
                  this.onclose = null;
                  this._headers = headers;
                }
                async connect(url, transferFormat) {
                  _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(url, "url");
                  _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(transferFormat, "transferFormat");
                  _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__.TransferFormat, "transferFormat");
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, "(WebSockets transport) Connecting.");
                  let token;
                  if (this._accessTokenFactory) {
                    token = await this._accessTokenFactory();
                  }
                  return new Promise((resolve, reject) => {
                    url = url.replace(/^http/, "ws");
                    let webSocket;
                    const cookies = this._httpClient.getCookieString(url);
                    let opened = false;
                    if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode || _Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isReactNative) {
                      const headers = {};
                      const [name, value] = (0, _Utils__WEBPACK_IMPORTED_MODULE_0__.getUserAgentHeader)();
                      headers[name] = value;
                      if (token) {
                        headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_3__.HeaderNames.Authorization] = `Bearer ${token}`;
                      }
                      if (cookies) {
                        headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_3__.HeaderNames.Cookie] = cookies;
                      }
                      webSocket = new this._webSocketConstructor(url, void 0, {
                        headers: { ...headers, ...this._headers }
                      });
                    } else {
                      if (token) {
                        url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(token)}`;
                      }
                    }
                    if (!webSocket) {
                      webSocket = new this._webSocketConstructor(url);
                    }
                    if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_1__.TransferFormat.Binary) {
                      webSocket.binaryType = "arraybuffer";
                    }
                    webSocket.onopen = (_event) => {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Information, `WebSocket connected to ${url}.`);
                      this._webSocket = webSocket;
                      opened = true;
                      resolve();
                    };
                    webSocket.onerror = (event) => {
                      let error = null;
                      if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                        error = event.error;
                      } else {
                        error = "There was an error with the transport";
                      }
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Information, `(WebSockets transport) ${error}.`);
                    };
                    webSocket.onmessage = (message) => {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, `(WebSockets transport) data received. ${(0, _Utils__WEBPACK_IMPORTED_MODULE_0__.getDataDetail)(message.data, this._logMessageContent)}.`);
                      if (this.onreceive) {
                        try {
                          this.onreceive(message.data);
                        } catch (error) {
                          this._close(error);
                          return;
                        }
                      }
                    };
                    webSocket.onclose = (event) => {
                      if (opened) {
                        this._close(event);
                      } else {
                        let error = null;
                        if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                          error = event.error;
                        } else {
                          error = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.";
                        }
                        reject(new Error(error));
                      }
                    };
                  });
                }
                send(data) {
                  if (this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, `(WebSockets transport) sending data. ${(0, _Utils__WEBPACK_IMPORTED_MODULE_0__.getDataDetail)(data, this._logMessageContent)}.`);
                    this._webSocket.send(data);
                    return Promise.resolve();
                  }
                  return Promise.reject("WebSocket is not in the OPEN state");
                }
                stop() {
                  if (this._webSocket) {
                    this._close(void 0);
                  }
                  return Promise.resolve();
                }
                _close(event) {
                  if (this._webSocket) {
                    this._webSocket.onclose = () => {
                    };
                    this._webSocket.onmessage = () => {
                    };
                    this._webSocket.onerror = () => {
                    };
                    this._webSocket.close();
                    this._webSocket = void 0;
                  }
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, "(WebSockets transport) socket closed.");
                  if (this.onclose) {
                    if (this._isCloseEvent(event) && (event.wasClean === false || event.code !== 1e3)) {
                      this.onclose(new Error(`WebSocket closed with status code: ${event.code} (${event.reason || "no reason given"}).`));
                    } else if (event instanceof Error) {
                      this.onclose(event);
                    } else {
                      this.onclose();
                    }
                  }
                }
                _isCloseEvent(event) {
                  return event && typeof event.wasClean === "boolean" && typeof event.code === "number";
                }
              }
            },
            /* 43 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                ServerSentEventsTransport: () => (
                  /* binding */
                  ServerSentEventsTransport
                )
                /* harmony export */
              });
              var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(21);
              var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(6);
              var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(23);
              class ServerSentEventsTransport {
                constructor(httpClient, accessToken, logger, options) {
                  this._httpClient = httpClient;
                  this._accessToken = accessToken;
                  this._logger = logger;
                  this._options = options;
                  this.onreceive = null;
                  this.onclose = null;
                }
                async connect(url, transferFormat) {
                  _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(url, "url");
                  _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(transferFormat, "transferFormat");
                  _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__.TransferFormat, "transferFormat");
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, "(SSE transport) Connecting.");
                  this._url = url;
                  if (this._accessToken) {
                    url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`;
                  }
                  return new Promise((resolve, reject) => {
                    let opened = false;
                    if (transferFormat !== _ITransport__WEBPACK_IMPORTED_MODULE_1__.TransferFormat.Text) {
                      reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                      return;
                    }
                    let eventSource;
                    if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isBrowser || _Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isWebWorker) {
                      eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials });
                    } else {
                      const cookies = this._httpClient.getCookieString(url);
                      const headers = {};
                      headers.Cookie = cookies;
                      const [name, value] = (0, _Utils__WEBPACK_IMPORTED_MODULE_0__.getUserAgentHeader)();
                      headers[name] = value;
                      eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials, headers: { ...headers, ...this._options.headers } });
                    }
                    try {
                      eventSource.onmessage = (e2) => {
                        if (this.onreceive) {
                          try {
                            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, `(SSE transport) data received. ${(0, _Utils__WEBPACK_IMPORTED_MODULE_0__.getDataDetail)(e2.data, this._options.logMessageContent)}.`);
                            this.onreceive(e2.data);
                          } catch (error) {
                            this._close(error);
                            return;
                          }
                        }
                      };
                      eventSource.onerror = (e2) => {
                        if (opened) {
                          this._close();
                        } else {
                          reject(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
                        }
                      };
                      eventSource.onopen = () => {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Information, `SSE connected to ${this._url}`);
                        this._eventSource = eventSource;
                        opened = true;
                        resolve();
                      };
                    } catch (e2) {
                      reject(e2);
                      return;
                    }
                  });
                }
                async send(data) {
                  if (!this._eventSource) {
                    return Promise.reject(new Error("Cannot send until the transport is connected"));
                  }
                  return (0, _Utils__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(this._logger, "SSE", this._httpClient, this._url, data, this._options);
                }
                stop() {
                  this._close();
                  return Promise.resolve();
                }
                _close(e2) {
                  if (this._eventSource) {
                    this._eventSource.close();
                    this._eventSource = void 0;
                    if (this.onclose) {
                      this.onclose(e2);
                    }
                  }
                }
              }
            },
            /* 44 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                HubConnection: () => (
                  /* binding */
                  HubConnection
                ),
                /* harmony export */
                HubConnectionState: () => (
                  /* binding */
                  HubConnectionState
                )
                /* harmony export */
              });
              var _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(45);
              var _Errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(38);
              var _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(5);
              var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(21);
              var _Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__2(48);
              var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(23);
              var _MessageBuffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(47);
              const DEFAULT_TIMEOUT_IN_MS = 30 * 1e3;
              const DEFAULT_PING_INTERVAL_IN_MS = 15 * 1e3;
              const DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE = 1e5;
              var HubConnectionState;
              (function(HubConnectionState2) {
                HubConnectionState2["Disconnected"] = "Disconnected";
                HubConnectionState2["Connecting"] = "Connecting";
                HubConnectionState2["Connected"] = "Connected";
                HubConnectionState2["Disconnecting"] = "Disconnecting";
                HubConnectionState2["Reconnecting"] = "Reconnecting";
              })(HubConnectionState || (HubConnectionState = {}));
              class HubConnection {
                /** @internal */
                // Using a public static factory method means we can have a private constructor and an _internal_
                // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
                // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
                // public parameter-less constructor.
                static create(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
                  return new HubConnection(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize);
                }
                constructor(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
                  this._nextKeepAlive = 0;
                  this._freezeEventListener = () => {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
                  };
                  _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(connection, "connection");
                  _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(logger, "logger");
                  _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(protocol, "protocol");
                  this.serverTimeoutInMilliseconds = serverTimeoutInMilliseconds !== null && serverTimeoutInMilliseconds !== void 0 ? serverTimeoutInMilliseconds : DEFAULT_TIMEOUT_IN_MS;
                  this.keepAliveIntervalInMilliseconds = keepAliveIntervalInMilliseconds !== null && keepAliveIntervalInMilliseconds !== void 0 ? keepAliveIntervalInMilliseconds : DEFAULT_PING_INTERVAL_IN_MS;
                  this._statefulReconnectBufferSize = statefulReconnectBufferSize !== null && statefulReconnectBufferSize !== void 0 ? statefulReconnectBufferSize : DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE;
                  this._logger = logger;
                  this._protocol = protocol;
                  this.connection = connection;
                  this._reconnectPolicy = reconnectPolicy;
                  this._handshakeProtocol = new _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_2__.HandshakeProtocol();
                  this.connection.onreceive = (data) => this._processIncomingData(data);
                  this.connection.onclose = (error) => this._connectionClosed(error);
                  this._callbacks = {};
                  this._methods = {};
                  this._closedCallbacks = [];
                  this._reconnectingCallbacks = [];
                  this._reconnectedCallbacks = [];
                  this._invocationId = 0;
                  this._receivedHandshakeResponse = false;
                  this._connectionState = HubConnectionState.Disconnected;
                  this._connectionStarted = false;
                  this._cachedPingMessage = this._protocol.writeMessage({ type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ping });
                }
                /** Indicates the state of the {@link HubConnection} to the server. */
                get state() {
                  return this._connectionState;
                }
                /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
                 *  in the disconnected state or if the negotiation step was skipped.
                 */
                get connectionId() {
                  return this.connection ? this.connection.connectionId || null : null;
                }
                /** Indicates the url of the {@link HubConnection} to the server. */
                get baseUrl() {
                  return this.connection.baseUrl || "";
                }
                /**
                 * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
                 * Reconnecting states.
                 * @param {string} url The url to connect to.
                 */
                set baseUrl(url) {
                  if (this._connectionState !== HubConnectionState.Disconnected && this._connectionState !== HubConnectionState.Reconnecting) {
                    throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
                  }
                  if (!url) {
                    throw new Error("The HubConnection url must be a valid url.");
                  }
                  this.connection.baseUrl = url;
                }
                /** Starts the connection.
                 *
                 * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
                 */
                start() {
                  this._startPromise = this._startWithStateTransitions();
                  return this._startPromise;
                }
                async _startWithStateTransitions() {
                  if (this._connectionState !== HubConnectionState.Disconnected) {
                    return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
                  }
                  this._connectionState = HubConnectionState.Connecting;
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Starting HubConnection.");
                  try {
                    await this._startInternal();
                    if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isBrowser) {
                      window.document.addEventListener("freeze", this._freezeEventListener);
                    }
                    this._connectionState = HubConnectionState.Connected;
                    this._connectionStarted = true;
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "HubConnection connected successfully.");
                  } catch (e2) {
                    this._connectionState = HubConnectionState.Disconnected;
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `HubConnection failed to start successfully because of error '${e2}'.`);
                    return Promise.reject(e2);
                  }
                }
                async _startInternal() {
                  this._stopDuringStartError = void 0;
                  this._receivedHandshakeResponse = false;
                  const handshakePromise = new Promise((resolve, reject) => {
                    this._handshakeResolver = resolve;
                    this._handshakeRejecter = reject;
                  });
                  await this.connection.start(this._protocol.transferFormat);
                  try {
                    let version = this._protocol.version;
                    if (!this.connection.features.reconnect) {
                      version = 1;
                    }
                    const handshakeRequest = {
                      protocol: this._protocol.name,
                      version
                    };
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Sending handshake request.");
                    await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(handshakeRequest));
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Using HubProtocol '${this._protocol.name}'.`);
                    this._cleanupTimeout();
                    this._resetTimeoutPeriod();
                    this._resetKeepAliveInterval();
                    await handshakePromise;
                    if (this._stopDuringStartError) {
                      throw this._stopDuringStartError;
                    }
                    const useStatefulReconnect = this.connection.features.reconnect || false;
                    if (useStatefulReconnect) {
                      this._messageBuffer = new _MessageBuffer__WEBPACK_IMPORTED_MODULE_4__.MessageBuffer(this._protocol, this.connection, this._statefulReconnectBufferSize);
                      this.connection.features.disconnected = this._messageBuffer._disconnected.bind(this._messageBuffer);
                      this.connection.features.resend = () => {
                        if (this._messageBuffer) {
                          return this._messageBuffer._resend();
                        }
                      };
                    }
                    if (!this.connection.features.inherentKeepAlive) {
                      await this._sendMessage(this._cachedPingMessage);
                    }
                  } catch (e2) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `Hub handshake failed with error '${e2}' during start(). Stopping HubConnection.`);
                    this._cleanupTimeout();
                    this._cleanupPingTimer();
                    await this.connection.stop(e2);
                    throw e2;
                  }
                }
                /** Stops the connection.
                 *
                 * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
                 */
                async stop() {
                  const startPromise = this._startPromise;
                  this.connection.features.reconnect = false;
                  this._stopPromise = this._stopInternal();
                  await this._stopPromise;
                  try {
                    await startPromise;
                  } catch (e2) {
                  }
                }
                _stopInternal(error) {
                  if (this._connectionState === HubConnectionState.Disconnected) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `Call to HubConnection.stop(${error}) ignored because it is already in the disconnected state.`);
                    return Promise.resolve();
                  }
                  if (this._connectionState === HubConnectionState.Disconnecting) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
                    return this._stopPromise;
                  }
                  const state = this._connectionState;
                  this._connectionState = HubConnectionState.Disconnecting;
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Stopping HubConnection.");
                  if (this._reconnectDelayHandle) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");
                    clearTimeout(this._reconnectDelayHandle);
                    this._reconnectDelayHandle = void 0;
                    this._completeClose();
                    return Promise.resolve();
                  }
                  if (state === HubConnectionState.Connected) {
                    this._sendCloseMessage();
                  }
                  this._cleanupTimeout();
                  this._cleanupPingTimer();
                  this._stopDuringStartError = error || new _Errors__WEBPACK_IMPORTED_MODULE_5__.AbortError("The connection was stopped before the hub handshake could complete.");
                  return this.connection.stop(error);
                }
                async _sendCloseMessage() {
                  try {
                    await this._sendWithProtocol(this._createCloseMessage());
                  } catch {
                  }
                }
                /** Invokes a streaming hub method on the server using the specified name and arguments.
                 *
                 * @typeparam T The type of the items returned by the server.
                 * @param {string} methodName The name of the server method to invoke.
                 * @param {any[]} args The arguments used to invoke the server method.
                 * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
                 */
                stream(methodName, ...args) {
                  const [streams, streamIds] = this._replaceStreamingParams(args);
                  const invocationDescriptor = this._createStreamInvocation(methodName, args, streamIds);
                  let promiseQueue;
                  const subject = new _Subject__WEBPACK_IMPORTED_MODULE_6__.Subject();
                  subject.cancelCallback = () => {
                    const cancelInvocation = this._createCancelInvocation(invocationDescriptor.invocationId);
                    delete this._callbacks[invocationDescriptor.invocationId];
                    return promiseQueue.then(() => {
                      return this._sendWithProtocol(cancelInvocation);
                    });
                  };
                  this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
                    if (error) {
                      subject.error(error);
                      return;
                    } else if (invocationEvent) {
                      if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion) {
                        if (invocationEvent.error) {
                          subject.error(new Error(invocationEvent.error));
                        } else {
                          subject.complete();
                        }
                      } else {
                        subject.next(invocationEvent.item);
                      }
                    }
                  };
                  promiseQueue = this._sendWithProtocol(invocationDescriptor).catch((e2) => {
                    subject.error(e2);
                    delete this._callbacks[invocationDescriptor.invocationId];
                  });
                  this._launchStreams(streams, promiseQueue);
                  return subject;
                }
                _sendMessage(message) {
                  this._resetKeepAliveInterval();
                  return this.connection.send(message);
                }
                /**
                 * Sends a js object to the server.
                 * @param message The js object to serialize and send.
                 */
                _sendWithProtocol(message) {
                  if (this._messageBuffer) {
                    return this._messageBuffer._send(message);
                  } else {
                    return this._sendMessage(this._protocol.writeMessage(message));
                  }
                }
                /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
                 *
                 * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
                 * be processing the invocation.
                 *
                 * @param {string} methodName The name of the server method to invoke.
                 * @param {any[]} args The arguments used to invoke the server method.
                 * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
                 */
                send(methodName, ...args) {
                  const [streams, streamIds] = this._replaceStreamingParams(args);
                  const sendPromise = this._sendWithProtocol(this._createInvocation(methodName, args, true, streamIds));
                  this._launchStreams(streams, sendPromise);
                  return sendPromise;
                }
                /** Invokes a hub method on the server using the specified name and arguments.
                 *
                 * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
                 * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
                 * resolving the Promise.
                 *
                 * @typeparam T The expected return type.
                 * @param {string} methodName The name of the server method to invoke.
                 * @param {any[]} args The arguments used to invoke the server method.
                 * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
                 */
                invoke(methodName, ...args) {
                  const [streams, streamIds] = this._replaceStreamingParams(args);
                  const invocationDescriptor = this._createInvocation(methodName, args, false, streamIds);
                  const p = new Promise((resolve, reject) => {
                    this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
                      if (error) {
                        reject(error);
                        return;
                      } else if (invocationEvent) {
                        if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion) {
                          if (invocationEvent.error) {
                            reject(new Error(invocationEvent.error));
                          } else {
                            resolve(invocationEvent.result);
                          }
                        } else {
                          reject(new Error(`Unexpected message type: ${invocationEvent.type}`));
                        }
                      }
                    };
                    const promiseQueue = this._sendWithProtocol(invocationDescriptor).catch((e2) => {
                      reject(e2);
                      delete this._callbacks[invocationDescriptor.invocationId];
                    });
                    this._launchStreams(streams, promiseQueue);
                  });
                  return p;
                }
                on(methodName, newMethod) {
                  if (!methodName || !newMethod) {
                    return;
                  }
                  methodName = methodName.toLowerCase();
                  if (!this._methods[methodName]) {
                    this._methods[methodName] = [];
                  }
                  if (this._methods[methodName].indexOf(newMethod) !== -1) {
                    return;
                  }
                  this._methods[methodName].push(newMethod);
                }
                off(methodName, method) {
                  if (!methodName) {
                    return;
                  }
                  methodName = methodName.toLowerCase();
                  const handlers = this._methods[methodName];
                  if (!handlers) {
                    return;
                  }
                  if (method) {
                    const removeIdx = handlers.indexOf(method);
                    if (removeIdx !== -1) {
                      handlers.splice(removeIdx, 1);
                      if (handlers.length === 0) {
                        delete this._methods[methodName];
                      }
                    }
                  } else {
                    delete this._methods[methodName];
                  }
                }
                /** Registers a handler that will be invoked when the connection is closed.
                 *
                 * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
                 */
                onclose(callback) {
                  if (callback) {
                    this._closedCallbacks.push(callback);
                  }
                }
                /** Registers a handler that will be invoked when the connection starts reconnecting.
                 *
                 * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
                 */
                onreconnecting(callback) {
                  if (callback) {
                    this._reconnectingCallbacks.push(callback);
                  }
                }
                /** Registers a handler that will be invoked when the connection successfully reconnects.
                 *
                 * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
                 */
                onreconnected(callback) {
                  if (callback) {
                    this._reconnectedCallbacks.push(callback);
                  }
                }
                _processIncomingData(data) {
                  this._cleanupTimeout();
                  if (!this._receivedHandshakeResponse) {
                    data = this._processHandshakeResponse(data);
                    this._receivedHandshakeResponse = true;
                  }
                  if (data) {
                    const messages = this._protocol.parseMessages(data, this._logger);
                    for (const message of messages) {
                      if (this._messageBuffer && !this._messageBuffer._shouldProcessMessage(message)) {
                        continue;
                      }
                      switch (message.type) {
                        case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation:
                          this._invokeClientMethod(message);
                          break;
                        case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamItem:
                        case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion: {
                          const callback = this._callbacks[message.invocationId];
                          if (callback) {
                            if (message.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion) {
                              delete this._callbacks[message.invocationId];
                            }
                            try {
                              callback(message);
                            } catch (e2) {
                              this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `Stream callback threw error: ${(0, _Utils__WEBPACK_IMPORTED_MODULE_1__.getErrorString)(e2)}`);
                            }
                          }
                          break;
                        }
                        case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ping:
                          break;
                        case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Close: {
                          this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, "Close message received from server.");
                          const error = message.error ? new Error("Server returned an error on close: " + message.error) : void 0;
                          if (message.allowReconnect === true) {
                            this.connection.stop(error);
                          } else {
                            this._stopPromise = this._stopInternal(error);
                          }
                          break;
                        }
                        case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ack:
                          if (this._messageBuffer) {
                            this._messageBuffer._ack(message);
                          }
                          break;
                        case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Sequence:
                          if (this._messageBuffer) {
                            this._messageBuffer._resetSequence(message);
                          }
                          break;
                        default:
                          this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, `Invalid message type: ${message.type}.`);
                          break;
                      }
                    }
                  }
                  this._resetTimeoutPeriod();
                }
                _processHandshakeResponse(data) {
                  let responseMessage;
                  let remainingData;
                  try {
                    [remainingData, responseMessage] = this._handshakeProtocol.parseHandshakeResponse(data);
                  } catch (e2) {
                    const message = "Error parsing handshake response: " + e2;
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, message);
                    const error = new Error(message);
                    this._handshakeRejecter(error);
                    throw error;
                  }
                  if (responseMessage.error) {
                    const message = "Server returned handshake error: " + responseMessage.error;
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, message);
                    const error = new Error(message);
                    this._handshakeRejecter(error);
                    throw error;
                  } else {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Server handshake complete.");
                  }
                  this._handshakeResolver();
                  return remainingData;
                }
                _resetKeepAliveInterval() {
                  if (this.connection.features.inherentKeepAlive) {
                    return;
                  }
                  this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds;
                  this._cleanupPingTimer();
                }
                _resetTimeoutPeriod() {
                  if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
                    this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds);
                    if (this._pingServerHandle === void 0) {
                      let nextPing = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
                      if (nextPing < 0) {
                        nextPing = 0;
                      }
                      this._pingServerHandle = setTimeout(async () => {
                        if (this._connectionState === HubConnectionState.Connected) {
                          try {
                            await this._sendMessage(this._cachedPingMessage);
                          } catch {
                            this._cleanupPingTimer();
                          }
                        }
                      }, nextPing);
                    }
                  }
                }
                // eslint-disable-next-line @typescript-eslint/naming-convention
                serverTimeout() {
                  this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
                }
                async _invokeClientMethod(invocationMessage) {
                  const methodName = invocationMessage.target.toLowerCase();
                  const methods = this._methods[methodName];
                  if (!methods) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, `No client method with the name '${methodName}' found.`);
                    if (invocationMessage.invocationId) {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
                      await this._sendWithProtocol(this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null));
                    }
                    return;
                  }
                  const methodsCopy = methods.slice();
                  const expectsResponse = invocationMessage.invocationId ? true : false;
                  let res;
                  let exception;
                  let completionMessage;
                  for (const m of methodsCopy) {
                    try {
                      const prevRes = res;
                      res = await m.apply(this, invocationMessage.arguments);
                      if (expectsResponse && res && prevRes) {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `Multiple results provided for '${methodName}'. Sending error to server.`);
                        completionMessage = this._createCompletionMessage(invocationMessage.invocationId, `Client provided multiple results.`, null);
                      }
                      exception = void 0;
                    } catch (e2) {
                      exception = e2;
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `A callback for the method '${methodName}' threw error '${e2}'.`);
                    }
                  }
                  if (completionMessage) {
                    await this._sendWithProtocol(completionMessage);
                  } else if (expectsResponse) {
                    if (exception) {
                      completionMessage = this._createCompletionMessage(invocationMessage.invocationId, `${exception}`, null);
                    } else if (res !== void 0) {
                      completionMessage = this._createCompletionMessage(invocationMessage.invocationId, null, res);
                    } else {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
                      completionMessage = this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null);
                    }
                    await this._sendWithProtocol(completionMessage);
                  } else {
                    if (res) {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `Result given for '${methodName}' method but server is not expecting a result.`);
                    }
                  }
                }
                _connectionClosed(error) {
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `HubConnection.connectionClosed(${error}) called while in state ${this._connectionState}.`);
                  this._stopDuringStartError = this._stopDuringStartError || error || new _Errors__WEBPACK_IMPORTED_MODULE_5__.AbortError("The underlying connection was closed before the hub handshake could complete.");
                  if (this._handshakeResolver) {
                    this._handshakeResolver();
                  }
                  this._cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
                  this._cleanupTimeout();
                  this._cleanupPingTimer();
                  if (this._connectionState === HubConnectionState.Disconnecting) {
                    this._completeClose(error);
                  } else if (this._connectionState === HubConnectionState.Connected && this._reconnectPolicy) {
                    this._reconnect(error);
                  } else if (this._connectionState === HubConnectionState.Connected) {
                    this._completeClose(error);
                  }
                }
                _completeClose(error) {
                  if (this._connectionStarted) {
                    this._connectionState = HubConnectionState.Disconnected;
                    this._connectionStarted = false;
                    if (this._messageBuffer) {
                      this._messageBuffer._dispose(error !== null && error !== void 0 ? error : new Error("Connection closed."));
                      this._messageBuffer = void 0;
                    }
                    if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isBrowser) {
                      window.document.removeEventListener("freeze", this._freezeEventListener);
                    }
                    try {
                      this._closedCallbacks.forEach((c2) => c2.apply(this, [error]));
                    } catch (e2) {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `An onclose callback called with error '${error}' threw error '${e2}'.`);
                    }
                  }
                }
                async _reconnect(error) {
                  const reconnectStartTime = Date.now();
                  let previousReconnectAttempts = 0;
                  let retryError = error !== void 0 ? error : new Error("Attempting to reconnect due to a unknown error.");
                  let nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, 0, retryError);
                  if (nextRetryDelay === null) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
                    this._completeClose(error);
                    return;
                  }
                  this._connectionState = HubConnectionState.Reconnecting;
                  if (error) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Connection reconnecting because of error '${error}'.`);
                  } else {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, "Connection reconnecting.");
                  }
                  if (this._reconnectingCallbacks.length !== 0) {
                    try {
                      this._reconnectingCallbacks.forEach((c2) => c2.apply(this, [error]));
                    } catch (e2) {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `An onreconnecting callback called with error '${error}' threw error '${e2}'.`);
                    }
                    if (this._connectionState !== HubConnectionState.Reconnecting) {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
                      return;
                    }
                  }
                  while (nextRetryDelay !== null) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Reconnect attempt number ${previousReconnectAttempts} will start in ${nextRetryDelay} ms.`);
                    await new Promise((resolve) => {
                      this._reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
                    });
                    this._reconnectDelayHandle = void 0;
                    if (this._connectionState !== HubConnectionState.Reconnecting) {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
                      return;
                    }
                    try {
                      await this._startInternal();
                      this._connectionState = HubConnectionState.Connected;
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, "HubConnection reconnected successfully.");
                      if (this._reconnectedCallbacks.length !== 0) {
                        try {
                          this._reconnectedCallbacks.forEach((c2) => c2.apply(this, [this.connection.connectionId]));
                        } catch (e2) {
                          this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e2}'.`);
                        }
                      }
                      return;
                    } catch (e2) {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Reconnect attempt failed because of error '${e2}'.`);
                      if (this._connectionState !== HubConnectionState.Reconnecting) {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`);
                        if (this._connectionState === HubConnectionState.Disconnecting) {
                          this._completeClose();
                        }
                        return;
                      }
                      retryError = e2 instanceof Error ? e2 : new Error(e2.toString());
                      nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
                    }
                  }
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Reconnect retries have been exhausted after ${Date.now() - reconnectStartTime} ms and ${previousReconnectAttempts} failed attempts. Connection disconnecting.`);
                  this._completeClose();
                }
                _getNextRetryDelay(previousRetryCount, elapsedMilliseconds, retryReason) {
                  try {
                    return this._reconnectPolicy.nextRetryDelayInMilliseconds({
                      elapsedMilliseconds,
                      previousRetryCount,
                      retryReason
                    });
                  } catch (e2) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${previousRetryCount}, ${elapsedMilliseconds}) threw error '${e2}'.`);
                    return null;
                  }
                }
                _cancelCallbacksWithError(error) {
                  const callbacks = this._callbacks;
                  this._callbacks = {};
                  Object.keys(callbacks).forEach((key) => {
                    const callback = callbacks[key];
                    try {
                      callback(null, error);
                    } catch (e2) {
                      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `Stream 'error' callback called with '${error}' threw error: ${(0, _Utils__WEBPACK_IMPORTED_MODULE_1__.getErrorString)(e2)}`);
                    }
                  });
                }
                _cleanupPingTimer() {
                  if (this._pingServerHandle) {
                    clearTimeout(this._pingServerHandle);
                    this._pingServerHandle = void 0;
                  }
                }
                _cleanupTimeout() {
                  if (this._timeoutHandle) {
                    clearTimeout(this._timeoutHandle);
                  }
                }
                _createInvocation(methodName, args, nonblocking, streamIds) {
                  if (nonblocking) {
                    if (streamIds.length !== 0) {
                      return {
                        arguments: args,
                        streamIds,
                        target: methodName,
                        type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation
                      };
                    } else {
                      return {
                        arguments: args,
                        target: methodName,
                        type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation
                      };
                    }
                  } else {
                    const invocationId = this._invocationId;
                    this._invocationId++;
                    if (streamIds.length !== 0) {
                      return {
                        arguments: args,
                        invocationId: invocationId.toString(),
                        streamIds,
                        target: methodName,
                        type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation
                      };
                    } else {
                      return {
                        arguments: args,
                        invocationId: invocationId.toString(),
                        target: methodName,
                        type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation
                      };
                    }
                  }
                }
                _launchStreams(streams, promiseQueue) {
                  if (streams.length === 0) {
                    return;
                  }
                  if (!promiseQueue) {
                    promiseQueue = Promise.resolve();
                  }
                  for (const streamId in streams) {
                    streams[streamId].subscribe({
                      complete: () => {
                        promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId)));
                      },
                      error: (err) => {
                        let message;
                        if (err instanceof Error) {
                          message = err.message;
                        } else if (err && err.toString) {
                          message = err.toString();
                        } else {
                          message = "Unknown error";
                        }
                        promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId, message)));
                      },
                      next: (item) => {
                        promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createStreamItemMessage(streamId, item)));
                      }
                    });
                  }
                }
                _replaceStreamingParams(args) {
                  const streams = [];
                  const streamIds = [];
                  for (let i = 0; i < args.length; i++) {
                    const argument = args[i];
                    if (this._isObservable(argument)) {
                      const streamId = this._invocationId;
                      this._invocationId++;
                      streams[streamId] = argument;
                      streamIds.push(streamId.toString());
                      args.splice(i, 1);
                    }
                  }
                  return [streams, streamIds];
                }
                _isObservable(arg) {
                  return arg && arg.subscribe && typeof arg.subscribe === "function";
                }
                _createStreamInvocation(methodName, args, streamIds) {
                  const invocationId = this._invocationId;
                  this._invocationId++;
                  if (streamIds.length !== 0) {
                    return {
                      arguments: args,
                      invocationId: invocationId.toString(),
                      streamIds,
                      target: methodName,
                      type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamInvocation
                    };
                  } else {
                    return {
                      arguments: args,
                      invocationId: invocationId.toString(),
                      target: methodName,
                      type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamInvocation
                    };
                  }
                }
                _createCancelInvocation(id) {
                  return {
                    invocationId: id,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.CancelInvocation
                  };
                }
                _createStreamItemMessage(id, item) {
                  return {
                    invocationId: id,
                    item,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamItem
                  };
                }
                _createCompletionMessage(id, error, result) {
                  if (error) {
                    return {
                      error,
                      invocationId: id,
                      type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion
                    };
                  }
                  return {
                    invocationId: id,
                    result,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion
                  };
                }
                _createCloseMessage() {
                  return { type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Close };
                }
              }
            },
            /* 45 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                HandshakeProtocol: () => (
                  /* binding */
                  HandshakeProtocol
                )
                /* harmony export */
              });
              var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(46);
              var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(23);
              class HandshakeProtocol {
                // Handshake request is always JSON
                writeHandshakeRequest(handshakeRequest) {
                  return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.write(JSON.stringify(handshakeRequest));
                }
                parseHandshakeResponse(data) {
                  let messageData;
                  let remainingData;
                  if ((0, _Utils__WEBPACK_IMPORTED_MODULE_1__.isArrayBuffer)(data)) {
                    const binaryData = new Uint8Array(data);
                    const separatorIndex = binaryData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.RecordSeparatorCode);
                    if (separatorIndex === -1) {
                      throw new Error("Message is incomplete.");
                    }
                    const responseLength = separatorIndex + 1;
                    messageData = String.fromCharCode.apply(null, Array.prototype.slice.call(binaryData.slice(0, responseLength)));
                    remainingData = binaryData.byteLength > responseLength ? binaryData.slice(responseLength).buffer : null;
                  } else {
                    const textData = data;
                    const separatorIndex = textData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.RecordSeparator);
                    if (separatorIndex === -1) {
                      throw new Error("Message is incomplete.");
                    }
                    const responseLength = separatorIndex + 1;
                    messageData = textData.substring(0, responseLength);
                    remainingData = textData.length > responseLength ? textData.substring(responseLength) : null;
                  }
                  const messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.parse(messageData);
                  const response = JSON.parse(messages[0]);
                  if (response.type) {
                    throw new Error("Expected a handshake response from the server.");
                  }
                  const responseMessage = response;
                  return [remainingData, responseMessage];
                }
              }
            },
            /* 46 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                TextMessageFormat: () => (
                  /* binding */
                  TextMessageFormat
                )
                /* harmony export */
              });
              class TextMessageFormat {
                static write(output) {
                  return `${output}${TextMessageFormat.RecordSeparator}`;
                }
                static parse(input) {
                  if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
                    throw new Error("Message is incomplete.");
                  }
                  const messages = input.split(TextMessageFormat.RecordSeparator);
                  messages.pop();
                  return messages;
                }
              }
              TextMessageFormat.RecordSeparatorCode = 30;
              TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
            },
            /* 47 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                MessageBuffer: () => (
                  /* binding */
                  MessageBuffer
                )
                /* harmony export */
              });
              var _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(5);
              var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(23);
              class MessageBuffer {
                constructor(protocol, connection, bufferSize) {
                  this._bufferSize = 1e5;
                  this._messages = [];
                  this._totalMessageCount = 0;
                  this._waitForSequenceMessage = false;
                  this._nextReceivingSequenceId = 1;
                  this._latestReceivedSequenceId = 0;
                  this._bufferedByteCount = 0;
                  this._reconnectInProgress = false;
                  this._protocol = protocol;
                  this._connection = connection;
                  this._bufferSize = bufferSize;
                }
                async _send(message) {
                  const serializedMessage = this._protocol.writeMessage(message);
                  let backpressurePromise = Promise.resolve();
                  if (this._isInvocationMessage(message)) {
                    this._totalMessageCount++;
                    let backpressurePromiseResolver = () => {
                    };
                    let backpressurePromiseRejector = () => {
                    };
                    if ((0, _Utils__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(serializedMessage)) {
                      this._bufferedByteCount += serializedMessage.byteLength;
                    } else {
                      this._bufferedByteCount += serializedMessage.length;
                    }
                    if (this._bufferedByteCount >= this._bufferSize) {
                      backpressurePromise = new Promise((resolve, reject) => {
                        backpressurePromiseResolver = resolve;
                        backpressurePromiseRejector = reject;
                      });
                    }
                    this._messages.push(new BufferedItem(serializedMessage, this._totalMessageCount, backpressurePromiseResolver, backpressurePromiseRejector));
                  }
                  try {
                    if (!this._reconnectInProgress) {
                      await this._connection.send(serializedMessage);
                    }
                  } catch {
                    this._disconnected();
                  }
                  await backpressurePromise;
                }
                _ack(ackMessage) {
                  let newestAckedMessage = -1;
                  for (let index = 0; index < this._messages.length; index++) {
                    const element = this._messages[index];
                    if (element._id <= ackMessage.sequenceId) {
                      newestAckedMessage = index;
                      if ((0, _Utils__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(element._message)) {
                        this._bufferedByteCount -= element._message.byteLength;
                      } else {
                        this._bufferedByteCount -= element._message.length;
                      }
                      element._resolver();
                    } else if (this._bufferedByteCount < this._bufferSize) {
                      element._resolver();
                    } else {
                      break;
                    }
                  }
                  if (newestAckedMessage !== -1) {
                    this._messages = this._messages.slice(newestAckedMessage + 1);
                  }
                }
                _shouldProcessMessage(message) {
                  if (this._waitForSequenceMessage) {
                    if (message.type !== _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Sequence) {
                      return false;
                    } else {
                      this._waitForSequenceMessage = false;
                      return true;
                    }
                  }
                  if (!this._isInvocationMessage(message)) {
                    return true;
                  }
                  const currentId = this._nextReceivingSequenceId;
                  this._nextReceivingSequenceId++;
                  if (currentId <= this._latestReceivedSequenceId) {
                    if (currentId === this._latestReceivedSequenceId) {
                      this._ackTimer();
                    }
                    return false;
                  }
                  this._latestReceivedSequenceId = currentId;
                  this._ackTimer();
                  return true;
                }
                _resetSequence(message) {
                  if (message.sequenceId > this._nextReceivingSequenceId) {
                    this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));
                    return;
                  }
                  this._nextReceivingSequenceId = message.sequenceId;
                }
                _disconnected() {
                  this._reconnectInProgress = true;
                  this._waitForSequenceMessage = true;
                }
                async _resend() {
                  const sequenceId = this._messages.length !== 0 ? this._messages[0]._id : this._totalMessageCount + 1;
                  await this._connection.send(this._protocol.writeMessage({ type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Sequence, sequenceId }));
                  const messages = this._messages;
                  for (const element of messages) {
                    await this._connection.send(element._message);
                  }
                  this._reconnectInProgress = false;
                }
                _dispose(error) {
                  error !== null && error !== void 0 ? error : error = new Error("Unable to reconnect to server.");
                  for (const element of this._messages) {
                    element._rejector(error);
                  }
                }
                _isInvocationMessage(message) {
                  switch (message.type) {
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Invocation:
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.StreamItem:
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Completion:
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.StreamInvocation:
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.CancelInvocation:
                      return true;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Close:
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Sequence:
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Ping:
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Ack:
                      return false;
                  }
                }
                _ackTimer() {
                  if (this._ackTimerHandle === void 0) {
                    this._ackTimerHandle = setTimeout(async () => {
                      try {
                        if (!this._reconnectInProgress) {
                          await this._connection.send(this._protocol.writeMessage({ type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Ack, sequenceId: this._latestReceivedSequenceId }));
                        }
                      } catch {
                      }
                      clearTimeout(this._ackTimerHandle);
                      this._ackTimerHandle = void 0;
                    }, 1e3);
                  }
                }
              }
              class BufferedItem {
                constructor(message, id, resolver, rejector) {
                  this._message = message;
                  this._id = id;
                  this._resolver = resolver;
                  this._rejector = rejector;
                }
              }
            },
            /* 48 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                Subject: () => (
                  /* binding */
                  Subject
                )
                /* harmony export */
              });
              var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(23);
              class Subject {
                constructor() {
                  this.observers = [];
                }
                next(item) {
                  for (const observer of this.observers) {
                    observer.next(item);
                  }
                }
                error(err) {
                  for (const observer of this.observers) {
                    if (observer.error) {
                      observer.error(err);
                    }
                  }
                }
                complete() {
                  for (const observer of this.observers) {
                    if (observer.complete) {
                      observer.complete();
                    }
                  }
                }
                subscribe(observer) {
                  this.observers.push(observer);
                  return new _Utils__WEBPACK_IMPORTED_MODULE_0__.SubjectSubscription(this, observer);
                }
              }
            },
            /* 49 */
            /***/
            (__unused_webpack_module2, __webpack_exports__2, __webpack_require__2) => {
              "use strict";
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                JsonHubProtocol: () => (
                  /* binding */
                  JsonHubProtocol
                )
                /* harmony export */
              });
              var _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(5);
              var _ILogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(21);
              var _ITransport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(6);
              var _Loggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(19);
              var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(46);
              const JSON_HUB_PROTOCOL_NAME = "json";
              class JsonHubProtocol {
                constructor() {
                  this.name = JSON_HUB_PROTOCOL_NAME;
                  this.version = 2;
                  this.transferFormat = _ITransport__WEBPACK_IMPORTED_MODULE_0__.TransferFormat.Text;
                }
                /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
                 *
                 * @param {string} input A string containing the serialized representation.
                 * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
                 */
                parseMessages(input, logger) {
                  if (typeof input !== "string") {
                    throw new Error("Invalid input for JSON hub protocol. Expected a string.");
                  }
                  if (!input) {
                    return [];
                  }
                  if (logger === null) {
                    logger = _Loggers__WEBPACK_IMPORTED_MODULE_1__.NullLogger.instance;
                  }
                  const messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__.TextMessageFormat.parse(input);
                  const hubMessages = [];
                  for (const message of messages) {
                    const parsedMessage = JSON.parse(message);
                    if (typeof parsedMessage.type !== "number") {
                      throw new Error("Invalid payload.");
                    }
                    switch (parsedMessage.type) {
                      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation:
                        this._isInvocationMessage(parsedMessage);
                        break;
                      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamItem:
                        this._isStreamItemMessage(parsedMessage);
                        break;
                      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion:
                        this._isCompletionMessage(parsedMessage);
                        break;
                      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ping:
                        break;
                      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Close:
                        break;
                      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ack:
                        this._isAckMessage(parsedMessage);
                        break;
                      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Sequence:
                        this._isSequenceMessage(parsedMessage);
                        break;
                      default:
                        logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
                        continue;
                    }
                    hubMessages.push(parsedMessage);
                  }
                  return hubMessages;
                }
                /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
                 *
                 * @param {HubMessage} message The message to write.
                 * @returns {string} A string containing the serialized representation of the message.
                 */
                writeMessage(message) {
                  return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__.TextMessageFormat.write(JSON.stringify(message));
                }
                _isInvocationMessage(message) {
                  this._assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
                  if (message.invocationId !== void 0) {
                    this._assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
                  }
                }
                _isStreamItemMessage(message) {
                  this._assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
                  if (message.item === void 0) {
                    throw new Error("Invalid payload for StreamItem message.");
                  }
                }
                _isCompletionMessage(message) {
                  if (message.result && message.error) {
                    throw new Error("Invalid payload for Completion message.");
                  }
                  if (!message.result && message.error) {
                    this._assertNotEmptyString(message.error, "Invalid payload for Completion message.");
                  }
                  this._assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
                }
                _isAckMessage(message) {
                  if (typeof message.sequenceId !== "number") {
                    throw new Error("Invalid SequenceId for Ack message.");
                  }
                }
                _isSequenceMessage(message) {
                  if (typeof message.sequenceId !== "number") {
                    throw new Error("Invalid SequenceId for Sequence message.");
                  }
                }
                _assertNotEmptyString(value, errorMessage) {
                  if (typeof value !== "string" || value === "") {
                    throw new Error(errorMessage);
                  }
                }
              }
            }
            /******/
          ];
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          (() => {
            __webpack_require__.n = (module2) => {
              var getter = module2 && module2.__esModule ? (
                /******/
                () => module2["default"]
              ) : (
                /******/
                () => module2
              );
              __webpack_require__.d(getter, { a: getter });
              return getter;
            };
          })();
          (() => {
            __webpack_require__.d = (exports2, definition) => {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                  Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          })();
          (() => {
            __webpack_require__.g = function() {
              if (typeof globalThis === "object")
                return globalThis;
              try {
                return this || new Function("return this")();
              } catch (e2) {
                if (typeof window === "object")
                  return window;
              }
            }();
          })();
          (() => {
            __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
          })();
          (() => {
            __webpack_require__.r = (exports2) => {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
          })();
          var __webpack_exports__ = {};
          (() => {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              /* harmony export */
              Measurement: () => (
                /* binding */
                Measurement
              ),
              /* harmony export */
              MeasurementCategory: () => (
                /* binding */
                MeasurementCategory
              ),
              /* harmony export */
              "default": () => __WEBPACK_DEFAULT_EXPORT__
              /* harmony export */
            });
            var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
            var _Report_pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
            var _Report_pb__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_Report_pb__WEBPACK_IMPORTED_MODULE_0__);
            var _Model_pb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
            var _Model_pb__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_Model_pb__WEBPACK_IMPORTED_MODULE_1__);
            var _microsoft_signalr_protocol_msgpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
            class Mutex {
              constructor() {
                this.locked = false;
                this.lock = () => {
                  while (this.locked) {
                  }
                  this.locked = true;
                };
                this.unlock = () => {
                  this.locked = false;
                };
                this.ensure = (callback) => {
                  this.lock();
                  const value = callback();
                  this.unlock();
                  return value;
                };
              }
            }
            function generateGUID() {
              var guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c2) {
                var r = Math.random() * 16 | 0, v = c2 == "x" ? r : r & 3 | 8;
                return v.toString(16);
              });
              return guid;
            }
            let signalr, consumerTimerId, eventListeners, fireEvent, started = false, empty = false, token = "", startTime = 0;
            const MeasurementCategory = _Model_pb__WEBPACK_IMPORTED_MODULE_1___default().MeasurementCategory;
            class Measurement {
              constructor(str, ...categories) {
                this._initTaskQueue();
                this._declareEvents();
                this._dispose();
                this.measurementId = null;
                this.deviceNo = generateGUID();
                if (!str) {
                  return fireEvent("crashed", this, { code: 50001, message: "参数配置错误[token]" });
                }
                this._consume = this._consume.bind(this);
                this.order = 0;
                this.server = "https://measurement-health.xymind.cn";
                this.categories = categories.length <= 0 ? [MeasurementCategory.ALL] : categories;
                const arr = [];
                Object.keys(MeasurementCategory).forEach((key) => {
                  arr.push(MeasurementCategory[key]);
                });
                const array = categories.filter((ele) => !arr.includes(ele));
                if (array.length > 0) {
                  return fireEvent("crashed", this, { code: 50003, message: `非法测量类型${array}` });
                }
                this.categories = Array.from(new Set(this.categories));
                token = str;
              }
              /**
               * 开始测量
               */
              async start(frame) {
                this.order = 0;
                await this._init_signalr();
                if (!frame) {
                  return fireEvent("crashed", this, { code: 4206, message: "视频帧无效" });
                }
                if (started)
                  return;
                started = true;
                try {
                  const state = this._state();
                  if (state !== "Connected") {
                    await signalr.start();
                  }
                } catch (e2) {
                  return fireEvent("crashed", this, { code: 4207, message: "网络连接失败" });
                }
                this._create(frame);
              }
              /**
               * 中断测量
               */
              async interrupt() {
                const state = this._state();
                if (state === "Connected") {
                  await signalr.stop();
                }
                fireEvent("interrupted", this);
              }
              //消费任务
              _consume() {
                const state = this._state();
                if (!empty && state === "Connected") {
                  const data = this._dequeue();
                  this._processFrame(data);
                  if (this.order > 260 && data) {
                    if (data.timestamp - startTime > 15 * 1e3) {
                      console.log("视频帧大与256帧且也大于15秒");
                      console.log("满足了不发送测量条件", "开始时间:", startTime, "当前帧:", this.order, "视频帧时间:", data.timestamp);
                      this._emptyQueue();
                      consumerTimerId && cancelAnimationFrame(consumerTimerId);
                    } else {
                      consumerTimerId = requestAnimationFrame(this._consume);
                    }
                  } else {
                    consumerTimerId = requestAnimationFrame(this._consume);
                  }
                } else {
                  console.log("不发送了");
                  this._emptyQueue();
                  consumerTimerId && cancelAnimationFrame(consumerTimerId);
                }
              }
              //处理视频帧
              _processFrame(task) {
                if (!task)
                  return;
                task.frame = this.cropFrame(task.frame);
                this._postFrame(task);
              }
              //裁剪视频帧
              cropFrame(frame) {
                const targetWidth = 240;
                const targetHeight = 280;
                const sourceWidth = frame.width;
                const sourceHeight = frame.height;
                const startX = (sourceWidth - targetWidth) / 2;
                const startY = (sourceHeight - targetHeight) / 2;
                const cropWidth = targetWidth;
                const cropHeight = targetHeight;
                const newFrame = document.createElement("canvas");
                newFrame.width = cropWidth;
                newFrame.height = cropHeight;
                const context = newFrame.getContext("2d");
                context.drawImage(frame, startX, startY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
                return newFrame.toDataURL("image/jpeg", 1).replace("data:image/jpeg;base64,", "");
              }
              formatFileSize(fileSize) {
                let temp;
                if (fileSize < 2048) {
                  return fileSize + "B";
                } else if (fileSize < 1024 * 1024) {
                  temp = fileSize / 1024;
                  temp = temp.toFixed(2);
                  return temp + "KB";
                } else if (fileSize < 1024 * 1024 * 1024) {
                  temp = fileSize / (1024 * 1024);
                  temp = temp.toFixed(2);
                  return temp + "MB";
                } else {
                  temp = fileSize / (1024 * 1024 * 1024);
                  temp = temp.toFixed(2);
                  return temp + "GB";
                }
              }
              /**
               * 初始化
               * @private
               */
              async _init_signalr() {
                const that = this;
                try {
                  const msgpackProtocol = new _microsoft_signalr_protocol_msgpack__WEBPACK_IMPORTED_MODULE_2__.MessagePackHubProtocol();
                  signalr = await new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__.HubConnectionBuilder().withUrl(
                    `${this.server}/measurement/frame`,
                    {
                      accessTokenFactory: () => token,
                      headers: {
                        deviceNo: that.deviceNo
                      }
                    }
                  ).withHubProtocol(msgpackProtocol).withAutomaticReconnect().build();
                  signalr.on("ReceiveMeasurementId", (Id) => {
                    if (!that.measurementId) {
                      that.measurementId = Id;
                      fireEvent("started", this, { measurementId: Id });
                    }
                  });
                  signalr.on("ReceiveMeasurementResult", (data) => {
                    console.log("ReceiveMeasurementResult");
                    try {
                      fireEvent("wholeReportGenerated", this, { ..._Report_pb__WEBPACK_IMPORTED_MODULE_0___default().Report.deserializeBinary(data).toObject() });
                    } catch (e2) {
                      fireEvent("crashed", this, { message: e2.message });
                      console.log("wholeReportGenerated", e2);
                    }
                  });
                  signalr.on("ReceiveMeasurementEssentialResult", ({ code, data }) => {
                    try {
                      console.log("ReceiveMeasurementEssentialResult", data);
                      if (code === 6e4) {
                        fireEvent("ReceiveMeasurementEssentialResult", this, data);
                      }
                    } catch (e2) {
                      console.log("ReceiveMeasurementEssentialResult", e2);
                    }
                  });
                  signalr.on("ReceiveMeasurementHrReport", (data) => {
                    try {
                      console.log("ReceiveMeasurementHrReport", data);
                      const objProject = _Report_pb__WEBPACK_IMPORTED_MODULE_0___default().HrReport.deserializeBinary(data).toObject();
                      console.log(objProject);
                      if (objProject.code === 1100) {
                        fireEvent("chunkReportGenerated", this, { ...objProject.data });
                      }
                    } catch (e2) {
                      console.log("ReceiveMeasurementHrReport", e2);
                    }
                  });
                  signalr.on("HandleError", async (e2) => {
                    fireEvent("crashed", this, { ...e2 });
                  });
                  let finishes = false;
                  let maxLen = 0;
                  signalr.on("Stop", () => {
                    maxLen++;
                    console.log("触发了Stop的次数", maxLen);
                    if (!finishes) {
                      fireEvent("collected", this);
                      empty = true;
                    }
                  });
                  signalr.onclose(() => {
                    this._dispose("数据重置");
                  });
                  signalr.onreconnected((connectionId) => {
                    console.log("onreconnected", connectionId);
                  });
                  signalr.onreconnecting((error) => {
                    console.log("onreconnecting:", error.message);
                  });
                } catch (e2) {
                  console.log(e2);
                  this._dispose();
                  fireEvent("crashed", this, { code: 4204, message: `网络初始化错误，请检查网络后重试` });
                }
              }
              /**
               * 创建测量
               */
              _create(frame) {
                const newFrame = this.cropFrame(frame);
                signalr.invoke("CreateMeasurement", {
                  firstFrame: newFrame,
                  categories: this.categories
                }).then(() => {
                  startTime = 0;
                  this._consume();
                }).catch((e2) => {
                  console.log("创建测量ID失败:", e2);
                  fireEvent("crashed", this, { code: 4207, message: "创建测量ID失败:", e: e2 });
                });
              }
              // 发送视频帧
              _postFrame(frameObj) {
                const { timestamp, frame } = frameObj;
                const state = this._state();
                try {
                  if (frame.length > 2048 && state === "Connected") {
                    if (this.order === 1) {
                      console.log("开始记录第一次视频帧时间：", this.order, timestamp);
                      startTime = timestamp;
                      console.log(startTime);
                    }
                    signalr.invoke("Start", { order: this.order, timestamp, frame });
                    this.order++;
                  } else {
                    console.log("帧率过低.", frame.length);
                  }
                } catch (e2) {
                  console.log(e2);
                }
              }
              //释放资源
              _dispose() {
                this.measurementId = null;
                if (consumerTimerId) {
                  cancelAnimationFrame(consumerTimerId);
                }
                this._emptyQueue();
                started = false;
                empty = false;
              }
              _state() {
                return signalr && signalr.state;
              }
              /**
               * 初始化线程安全队列
               */
              _initTaskQueue() {
                let taskQueue = [];
                const mutex = new Mutex();
                this.enqueue = (task) => {
                  mutex.ensure(() => {
                    taskQueue.push(task);
                  });
                };
                this._emptyQueue = () => {
                  mutex.ensure(() => {
                    taskQueue = [];
                  });
                };
                this._dequeue = () => {
                  return mutex.ensure(() => {
                    if (taskQueue.length <= 0) {
                      mutex.unlock();
                      return null;
                    }
                    return taskQueue.shift();
                  });
                };
              }
              /**
               * 定义事件
               */
              _declareEvents() {
                eventListeners = {};
                this.addEventListener = (eventName, listener) => {
                  if (!eventListeners[eventName]) {
                    eventListeners[eventName] = [];
                  }
                  eventListeners[eventName].push(listener);
                };
                fireEvent = (eventName, eventSender, eventData) => {
                  const listeners = eventListeners[eventName];
                  if (listeners) {
                    listeners.forEach((listener) => {
                      listener(eventSender, eventData);
                    });
                  }
                };
              }
            }
            const __WEBPACK_DEFAULT_EXPORT__ = {
              Measurement,
              MeasurementCategory
            };
          })();
          __webpack_exports__ = __webpack_exports__["default"];
          return __webpack_exports__;
        })()
      );
    });
  }
});

// ../../../../project/mianjia_jiangkan/node_modules/xy-health-measurement/index.js
var require_xy_health_measurement = __commonJS({
  "../../../../project/mianjia_jiangkan/node_modules/xy-health-measurement/index.js"(exports2, module2) {
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_lib();
    }
  }
});
export default require_xy_health_measurement();
//# sourceMappingURL=xy-health-measurement.js.map
