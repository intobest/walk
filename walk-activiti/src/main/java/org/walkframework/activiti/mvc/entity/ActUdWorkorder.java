package org.walkframework.activiti.mvc.entity;import org.walkframework.data.entity.BaseEntity;import org.walkframework.data.entity.OperColumn;import org.walkframework.data.annotation.Table;import org.walkframework.data.annotation.Column;import java.util.Date;  /*** @Type ActUdWorkorder* @Desc  工作流工单表* @author shf675* @date 2019-04-12 08:19:02* * 1、本类由工具类DbToEntity自动生成* 2、数据表新增字段时建议使用DbToEntity工具类重新生成* 3、不建议直接修改本类，如果想对本类扩展，建议创建子类，在子类里进行扩展，子类的set/get方法无需按照父类的写法，用开发工具直接生成就好*/	@Table(name="ACT_UD_WORKORDER")public class ActUdWorkorder extends BaseEntity {	private static final long serialVersionUID = 1L;	/**		 * 工单ID		 */		@Column(name = ORDER_ID)	private String orderId;	/**		 * 工单描述		 */		@Column(name = ORDER_DESC)	private String orderDesc;	/**		 * 流程定义KEY		 */		@Column(name = PROC_DEF_KEY)	private String procDefKey;	/**		 * 流程实例ID		 */		@Column(name = PROC_INST_ID)	private String procInstId;	/**		 * 流程当前状态		 */		@Column(name = PROC_STATE)	private String procState;	/**		 * 流程当前结点		 */		@Column(name = PROC_TASK_DEF_KEY)	private String procTaskDefKey;	/**		 * 当前候选人列表，多个以逗号分隔		 */		@Column(name = CURR_CANDIDATE_USERS)	private String currCandidateUsers;	/**		 * 当前候选组列表，多个以逗号分隔		 */		@Column(name = CURR_CANDIDATE_GROUPS)	private String currCandidateGroups;	/**		 * 业务表		 */		@Column(name = BUSINESS_TABLE)	private String businessTable;	/**		 * 业务表主键		 */		@Column(name = BUSINESS_PRIMARY_KEY)	private String businessPrimaryKey;	/**		 * 工单提交时间		 */		@Column(name = SUBMIT_TIME)	private Date submitTime;	/**		 * 工单提交人		 */		@Column(name = SUBMITOR)	private String submitor;	/**		 * 创建时间		 */		@Column(name = CREATE_TIME)	private Date createTime;	/**		 * 创建人		 */		@Column(name = CREATOR)	private String creator;	/**		 * 最后一次更新时间		 */		@Column(name = UPDATE_TIME)	private Date updateTime;	/**		 * 最后一次更新人		 */		@Column(name = UPDATE_STAFF_ID)	private String updateStaffId;	/**		 * 备注		 */		@Column(name = REMARK)	private String remark;	public String getOrderId() {		return orderId;	}	public OperColumn setOrderId(String orderId) {		this.orderId = orderId;		return addOperColumn(ORDER_ID, "orderId", orderId, String.class);	}	public String getOrderDesc() {		return orderDesc;	}	public OperColumn setOrderDesc(String orderDesc) {		this.orderDesc = orderDesc;		return addOperColumn(ORDER_DESC, "orderDesc", orderDesc, String.class);	}	public String getProcDefKey() {		return procDefKey;	}	public OperColumn setProcDefKey(String procDefKey) {		this.procDefKey = procDefKey;		return addOperColumn(PROC_DEF_KEY, "procDefKey", procDefKey, String.class);	}	public String getProcInstId() {		return procInstId;	}	public OperColumn setProcInstId(String procInstId) {		this.procInstId = procInstId;		return addOperColumn(PROC_INST_ID, "procInstId", procInstId, String.class);	}	public String getProcState() {		return procState;	}	public OperColumn setProcState(String procState) {		this.procState = procState;		return addOperColumn(PROC_STATE, "procState", procState, String.class);	}	public String getProcTaskDefKey() {		return procTaskDefKey;	}	public OperColumn setProcTaskDefKey(String procTaskDefKey) {		this.procTaskDefKey = procTaskDefKey;		return addOperColumn(PROC_TASK_DEF_KEY, "procTaskDefKey", procTaskDefKey, String.class);	}	public String getCurrCandidateUsers() {		return currCandidateUsers;	}	public OperColumn setCurrCandidateUsers(String currCandidateUsers) {		this.currCandidateUsers = currCandidateUsers;		return addOperColumn(CURR_CANDIDATE_USERS, "currCandidateUsers", currCandidateUsers, String.class);	}	public String getCurrCandidateGroups() {		return currCandidateGroups;	}	public OperColumn setCurrCandidateGroups(String currCandidateGroups) {		this.currCandidateGroups = currCandidateGroups;		return addOperColumn(CURR_CANDIDATE_GROUPS, "currCandidateGroups", currCandidateGroups, String.class);	}	public String getBusinessTable() {		return businessTable;	}	public OperColumn setBusinessTable(String businessTable) {		this.businessTable = businessTable;		return addOperColumn(BUSINESS_TABLE, "businessTable", businessTable, String.class);	}	public String getBusinessPrimaryKey() {		return businessPrimaryKey;	}	public OperColumn setBusinessPrimaryKey(String businessPrimaryKey) {		this.businessPrimaryKey = businessPrimaryKey;		return addOperColumn(BUSINESS_PRIMARY_KEY, "businessPrimaryKey", businessPrimaryKey, String.class);	}	public Date getSubmitTime() {		return submitTime;	}	public OperColumn setSubmitTime(Date submitTime) {		this.submitTime = submitTime;		return addOperColumn(SUBMIT_TIME, "submitTime", submitTime, Date.class);	}	public String getSubmitor() {		return submitor;	}	public OperColumn setSubmitor(String submitor) {		this.submitor = submitor;		return addOperColumn(SUBMITOR, "submitor", submitor, String.class);	}	public Date getCreateTime() {		return createTime;	}	public OperColumn setCreateTime(Date createTime) {		this.createTime = createTime;		return addOperColumn(CREATE_TIME, "createTime", createTime, Date.class);	}	public String getCreator() {		return creator;	}	public OperColumn setCreator(String creator) {		this.creator = creator;		return addOperColumn(CREATOR, "creator", creator, String.class);	}	public Date getUpdateTime() {		return updateTime;	}	public OperColumn setUpdateTime(Date updateTime) {		this.updateTime = updateTime;		return addOperColumn(UPDATE_TIME, "updateTime", updateTime, Date.class);	}	public String getUpdateStaffId() {		return updateStaffId;	}	public OperColumn setUpdateStaffId(String updateStaffId) {		this.updateStaffId = updateStaffId;		return addOperColumn(UPDATE_STAFF_ID, "updateStaffId", updateStaffId, String.class);	}	public String getRemark() {		return remark;	}	public OperColumn setRemark(String remark) {		this.remark = remark;		return addOperColumn(REMARK, "remark", remark, String.class);	}	//Database field	public static final String ORDER_ID = "ORDER_ID";	public static final String ORDER_DESC = "ORDER_DESC";	public static final String PROC_DEF_KEY = "PROC_DEF_KEY";	public static final String PROC_INST_ID = "PROC_INST_ID";	public static final String PROC_STATE = "PROC_STATE";	public static final String PROC_TASK_DEF_KEY = "PROC_TASK_DEF_KEY";	public static final String CURR_CANDIDATE_USERS = "CURR_CANDIDATE_USERS";	public static final String CURR_CANDIDATE_GROUPS = "CURR_CANDIDATE_GROUPS";	public static final String BUSINESS_TABLE = "BUSINESS_TABLE";	public static final String BUSINESS_PRIMARY_KEY = "BUSINESS_PRIMARY_KEY";	public static final String SUBMIT_TIME = "SUBMIT_TIME";	public static final String SUBMITOR = "SUBMITOR";	public static final String CREATE_TIME = "CREATE_TIME";	public static final String CREATOR = "CREATOR";	public static final String UPDATE_TIME = "UPDATE_TIME";	public static final String UPDATE_STAFF_ID = "UPDATE_STAFF_ID";	public static final String REMARK = "REMARK";	}