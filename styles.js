import { StyleSheet, Platform } from "react-native";

export const colors = {
  background: "#F2F0E9", // Warm beige/grey
  primary: "#C05621", // Burnt Orange
  text: "#292524", // Warm dark grey
  muted: "#78716C", // Warm stone grey
  danger: "#B91C1C", // Deep red
  white: "#FDFBF7", // Off-white
  border: "#E7E5E4", // Warm light grey
  shadow: "#44403C", // Warm dark shadow
  cardBg: "#FFFFFF",
};

// Unified font stack for consistency
const fontFamily = Platform.select({
  ios: "System",
  android: "Roboto",
  default: "sans-serif",
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 8,
    fontFamily: fontFamily,
    letterSpacing: 0.5,
  },
  description: {
    fontSize: 18,
    color: colors.muted,
    lineHeight: 24,
    fontFamily: fontFamily,
  },
  date: {
    fontSize: 14,
    color: colors.muted,
    marginTop: 12,
    fontStyle: "italic",
    fontFamily: fontFamily,
  },
  input: {
    backgroundColor: colors.cardBg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 16,
    fontSize: 18,
    marginBottom: 16,
    color: colors.text,
    fontFamily: fontFamily,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 19,
    fontWeight: "600",
    fontFamily: fontFamily,
  },
  deleteButton: {
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.danger,
  },
  deleteText: {
    color: colors.danger,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: fontFamily,
  },
  noteCard: {
    backgroundColor: colors.cardBg,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(231, 229, 228, 0.6)",
    ...Platform.select({
      ios: {
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: colors.primary,
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.border,
    height: 54,
    ...Platform.select({
      ios: {
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 18,
    color: colors.text,
    fontFamily: fontFamily,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  emptyStateText: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.muted,
    marginTop: 16,
    fontFamily: fontFamily,
  },
});
