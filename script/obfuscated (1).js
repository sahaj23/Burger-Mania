var _0x5b53=['%</td>','<tr>','discount','#table\x20tr\x20','JSON','application/json','#table','td:nth-child(4)','innerText','</td>','<table\x20class=\x27table\x27\x20id=\x27tb\x27><tbody>','.outer','<th>Total\x20Amount</th>','parse','</tr>','#totalQty','parentNode','bootstrapTable','text','<th>Discount</th>','td:nth-child(5)','<td>','getItem','</tbody></table><br><br><br><h4>Please\x20wait\x20while\x20you\x20are\x20being\x20redirected\x20to\x20home\x20page...</h4>','.infoDiv','placeOrderBtn','log','removeItem','price','localStorage','remove','childNodes','burgers','find','removeChild','<h3>Transaction\x20details</h3>','#totalAmt','<th>Total\x20Quanity</th>','POST','ready','append','index.html','getElementById','disabled','<td><button\x20class=\x27btn\x20btn-danger\x27\x20onclick=\x27deleteRow(this)\x27>X</button></td>'];(function(_0x5a014c,_0x5b53aa){var _0x7ea0e9=function(_0x2f93a1){while(--_0x2f93a1){_0x5a014c['push'](_0x5a014c['shift']());}};_0x7ea0e9(++_0x5b53aa);}(_0x5b53,0x1de));var _0x7ea0=function(_0x5a014c,_0x5b53aa){_0x5a014c=_0x5a014c-0x0;var _0x7ea0e9=_0x5b53[_0x5a014c];return _0x7ea0e9;};$(document)[_0x7ea0('0xb')](function(){totalAmount=0x0;totalQuantity=0x0;burgers=window[_0x7ea0('0x1')][_0x7ea0('0x27')](_0x7ea0('0x4'));populate=JSON[_0x7ea0('0x1e')](burgers);console[_0x7ea0('0x2b')](populate);$(_0x7ea0('0x17'))[_0x7ea0('0x22')]({'data':populate});$(_0x7ea0('0x14'))['each'](function(_0xa4c4f3,_0x3e0e72){var _0x204760=$(_0x3e0e72);var _0x20a4ac=_0x204760[_0x7ea0('0x5')]('td:nth-child(3)')[_0x7ea0('0x23')]();var _0x3bb695=_0x204760['find'](_0x7ea0('0x18'))[_0x7ea0('0x23')]();console[_0x7ea0('0x2b')](_0x3bb695);if(_0x3bb695!=''){_0x204760[_0x7ea0('0x5')](_0x7ea0('0x25'))[_0x7ea0('0x23')](parseInt(_0x20a4ac)*parseInt(_0x3bb695));var _0x1cc821=parseInt(_0x20a4ac)*parseInt(_0x3bb695);console[_0x7ea0('0x2b')](_0x1cc821);totalAmount+=_0x1cc821;totalQuantity+=parseInt(_0x3bb695);var _0x243060=_0x7ea0('0x10');$(_0x3e0e72)[_0x7ea0('0xc')](_0x243060);$(_0x7ea0('0x20'))[_0x7ea0('0x23')](totalQuantity);$(_0x7ea0('0x8'))[_0x7ea0('0x23')](totalAmount);}});if(totalQuantity==0x0){document[_0x7ea0('0xe')]('placeOrderBtn')[_0x7ea0('0xf')]=!![];}});function deleteRow(_0x3d6a5e){var _0x41bc71=parseInt(_0x3d6a5e[_0x7ea0('0x21')][_0x7ea0('0x21')]['childNodes'][0x3]['innerText']);totalAmount-=parseInt(_0x3d6a5e[_0x7ea0('0x21')][_0x7ea0('0x21')][_0x7ea0('0x3')][0x2][_0x7ea0('0x19')])*_0x41bc71;totalQuantity-=_0x41bc71;$('#totalQty')[_0x7ea0('0x23')](totalQuantity);$(_0x7ea0('0x8'))[_0x7ea0('0x23')](totalAmount);if(totalQuantity==0x0){document['getElementById'](_0x7ea0('0x2a'))[_0x7ea0('0xf')]=!![];}var _0x2c43f6=_0x3d6a5e['parentNode'][_0x7ea0('0x21')];_0x2c43f6['parentNode'][_0x7ea0('0x6')](_0x2c43f6);}function placeOrder(){var _0x32a00b={'totalQuantity':totalQuantity,'totalPrice':totalAmount};$['ajax']({'type':_0x7ea0('0xa'),'url':'http://localhost:9876/orders','dataType':_0x7ea0('0x15'),'contentType':_0x7ea0('0x16'),'data':JSON['stringify'](_0x32a00b),'success':function(_0x121f96){$(_0x7ea0('0x1c'))[_0x7ea0('0x2')]();$(_0x7ea0('0x29'))['append'](_0x7ea0('0x7')+_0x7ea0('0x1b')+_0x7ea0('0x12')+_0x7ea0('0x9')+_0x7ea0('0x26')+_0x121f96['quantity']+_0x7ea0('0x1a')+'</tr>'+'<tr>'+_0x7ea0('0x24')+_0x7ea0('0x26')+_0x121f96[_0x7ea0('0x13')]+_0x7ea0('0x11')+_0x7ea0('0x1f')+'<tr>'+_0x7ea0('0x1d')+_0x7ea0('0x26')+_0x121f96[_0x7ea0('0x0')]+_0x7ea0('0x1a')+_0x7ea0('0x1f')+_0x7ea0('0x28'));window[_0x7ea0('0x1')][_0x7ea0('0x2c')](_0x7ea0('0x4'));setTimeout(function(){window['location']=_0x7ea0('0xd');},0x1388);},'error':function(){alert('lol');}});}