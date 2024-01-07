import { Routes } from '@angular/router';
import { CardComponent } from '../components/card/card.component';
import { TransferComponent } from '../components/transfer/transfer.component';
import { UserComponent } from '../components/user/user.component';
import { CardDetailComponent } from '../components/card/card-detail/card-detail.component';
import { TransferDetailComponent } from '../components/transfer/transfer-detail/transfer-detail.component';
import { UserCardDetailComponent } from '../components/user/user-card-detail/user-card-detail.component';

export const routes: Routes = [
  {path:"cards/:id", component:CardDetailComponent},
  {path: "cards", component:CardComponent},
  {path:"transfers/:id", component:TransferDetailComponent},
  {path:"transfers", component:TransferComponent},
  {path:"users/:cards/:userId", component:UserCardDetailComponent},
  {path:"users",component:UserComponent}

];
