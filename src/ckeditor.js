/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import List from "@ckeditor/ckeditor5-list/src/list";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";

// import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
// import Table from "@ckeditor/ckeditor5-table/src/table";
// import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
// import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
// import Image from "@ckeditor/ckeditor5-image/src/image";
// import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
// import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
// import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
// import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
// import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
// import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
// import Link from "@ckeditor/ckeditor5-link/src/link";

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	// UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	// EasyImage,
	Heading,
	// Image,
	// ImageCaption,
	// ImageStyle,
	// ImageToolbar,
	// ImageUpload,
	Indent,
	// Link,
	List,
	// MediaEmbed,
	Paragraph,
	// PasteFromOffice,
	// Table,
	// TableToolbar,
	Highlight
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			"heading",
			"|",
			"bold",
			"italic",
			"bulletedList",
			"numberedList",
			"|",
			"indent",
			"outdent",
			"|",
			"highlight",
			"blockQuote",
			"undo",
			"redo"
		]
	},
	// image: {
	// 	toolbar: [
	// 		"imageStyle:full",
	// 		"imageStyle:side",
	// 		"|",
	// 		"imageTextAlternative"
	// 	]
	// },
	// table: {
	// 	contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
	// },
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en",
	highlight: {
		options: [
			{
				model: "yellowMarker",
				class: "marker-yellow",
				title: "Yellow Marker",
				color: "var(--ck-highlight-marker-yellow)",
				type: "marker"
			},
			{
				model: "greenMarker",
				class: "marker-green",
				title: "Green marker",
				color: "var(--ck-highlight-marker-green)",
				type: "marker"
			},
			{
				model: "pinkMarker",
				class: "marker-pink",
				title: "Pink marker",
				color: "var(--ck-highlight-marker-pink)",
				type: "marker"
			},
			{
				model: "blueMarker",
				class: "marker-blue",
				title: "Blue marker",
				color: "var(--ck-highlight-marker-blue)",
				type: "marker"
			},
			{
				model: "redPen",
				class: "pen-red",
				title: "Red pen",
				color: "var(--ck-highlight-pen-red)",
				type: "pen"
			},
			{
				model: "greenPen",
				class: "pen-green",
				title: "Green pen",
				color: "var(--ck-highlight-pen-green)",
				type: "pen"
			},
			{
				model: "bluePen",
				class: "pen-blue",
				title: "Blue pen",
				color: "blue",
				type: "pen"
			}
		]
	}
};
