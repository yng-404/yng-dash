export default {
    
    computed: {
        tables() {
            let tables = document.getElementsByTagName('table');
            for (let i=0; i<tables.length;i++){
                this.resizableGrid(tables[i]);
            }
            return tables
        }
    },
    method: {
        resizableGrid(table) {
            let row = table.getElementsByTagName('tr')[0],
                cols = row ? row.children : undefined;
            if (!cols) return;
            
            table.style.overflow = 'hidden';
            
            let tableHeight = table.offsetHeight;
            
            for (let i = 0; i < cols.length; i++) {
                let div = this.createDiv(tableHeight);
                cols[i].appendChild(div);
                cols[i].style.position = 'relative';
                this.setListeners(div);
            }
        },
        
        createDiv(height){
            let div = document.createElement('div');
            div.style.top = 0;
            div.style.right = 0;
            div.style.width = '5px';
            div.style.position = 'absolute';
            div.style.cursor = 'col-resize';
            div.style.userSelect = 'none';
            div.style.height = height + 'px';
            return div;
        },

        setListeners(div){
            let pageX, curCol, nxtCol, curColWidth, nxtColWidth;
          
            div.addEventListener('mousedown', function (e) {
                curCol = e.target.parentElement;
                nxtCol = curCol.nextElementSibling;
                pageX = e.pageX; 
        
                let padding = this.paddingDiff(curCol);
                curColWidth = curCol.offsetWidth - padding;
                if (nxtCol) {
                    nxtColWidth = nxtCol.offsetWidth - padding;
                }
            });
          
            div.addEventListener('mouseover', function (e) {
                e.target.style.borderRight = '2px solid #0000ff';
            })
          
            div.addEventListener('mouseout', function (e) {
                e.target.style.borderRight = '';
            })
          
            document.addEventListener('mousemove', function (e) {
                if (curCol) {
                    let diffX = e.pageX - pageX;
                    if (nxtCol) {
                        nxtCol.style.width = (nxtColWidth - (diffX)) + 'px';
                    }
                    curCol.style.width = (curColWidth + diffX) + 'px';
                }
            });
          
            document.addEventListener('mouseup', function () { 
                curCol = undefined;
                nxtCol = undefined;
                pageX = undefined;
                nxtColWidth = undefined;
                curColWidth = undefined
            });
        },
                
        paddingDiff(col){
            if (this.getStyleVal(col,'box-sizing') == 'border-box'){
                return 0;
            }
           
            let padLeft = this.getStyleVal(col,'padding-left');
            let padRight = this.getStyleVal(col,'padding-right');
            return (parseInt(padLeft) + parseInt(padRight));
          
        },
        getStyleVal(elm, css){
            return (window.getComputedStyle(elm, null).getPropertyValue(css))
        },
        
    }       
}