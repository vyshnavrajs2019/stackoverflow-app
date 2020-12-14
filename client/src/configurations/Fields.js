/* eslint-disable import/no-anonymous-default-export */
export default [
	{
		label: "Page",
		type: Number,
		paramName: "page"
	},
	{
		label: "Page size",
		type: Number,
		paramName: "pagesize"
	},
	{
		label: "From date",
		type: Date,
		paramName: "fromdate"
	},
	{
		label: "To date",
		type: Date,
		paramName: "todate"
	},
	{
		label: "Order",
		type: Array,
		choices: ["desc", "asc"],
		paramName: "order"
	},
	{
		label: "Min score",
		type: Number,
		paramName: "min"
	},
	{
		label: "Max score",
		type: Number,
		paramName: "max"
	},
	{
		label: "Sort by",
		type: Array,
		choices: ["activity", "votes", "creation", "relevance"],
		paramName: "sort"
	},
	{
		label: "Query",
		type: String,
		paramName: "q"
	},
	{
		label: "Accepted",
		type: Boolean,
		paramName: "accepted"
	},
	{
		label: "Answers",
		type: Number,
		paramName: "answers"
	},
	{
		label: "Body",
		type: String,
		paramName: "body"
	},
	{
		label: "Closed",
		type: Boolean,
		paramName: "closed"
	},
	{
		label: "Migrated",
		type: Boolean,
		paramName: "migrated"
	},
	{
		label: "Notice",
		type: Boolean,
		paramName: "notice"
	},
	{
		label: "Not tagged",
		type: String,
		paramName: "nottagged"
	},
	{
		label: "Tagged",
		type: String,
		paramName: "tagged"
	},
	{
		label: "Title",
		type: String,
		paramName: "title"
	},
	{
		label: "User id",
		type: Number,
		paramName: "user"
	},
	{
		label: "URL",
		type: String,
		paramName: "url"
	},
	{
		label: "Views",
		type: Number,
		paramName: "views"
	},
	{
		label: "Wiki",
		type: Boolean,
		paramName: "wiki"
	}
]