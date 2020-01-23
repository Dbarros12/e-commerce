import { Component, ViewChild } from '@angular/core';
import{ DxDataGridModule,
    DxDataGridComponent,
    DxSpeedDialActionComponent,
    DxSpeedDialActionModule,
    DxSelectBoxModule} from 'devextreme-angular';
    import repaintFloatingActionButton from 'devextreme/ui/speed_dial_action/repaint_floating_action_button';
    import config from 'devextreme/core/config';
import { AuthService, ScreenService, AppInfoService } from 'src/app/shared/services';
@Component({
    //moduleId: module.id,
    selector: 'clientes',
    templateUrl: 'clientes.component.html',
    styleUrls: ['clientes.component.scss']
})
export class ClientesComponent {
    @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;
      
    // employees: Employee[];
    // states: State[];
    directions: any;
    selectedRowIndex = -1;

    constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService){}
    editRow() {
        this.grid.instance.editRow(this.selectedRowIndex);
        this.grid.instance.deselectAll();
    }
    
    deleteRow() {
        this.grid.instance.deleteRow(this.selectedRowIndex);
        this.grid.instance.deselectAll();
    }
    
    addRow() {
        this.grid.instance.addRow();
        this.grid.instance.deselectAll();
    }
    
    selectedChanged(e) {
        this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
    }
    
    directionChanged(e) {
        config({
            floatingActionButtonConfig: this.directions[e.selectedItem]
        });
    
        repaintFloatingActionButton();
    }
    
    isAutorized() {
    return this.authService.isLoggedIn;
    }
}

