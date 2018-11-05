package org.walkframework.base.mvc.entity;import org.walkframework.data.entity.BaseEntity;import org.walkframework.data.entity.OperColumn;import org.walkframework.data.annotation.Table;import org.walkframework.data.annotation.Column;import java.util.Date; import java.math.BigDecimal; /*** @Type TlMExportlog* @Desc  导出日志表* @author shf675* @date 2018-08-03 14:06:18* * 1、本类由工具类DbToBeanUtil自动生成* 2、数据表新增字段时建议使用DbToBeanUtil工具类重新生成* 3、不建议直接修改本类，如果想对本类扩展，建议创建子类，在子类里进行扩展*/	@Table(name="TL_M_EXPORTLOG")public class TlMExportlog extends BaseEntity {	private static final long serialVersionUID = 1L;	 /**		 *日志流水		 */		@Column(name = LOG_ID)	private String logId;	 /**		 *导出文件名称		 */		@Column(name = EXPORT_NAME)	private String exportName;	 /**		 *导出模式。1：同步。2：异步		 */		@Column(name = EXPORT_MODE)	private String exportMode;	 /**		 *导出状态。0：导出中；1：导出成功。2：导出失败		 */		@Column(name = EXPORT_STATE)	private String exportState;	 /**		 *导出路径。注意：同步方式导出后会删除该路径下文件，避免占用过多磁盘空间。	 */		@Column(name = EXPORT_PATH)	private String exportPath;	 /**		 *请求URI		 */		@Column(name = REQ_URI)	private String reqUri;	 /**		 *请求参数		 */		@Column(name = PARAMS)	private String params;	 /**		 *总记录数		 */		@Column(name = TOTAL)	private BigDecimal total;	 /**		 *导出文件大小。单位：字节		 */		@Column(name = FILE_SIZE)	private BigDecimal fileSize;	 /**		 *操作IP		 */		@Column(name = OPERATE_IP)	private String operateIp;	 /**		 *创建人		 */		@Column(name = CREATE_STAFF)	private String createStaff;	 /**		 *创建时间		 */		@Column(name = CREATE_TIME)	private Date createTime;	 /**		 *导出完成时间		 */		@Column(name = FINISH_TIME)	private Date finishTime;	 /**		 *备注		 */		@Column(name = REMARK)	private String remark;	public String getLogId() {		return logId;	}	public OperColumn setLogId(String logId) {		this.logId = logId;		return addOperColumn(LOG_ID, "logId", logId, String.class);	}	public String getExportName() {		return exportName;	}	public OperColumn setExportName(String exportName) {		this.exportName = exportName;		return addOperColumn(EXPORT_NAME, "exportName", exportName, String.class);	}	public String getExportMode() {		return exportMode;	}	public OperColumn setExportMode(String exportMode) {		this.exportMode = exportMode;		return addOperColumn(EXPORT_MODE, "exportMode", exportMode, String.class);	}	public String getExportState() {		return exportState;	}	public OperColumn setExportState(String exportState) {		this.exportState = exportState;		return addOperColumn(EXPORT_STATE, "exportState", exportState, String.class);	}	public String getExportPath() {		return exportPath;	}	public OperColumn setExportPath(String exportPath) {		this.exportPath = exportPath;		return addOperColumn(EXPORT_PATH, "exportPath", exportPath, String.class);	}	public String getReqUri() {		return reqUri;	}	public OperColumn setReqUri(String reqUri) {		this.reqUri = reqUri;		return addOperColumn(REQ_URI, "reqUri", reqUri, String.class);	}	public String getParams() {		return params;	}	public OperColumn setParams(String params) {		this.params = params;		return addOperColumn(PARAMS, "params", params, String.class);	}	public BigDecimal getTotal() {		return total;	}	public OperColumn setTotal(BigDecimal total) {		this.total = total;		return addOperColumn(TOTAL, "total", total, BigDecimal.class);	}	public BigDecimal getFileSize() {		return fileSize;	}	public OperColumn setFileSize(BigDecimal fileSize) {		this.fileSize = fileSize;		return addOperColumn(FILE_SIZE, "fileSize", fileSize, BigDecimal.class);	}	public String getOperateIp() {		return operateIp;	}	public OperColumn setOperateIp(String operateIp) {		this.operateIp = operateIp;		return addOperColumn(OPERATE_IP, "operateIp", operateIp, String.class);	}	public String getCreateStaff() {		return createStaff;	}	public OperColumn setCreateStaff(String createStaff) {		this.createStaff = createStaff;		return addOperColumn(CREATE_STAFF, "createStaff", createStaff, String.class);	}	public Date getCreateTime() {		return createTime;	}	public OperColumn setCreateTime(Date createTime) {		this.createTime = createTime;		return addOperColumn(CREATE_TIME, "createTime", createTime, Date.class);	}	public Date getFinishTime() {		return finishTime;	}	public OperColumn setFinishTime(Date finishTime) {		this.finishTime = finishTime;		return addOperColumn(FINISH_TIME, "finishTime", finishTime, Date.class);	}	public String getRemark() {		return remark;	}	public OperColumn setRemark(String remark) {		this.remark = remark;		return addOperColumn(REMARK, "remark", remark, String.class);	}	//Database field	public static final String LOG_ID = "LOG_ID";	public static final String EXPORT_NAME = "EXPORT_NAME";	public static final String EXPORT_MODE = "EXPORT_MODE";	public static final String EXPORT_STATE = "EXPORT_STATE";	public static final String EXPORT_PATH = "EXPORT_PATH";	public static final String REQ_URI = "REQ_URI";	public static final String PARAMS = "PARAMS";	public static final String TOTAL = "TOTAL";	public static final String FILE_SIZE = "FILE_SIZE";	public static final String OPERATE_IP = "OPERATE_IP";	public static final String CREATE_STAFF = "CREATE_STAFF";	public static final String CREATE_TIME = "CREATE_TIME";	public static final String FINISH_TIME = "FINISH_TIME";	public static final String REMARK = "REMARK";	}