# Migration `20210209054609-add-initial-objects`

This migration has been generated by Amanda Giannelli at 2/9/2021, 12:46:09 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    PRIMARY KEY ("id")
)

CREATE TABLE "VaccinationType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "isRecurring" BOOLEAN NOT NULL,
    "recurrenceType" INTEGER NOT NULL,
    "recurrenceInterval" INTEGER NOT NULL
)

CREATE TABLE "VaccinationRecord" (
    "id" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "studentId" INTEGER NOT NULL,
    "vaccinationType" INTEGER NOT NULL,
    "vaccinationDate" DATETIME NOT NULL,
    PRIMARY KEY ("id")
)

CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ownerId" TEXT NOT NULL,
    "ownerType" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "requireFollowUp" BOOLEAN NOT NULL DEFAULT false,
    "followUpDate" DATETIME,
    PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20210209054609-add-initial-objects
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,47 @@
+datasource DS {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = "native"
+}
+
+model Student {
+  id        String   @id @default(uuid())
+  createdAt DateTime @default(now())
+  updatedAt DateTime @default(now())
+  email     String
+  name      String
+}
+
+model VaccinationType {
+  id                 Int      @id @default(autoincrement())
+  createdAt          DateTime @default(now())
+  updatedAt          DateTime @default(now())
+  name               String
+  isRecurring        Boolean
+  recurrenceType     Int
+  recurrenceInterval Int
+}
+
+model VaccinationRecord {
+  id              String   @id @default(uuid())
+  createdAt       DateTime @default(now())
+  updatedAt       DateTime @default(now())
+  studentId       Int
+  vaccinationType Int
+  vaccinationDate DateTime
+}
+
+model Note {
+  id              String    @id @default(uuid())
+  createdAt       DateTime  @default(now())
+  updatedAt       DateTime  @default(now())
+  ownerId         String
+  ownerType       Int
+  message         String
+  requireFollowUp Boolean   @default(false)
+  followUpDate    DateTime?
+}
```

