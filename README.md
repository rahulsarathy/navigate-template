
# Navigate Template
To create a new page:

1. Manually add a `<li>` element to `<ol class="menu-list">`
	1. Sub pages belong as a `<li>` element under a nested `<ol class=“inner-list”>`
2. Manually add a page{order of page}.html file to the pages directory. E.g If your page is the 7th page, it should belong in pages/page7.html
3. Set titles for subpages within the html file as 
```
	<div class="page-header">
		<div class="numberbox"><Page Number with decimal Goes Here> </div>
		<div class="title">
			<h1>
				<Page Title Goes Here>
			</h1>
		</div>
	</div>
```
